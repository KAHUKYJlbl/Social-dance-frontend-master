import { useEffect } from 'react';
import cn from 'classnames';

import {
  EventsList,
  fetchEvents,
  fetchMoreEvents,
  getEvents,
  getEventsHasMore,
  getEventsTotal,
} from 'widgets/events-list';
import { EventsFilter } from 'features/events-filter';
import { useAppSelector } from 'shared/lib/hooks/use-app-selector';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

import styles from './events-page.module.scss';

const EventsPage = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(getEvents);
  const hasMore = useAppSelector(getEventsHasMore);
  const total = useAppSelector(getEventsTotal);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleShowMore = () => {
    dispatch(fetchMoreEvents());
  };

  return (
    <div className={cn(styles.eventsPageWrapper)}>
      <EventsFilter />
      <EventsList
        events={events}
        countEvents={total}
        isHasMore={hasMore}
        onShowMore={handleShowMore}
      />
    </div>
  );
};

export default EventsPage;
