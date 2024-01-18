import { EventsList } from 'widgets/events-list';
import { Button } from 'shared/ui/button';
import { type ITab, Tabs } from 'shared/ui/tabs';
import { Text } from 'shared/ui/text';
import { userEventsMock } from 'pages/profile-page/model/user-events-mock';
import { RoutesPath } from 'app/providers/router';
import { ProfileData } from 'features/profile-data';

import styles from './profile-page.module.scss';

// TODO: remove from here
const tabs: ITab[] = [
  {
    label: 'Активные',
    count: 4,
    active: true,
  },
  {
    label: 'Черновики',
    count: 0,
    active: false,
  },
];

const ProfilePage = () => (
  <div>
    <Text title='Мои данные' />
    <ProfileData />
    <Text title='Мои мероприятия' />
    {/* TODO: move it to a single component */}
    <div className={styles.eventsActions}>
      <Tabs tabs={tabs} />
      <Button className={styles.eventsActionsButton} link={RoutesPath.new_event}>
        Создать мероприятие
      </Button>
    </div>
    <EventsList events={userEventsMock} />
  </div>
);

export default ProfilePage;
