import React from 'react'
import SearchResult from './SearchResult'
import SearchResultItem from './SearchResultItem'
import SearchResultItems from './SearchResultItems'
import SearchResultNotFound from './SearchResultNotFound'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('SearchResult component suite', ()=>{
  test('SearchResult component text equal', () => {
    const wrapper = shallow(
      <SearchResult />
    )
    const div = wrapper.find('.search-result')
    expect(div.text()).toBe('<SearchResultHeader /><SearchResultItems />')
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
  const film = {id: 1, name: 'Kill bill', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 10}
  
  test('SearchResultItem renders correctly', () => {
    const tree = renderer.create(
      <SearchResultItem film={film}/>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Item click', () => {
    const wrapper = shallow(
      <SearchResultItem film={film}/>
    )
    const scrollToMock = jest.fn()
    global.scrollTo = scrollToMock

    wrapper.simulate('click')
    expect(scrollToMock.mock.calls.length).toBe(1)
    expect(wrapper.props().href).toEqual('/result/' + film.id)
  })
})

describe('SearchResultItem component test suite', ()=>{
  
  test('SearchResultItems renders correctly', () => {
    const tree = renderer.create(
      <SearchResultItems />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})

describe('Header component test suite', ()=>{
  test('Header title should have text', () => {
    const wrapper = shallow(
      <SearchResultNotFound />
    )
    
    expect(wrapper.text()).toContain('No films found')
  })

})
