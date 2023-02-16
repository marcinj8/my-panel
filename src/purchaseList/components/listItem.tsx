import React from 'react';

import { StyledListItem } from '../style/listItem.style';

interface ListItemData {
  id: string;
  name: string;
  added: Date;
  purchased: boolean;
  quantity: number;
  unit: string;
  description: string;
}

export const ListItem: React.FC<ListItemData> = ({
  id,
  name,
  added,
  purchased,
  quantity,
  unit,
  description,
}) => {
  return (
    <StyledListItem purchased={purchased} id={id}>
      <h3>{name}</h3>
      <div>
        Ilość: {quantity} {unit}
      </div>
      {description && <div>Uwagi: {description}</div>}
    </StyledListItem>
  );
};
