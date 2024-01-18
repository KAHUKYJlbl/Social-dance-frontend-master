import { memo } from 'react';

import styles from './events-filter.module.scss';
import { Select } from 'shared/ui/select';
import { Button } from 'shared/ui/button';
import { Icon } from 'shared/ui/icon';

const cities = [
  {
    label: 'Все города',
    value: 'All',
  },
  {
    label: 'Москва',
    value: 'Moscow',
  },
  {
    label: 'Сочи',
    value: 'Sochi',
  },
  {
    label: 'Санкт-Петербург',
    value: 'Spb',
  },
];

export const EventsFilter = memo(() => {
  // const [eventsCount, setEventsCount] = useState<number>(0)

  // useEffect(() => {
  //   setEventsCount(filteredEvents?.length)
  // }, [filteredEvents])

  return (
    <div className={styles.eventsFilter}>
      <div className={styles.filters}>
        <Select options={cities} defaultValue={cities[0]} className='filter-select' />
        <Select placeholder='Когда' className='filter-select' />
        <Select placeholder='Направление' className='filter-select' />
        <Select placeholder='Вид мероприятия' className='filter-select' />
        <Button className={styles.clearButton} styleType='custom'>
          <Icon className={styles.clearIcon} name='close' />
        </Button>
      </div>
      {/* <Text text={`Найдено ${eventsCount} ${grammarHelper(eventsCount)}`} /> */}
    </div>
  );
});
