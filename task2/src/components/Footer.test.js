import React from 'react';
import Footer from './Footer';
import { mount } from 'enzyme';

test('Footer component text equal', () => {
  const wrapper = mount(
    <Footer />
  );
  const div = wrapper.find('.footer');
  expect(div.text()).toBe('Footer component (React.PureComponent)');
});