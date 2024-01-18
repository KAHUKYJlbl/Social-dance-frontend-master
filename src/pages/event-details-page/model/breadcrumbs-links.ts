import { RoutesPath } from 'app/providers/router';
import { type IBreadcrumbsItem } from 'shared/ui/breadcrumbs-nav/breadcrumbs-nav';

export const breadcrumbsLinks: IBreadcrumbsItem[] = [
  { id: 0, text: 'Мероприятия', link: RoutesPath.events },
  { id: 1, text: 'Название мероприятия', link: `${RoutesPath.event_details}:id` },
];
