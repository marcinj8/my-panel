import {
  PurchaseListType,
  updatePurchaseListItem,
} from '../../store/userData/reducer';

export interface PurchaseListItemModel {
  id: string;
  name: string;
  added: Date;
  purchased: boolean;
  listName: string;
  quantity: number;
  unit: string;
  description: string;
}

export const tooglePurchaseProperty = (
  dispatch: any,
  item: PurchaseListItemModel,
  listType: PurchaseListType
) => {
  const itemUpdated = { ...item, purchased: !item.purchased };
  dispatch(updatePurchaseListItem({ itemUpdated, listType }));
};

export const listItemClickHandler = (
  dispatch: any,
  item: PurchaseListItemModel,
  isEditMode: boolean,
  listType: PurchaseListType
) => {
  if (isEditMode) {
    console.log(dispatch, 'e,item', item);
  } else {
    tooglePurchaseProperty(dispatch, item, listType);
  }
};
