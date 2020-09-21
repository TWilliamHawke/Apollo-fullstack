import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { App } from './'

// import { client } from '../client';

jest.mock('../Apollo/client')
//client.mockImplementation(() => {})
// const mockedClient = <jest.Mock<SomeClass>>SomeClass;

describe('test app component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper=shallow(<App />)
  })

  
  

  it('should rendered correctly', () => {
    const apolloProvider = wrapper.find("ApolloProvider")
    expect(apolloProvider.exists()).toBe(true);
    expect(apolloProvider.prop('client')).toEqual({})
  })

  it('should render Navar', () => {
    expect(wrapper.find('Navbar').exists()).toBe(true)
  })
})