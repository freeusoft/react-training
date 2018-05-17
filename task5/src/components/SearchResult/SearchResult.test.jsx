import React from 'react'
import SearchResult from './SearchResult'
import SearchResultItem from './SearchResultItem'
import SearchResultItems from './SearchResultItems'
import SearchResultNotFound from './SearchResultNotFound'
import { shallow, mount, render} from 'enzyme'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()
import { getMovieFetch } from '../../actions'
jest.mock("../../actions")

describe('SearchResult component suite', ()=>{
  test('SearchResult component text equal', () => {
    const wrapper = shallow(
      <SearchResult />
    )
    const div = wrapper.find('.search-result')
    expect(div.text()).toBe('<SearchResultHeader /><Connect(SearchResultItems) />')
  })

  test('Not found', () => {
    const wrapper = shallow(
      <SearchResult not_found='true'/>
    )
    const div = wrapper.find('.search-result')
    expect(div.text()).toBe('<SearchResultNotFound />')
  })

  test('Not found with ComponentWillReceiveProps', () => {
    const wrapper = shallow(
      <SearchResult />
    )
    wrapper.setProps({not_found: true})
    const div = wrapper.find('.search-result')
    expect(div.text()).toBe('<SearchResultNotFound />')
  })

})

describe('SearchResultItem component test suite', ()=>{
  const film = {id: 1, name: 'Kill bill', release_date: '01-02-2004', genres: ['Action', 'Adventure'], director: 'Quentin Tarantino', poster_path: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10}
  let store
  beforeEach(() => {
    store = mockStore({})
  })

  test('SearchResultItem renders correctly', () => {
    const tree = renderer.create(
      <MockRouter>
        <SearchResultItem film={film} store={store} />
      </MockRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('SearchResultItem click', () => {
    const wrapper = mount(
      <MockRouter>
        <SearchResultItem film={film} store={store}/>
      </MockRouter>
    )
    getMovieFetch.mockReturnValue({type:'GET_MOVIE'})
    const component = wrapper.find(SearchResultItem).children()
    const scrollToMock = jest.fn()
    global.scrollTo = scrollToMock
    component.simulate('click')
    expect(scrollToMock.mock.calls.length).toBe(1)
    expect(component.find('Link').props().to).toEqual('/result/' + film.id)
  })

})

describe('SearchResultItems component test suite', () => {
  let store
  beforeEach(() => {
    store = mockStore({results:{movies:[]}})
  })

  test('SearchResultItems renders correctly', () => {
    const tree = renderer.create(
      <MockRouter>
        <SearchResultItems store={store}/>
      </MockRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('SearchResultItems inner compopnents render count test', () => {
    const wrapper = shallow(
      <SearchResultItems store={mockStore({results:{movies:[{id:1},{id:2}]}})}/>
    ).dive()
    expect(wrapper.find(SearchResultItem)).toHaveLength(2)
  })
  
  test('SearchResultItems have correct movies count props', () =>{
    const wrapper = shallow(
      <SearchResultItems store={mockStore({results:{}})}/>
    )
    expect(wrapper.props().movies).toHaveLength(0)
  })
})

describe('Header component test suite', () => {
  test('Header title should have text', () => {
    const wrapper = shallow(
      <SearchResultNotFound />
    )
    
    expect(wrapper.text()).toContain('No films found')
  })

})
