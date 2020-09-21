import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import PostPreview from './PostPreview';

jest.mock('shared/utils/dateTf')
const push = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push })
}))

describe('test Post preview component', () => {
  let wrapper: ShallowWrapper

  const props = {
    createdAt: 100500,
    author: 'testAuthor',
    title: 'testTtile',
    id: 'testId'
  }

  beforeAll(() => {
    wrapper = shallow(<PostPreview {...props} />)
  })

  test('header should include title', () => {
    expect(wrapper.find('h2').text()).toBe(props.title)
  })

  test('click on post should call push', () => {
    const post = wrapper.find('div')
    post.simulate('click')
    expect(push).toBeCalled()
  })
})