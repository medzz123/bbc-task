import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import About from './About';

export default {
  title: 'Pages/About',
  component: About,
} as Meta;

const Template: Story = (storyArguments) => <About {...storyArguments} />;

export const Default = Template.bind({});
