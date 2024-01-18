import { createSelector } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/store-provider';

export const getEvents = (state: StateSchema) => state.events.events;

export const getEventsPage = (state: StateSchema) => state.events.page;

export const getEventsPerPage = (state: StateSchema) => state.events.perPage;

export const getEventsTotal = (state: StateSchema) => state.events.total;

export const getEventsStatus = (state: StateSchema) => state.events.status;

export const getEventsHasMore = createSelector(
  getEvents,
  getEventsTotal,
  (events, total) => events.length < total,
);
