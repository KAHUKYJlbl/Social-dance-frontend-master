import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';

import { type CounterSchema } from 'entities/counter';
import { type UserSchema } from 'entities/user';
import { type EventsSchema } from 'widgets/events-list';
import { type EventSchema, EventTypesSchema } from 'entities/event';
import { type AppDispatch } from './store';
import { EventDanceStylesSchema } from 'entities/event/model/types/event-dance-styles';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  events: EventsSchema;
  event: EventSchema;
  eventTypes: EventTypesSchema;
  eventDanceStyles: EventDanceStylesSchema;
  // async reducers
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
  dispatch: AppDispatch;
}
