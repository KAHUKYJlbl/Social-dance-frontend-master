export { EventsList } from './ui/events-list';
export { eventsReducer, eventsActions } from './model/slice/events-slice';
export type { EventsSchema } from './model/types/events';
export { getEvents, getEventsHasMore, getEventsTotal } from './model/selectors/index';
export { fetchEvents } from './model/services/fetch-events';
export { fetchMoreEvents } from './model/services/fetch-more-events';
