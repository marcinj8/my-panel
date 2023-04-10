import { MouseEventHandler } from 'react';
import { Button } from '../button';
import {
  StyledAsyncView,
  StyledSpinner,
  StyledErrorMessage,
  StyledBackdorp,
  StyledAsyncTitle,
} from './asyncView.style';

interface AsyncViewData {
  status: string;
  message: string | null;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
}

const AsyncView: React.FC<AsyncViewData> = ({ status, message, onCancel }) => {
  if (status !== 'loading' && status !== 'error') {
    return null;
  }

  return (
    <>
      <StyledBackdorp />
      <StyledAsyncView>
        {status === 'loading' && <StyledSpinner />}
        {status === 'error' && (
          <>
            <StyledAsyncTitle>Error</StyledAsyncTitle>
            {message !== null ? (
              <StyledErrorMessage>{message}</StyledErrorMessage>
            ) : (
              <StyledErrorMessage>
                Error occured, please try again later.
              </StyledErrorMessage>
            )}
            {onCancel && <Button name='zamknij' clicked={onCancel} />}
          </>
        )}
      </StyledAsyncView>
    </>
  );
};

export default AsyncView;
