import React, { useEffect, useMemo, useState } from 'react';

import { Button, Input } from '../../shared/components';
import { UseFrom } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/components/input/validators';
import { onAddLink, onDeleteLink } from '../data/addArrDatakFormFieldData';

interface AddArrDatakFormFieldModel {
  onDataUpdate: Function;
  dataName: string;
  dataPluralName: string;
  placeholder: string;
  inputType?: 'input' | 'textarea';
}

export const AddArrDataFormField: React.FC<AddArrDatakFormFieldModel> = ({
  onDataUpdate,
  dataName,
  dataPluralName,
  placeholder,
  inputType = 'input',
}) => {
  const [dataList, setDataList] = useState<string[]>([]);
  const [inputComponent, setInputComponent] = useState<boolean>(true);

  const { formState, onInput, setFormData } = UseFrom(
    {
      [dataName]: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const list = useMemo(() => {
    if (dataList.length === 0) {
      return [];
    }
    return dataList.map((string: string, index: number) => (
      <li key={index}>
        {dataName === 'link' ? (
          <a href={string} target='_blank' rel='noreferrer'>
            {string}
          </a>
        ) : (
          <span>{string}</span>
        )}

        <Button
          name='usuń'
          type='danger'
          variant='inline'
          clicked={() =>
            onDeleteLink(
              index,
              dataList,
              setDataList,
              setFormData,
              dataName,
              dataPluralName,
              onDataUpdate
            )
          }
        />
      </li>
    ));
  }, [
    dataList,
    setDataList,
    setFormData,
    dataName,
    dataPluralName,
    onDataUpdate,
  ]);

  useEffect(() => {
    if (!inputComponent) {
      setInputComponent(true);
    }
  },[inputComponent]);

  return (
    <>
      {dataList.length > 0 && <ol>{list}</ol>}
      {inputComponent && (
        <Input
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
          placeholder={placeholder}
          value={formState.inputs[dataName].value}
          isValid={formState.inputs[dataName].isValid}
          type={inputType}
          variant={inputType}
          name={dataName}
          onInput={onInput}
        />
      )}

      <Button
        name={`dodaj ${placeholder}`}
        disabled={!formState.isFormValid}
        clicked={() =>
          onAddLink(
            dataList,
            formState.inputs[dataName].value as string,
            setDataList,
            setFormData,
            setInputComponent,
            dataName,
            dataPluralName,
            onDataUpdate
          )
        }
      />
    </>
  );
};
