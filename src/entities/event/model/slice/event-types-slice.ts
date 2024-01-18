import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchEventTypes } from 'entities/event/model/services/fetch-event-types';
import { EventTypeSchema, EventTypesSchema } from 'entities/event';
const initialState: EventTypesSchema = {
  eventTypes: [],
  status: 'idle',
  errorMessage: '',
};

export const eventTypesSlice = createSlice({
  name: 'event-types',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventTypes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEventTypes.fulfilled, (state, action: PayloadAction<EventTypeSchema[]>) => {
        state.status = 'success';
        state.eventTypes = action.payload;
      })
      .addCase(fetchEventTypes.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      });
  },
});

export const { actions: eventTypesActions } = eventTypesSlice;

export const { reducer: eventTypesReducer } = eventTypesSlice;
