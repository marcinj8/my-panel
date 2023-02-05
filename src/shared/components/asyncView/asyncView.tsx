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
}

const AsyncView: React.FC<AsyncViewData> = ({ status, message }) => {
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
          </>
        )}
      </StyledAsyncView>
    </>
  );
};

export default AsyncView;
