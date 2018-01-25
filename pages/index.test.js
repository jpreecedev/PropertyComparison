import React from 'react'
import { shallow } from 'enzyme'
import Index from './index'

test('check that title is set', () => {
  const wrapper = shallow(
    <Index />
  )

  const header = wrapper.find('h1').first().text()
  expect(header).toBe('Property Comparison')
})
