import React from 'react';
import Content from './Content';
import { mount } from 'enzyme';

test('Content component text equal', () => {
  const wrapper = mount(
    <Content content="check text"/>
  );
  const div = wrapper.find('.content');
  expect(div.text()).toBe('Content component with: check text (Functional component)');
});