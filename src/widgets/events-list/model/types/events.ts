import { type ApiEvent, type IEvent } from 'entities/event';
import { type Status } from 'shared/types/status';

export interface ApiEventsResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiEvent[];
}

export interface EventsSchema {
  events: IEvent[];
  status?: Status;
  errorMessage?: string;
  total?: number;
  page: number;
  perPage?: number;
}
