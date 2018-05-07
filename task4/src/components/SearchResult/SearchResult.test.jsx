import React from 'react';
import SearchResult from './SearchResult';
import { mount } from 'enzyme';

test('Content component text equal', () => {
  const wrapper = mount(
    <SearchResult content="check text"/>
  );
  const div = wrapper.find('.content');
  expect(div.text()).toBe('Content component with: check text (Functional component)');
});