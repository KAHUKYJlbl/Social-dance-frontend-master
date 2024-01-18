import { lazy } from 'react';

export const SchoolsPageLazy = lazy(async () => await import('./schools-page'));
