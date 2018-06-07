import React from 'react'
import FilmList from '../containers/FilmList'
import Film from '../components/FilmList/Film'
import Films from '../components/FilmList/Films'
import FilmListNotFound from '../components/pages/FilmListNotFound'
import { shallow, mount, render} from 'enzyme'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()
import { getMovieFetch } from '../actions'
jest.mock("../actions")

describe('FilmList component suite', ()=>{
  test('FilmList component text equal', () => {
    const wrapper = shallow(
      <FilmList />
    )
    const div = wrapper.find('.film-list')
    expect(div.text()).toBe('<FilmListHeader /><Connect(Films) />')
  })

  test('Not found', () => {
    const wrapper = shallow(
      <FilmList not_found='true'/>
    )
    const div = wrapper.find('.film-list')
    expect(div.text()).toBe('<FilmListNotFound />')
  })

  test('Not found with ComponentWillReceiveProps', () => {
    const wrapper = shallow(
      <FilmList />
    )
    wrapper.setProps({not_found: true})
    const div = wrapper.find('.film-list')
    expect(div.text()).toBe('<FilmListNotFound />')
  })

})

describe('Film component test suite', ()=>{
  const film = {id: 1, name: 'Kill bill', release_date: '01-02-2004', genres: ['Action', 'Adventure'], director: 'Quentin Tarantino', poster_path: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10}
  let store
  beforeEach(() => {
    store = mockStore({})
  })

  test('Film renders correctly', () => {
    const tree = renderer.create(
      <MockRouter>
        <Film film={film} store={store} />
      </MockRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Film click', () => {
    const wrapper = mount(
      <MockRouter>
        <Film film={film} store={store}/>
      </MockRouter>
    )
    getMovieFetch.mockReturnValue({type:'GET_MOVIE'})
    const component = wrapper.find(Film).children()
    const scrollToMock = jest.fn()
    global.scrollTo = scrollToMock
    component.simulate('click')
    expect(scrollToMock.mock.calls.length).toBe(1)
    expect(component.find('Link').props().to).toEqual('/film/' + film.id)
  })

})

describe('Films component test suite', () => {
  let store
  beforeEach(() => {
    store = mockStore({results:{movies:[]}})
  })

  test('Films renders correctly', () => {
    const tree = renderer.create(
      <MockRouter>
        <Films store={store}/>
      </MockRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Films inner compopnents render count test', () => {
    const wrapper = shallow(
      <Films store={mockStore({results:{movies:[{id:1},{id:2}]}})}/>
    ).dive()
    expect(wrapper.find(Film)).toHaveLength(2)
  })
  
  test('Films have correct movies count props', () =>{
    const wrapper = shallow(
      <Films store={mockStore({results:{}})}/>
    )
    expect(wrapper.props().movies).toHaveLength(0)
  })
})

describe('Header component test suite', () => {
  test('Header title should have text', () => {
    const wrapper = shallow(
      <FilmListNotFound />
    )
    
    expect(wrapper.text()).toContain('No films found')
  })

})
