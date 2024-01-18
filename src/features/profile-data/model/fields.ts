import { type IconName } from 'shared/ui/icon/utils';

interface ProfileField {
  icon: IconName;
  name: string;
}

export const ProfileFields: ProfileField[] = [
  {
    icon: 'user',
    name: 'Имя Фамилия',
  },
  {
    icon: 'phone',
    name: 'Телефон',
  },
  {
    icon: 'mail',
    name: 'Почта',
  },
  {
    icon: 'geo',
    name: 'Город',
  },
  {
    icon: 'home',
    name: 'Школа',
  },
];
