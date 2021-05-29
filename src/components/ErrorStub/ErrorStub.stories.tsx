import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import ErrorStub from './ErrorStub';

export default {
  title: 'Components/ErrorStub',
  component: ErrorStub,
} as Meta;

const Template: Story = (storyArguments) => <ErrorStub {...storyArguments} />;

export const Default = Template.bind({});
