import { Box } from '@components/Box';
import Text from '@components/Text/Text';
import React, { FunctionComponent } from 'react';

import { TextInputProps } from './TextInput.models';
import { StyledTextInput } from './TextInput.styles';

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  const { error, errorMessage, ...rest } = props;
  return (
    <>
      {/* @ts-ignore */}
      <StyledTextInput data-testid="textInput" color={error ? 'error' : 'normal'} {...rest} />
      {error && (
        <Box css={{ mt: 8 }}>
          <Text color="error" level="info" mb="none">
            {errorMessage}
          </Text>
        </Box>
      )}
    </>
  );
};

export default TextInput;
