import { type StateSchema } from 'app/providers/store-provider';

export const getEvent = (state: StateSchema) => state.event.event;

export const getEventTypes = (state: StateSchema) => state.eventTypes;

export const getEventDanceStyles = (state: StateSchema) => state.eventDanceStyles;
