import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button', module)
  .add('with label', () => <Button label="Submit" type="submit" onClick={action('clicked')} />)
  .add('loading', () => <Button label="Submit" type="submit" isLoading onClick={action('clicked')} />);
