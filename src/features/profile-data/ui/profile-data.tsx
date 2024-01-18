import { useMemo } from 'react';
import { Text } from 'shared/ui/text';

import { ProfileFields } from '../model/fields';
import styles from './profile-data.module.scss';

export const ProfileData = () => {
  const fields = useMemo(
    () =>
      ProfileFields.map(({ icon, name }) => (
        <Text className={styles.field} key={name} icon={icon} text={name} />
      )),
    [],
  );

  return (
    <div className={styles.profile}>
      <div className={styles.fields}>{fields}</div>
      <p>
        Если вы хотите изменить данные профиля, напишите нам:{' '}
        <a className={styles.email} href='mailto:info.social.danc@gmail.com'>
          info.social.danc@gmail.com
        </a>
      </p>
    </div>
  );
};
