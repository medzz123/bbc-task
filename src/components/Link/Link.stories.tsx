import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story = (storyArguments) => (
  <Link href="#" {...storyArguments}>
    Hello
  </Link>
);

export const Default = Template.bind({});
