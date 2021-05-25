import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story = (storyArguments) => <Icon name="sun" {...storyArguments} />;

export const Default = Template.bind({});
