import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import CreatePost from './CreatePost';
import * as apollohook from './hooks/useCreatePostMutation/useCreatePostMutation'
import * as fromHook from './hooks/usePostData'

const createPost = jest.fn()

const spyHook = jest.spyOn(apollohook, 'useCreatePostMutation')
spyHook.mockImplementation(() => {
  return {
    createPost,
    loading: false
  }
})

const createPostInputsHandler = jest.fn()
const spyFormHook = jest.spyOn(fromHook, 'usePostData')
spyFormHook.mockImplementation(() => ({
  createPostInputsHandler,
  postData: {
    content: '',
    title: 'testValue'
  }
}))

describe('test CreatePost component', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<CreatePost />)
  })

  test('component should render correctly', () => {
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  test('submit form should call createPost', () => {
    const form = wrapper.find('form')
    form.simulate('submit', {preventDefault: jest.fn()})
    expect(createPost).toBeCalled()
  })

  test('change input should call createPostInputsHandler', () => {
    const input = wrapper.find('.create-post-form-input')
    input.simulate('change', {target: {name: 'title', value: 'testValue'}})
    expect(input.prop('value')).toBe('testValue')
    expect(createPostInputsHandler).toBeCalledWith('title', 'testValue')
  })
})