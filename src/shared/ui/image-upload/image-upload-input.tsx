import { forwardRef, type MutableRefObject, type ChangeEvent, type DragEvent } from 'react';
import { Icon } from '../icon';
import { type ImageProps } from './image-upload';

import styles from './image-upload.module.scss';

interface ImageUploadInputProps {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  image?: ImageProps;
  preview?: boolean;
  onRemoveImage?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement> | DragEvent) => void;
}

export const ImageUploadInput = forwardRef<HTMLInputElement, ImageUploadInputProps>(
  ({ className, id, name, label, image, preview, onRemoveImage, onChange }, forwardedRef) => {
    const ref = forwardedRef as MutableRefObject<HTMLInputElement>;
    const onClickButton = () => {
      if (ref.current) {
        ref.current.click();
      }
    };

    return (
      <>
        {image.imageName && !preview && (
          <div className={styles.uploadResult}>
            <span>{image.imageName}</span>
            <Icon className={styles.uploadResultRemove} name='close' onClick={onRemoveImage} />
          </div>
        )}
        <input
          className={className}
          ref={forwardedRef}
          id={id}
          name={name}
          type='file'
          accept='image/jpeg, image/png, image/jpg'
          onChange={onChange}
        />
        <label htmlFor={id} onClick={onClickButton}>
          {label}
        </label>
      </>
    );
  },
);
