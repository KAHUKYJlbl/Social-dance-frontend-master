import { memo } from 'react';

import { Text } from 'shared/ui/text';
import { Icon } from 'shared/ui/icon';

import styles from './footer.module.scss';

const iconStyle = { width: '16px', height: '16px' };

export const Footer = memo(() => (
  <footer className={styles.footer}>
    <Icon name='copyright' style={iconStyle} />
    <Text text='2023 Все права защищены.' className={styles.text} />
  </footer>
));
