import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Menu from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story = (storyArguments) => (
  <Menu
    label="story"
    items={[
      {
        label: 'Item one',
        onClick: () => {
          // do nothing
        },
      },
    ]}
    {...storyArguments}
  />
);

export const Default = Template.bind({});
