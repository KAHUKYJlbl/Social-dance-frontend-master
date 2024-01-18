import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './event-date.module.scss';

import { Text } from 'shared/ui/text';
import { Radio } from 'shared/ui/radio';
import { Input } from 'shared/ui/input';

enum EventLength {
  Day = 'day',
  Days = 'days',
}

export const EventDate = (): JSX.Element => {
  const [eventLength, setEventLength] = useState<EventLength>(EventLength.Day);

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();

  const [minEndTime, setMinEndTime] = useState<Date>(new Date(new Date().setHours(0, 0)));

  const handleStartTimeSet = (date: Date) => {
    setStartTime(date);

    setMinEndTime(new Date(date.valueOf() + 60000));
  };

  return (
    <div className={styles.box}>
      <Text className={styles.requiredLabel} title='Дата и время проведения *' TitleTag='h4' />

      <div className={styles.boxRow}>
        <Radio
          label='Однодневное мероприятие'
          name='eventLength'
          value={EventLength.Day}
          currentState={eventLength}
          clickHandler={() => setEventLength(EventLength.Day)}
        />
        <Radio
          label='Многодневное мероприятие'
          name='eventLength'
          value={EventLength.Days}
          currentState={eventLength}
          clickHandler={() => setEventLength(EventLength.Days)}
        />
      </div>

      <div className={styles.boxRow}>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          placeholderText='Дата начала'
          dateFormat='dd.MM.yyyy'
          minDate={new Date()}
          customInput={<Input type='text' />}
        />

        {eventLength === EventLength.Day && (
          <>
            <DatePicker
              selected={startTime}
              onChange={handleStartTimeSet}
              placeholderText='Время начала'
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeFormat='HH:mm'
              dateFormat='HH:mm'
              timeCaption='Время'
              customInput={<Input type='text' />}
            />

            <DatePicker
              selected={endTime}
              onChange={setEndTime}
              placeholderText='Время окончания'
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeFormat='HH:mm'
              dateFormat='HH:mm'
              timeCaption='Время'
              minTime={minEndTime}
              maxTime={new Date(new Date().setHours(23, 59, 59))}
              customInput={<Input type='text' />}
            />
          </>
        )}

        {eventLength === EventLength.Days && (
          <DatePicker
            selected={endDate}
            onChange={setEndDate}
            placeholderText='Дата окончания'
            dateFormat='dd.MM.yyyy'
            minDate={startDate}
            customInput={<Input type='text' />}
          />
        )}
      </div>
    </div>
  );
};
