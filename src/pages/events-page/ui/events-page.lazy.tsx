import { lazy } from 'react';

export const EventsPageLazy = lazy(async () => await import('./events-page'));
