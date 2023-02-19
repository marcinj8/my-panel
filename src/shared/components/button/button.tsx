import React, { MouseEventHandler, useMemo } from 'react';

import {
  StyledButtonDefault,
  StyledButtonPrimary,
  StyledButtonInline,
} from './button.style';

type ButtonType = 'danger' | 'primary' | 'secondary' | 'confirm';

interface ButtonProps {
  name: string;
  clicked: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: 'primary' | 'inline';
  type?: ButtonType;
  bTnCenter?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  name,
  clicked,
  disabled = false,
  variant = 'primary',
  type = 'primary',
  bTnCenter = true,
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return null;
    }
    e.preventDefault();
    clicked(e);
  };

  const Component = useMemo(() => {
    switch (variant) {
      case 'primary':
        return StyledButtonPrimary;
      case 'inline':
        return StyledButtonInline;
      default:
        return StyledButtonDefault;
    }
  }, [variant]);

  return (
    <Component
      bTnCenter={bTnCenter}
      btnType={type}
      disabled={disabled}
      onClick={clickHandler}
    >
      {name}
    </Component>
  );
};
