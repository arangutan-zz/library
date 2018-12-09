import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Button from '../components/button';
import Icon from '../components/icon';

storiesOf('Button', module)
  .add('with text', () =>
    <Button
      onClick={action('clicked')}
      customWidth="250px"
      text={`Book a massage`}
    />)
  .add('back button', () =>
    <Button
      onClick={action('clicked')}
      buttonType='back'
    />
  )

storiesOf('Icon', module)
  .add('primary right arrow extra small', () =>
    <Icon
      name="right-arrow"
      type="primary"
    />)
  .add('secondary down arrow small', () =>
    <Icon
      name="down-arrow"
      size="small"
      type="secondary"
    />)
  .add('primary left arrow medium', () =>
    <Icon
      name="left-arrow"
      size="medium"
      type="primary"
    />)
  .add('secondary up arrow large', () =>
    <Icon
      name="up-arrow"
      size="large"
      type="secondary"
    />)
  .add('tertiary left arrow with circle custom size', () =>
    <Icon
      customSize={{
        height: "38px",
        viewBox: "0 0 38 38",
        width:"38px"
      }}
      name="left-arrow-with-circle"
      type="tertiary"
    />)
  .add('primary addons', () =>
    <Icon
      name="addons"
      size="medium"
      type="primary"
    />)
  .add('secondary massage', () =>
    <Icon
      name="massage"
      size="extra-large"
      type="secondary"
    />)
  .add('primary location', () =>
    <Icon
      name="location"
      size="medium"
      type="primary"
    />)
  .add('secondary expert', () =>
    <Icon
      name="expert"
      size="large"
      type="secondary"
    />)
  .add('tertiary expert multiple', () =>
    <Icon
      name="expert-multiple"
      size="extra-small"
      type="tertiary"
    />)
  .add('primary payment', () =>
    <Icon
      name="payment"
      size="small"
      type="primary"
    />)