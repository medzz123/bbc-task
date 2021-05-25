import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story = (storyArguments) => <TextInput {...storyArguments} />;

export const Default = Template.bind({});
