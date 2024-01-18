import cn from 'classnames';

import { EventCard, type IEvent } from 'entities/event';
import { Button } from 'shared/ui/button';
import { Text } from 'shared/ui/text';

import styles from './events-list.module.scss';

interface IEventsListProps {
  events: IEvent[];
  countEvents?: number;
  isHasMore?: boolean;
  onShowMore?: () => void;
}

export const EventsList = ({
  events,
  countEvents,
  isHasMore = false,
  onShowMore,
}: IEventsListProps) => {
  return (
    <div className={cn(styles.eventsListWrapper)}>
      {countEvents !== undefined && (
        <Text className={styles.total} text={`Найдено ${countEvents} мероприятий`} />
      )}
      <div className={cn(styles.eventsList)}>
        {events.map((event) => (
          <EventCard
            key={event.title}
            id={event.id}
            title={event.title}
            photo={event.banner}
            tags={event.tags} // dance_styles ?
            date={[event.startDate, event.endDate]}
            weekDay={event.weekDay}
            time={[event.startTime, event.endTime]}
            city={event.city}
          />
        ))}
      </div>
      {isHasMore && (
        <Button className={styles.showMoreBtn} styleType='secondary' onClick={onShowMore}>
          Показать еще
        </Button>
      )}
    </div>
  );
};
