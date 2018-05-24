import React from 'react'
import NotFound from '../components/pages/NotFound'
import renderer from 'react-test-renderer'
import MockRouter from 'react-mock-router'

describe('NotFound component test suite', ()=>{
  test('NotFound component snapshot renders correctly', () => {
    const tree = renderer.create(
      <MockRouter>
        <NotFound />
      </MockRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})