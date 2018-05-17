import React from 'react'
import Header from './Header'
import FilmInfo from './FilmInfo'
import Search from './Search'
import { shallow, mount } from 'enzyme'
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()
import { Provider } from 'react-redux'
import { searchMoviesFetch, SearchMode, SortMode } from '../../actions'
jest.mock("../../actions")

describe('Header component test suite', ()=>{
  let store
  beforeEach(() => {
    store = mockStore({result:{movie:{id: 1, name: 'Kill bill', release_date: '01-02-2004', genres: ['Action', 'Adventure'], director: 'Quentin Tarantino', poster_path: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10}}})
  })

  test('Header snapshot renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MockRouter>
          <Header id='123' />
        </MockRouter>
      </Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot();
  })

  test('Header title should have text', () => {
    const wrapper = shallow(
      <Header />
    )
    const title = wrapper.find('.title')
    expect(title.text()).toContain('MovieDB')
  })

  test('Header without id state should have search component', () => {
    const wrapper = shallow(
      <Header />
    )
    const div = wrapper.find('.header')
    expect(div.text()).toBe('<Link /><Link /><Connect(Search) />')
  })

  test('Header with id state should have filminfo', () => {
    const wrapper = shallow(
      <Header id='123'/>
    )
    const div = wrapper.find('.header')
    expect(div.text()).toBe('<Link /><Link /><Connect(FilmInfo) />')
  })

})

describe('FilmInfo component test suite', ()=>{
  let store
  beforeEach(() => {
    store = mockStore({result:{movie:{id: 1, title: 'Kill bill', release_date: '01-02-2004', genres: ['Action', 'Adventure'], director: 'Quentin Tarantino', poster_path: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', vote_average: 10, runtime: 90, overview: ''}}})
  })

  test('FilmInfo renders correctly', () => {
    const tree = renderer.create(
      <FilmInfo store={store}/>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  test('FilmInfo inner compopnents empty render test', () => {
    const wrapper = shallow(
      <FilmInfo store={mockStore({result:{}})}/>
    ).dive()
    expect(wrapper.find('.film-info-name').text()).toBe('')
    expect(wrapper.find('.film-info-length')).toHaveLength(0)
  })
})

describe('Search component test suite', ()=>{
  let store
  let wrapper
  beforeEach(() => {
    store = mockStore({results:{sortMode:''}})
    wrapper = shallow(
      <Search store={store}/>
    ).dive()
  })

  test('Search inner text should equal', () => {
    const search = wrapper.find('.search')
    expect(search.text()).toContain('FIND YOUR MOVIESEARCH BYTITLEGENRESSEARCH')
  })

  test('Search by title click', () => {
    const btnTitle = wrapper.find('.search-by-title')
    btnTitle.simulate('click')
    expect(wrapper.state().searchPlaceholder).toEqual('Stranger things')
  })

  test('Search by genres click', () => {
    const btnDirector = wrapper.find('.search-by-director')
    btnDirector.simulate('click')
    expect(wrapper.state().searchPlaceholder).toEqual('Action')
  })

  test('Submit click test', () => {
    const history = createMemoryHistory('/')
    const wrapper = mount(
      <MockRouter>
        <Search store={store} history={history}/>
      </MockRouter>
    )
    const component = wrapper.find(Search).children()
    searchMoviesFetch.mockReturnValue({type:'SEARCH_MOVIES'})
    component.find('.submit').simulate('click')
    expect(history.location.pathname).toEqual('/results')
  })

  test('Search input handlers test', () => {
    const history = createMemoryHistory('/')
    wrapper = shallow(
      <Search store={store} history={history}/>
    ).dive()

    wrapper.find('#inputSearch').simulate('change', {target: {name: 'username', value: 'test query'}})
    expect(wrapper.state().searchQuery).toEqual('test query')
    wrapper.find('#inputSearch').simulate('keypress', { key: 'A'})
    expect(history.location.pathname).toEqual('/')
    wrapper.find('#inputSearch').simulate('keypress', { key: 'Enter'})
    expect(history.location.pathname).toEqual('/results')
  })

  test('Search initial placeholder test', () => {
    wrapper = shallow(
      <Search store={store} searchBy={SearchMode.GENRES}/>
    ).dive()

    expect(wrapper.state().searchPlaceholder).toEqual('Action')
  })

})