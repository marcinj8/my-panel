import React, { useEffect, useState } from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { fetchPurchaseList } from '../../store/userData/actions';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { List } from '../components/';
import { Button, Modal } from '../../shared/components';
import { AsyncView } from '../../shared/components/asyncView';
import { EditItemForm } from '../components/editItemForm';

export const PurchaseList = () => {
  const [isPrivateList, setIsPrivateList] = useState<boolean>(false);
  const [isAddingNewItem, setIsAddingNewItem] = useState<boolean>(false);

  const { homePurchaseLists, status, message } = useAppSelector(
    (state) => state.userData
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!homePurchaseLists) {
      console.log(homePurchaseLists);
      dispatch(fetchPurchaseList());
    }
  }, [homePurchaseLists, dispatch]);

  return (
    <HocSection>
      <>
        <Modal
          show={isAddingNewItem}
          onCancel={() => setIsAddingNewItem(false)}
        >
          <EditItemForm item={null} />
        </Modal>
        <AsyncView status={status} message={message} />
        <h3>{isPrivateList ? 'prywatna' : 'domowa'} lista zakupów</h3>
        <div>zmień na liste </div>
        <Button
          variant='primary'
          clicked={() => setIsPrivateList(!isPrivateList)}
          name={isPrivateList ? 'domową' : 'prywatną'}
        />
        <List listType={isPrivateList ? 'private' : 'home'} />
        <Button name='+' clicked={() => setIsAddingNewItem(true)} />
      </>
    </HocSection>
  );
};
