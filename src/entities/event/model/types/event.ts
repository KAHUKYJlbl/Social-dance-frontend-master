import { type Status } from 'shared/types/status';

export interface IEvent {
  id: string;
  banner: string | null;
  eventType: number;
  danceStyles: number[];
  title: string;
  description: string;
  organizer: string;
  city: string;
  address: string | null;
  placeName: string | null;
  contactPhone: string | null;
  contactUrl: string | null;
  eventUrl: string | null;
  isPublished: boolean;
  isActive: boolean;
  startDate: string; // todo: fix to '2023-04-25'
  startTime: string;
  endDate: string; // todo: fix to '2023-04-25'
  endTime: string;

  // not API
  tags: string[];
  weekDay: string;
}

export interface EventSchema {
  event?: IEvent;
  status: Status;
  errorMessage?: string;
}
