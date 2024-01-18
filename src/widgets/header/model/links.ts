import { RoutesPath } from 'app/providers/router';

interface NavLink {
  path: string;
  text: string;
}

export const NavLinks: NavLink[] = [
  {
    path: RoutesPath.events,
    text: 'Мероприятия',
  },
  {
    path: RoutesPath.directions,
    text: 'Направления',
  },
  {
    path: RoutesPath.schools,
    text: 'Школы',
  },
  {
    path: RoutesPath.cooperation,
    text: 'Сотрудничество',
  },
];
