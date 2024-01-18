import { createSelector } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';
import { type CounterSchema } from '../types/counter-schema';

export const getCounter = (state: StateSchema) => state.counter;

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
