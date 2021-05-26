import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '@material-ui/core';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'outlined',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'text',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};
