import React from 'react';
import { shallow } from 'enzyme'
import { Navbar } from './';

jest.mock('./hooks/useCreateAccountMutation')


describe('test navbar component', () => {

  const wrapper = shallow(<Navbar />)

  it('should render correctly', () => {
    expect(wrapper.find('div').exists()).toBe(true)
  })
})
