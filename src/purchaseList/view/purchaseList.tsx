import React, { useState } from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { List } from '../components/';

export const PurchaseList = () => {
  const [isPrivateList, setIsPrivateList] = useState<boolean>(false);

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
