import { type Status } from 'shared/types/status';

export interface EventTypeSchema {
  id: number;
  name: string;
}

export interface EventTypesSchema {
  eventTypes: EventTypeSchema[];
  status: Status;
  errorMessage?: string;
}
