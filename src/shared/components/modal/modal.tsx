import React, { MouseEventHandler, useEffect } from 'react';
import { Button } from '../button';

import { StyledBackdrop, StyledModal } from './modal.style';

interface ModalData {
  children: any;
  show: boolean;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  action?: {
    actionName: string;
    actionFn: MouseEventHandler<HTMLButtonElement>;
  };
}

export const Backdrop: React.FC<{
  show: boolean;
  clicked: MouseEventHandler<any>;
  mobileOnly?: boolean;
}> = ({ show, clicked, mobileOnly = false }) => {
  if (!show) {
    return null;
  }
  return <StyledBackdrop onClick={clicked} mobileOnly={mobileOnly} />;
};

export const Modal: React.FC<ModalData> = ({
  children,
  show,
  onCancel,
  action,
}) => {
  useEffect(() => {
    console.log(show);
  });

  if (!show) {
    return null;
  }

  return (
    <>
      <Backdrop show={show} clicked={onCancel} />
      <StyledModal>
        <div>{children}</div>
        {action && (
          <Button name={action.actionName} clicked={action.actionFn} />
        )}
        <Button name='zamknij' clicked={onCancel} type='danger' />
      </StyledModal>
    </>
  );
};
