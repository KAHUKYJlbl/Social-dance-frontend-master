import { type IEvent } from './event';

export interface ApiEvent {
  id: number;
  event_type: number;
  dance_styles: number[];
  title: string;
  description: string;
  organizer: string;
  city: string;
  address: string;
  place_name: string;
  contact_phone: string | null;
  contact_url: string | null;
  event_url: string | null;
  is_published: boolean;
  is_active: boolean;
  start_date: string; // todo: fix to '2023-04-25'
  start_time: string;
  end_date: string; // todo: fix to '2023-04-25'
  end_time: string;

  // not API
  banner: string | null;
  tags: string[];
  weekDay: string;
}

interface DateFormatter {
  weekDay: string;
  dayMonth: string;
}

const eventsDateFormatter = (date: string): DateFormatter => {
  const newDate = new Date(date);

  const formatter = new Intl.DateTimeFormat('ru', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  });

  const [weekDay, dayMonth] = formatter.format(newDate).split(', ');

  const newWeekDay = `${weekDay.slice(0, 1).toUpperCase()}${weekDay.slice(1)}`;

  return {
    weekDay: newWeekDay,
    dayMonth,
  };
};

export const fromApiEvent = (event: ApiEvent): IEvent => ({
  id: String(event.id),
  banner: event.banner,
  eventType: event.event_type,
  danceStyles: event.dance_styles,
  title: event.title,
  description: event.description,
  organizer: event.organizer,
  city: event.city,
  address: event.address,
  placeName: event.place_name,
  contactPhone: event.contact_phone,
  contactUrl: event.contact_url,
  eventUrl: event.event_url,
  isPublished: event.is_published,
  isActive: event.is_active,
  startDate: eventsDateFormatter(event.start_date).dayMonth,
  startTime: event.start_time?.slice(0, 5) ?? '',
  endDate: event.end_date ? eventsDateFormatter(event.end_date).dayMonth : null,
  endTime: event.end_time?.slice(0, 5) ?? '',

  // not API
  tags: [],
  weekDay: eventsDateFormatter(event.start_date).weekDay,
});
