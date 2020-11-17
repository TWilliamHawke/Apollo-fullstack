import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import Post from './Post';
import * as hook from './hooks/useGetThisPostQuery'

const hookMock = jest.spyOn(hook, 'useGetThisPostQuery')
hookMock.mockImplementation(() => ({
  loading: false,
  postData: {
    __typename: 'Post',
    author: 'testAuthor,',
    content: 'mant symbols',
    createdAt: 100500,
    title: 'testTitle'
  }
}))

describe('test of post page', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<Post />)
  })

  test('title should containt testTitle', () => {
    expect(wrapper.find('h1').text()).toBe('testTitle')
  })

})