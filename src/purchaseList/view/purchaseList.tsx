import React, { useState } from 'react';

import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { purchaseList } from '../data/purchaseLIstData';

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
        {isPrivateList ? <div>prywatna</div> : <div>domowa</div>}
        <ul>
          {purchaseList.map((item) => (
            <li
              style={{ margin: '10px', border: '1px solid' }}
              key={item.name + item.added}
            >
              <h3>{item.name}</h3>
              <div>
                Ilość: {item.quantity} {item.unit}{' '}
              </div>
              {item.description && <div>Uwagi: {item.description}</div>}
            </li>
          ))}
        </ul>
      </>
    </HocSection>
  );
};
