import React, { MouseEventHandler } from 'react';

interface ItemsListModel {
  list: string[];
  title?: string;
  clicked?: MouseEventHandler<HTMLLIElement>;
}

export const ItemsList: React.FC<ItemsListModel> = ({
  list,
  title,
  clicked,
}) => {
  const formattedList = list.map((item: string) => (
    <li onClick={clicked} key={item}>
      {item}
    </li>
  ));

  return (
    <>
      {title && <h3>{title}</h3>}
      <ul>{formattedList}</ul>
    </>
  );
};
