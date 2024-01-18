import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type EventSchema, type IEvent } from '../types/event';
import { fetchEventById } from '../services/fetch-event-by-id';

const initialState: EventSchema = {
  event: null,
  status: 'idle',
  errorMessage: '',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEventById.fulfilled, (state, action: PayloadAction<IEvent>) => {
        state.status = 'success';
        state.event = action.payload;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      });
  },
});

export const { actions: eventActions } = eventSlice;

export const { reducer: eventReducer } = eventSlice;
