import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import { Button, Welcome } from '@storybook/react/demo';
import Header from '../src/containers/Header.jsx'
import Footer from '../src/components/Footer/Footer'
import { store } from '../src/store'

import '../src/index.css'
import '../src/App.css'
import '../src/vendor/bootstrap.min.css'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('Footer', module)
  .add('with dev env', () => <Footer node_env = 'development'/>)
  .add('with prod env', () => <Footer node_env = 'production'/>)

  storiesOf('Header', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('empty parameters', () => <Header/>)
  .add('with search query', () => <Header query='Terminator'/>)
  .add('with film id ', () => <Header id='123'/>)