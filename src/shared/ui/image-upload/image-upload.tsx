import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import Cropper, { type ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { Button } from '../button';
import { Modal } from '../modal';
import { Text } from '../text';
import { ImageUploadInput } from './image-upload-input';

import styles from './image-upload.module.scss';
import { useMediaQuery } from 'shared/lib/hooks/use-media-query';
import MobileModal from 'shared/ui-mobile/mobile-modal/mobile-modal';

interface ImageUploadProps {
  id?: string;
  name?: string;
  label: string;
}

export interface ImageProps {
  image?: string;
  imageName?: string;
}

const CROP_BOX_SIZE = { width: 300, height: 300 };

export const ImageUpload = ({ id, name, label }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const previewInputRef = useRef<HTMLInputElement>();
  const cropperRef = useRef<ReactCropperElement>(null);

  const [image, setImage] = useState<ImageProps>({});
  const [preview, setPreview] = useState<boolean>(false);
  const isMobile = useMediaQuery();

  const onRemoveImage = () => {
    setImage({});
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
    if (previewInputRef.current?.value) {
      previewInputRef.current.value = '';
    }
  };

  const onCloseModal = () => {
    setPreview(false);
    onRemoveImage();
  };

  const onChangeImage = (e: ChangeEvent<HTMLInputElement> | DragEvent) => {
    e.preventDefault();
    setPreview(true);
    const files: FileList = 'dataTransfer' in e ? e.dataTransfer.files : e.target.files;
    const reader = new FileReader();

    reader.onload = function () {
      setImage({
        image: this.result as string,
        imageName: files[0].name,
      });
      reader.onload = null;
    };
    reader.onerror = function (error) {
      console.error('Ошибка при чтении файла: ', error);
    };
    reader.readAsDataURL(files[0]);
  };

  const onCropBoxResize = () => {
    cropperRef.current.cropper.setCropBoxData(CROP_BOX_SIZE);
  };

  const onUploadImage = () => {
    setPreview(false);
  };

  const ModalContent = () => (
    <>
      <Text title='Выберите изображение' TitleTag='h4' align='center' />
      <Cropper
        className={styles.modalPreview}
        ref={cropperRef}
        src={image.image}
        initialAspectRatio={9 / 9}
        aspectRatio={1}
        zoomOnWheel={false}
        cropBoxResizable={true}
        background={false}
        checkOrientation
        viewMode={2}
        guides
        ready={onCropBoxResize}
        dragMode='none'
      />
      <div className={styles.modalButtons}>
        <ImageUploadInput
          className={styles.uploadButton}
          ref={previewInputRef}
          id={id}
          name={name}
          image={image}
          preview={preview}
          label='Выбрать другой файл'
          onChange={onChangeImage}
        />
        <Button onClick={onUploadImage}>Загрузить</Button>
      </div>
    </>
  );

  return (
    <div className={styles.upload}>
      <ImageUploadInput
        className={styles.uploadButton}
        ref={inputRef}
        image={image}
        preview={preview}
        onRemoveImage={onRemoveImage}
        id={id}
        name={name}
        label={label}
        onChange={onChangeImage}
      />

      {setPreview &&
        (isMobile ? (
          <MobileModal open={preview} onClose={onCloseModal}>
            <ModalContent />
          </MobileModal>
        ) : (
          <Modal open={preview} onClose={onCloseModal}>
            <ModalContent />
          </Modal>
        ))}
    </div>
  );
};
