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
  variant?: 'primary' | 'inline';
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  name,
  clicked,
  variant = 'primary',
  type = 'primary',
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <Component btnType={type} onClick={clickHandler}>
      {name}
    </Component>
  );
};
