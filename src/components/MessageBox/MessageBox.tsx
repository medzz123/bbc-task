import Text from '@components/Text';
import React, { FunctionComponent } from 'react';

import { MessageBoxProps } from './MessageBox.models';
import { MessageBoxContainer } from './MessageBox.styles';

const MessageBox: FunctionComponent<MessageBoxProps> = (props) => {
  const { type = 'info', children } = props;

  return (
    <MessageBoxContainer type={type} data-testid="messageBox">
      <Text mb="none" level="info">
        {children}
      </Text>
    </MessageBoxContainer>
  );
};

export default MessageBox;
