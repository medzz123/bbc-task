import Icon from '@components/Icon';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { ErrorStubContainer } from './ErrorStub.styles';

const ErrorStub: FunctionComponent = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem('x-fail');

    setError(item === 'true' ? true : false);
  }, []);

  return (
    <ErrorStubContainer
      type="button"
      isError={error ? 'error' : 'success'}
      data-testid="errorStub"
      onClick={() => {
        const item = localStorage.getItem('x-fail');

        if (item === 'true') {
          setError(false);
          localStorage.setItem('x-fail', 'false');
        } else {
          setError(true);
          localStorage.setItem('x-fail', 'true');
        }
      }}
    >
      <Icon name={error ? 'danger' : 'smile'} />
    </ErrorStubContainer>
  );
};

export default ErrorStub;
