import React from 'react';
import LeftMenu from './LeftMenu';
import { mount } from 'enzyme';

test('Left menu component text equal', () => {
  const wrapper = mount(
    <LeftMenu />
  );
  const span = wrapper.find('span.left-menu');
  expect(span.text()).toBe('Left menu component (React.createElement)');
});