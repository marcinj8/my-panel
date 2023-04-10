import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { Button } from '../button';

import { StyledBackdrop, StyledModal } from './modal.style';

import { onModalShow, onModalHide } from './modalAnimations';

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
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      if (show) {
        onModalShow(modalRef.current);
      } else {
        onModalHide(modalRef.current);
      }
    }
  }, [show]);

  return (
    <>
      <Backdrop show={show} clicked={onCancel} />
      <StyledModal ref={modalRef}>
        <div>{show ? children : null}</div>
        {action && (
          <Button name={action.actionName} clicked={action.actionFn} />
        )}
        <Button name='zamknij' clicked={onCancel} type='danger' />
      </StyledModal>
    </>
  );
};
