import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import { GlobalStateProvider } from './GlobalState';


describe('test of global state provider', () => {
  const wrapper: ShallowWrapper = shallow(
    <GlobalStateProvider>
      <div className='findme' />
    </GlobalStateProvider>
  )

  it('should render div', () => {
    expect(wrapper.find('.findme').exists()).toBe(true)
  })
})
