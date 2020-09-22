import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import TopErrorMessage from './TopErrorMessage'

const dispatch = jest.fn()

const contextSpy = jest.spyOn(React, 'useContext')
contextSpy.mockImplementation(() => ({
  dispatch,
  state: {
    loading: false,
    errors: 'testError',
  },
}))

describe('test of TopErrorMessage', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<TopErrorMessage />)
  })

  test('render error message in div', () => {
    expect(wrapper.find('.top-error-text').text()).toBe('testError') //added x
  })
})
