import React, { useEffect, useState } from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { fetchPurchaseList } from '../../store/userData/actions';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { List } from '../components/';
import { Button } from '../../shared/components';
import { AsyncView } from '../../shared/components/asyncView';

export const PurchaseList = () => {
  const { homePurchaseLists, status, message } = useAppSelector(
    (state) => state.userData
  );
  const dispatch = useAppDispatch();

  const [isPrivateList, setIsPrivateList] = useState<boolean>(false);

  useEffect(() => {
    if (!homePurchaseLists) {
      console.log(homePurchaseLists);
      dispatch(fetchPurchaseList());
    }
  }, [homePurchaseLists, dispatch]);

  return (
    <HocSection>
      <>
      <AsyncView status={status} message={message} />
        <h3>{isPrivateList ? 'prywatna' : 'domowa'} lista zakupów</h3>
        <div>zmień na liste </div>
        <Button
          variant='primary'
          clicked={() => setIsPrivateList(!isPrivateList)}
          name={isPrivateList ? 'domową' : 'prywatną'}
        />
        <List listType={isPrivateList ? 'private' : 'home'} />
        <Button name='+' clicked={() => console.log('dodaj okragły button')} />
      </>
    </HocSection>
  );
};
