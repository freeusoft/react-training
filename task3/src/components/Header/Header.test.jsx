import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';

test('Header component text equal', () => {
  const wrapper = mount(
    <Header />
  );
  const div = wrapper.find('.header');
  expect(div.text()).toContain('MovieDB');
});