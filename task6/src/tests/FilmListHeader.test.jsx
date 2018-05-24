import React from 'react'
import FilmListHeader from '../components/FilmList/FilmListHeader/FilmListHeader'
import FilmListHeaderInfo from '../components/FilmList/FilmListHeader/FilmListHeaderInfo'
import FilmListHeaderSort from '../components/FilmList/FilmListHeader/FilmListHeaderSort'
import { shallow, mount, sort } from 'enzyme'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { SortMode } from '../actions'
const mockStore = configureStore()

describe('FilmListHeader component test suite', ()=>{
  
  test('FilmListHeader renders correctly with no id defined', () => {
    const wrapper = shallow(
      <FilmListHeader />
    )
    expect(wrapper.find(FilmListHeaderInfo)).toHaveLength(1)
    expect(wrapper.find(FilmListHeaderSort)).toHaveLength(1)
  })

  test('FilmListHeader renders correctly with id defined', () => {
    const wrapper = shallow(
      <FilmListHeader id="1"/>
    )
    expect(wrapper.find(FilmListHeaderInfo)).toHaveLength(1)
    expect(wrapper.find(FilmListHeaderSort)).toHaveLength(0)
  })

})

describe('FilmListHeaderInfo component test suite', ()=>{
  let store
  beforeEach(() => {
    store = mockStore({results:{}})
  })

  test('FilmListHeaderInfo renders correctly with no id defined', () => {
    const wrapper = shallow(
      <FilmListHeaderInfo store={store}/>
    ).dive()
    const div = wrapper.find('.film-list-header-info')
    expect(div.text()).toMatch(/^\d+ movies? found$/)
  })

  test('FilmListHeaderInfo renders correctly with id defined', () => {
    const wrapper = shallow(
      <FilmListHeaderInfo id="1" store={store}/>
    ).dive()
    const div = wrapper.find('.film-list-header-info')
    expect(div.text()).toMatch(/^Films by/)
  })

  test('FilmListHeaderInfo have correct movies count props', () =>{
    const wrapper = shallow(
      <FilmListHeaderInfo store={mockStore({results:{}})}/>
    )
    expect(wrapper.props().movies).toHaveLength(0)
  })
})
  

describe('FilmListHeaderSort component test suite', ()=>{
  let store
  beforeEach(() => {
    store = mockStore({results:{search:'', searchBy:'',sortMode:''}})
  })

  test('Release date link click test', () => {
    const wrapper = shallow(
      <FilmListHeaderSort store={store}/>
    ).dive()
    wrapper.find('.sort-by-release-date').simulate('click')
    expect(wrapper.state().sortBy).toBe(SortMode.RELEASE_DATE)
  })

  test('Rating link click test', () => {
    const wrapper = shallow(
      <FilmListHeaderSort store={store}/>
    ).dive()
    wrapper.find('.sort-by-rating').simulate('click')
    expect(wrapper.state().sortBy).toBe(SortMode.VOTE_AVERAGE)
  })
})
  