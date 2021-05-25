import Spinner from '@components/Spinner';
import React, { FunctionComponent } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer, SpinnerContainer, TextContainer } from './Button.styles';

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { type = 'button', children, busy = false, ...rest } = props;

  return (
    // @ts-ignore
    <ButtonContainer type={type} disabled={busy} data-testid="button" {...rest}>
      <TextContainer hide={busy ? 'hidden' : 'visible'}>{children}</TextContainer>
      {busy && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </ButtonContainer>
  );
};

export default Button;
