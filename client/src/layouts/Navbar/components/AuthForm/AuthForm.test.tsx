import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import AuthForm from './AuthForm'

describe('test of AuthForm component', () => {
  const closeHandler = jest.fn()
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<AuthForm onClose={closeHandler} showing='login' />)
  })

  it('should rendered correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true)
  })

  it('should render close button', () => {
    const closeButton = wrapper.find('.auth-form-closeButton')
    
    expect(closeButton.exists()).toBe(true)
  })

  it('should render buton with correctly name', () => {
    expect(wrapper.find('.auth-form-button').text()).toBe('Login')

  })

  it('should apply animation hook props correctly', () => {
    const authForm = wrapper.find('.auth-form')
    expect(authForm.prop('style')?.animation).toBeTruthy()
    expect(authForm.prop('onAnimationEnd')).toBeInstanceOf(Function)
  })
})