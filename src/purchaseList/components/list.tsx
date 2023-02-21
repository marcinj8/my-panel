import React, { ReactEventHandler, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Button, Modal } from '../../shared/components';
import { ListItem } from './';

import {
  listItemClickHandler,
  PurchaseListItemModel,
} from '../data/purchaseListData';
import { EditItemForm } from './editItemForm';

interface ListData {
  listType: 'private' | 'home';
  listName?: string;
}

export const List: React.FC<ListData> = ({ listType }) => {
  const lists = useAppSelector(
    (state) => state.userData[`${listType}PurchaseLists`]
  );
  const dispatch = useAppDispatch();

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [itemEdited, setItemEdited] = useState<PurchaseListItemModel | null>(
    null
  );

  const list = useMemo(() => {
    if (lists?.items) {
      return lists.items.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            added={item.added}
            purchased={item.purchased}
            quantity={item.quantity}
            unit={item.unit}
            description={item.description}
            clicked={(e: ReactEventHandler) =>
              listItemClickHandler(
                dispatch,
                item,
                isEditMode,
                lists.type,
                itemEdited,
                setItemEdited
              )
            }
          />
        );
      });
    }
  }, [lists, isEditMode, dispatch, itemEdited, setItemEdited]);

  return (
    <>
      <Modal show={itemEdited !== null} onCancel={() => setItemEdited(null)}>
        <EditItemForm item={itemEdited} />
      </Modal>
      <Button
        type={isEditMode ? 'danger' : 'primary'}
        name={isEditMode ? 'zakończ' : 'edytuj'}
        clicked={() => setIsEditMode(!isEditMode)}
      />
      <ul>{list}</ul>
    </>
  );
};
