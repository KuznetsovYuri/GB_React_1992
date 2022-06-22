import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  } as ComponentMeta<typeof Button>
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const ButtonForSend = Template.bind({}) as ComponentStory<typeof Button>;


