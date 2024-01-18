import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/store-provider';

import { type EventDanceStyleSchema } from 'entities/event';
import { apiRequest } from 'shared/api/request';

export const fetchEventDanceStyles = createAsyncThunk<
  EventDanceStyleSchema[],
  void,
  ThunkConfig<string>
>('event/fetchEventDanceStyles', async () => {
  const result = await apiRequest<EventDanceStyleSchema[]>({
    method: 'GET',
    url: `/dances/`,
  });

  return result;
});
