import { PurchaseListItemModel } from './purchaseListData';

export const createInputs = (
  inputsArr: string[],
  item: PurchaseListItemModel | null
) => {
  const createdInputs: {
    [key: string]: { value: string; isValid: boolean };
  } = {};

  inputsArr.forEach((itemName) => {
    createdInputs[itemName] = {
      value: item ? item[itemName] : '',
      isValid: itemName === 'description' ? true : !!item,
    };
  });

  return createdInputs;
};
