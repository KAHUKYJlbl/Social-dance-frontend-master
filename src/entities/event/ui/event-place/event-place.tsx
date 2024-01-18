import { type ChangeEvent, useState } from 'react';
import { AddressSuggestions, type DaDataAddress, type DaDataSuggestion } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import styles from './event-place.module.scss';

const PLACE_NAME_MAX_LENGTH = 30;

export const EventPlace = (): JSX.Element => {
  const [cityValue, setCityValue] = useState<DaDataSuggestion<DaDataAddress>>();
  const [adressValue, setAdressCityValue] = useState<DaDataSuggestion<DaDataAddress>>();
  const [placeNameValue, setPlaceNameValue] = useState('');

  const handlePlaceNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceNameValue(e.target.value);
  };

  return (
    <div className={styles.box}>
      <Text title='Место проведения' TitleTag='h4' />

      <AddressSuggestions
        token='0cf21d76617cf02f65ab5da1bb2c7e40fb90c5aa'
        value={cityValue}
        onChange={setCityValue}
        delay={300}
        count={6}
        minChars={2}
        filterFromBound='city'
        filterToBound='city'
        filterLanguage='ru'
        inputProps={{
          className: styles.input,
          placeholder: 'Город',
        }}
        containerClassName={styles.inputWrapper}
        suggestionClassName={styles.dropdown}
        hintClassName={styles.dropdownHint}
        highlightClassName={styles.markHighlight}
      />

      <AddressSuggestions
        token='0cf21d76617cf02f65ab5da1bb2c7e40fb90c5aa'
        value={adressValue}
        onChange={setAdressCityValue}
        delay={300}
        count={6}
        minChars={2}
        filterRestrictValue
        filterLocations={[{ city_fias_id: cityValue?.data.city_fias_id }]}
        filterFromBound='street'
        filterToBound='house'
        filterLanguage='ru'
        inputProps={{
          className: styles.input,
          placeholder: 'Адрес',
        }}
        containerClassName={styles.inputWrapper}
        suggestionClassName={styles.dropdown}
        hintClassName={styles.dropdownHint}
        highlightClassName={styles.markHighlight}
      />

      <Input
        placeholder='Название площадки'
        maxLength={PLACE_NAME_MAX_LENGTH}
        value={placeNameValue}
        onChange={handlePlaceNameChange}
      />
    </div>
  );
};
