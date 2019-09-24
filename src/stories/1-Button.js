import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Background from '../components/Background';

export default {
  title: 'Button',
};

export const text = () => (
    <Background center>
        <Button onClick={action('clicked')}>Hello Button</Button>
    </Background>
)

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
