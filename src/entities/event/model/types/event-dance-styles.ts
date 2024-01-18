import { type Status } from 'shared/types/status';

export interface EventDanceStyleSchema {
  id: number;
  name: string;
}

export interface EventDanceStylesSchema {
  eventDanceStyles: EventDanceStyleSchema[];
  status: Status;
  errorMessage?: string;
}
