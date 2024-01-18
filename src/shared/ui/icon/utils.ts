import { ReactComponent as arrowDown } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as arrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as arrowRight } from '../../assets/icons/arrow-right.svg';
import { ReactComponent as arrowUp } from '../../assets/icons/arrow-up.svg';
import { ReactComponent as calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as check } from '../../assets/icons/check.svg';
import { ReactComponent as checkboxActive } from '../../assets/icons/checkbox-active.svg';
import { ReactComponent as checkbox } from '../../assets/icons/checkbox.svg';
import { ReactComponent as close } from '../../assets/icons/close.svg';
import { ReactComponent as copyright } from '../../assets/icons/copyright.svg';
import { ReactComponent as eyeOff } from '../../assets/icons/eye-off.svg';
import { ReactComponent as eyeOn } from '../../assets/icons/eye-on.svg';
import { ReactComponent as geo } from '../../assets/icons/geo.svg';
import { ReactComponent as home } from '../../assets/icons/home.svg';
import { ReactComponent as mail } from '../../assets/icons/mail.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as radioCheck } from '../../assets/icons/radiobutton-check.svg';
import { ReactComponent as radioUncheck } from '../../assets/icons/radiobutton-uncheck.svg';
import { ReactComponent as rating } from '../../assets/icons/rating.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as threePoint } from '../../assets/icons/three-point.svg';
import { ReactComponent as user } from '../../assets/icons/user.svg';
import { ReactComponent as viber } from '../../assets/icons/viber.svg';
import { ReactComponent as whatsapp } from '../../assets/icons/whatsapp.svg';

const iconSvgs = {
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  calendar,
  check,
  checkboxActive,
  checkbox,
  close,
  copyright,
  eyeOff,
  eyeOn,
  geo,
  home,
  mail,
  phone,
  radioCheck,
  radioUncheck,
  rating,
  search,
  telegram,
  threePoint,
  user,
  viber,
  whatsapp,
};

export type IconName = keyof typeof iconSvgs;

export const getIconSvg = (name: IconName) => iconSvgs[name];
