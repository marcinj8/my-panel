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
  console.log(type);
  return <button onClick={clicked}>{name}</button>;
};
