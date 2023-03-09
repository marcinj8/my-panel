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

  const { homePurchaseLists, privatePurchaseLists, status, message } =
    useAppSelector((state) => state.userData);
  const usersIds = useAppSelector((state) => {
    if (state.loginData?.userData) {
      return {
        id: state.loginData?.userData.id,
        homeId: state.loginData?.userData.homeId,
        token: state.loginData?.userData.token,
      };
    }
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!homePurchaseLists && usersIds) {
      dispatch(fetchPurchaseList('home', usersIds.homeId, usersIds.token));
    }
  }, [homePurchaseLists, usersIds, dispatch]);

  useEffect(() => {
    if (!privatePurchaseLists && usersIds) {
      dispatch(fetchPurchaseList('private', usersIds.id, usersIds.token));
    }
  }, [privatePurchaseLists, usersIds, dispatch]);

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
          bTnCenter={false}
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
