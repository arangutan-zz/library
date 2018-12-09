import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { withInfo } from '@storybook/addon-info';
import Button from '../components/button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withInfo) // At your stories directly.
  .addParameters({
    info: {
      inline: true, 
      header: false,
      text: `
          This is the Button component.

          ~~~js
          <Button>Click Here</Button>
          ~~~
        `,
    },
  })
  .add('with text', () => 
    <Button
      onClick={action('clicked')}
      customWidth="250px"
      text={`Book a massage`}
    />)
