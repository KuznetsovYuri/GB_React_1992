import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonForSend = Template.bind({});
ButtonForSend.args = {
  primary: false,
  label: 'Button',
};

