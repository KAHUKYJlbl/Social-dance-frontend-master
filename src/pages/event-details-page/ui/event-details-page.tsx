import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { EventDetailsCard, fetchEventById, getEvent } from 'entities/event';
import { BreadcrumbsNav } from 'shared/ui/breadcrumbs-nav';
import { useAppSelector } from 'shared/lib/hooks/use-app-selector';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { breadcrumbsLinks } from '../model/breadcrumbs-links';

import styles from './event-details-page.module.scss';

const EventDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const event = useAppSelector(getEvent);

  useEffect(() => {
    dispatch(fetchEventById(id));
  }, [dispatch, id]);

  return (
    <div className={cn(styles.eventDetailsPageWrapper)}>
      <BreadcrumbsNav breadcrumbs={breadcrumbsLinks} />

      {event && (
        <EventDetailsCard
          id={event.id}
          title={event.title}
          photo={event.banner}
          tags={event.tags}
          date={[event.startDate, event.endDate]}
          weekDay={event.weekDay}
          time={[event.startTime, event.endTime]}
          city={event.city}
          address={event.address}
          placeName={event.placeName}
          contactPhone={event.contactPhone}
          description={event.description}
          organizer={event.organizer}
        />
      )}
    </div>
  );
};

export default EventDetailsPage;
