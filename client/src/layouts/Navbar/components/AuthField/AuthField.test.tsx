import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import AuthField from './AuthField';
import { InputNamesType } from 'layouts/Navbar/types/AuthFormTypes';

describe('test dumb component', () => {
  let wrapper: ShallowWrapper
  const props = {
    changeHandler: jest.fn() as (name: string, value: string) => void,
    inputData: {
      title: '',
      name: 'testName' as InputNamesType,
      type: 'testtype'
    },
    inputClass: true,
    inputValue: 'mockValue'
  }

  beforeAll(() => {
    wrapper = shallow(<AuthField  {...props} />)
  })
  
  test('props should be apply correctly', () => {
    const input = wrapper.find('input')
    expect(input.prop('className')).toBe('green')
    expect(input.prop('value')).toBe('mockValue')
  })

  test('input change should call changeHandler', () => {
    const input = wrapper.find('input')
    input.simulate('change', {target: {}})
    expect(props.changeHandler).toBeCalled()
  })
})
