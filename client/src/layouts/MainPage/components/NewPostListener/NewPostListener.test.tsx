import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import NewPostListener from './NewPostListener';
import * as hook from '../../hooks/useNewPostSubsctiption'

//mocks
const handler = jest.fn()
const resetNewPostCount = jest.fn()

const spyHook = jest.spyOn(hook, 'useNewPostSubsctiption')
spyHook.mockImplementation(() => ({
  newPostCount: 42,
  resetNewPostCount
}))


//test suits
describe('test NewPostListener component', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<NewPostListener handler={handler} />)
  })

  test('rendered correctly', () => {
    expect(wrapper.find('div').text()).toBe('42 new post(s)')
  })

  test('click should call handler', () => {
    const div = wrapper.find('div')
    div.simulate('click')
    expect(resetNewPostCount).toBeCalled()
    expect(handler).toBeCalled()
  })
})