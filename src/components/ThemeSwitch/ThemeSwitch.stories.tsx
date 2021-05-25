import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import ThemeSwitch from './ThemeSwitch';

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
} as Meta;

const Template: Story = (storyArguments) => <ThemeSwitch {...storyArguments} />;

export const Default = Template.bind({});
