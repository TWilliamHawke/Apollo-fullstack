import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

describe('test app component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper=shallow(<App />)
  })

  it('should rendered correctly', () => {
    expect(wrapper.find("h1").text()).toBe("Hello world");
  })
})