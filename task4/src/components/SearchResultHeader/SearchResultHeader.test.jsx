import React from 'react'
import SearchResultHeader from './SearchResultHeader'
import SearchResultHeaderInfo from './SearchResultHeaderInfo'
import SearchResultHeaderSort from './SearchResultHeaderSort'
import { shallow, sort } from 'enzyme'
import renderer from 'react-test-renderer'

describe('SearchResultHeader component test suite', ()=>{
  
  test('SearchResultHeader renders correctly with no id defined', () => {
    const wrapper = shallow(
      <SearchResultHeader />
    )
    expect(wrapper.find('SearchResultHeaderInfo')).toHaveLength(1)
    expect(wrapper.find('SearchResultHeaderSort')).toHaveLength(1)
  })

  test('SearchResultHeader renders correctly with id defined', () => {
    const wrapper = shallow(
      <SearchResultHeader id="1"/>
    )
    expect(wrapper.find('SearchResultHeaderInfo')).toHaveLength(1)
    expect(wrapper.find('SearchResultHeaderSort')).toHaveLength(0)
  })

})

describe('SearchResultHeaderInfo component test suite', ()=>{
  test('SearchResultHeaderInfo renders correctly with no id defined', () => {
    const wrapper = shallow(
      <SearchResultHeaderInfo />
    )
    const div = wrapper.find('.search-result-header-info')
    expect(div.text()).toMatch(/^\d+ movies? found$/)
  })

  test('SearchResultHeaderInfo renders correctly with id defined', () => {
    const wrapper = shallow(
      <SearchResultHeaderInfo id="1"/>
    )
    const div = wrapper.find('.search-result-header-info')
    expect(div.text()).toMatch(/^Films by/)
  })
})
  

describe('SearchResultHeaderSort component test suite', ()=>{
  test('Release date link click test', () => {
    const wrapper = shallow(
      <SearchResultHeaderSort />
    )
    wrapper.find('.sort-by-release-date').simulate('click')
    expect(wrapper.state().sortBy).toBe('releaseDate')
  })

  test('Rating link click test', () => {
    const wrapper = shallow(
      <SearchResultHeaderSort />
    )
    wrapper.find('.sort-by-rating').simulate('click')
    expect(wrapper.state().sortBy).toBe('rating')
  })
})
  