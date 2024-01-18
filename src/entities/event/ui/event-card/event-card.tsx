import { memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { RoutesPath } from 'app/providers/router';
import { Text } from 'shared/ui/text';
import { Tag } from 'shared/ui/tag';
import eventDefaultBg from 'shared/assets/images/event-default-bg.png';
import { normalizeDate } from './utils';

import styles from './event-card.module.scss';

interface IEventCardProps {
  id: string;
  title: string;
  photo: string | null;
  tags: string[];
  date: Array<string | null>;
  weekDay: string;
  time: Array<string | null>;
  city: string;
}

export const EventCard = memo(
  ({ id, title, photo, tags, date, weekDay, time, city }: IEventCardProps) => {
    const dateString = normalizeDate(date, time, weekDay);
    const eventPhotoSrc = photo || eventDefaultBg;

    return (
      <Link className={cn(styles.eventCard)} to={`${RoutesPath.event_details}${id}`}>
        <div className={cn(styles.eventCardPhoto)}>
          <img src={eventPhotoSrc} alt='event photo' />
        </div>

        <div className={cn(styles.eventCardContent)}>
          <div className={cn(styles.tagsContainer)}>
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <Text className={styles.title} TitleTag='h4' title={title} />
        </div>

        <div className={cn(styles.eventCardFooter)}>
          <Text className={styles.text} text={dateString} />
          <Text className={styles.city} text={city} />
        </div>
      </Link>
    );
  },
);
