import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents } from '../services/fetch-events';
import { fetchMoreEvents } from '../services/fetch-more-events';
import { type EventsSchema } from '../types/events';

const initialState: EventsSchema = {
  events: [],
  status: 'idle',
  page: 1,
  perPage: 8,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const { events, total } = action.payload;
        state.status = 'success';
        state.events = events;
        state.total = total;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      })

      .addCase(fetchMoreEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMoreEvents.fulfilled, (state, action) => {
        const { events, page } = action.payload;
        state.status = 'success';
        state.events = [...state.events, ...events];
        state.page = page;
      })
      .addCase(fetchMoreEvents.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      });
  },
});

export const { actions: eventsActions } = eventsSlice;

export const { reducer: eventsReducer } = eventsSlice;
