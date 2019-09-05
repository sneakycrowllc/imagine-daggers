import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '.';

const InputWithOnChange = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      type="text"
      placeholder="Example Placeholder"
      label="Example Label"
      value={inputValue}
      onChange={event => {
        const { value } = event.currentTarget;
        setInputValue(value);
        action(`input changed to ${value}`)();
      }}
    />
  );
};

storiesOf('Input', module).add('with placeholder and label', () => (
  <InputWithOnChange type="text" placeholder="Example Placeholder" label="Example Label" />
));
