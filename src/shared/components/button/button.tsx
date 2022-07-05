import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  name: string;
  clicked: MouseEventHandler<HTMLButtonElement>;
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({
  name,
  clicked,
  type = 'primary',
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    clicked(e)
  }
  
  return <button onClick={clickHandler}>{name}</button>;
};
