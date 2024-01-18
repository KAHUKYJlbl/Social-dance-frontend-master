import { type FC, type ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { type Reducer } from '@reduxjs/toolkit';

import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { type StoreManager } from 'app/providers/store-provider';
import { type StateSchemaKey } from 'app/providers/store-provider/config/state-schema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicReducerLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

/**
 * Wrapper for components, using asynchronous reducers
 */
export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as StoreManager;

  useEffect(() => {
    // async load reducer
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
