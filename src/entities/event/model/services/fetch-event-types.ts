import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';

import { type EventTypeSchema } from 'entities/event';
import { apiRequest } from 'shared/api/request';

export const fetchEventTypes = createAsyncThunk<EventTypeSchema[], void, ThunkConfig<string>>(
  'event/fetchEventTypes',
  async () => {
    const result = await apiRequest<EventTypeSchema[]>({
      method: 'GET',
      url: `/event_types/`,
    });

    return result;
  },
);
