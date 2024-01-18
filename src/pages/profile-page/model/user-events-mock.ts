import { type IEvent } from 'entities/event';

export const userEventsMock: IEvent[] = [
  {
    eventType: 0,
    danceStyles: [0],
    organizer: '',
    title: 'Вечеринка в честь восьмого марта',
    description: '',
    city: 'Самара',
    address: 'Адрес',
    placeName: 'Название площадки',
    contactPhone: '8(800)555-35-35',
    contactUrl: '',
    eventUrl: '',
    isPublished: true,
    isActive: true,
    startDate: '2023-04-25',
    startTime: '20:00',
    endDate: '2023-04-25',
    endTime: '23:00',
    // not API
    id: '1',
    tags: ['вид мероприятия'],
    weekDay: 'Сб',
    banner: null,
  },
];
