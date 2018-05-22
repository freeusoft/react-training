import React from 'react'
import SearchResultHeader from './SearchResultHeader'
import SearchResultHeaderInfo from './SearchResultHeaderInfo'
import SearchResultHeaderSort from './SearchResultHeaderSort'
import { shallow, mount, sort } from 'enzyme'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { SortMode } from '../../actions'
const mockStore = configureStore()

describe('SearchResultHeader component test suite', ()=>{
  
  test('SearchResultHeader renders correctly with no id defined', () => {
    const wrapper = shallow(
      <SearchResultHeader />
    )
    expect(wrapper.find(SearchResultHeaderInfo)).toHaveLength(1)
    expect(wrapper.find(SearchResultHeaderSort)).toHaveLength(1)
  })

  test('SearchResultHeader renders correctly with id defined', () => {
    const wrapper = shallow(
      <SearchResultHeader id="1"/>
    )
    expect(wrapper.find(SearchResultHeaderInfo)).toHaveLength(1)
    expect(wrapper.find(SearchResultHeaderSort)).toHaveLength(0)
  })

})

describe('SearchResultHeaderInfo component test suite', ()=>{
  let store
  beforeEach(() => {
    store = mockStore({results:{}})
  })

  test('SearchResultHeaderInfo renders correctly with no id defined', () => {
    const wrapper = shallow(
      <SearchResultHeaderInfo store={store}/>
    ).dive()
    const div = wrapper.find('.search-result-header-info')
    expect(div.text()).toMatch(/^\d+ movies? found$/)
  })

  test('SearchResultHeaderInfo renders correctly with id defined', () => {
    const wrapper = shallow(
      <SearchResultHeaderInfo id="1" store={store}/>
    ).dive()
    const div = wrapper.find('.search-result-header-info')
    expect(div.text()).toMatch(/^Films by/)
  })

  test('SearchResultHeaderInfo have correct movies count props', () =>{
    const wrapper = shallow(
      <SearchResultHeaderInfo store={mockStore({results:{}})}/>
    )
    expect(wrapper.props().movies).toHaveLength(0)
  })
})
  

describe('SearchResultHeaderSort component test suite', ()=>{
  let store
  beforeEach(() => {
    store = mockStore({results:{search:'', searchBy:'',sortMode:''}})
  })

  test('Release date link click test', () => {
    const wrapper = shallow(
      <SearchResultHeaderSort store={store}/>
    ).dive()
    wrapper.find('.sort-by-release-date').simulate('click')
    expect(wrapper.state().sortBy).toBe(SortMode.RELEASE_DATE)
  })

  test('Rating link click test', () => {
    const wrapper = shallow(
      <SearchResultHeaderSort store={store}/>
    ).dive()
    wrapper.find('.sort-by-rating').simulate('click')
    expect(wrapper.state().sortBy).toBe(SortMode.VOTE_AVERAGE)
  })
})
  