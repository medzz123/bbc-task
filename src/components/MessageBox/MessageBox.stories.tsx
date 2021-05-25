import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import MessageBox from './MessageBox';

export default {
  title: 'Components/MessageBox',
  component: MessageBox,
} as Meta;

const Template: Story = (storyArguments) => <MessageBox {...storyArguments} />;

export const Default = Template.bind({});
