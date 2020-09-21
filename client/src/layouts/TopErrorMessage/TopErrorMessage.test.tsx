import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import TopErrorMessage from './TopErrorMessage';
import * as hook from 'shared/store/useGlobalState';

const dispatch = jest.fn()

const hookMock = jest.spyOn(hook, 'useGlobalState')
hookMock.mockImplementation(() => ({
  dispatch,
  state: {
    loading: false,
    errors: 'testError'
  },
}))


describe('test of TopErrorMessage', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(
      <TopErrorMessage />
    )
  })

  test('render error message in div', () => {
    expect(wrapper.find('.top-error-text').text()).toBe('testError') //added x 
  })
})