import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import MainPage from './MainPage';

jest.mock('./hooks/useGetAllPostsQuery')

const push = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push })
}))


describe('test of mainPage component', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<MainPage />)
  })
  
  it('should render 2 post-preview', () => {
    expect(wrapper.find('PostPreview').first().exists()).toBe(true)
    expect(wrapper.find('PostPreview')).toHaveLength(2)
  })


  test('click on button should call push', () => {
    const button = wrapper.find('button')
    button.simulate('click')
    expect(push).toBeCalled()
  })
})