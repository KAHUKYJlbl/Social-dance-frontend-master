import { Text } from 'shared/ui/text';

import styles from './reset-success.module.scss';

interface ResetSuccessProps {
  email?: string;
}

export const ResetSuccess = ({ email }: ResetSuccessProps) => (
  <div className={styles.wrapper}>
    <Text className={styles.title} title='Проверьте почту' TitleTag='h4' align='center' />
    <Text text={`Мы отправили ссылку для сброса пароля на ${email}`} />
  </div>
);
