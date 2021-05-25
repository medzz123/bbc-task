import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Home from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

const Template: Story = (storyArguments) => <Home {...storyArguments} />;

export const Default = Template.bind({});
