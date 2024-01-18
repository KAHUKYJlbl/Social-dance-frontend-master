import { StoreProvider } from './ui/store-provider';
import { createReduxStore, type AppDispatch } from './config/store';
import type { StateSchema, StoreManager, ThunkConfig } from './config/state-schema';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type StoreManager,
  type AppDispatch,
  type ThunkConfig,
};
