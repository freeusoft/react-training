import React from 'react'
import Header from './Header'
import FilmInfo from './FilmInfo'
import Search from './Search'
import { shallow, mount } from 'enzyme'
import { createMemoryHistory } from 'history'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router'

describe('Header component test suite', ()=>{
  test('Header snapshot renders correctly', () => {
    const tree = renderer.create(
      <MockRouter>
        <Header id='123' />
      </MockRouter>
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
    expect(div.text()).toBe('<Link /><Search />')
  })

  test('Header with id state should have filminfo', () => {
    const wrapper = shallow(
      <Header id='123'/>
    )
    const div = wrapper.find('.header')
    expect(div.text()).toBe('<Link /><FilmInfo />')
  })

})

describe('FilmInfo component test suite', ()=>{
  test('FilmInfo renders correctly', () => {
    const tree = renderer.create(
      <FilmInfo />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Search component test suite', ()=>{
  const wrapper = mount(
    <Search />
  )

  test('Search inner text should equal', () => {
    const search = wrapper.find('.search')
    expect(search.text()).toContain('FIND YOUR MOVIESEARCH BYTITLEDIRECTORSEARCH')
  })

  test('Search by title click', () => {
    const btnTitle = wrapper.find('.search-by-title')
    btnTitle.simulate('click')
    expect(wrapper.state().searchPlaceholder).toEqual('Stranger things')
  })

  test('Search by director click', () => {
    const btnDirector = wrapper.find('.search-by-director')
    btnDirector.simulate('click')
    expect(wrapper.state().searchPlaceholder).toEqual('Quentin Tarantino')
  })

  test('Submit click', () => {
    const history = createMemoryHistory('/')
    const wrapperWithHistory = mount(
      <Search history={history}/>
    )

    const btnSubmit = wrapperWithHistory.find('.submit')
    btnSubmit.simulate('click')
    
    expect(wrapperWithHistory.props().history.location.pathname).toEqual('/results')
  })

})