import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
addDecorator(withInfo);

