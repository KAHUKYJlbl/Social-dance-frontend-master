import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EventTypeSchema, fetchEventDanceStyles } from 'entities/event';
import { EventDanceStylesSchema } from 'entities/event/model/types/event-dance-styles';
const initialState: EventDanceStylesSchema = {
  eventDanceStyles: [],
  status: 'idle',
  errorMessage: '',
};

export const eventDanceStylesSlice = createSlice({
  name: 'event-dance-styles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventDanceStyles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchEventDanceStyles.fulfilled,
        (state, action: PayloadAction<EventTypeSchema[]>) => {
          state.status = 'success';
          state.eventDanceStyles = action.payload;
        },
      )
      .addCase(fetchEventDanceStyles.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
      });
  },
});

export const { actions: eventDanceStylesActions } = eventDanceStylesSlice;
export const { reducer: eventDanceStylesReducer } = eventDanceStylesSlice;
