import { memo } from 'react';

import { Button } from 'shared/ui/button';
import { Text } from 'shared/ui/text';
import { Tag } from 'shared/ui/tag';
import { Icon } from 'shared/ui/icon';
import { type IconName } from 'shared/ui/icon/utils';
import eventDefaultBg from 'shared/assets/images/event-default-bg.png';
import { normalizeDate } from '../event-card/utils';
import { normalizeAddress } from './utils';

import styles from './event-details-card.module.scss';

interface IEventDetailsCardProps {
  id: string;
  title: string;
  photo: string | null;
  tags: string[];
  date: Array<string | null>;
  weekDay: string;
  time: Array<string | null>;
  city: string;
  description: string;
  address: string;
  placeName: string;
  contactPhone: string;
  organizer: string;
}

type ContactInfoName = 'date' | 'address' | 'organizer' | 'phone';

interface ContactInfoProps {
  name: ContactInfoName;
  icon: IconName;
  text: string;
}

export const EventDetailsCard = memo(
  ({
    id,
    title,
    photo,
    tags,
    date,
    weekDay,
    time,
    city,
    description,
    address,
    placeName,
    contactPhone,
    organizer,
  }: IEventDetailsCardProps) => {
    const eventPhotoSrc = photo || eventDefaultBg;

    const contactInfo: ContactInfoProps[] = [
      {
        name: 'date',
        icon: 'calendar',
        text: normalizeDate(date, time, weekDay),
      },
      {
        name: 'address',
        icon: 'geo',
        text: normalizeAddress(address, placeName, city),
      },
      { name: 'organizer', icon: 'home', text: organizer },
      { name: 'phone', icon: 'phone', text: contactPhone },
    ];

    const renderInfoItem = (name: ContactInfoName, text: string) => {
      switch (name) {
        case 'date':
        case 'organizer':
          return <span className={styles.contactInfoText}>{text}</span>;
        case 'phone':
          return (
            <a className={styles.contactInfoLink} href={`tel:${text}`}>
              {text}
            </a>
          );
        case 'address':
          return (
            <a
              className={styles.contactInfoLink}
              target='_blank'
              href={`https://www.google.com/maps/search/?api=1&query=${text}`}
              rel='noreferrer'
            >
              {text}
            </a>
          );
        default:
          return null;
      }
    };

    const contactInfoItems = contactInfo
      .filter(({ text }) => !!text)
      .map(({ name, icon, text }) => (
        <div key={name} className={styles.contactInfoRow}>
          <Icon name={icon} className={styles.contactInfoIcon} />
          {renderInfoItem(name, text)}
        </div>
      ));

    return (
      <div className={styles.detailsCardWrapper}>
        <div className={styles.detailsTop}>
          <div className={styles.detailsPhoto}>
            <img src={eventPhotoSrc} alt='event photo' />
          </div>

          <div className={styles.detailsContent}>
            <Text className={styles.detailsTitle} TitleTag='h2' title={title} />

            <div className={styles.tagsContainer}>
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>

            <div className={styles.contactInfo}>{contactInfoItems}</div>

            <Button className={styles.recordBtn}>Записаться</Button>
          </div>
        </div>

        <div className={styles.detailsBottomDescription}>
          <Text className={styles.descriptionTitle} TitleTag='h4' title='О мероприятии' />
          <Text className={styles.descriptionText} text={description} />
        </div>
      </div>
    );
  },
);
