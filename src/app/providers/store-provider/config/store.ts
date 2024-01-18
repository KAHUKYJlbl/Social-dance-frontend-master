import {
  type CombinedState,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';

import { $api } from 'shared/api/api';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

import { createReducerManager } from './reducer-manager';
import { type StateSchema, type ThunkExtraArg } from './state-schema';
import { eventsReducer } from 'widgets/events-list';
import { eventDanceStylesReducer, eventReducer, eventTypesReducer } from 'entities/event';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    events: eventsReducer,
    event: eventReducer,
    eventTypes: eventTypesReducer,
    eventDanceStyles: eventDanceStylesReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
