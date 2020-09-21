import React from 'react';
import { shallow } from 'enzyme'
import { Navbar } from './';

jest.mock('./hooks/useCreateAccountMutation')

jest.mock('shared/hooks/useUserData')


describe('test navbar component', () => {

  const wrapper = shallow(<Navbar />)

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('AuthForm').exists()).toBe(false)

  })


  test('should render authButtons by default', () => {
    expect(wrapper.find('AuthButtons').exists()).toBe(true)
  })
})
