import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Rate from './Rate';

export default {
  title: 'Pages/Rate',
  component: Rate,
} as Meta;

const Template: Story = (storyArguments) => <Rate {...storyArguments} />;

export const Default = Template.bind({});
