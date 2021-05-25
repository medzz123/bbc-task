import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import List from './List';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: Story = (storyArguments) => <List {...storyArguments} />;

export const Default = Template.bind({});
