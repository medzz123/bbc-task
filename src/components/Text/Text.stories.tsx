import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story = (storyArguments) => <Text {...storyArguments}>Hello</Text>;

export const Default = Template.bind({});
