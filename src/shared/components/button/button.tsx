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
  return <button onClick={clicked}>{name}</button>;
};