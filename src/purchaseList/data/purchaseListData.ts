import {
  PurchaseListType,
  updatePurchaseListItem,
} from '../../store/userData/reducer';

export interface PurchaseListItemModel {
  [key: string]: any;
  id: string;
  name: string;
  quantity: number;
  unit: string;
  description: string;
  listName: string;
  added: Date;
  purchased: boolean;
  userId?: string;
  homeId?: string;
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
  listType: PurchaseListType,
  itemEdited: PurchaseListItemModel | null,
  setItemEdited: Function
) => {
  if (isEditMode) {
    setItemEdited(item);
  } else {
    tooglePurchaseProperty(dispatch, item, listType);
  }
};
