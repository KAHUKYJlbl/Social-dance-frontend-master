import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';

import { fromApiEvent } from 'entities/event';
import { apiRequest } from 'shared/api/request';
import { type ApiEventsResult, type EventsSchema } from '../types/events';

export const fetchMoreEvents = createAsyncThunk<EventsSchema, void, ThunkConfig<string>>(
  'events/fetchMoreEvents',
  async (_, { getState }) => {
    const { page } = getState().events;
    const nextPage = page + 1;

    const { results } = await apiRequest<ApiEventsResult>({
      method: 'GET',
      url: '/events/',
      queryParams: {
        page: nextPage,
      },
    });

    return {
      events: results.map((event) => fromApiEvent(event)),
      page: nextPage,
    };
  },
);
