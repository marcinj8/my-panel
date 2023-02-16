import React, { useMemo } from 'react';

import { purchaseList } from '../data/purchaseLIstData';
import { ListItem } from './';

interface ListData {
  listType: 'private' | 'home';
  listName?: string;
}

export const List: React.FC<ListData> = ({ listType }) => {
  const list = useMemo(() => {
    return purchaseList.map((item) => {
      if (listType === item.type) {
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
          />
        );
      } else {
        return null;
      }
    });
  }, [listType]);

  console.log(list);
  return <ul>{list}</ul>;
};
