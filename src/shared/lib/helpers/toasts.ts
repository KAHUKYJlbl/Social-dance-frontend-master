import { Slide, toast, ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  transition: Slide,
};

export class message {
  static error(msg: string) {
    toast(msg, {
      ...options,
      type: 'error',
    });
  }

  static success(msg: string) {
    toast(msg, {
      ...options,
      type: 'success',
    });
  }
}
