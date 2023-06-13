export const onDeleteLink = (
  index: number,
  dataList: string[],
  setDataList: Function,
  setFormData: Function,
  dataName: string,
  dataPluralName: string,
  onLinksUpdate: Function
) => {
  const updatedDataList = [...dataList];
  updatedDataList.splice(index, 1);
  setDataList(updatedDataList);
  setFormData(
    {
      [dataName]: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  onLinksUpdate(dataPluralName, updatedDataList, updatedDataList.length > 0);
};

export const onAddLink = (
  dataList: string[],
  newData: string,
  setDataList: Function,
  setFormData: Function,
  setInputComponent: Function,
  dataName: string,
  dataPluralName: string,
  onLinksUpdate: Function
) => {
  const updatedDataList = [...dataList];
  updatedDataList.push(newData);
  setDataList(updatedDataList);
  setInputComponent(false)
  setFormData(
    {
      [dataName]: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  onLinksUpdate(dataPluralName, updatedDataList, updatedDataList.length > 0);
};
