import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';

import { fromApiEvent } from 'entities/event';
import { apiRequest } from 'shared/api/request';
import { type ApiEventsResult, type EventsSchema } from '../types/events';

export const fetchEvents = createAsyncThunk<EventsSchema, void, ThunkConfig<string>>(
  'events/fetchEvents',
  async () => {
    const { count, results } = await apiRequest<ApiEventsResult>({
      method: 'GET',
      url: '/events/',
    });

    return {
      events: results.map((event) => fromApiEvent(event)),
      total: count,
      page: 1,
    };
  },
);
