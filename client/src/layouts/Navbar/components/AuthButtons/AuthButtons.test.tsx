import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import AuthButtons from './AuthButtons';

const handler = jest.fn()

describe('test with loginForm is active', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<AuthButtons showForm="login" showhideForm={handler}/>)
  })

  test('active button is login button', () => {
    const button = wrapper.find('.active')
    expect(button.text()).toBe('Login')
    button.simulate('click')
    expect(handler).toBeCalledWith('login')
  })
})

describe('test with Sign up form is active', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<AuthButtons showForm="signUp" showhideForm={handler}/>)
  })

  test('active button is signUp button', () => {
    const button = wrapper.find('.active')
    expect(button.text()).toBe('Sign Up')
    button.simulate('click')
    expect(handler).toBeCalledWith('signUp')
  })
})