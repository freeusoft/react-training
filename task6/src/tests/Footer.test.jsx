import React from 'react'
import Footer from '../components/Footer/Footer'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Footer component test suite', ()=>{
  test('Footer snapshot renders correctly', () => {
    const tree = renderer.create(
      <Footer />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Footer caption should have text equal', () => {
    const wrapper = shallow(
      <Footer />
    )
    const divTitle = wrapper.find('.title')
    expect(divTitle.text()).toBe('MovieDB')
  })

  test('Footer env mode must be "dev"', () => {
    const wrapper = shallow(
      <Footer />
    );
    const divEnv = wrapper.find('.env-mode')
    expect(divEnv.text()).toBe('dev')
  })

  test('Footer env mode must be "prod"', () => {
    const wrapper = shallow(
      <Footer node_env='production'/>
    )
    const divEnv = wrapper.find('.env-mode')
    expect(divEnv.text()).toBe('prod')
  })

}) 
