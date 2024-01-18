import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { EventsPage } from 'pages/events-page';
import { DirectionsPage } from 'pages/directions-page';
import { SchoolsPage } from 'pages/schools-page';
import { CooperationPage } from 'pages/cooperation-page';
import { EventDetailsPage } from 'pages/event-details-page';
import { ProfilePage } from 'pages/profile-page';
import { NewEventPage } from 'pages/new-event-page';

export enum AppRoutes {
  MAIN = 'main',
  EVENTS = 'events',
  EVENT_DETAILS = 'event_details',
  DIRECTIONS = 'directions',
  SCHOOLS = 'schools',
  COOPERATION = 'cooperation',
  PROFILE = 'profile',
  NEW_EVENT = 'new_event',
  // if needed
  // NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.EVENTS]: '/events',
  [AppRoutes.EVENT_DETAILS]: '/events/',
  [AppRoutes.DIRECTIONS]: '/directions',
  [AppRoutes.SCHOOLS]: '/schools',
  [AppRoutes.COOPERATION]: '/cooperation',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NEW_EVENT]: '/profile/new-event',
  // in the end
  // [AppRoutes.NOT_FOUND]: '*',
};

export const routes: RouteProps[] = [
  {
    path: RoutesPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutesPath[AppRoutes.EVENTS],
    element: <EventsPage />,
  },
  {
    path: `${RoutesPath[AppRoutes.EVENT_DETAILS]}:id`,
    element: <EventDetailsPage />,
  },
  {
    path: RoutesPath[AppRoutes.DIRECTIONS],
    element: <DirectionsPage />,
  },
  {
    path: RoutesPath[AppRoutes.SCHOOLS],
    element: <SchoolsPage />,
  },
  {
    path: RoutesPath[AppRoutes.COOPERATION],
    element: <CooperationPage />,
  },
  {
    path: RoutesPath[AppRoutes.PROFILE],
    element: <ProfilePage />,
  },
  {
    path: RoutesPath[AppRoutes.NEW_EVENT],
    element: <NewEventPage />,
  },
  // {
  //   path: RoutesPath[AppRoutes.NOT_FOUND],
  //   element: <NotFoundPage />,
  // },
];
