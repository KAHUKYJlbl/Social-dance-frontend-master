import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';

import { type IEvent, type ApiEvent, fromApiEvent } from 'entities/event';
import { apiRequest } from 'shared/api/request';

export const fetchEventById = createAsyncThunk<IEvent, string, ThunkConfig<string>>(
  'event/fetchEventById',
  async (eventId) => {
    const result = await apiRequest<ApiEvent>({
      method: 'GET',
      url: `/events/${eventId}`,
    });

    return fromApiEvent(result);
  },
);
