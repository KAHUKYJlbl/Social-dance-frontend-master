import { ChangeEvent, useEffect, useState } from 'react';

import { Button } from 'shared/ui/button';
import { Text } from 'shared/ui/text';
import { Select } from 'shared/ui/select';
import { Textarea } from 'shared/ui/textarea';
import { Radio } from 'shared/ui/radio';
import { Input } from 'shared/ui/input';
import { ImageUpload } from 'shared/ui/image-upload';
import InputMask from 'react-input-mask';
import { EventDate, EventPlace, fetchEventDanceStyles, getEventDanceStyles } from 'entities/event';

import styles from './new-event-page.module.scss';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { fetchEventTypes } from 'entities/event/model/services/fetch-event-types';
import { useAppSelector } from 'shared/lib/hooks/use-app-selector';
import { getEventTypes } from 'entities/event/model/selectors';
import { message } from 'shared/lib/helpers/toasts';

const NewEventPage = () => {
  const [link, setLink] = useState<'link' | 'festival'>('link');
  const dispatch = useAppDispatch();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [contact, setContact] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [organizer, setOrganizer] = useState('');

  const eventTypesData = useAppSelector(getEventTypes);
  const isEventTypesLoading =
    eventTypesData.status === 'idle' || eventTypesData.status === 'loading';
  const eventTypesOptions = eventTypesData.eventTypes.map((eventType) => ({
    label: eventType.name,
    value: eventType.name,
    id: eventType.id,
  }));

  const eventDanceStylesData = useAppSelector(getEventDanceStyles);
  const eventDanceStylesOptions = eventDanceStylesData.eventDanceStyles.map((danceStyle) => ({
    label: danceStyle.name,
    value: danceStyle.name,
    id: danceStyle.id,
  }));
  const isEventDanceStylesLoading =
    eventDanceStylesData.status === 'idle' || eventDanceStylesData.status === 'loading';
  const loadingText = 'Загрузка';

  const onEventNameChange = (e: ChangeEvent<HTMLInputElement>) => setEventName(e.target.value);
  const onEventDescriptionChange = (value: string) => setEventDescription(value);
  const onContactChange = (e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value);
  const onEventLinkChange = (e: ChangeEvent<HTMLInputElement>) => setEventLink(e.target.value);
  const onOrganizerChange = (e: ChangeEvent<HTMLInputElement>) => setOrganizer(e.target.value);

  useEffect(() => {
    dispatch(fetchEventTypes());
    dispatch(fetchEventDanceStyles());
    message.success('Пример использования');
  }, [dispatch]);

  return (
    <div className={styles.newEventPage}>
      <Text title='Новое мероприятие' />

      <div className={styles.box}>
        <Text title='Баннер мероприятия' TitleTag='h4' />
        <ImageUpload label='Выбрать файл с устройства' />
      </div>

      <div className={styles.box}>
        <Text title='Название мероприятия' TitleTag='h4' />
        <Input
          placeholder='Введите название мероприятия'
          maxLength={50}
          value={eventName}
          onChange={onEventNameChange}
        />
      </div>

      <Select
        label='Вид мероприятия'
        placeholder={isEventTypesLoading ? loadingText : 'Выберите вид мероприятия'}
        disabled={isEventTypesLoading}
        isSearchable
        required
        options={eventTypesOptions}
      />

      <Select
        label='Направление'
        placeholder={isEventDanceStylesLoading ? loadingText : 'Выберите направления'}
        disabled={isEventDanceStylesLoading}
        isMulti
        required
        options={eventDanceStylesOptions}
      />

      <Textarea
        label='Описание мероприятия'
        required
        placeholder='Внесите описание мероприятия'
        maxLength={1500}
        value={eventDescription}
        onChange={onEventDescriptionChange}
      />

      <EventDate />

      <EventPlace />

      <div className={styles.box}>
        <Text title='Контакты' TitleTag='h4' />
        <InputMask
          className='ui-input'
          placeholder='Введите номер телефона'
          type='tel'
          mask='+7 (999) 99-99-99'
          onChange={onContactChange}
          value={contact}
        />
        <div className={styles.boxRow}>
          <Radio
            label='Ссылка на запись'
            name='link'
            value='link'
            currentState={link}
            clickHandler={() => setLink('link')}
          />
          <Radio
            label='Ссылка на фестиваль'
            name='link'
            value='festival'
            currentState={link}
            clickHandler={() => setLink('festival')}
          />
        </div>
        <Input placeholder='https://' value={eventLink} onChange={onEventLinkChange} />
      </div>

      <div className={styles.box}>
        <Text title='Организатор' TitleTag='h4' />
        <Input
          placeholder='Введите организатора'
          maxLength={30}
          value={organizer}
          onChange={onOrganizerChange}
        />
      </div>

      <div className={styles.boxRow}>
        <Button styleType='secondary'>Сохранить черновик</Button>
        <Button>Опубликовать</Button>
      </div>
    </div>
  );
};

export default NewEventPage;
