import React, { MouseEventHandler, useMemo } from 'react';

import {
  StyledButtonDefault,
  StyledButton,
  StyledButtonInnline,
} from './button.style';

type ButtonType = 'danger' | 'primary' | 'secondary' | 'confirm';

interface ButtonProps {
  name: string;
  clicked: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: 'primary' | 'inline';
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  name,
  clicked,
  disabled = false,
  variant = 'primary',
  type = 'primary',
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(disabled) {
      return null
    }
    e.preventDefault();
    clicked(e);
  };

  const Component = useMemo(() => {
    switch (variant) {
      case 'primary':
        return StyledButton;
      case 'inline':
        return StyledButtonInnline;
      default:
        return StyledButtonDefault;
    }
  }, [variant]);

  return (
    <Component btnType={type} disabled={disabled} onClick={clickHandler}>
      {name}
    </Component>
  );
};
