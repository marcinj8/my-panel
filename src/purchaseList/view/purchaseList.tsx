import React, { useEffect, useState } from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { useAppSelector } from '../../store/hooks';
import { List } from '../components/';
import { getHomePurchseLists } from '../data/purchaseLIstData';

export const PurchaseList = () => {
  const [isPrivateList, setIsPrivateList] = useState<boolean>(false);
  const { homePurchaseLists } = useAppSelector((state) => state.userData);
  console.log(homePurchaseLists);

  useEffect(() => {
    if (!homePurchaseLists) {
      getHomePurchseLists();
    }
  }, [homePurchaseLists]);

  return (
    <HocSection>
      <>
        <h3>{isPrivateList ? 'prywatna' : 'domowa'} lista zakupów</h3>
        <div>zmień na liste </div>
        <button onClick={() => setIsPrivateList(!isPrivateList)}>
          {isPrivateList ? 'domową' : 'prywatną'}
        </button>
        <List listType={isPrivateList ? 'private' : 'home'} />
      </>
    </HocSection>
  );
};
