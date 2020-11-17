import { renderHook, act } from '@testing-library/react-hooks';
import { AuthSubmitHandlerHook, useAuthSubmitHandler } from '../useAuthSubmitHandler';
import * as loginHook from '../useLoginMutation'
import { AuthDataType } from 'layouts/Navbar/types/AuthFormTypes';
import * as createHook from '../useCreateAccountMutation'

const loginHandler = jest.fn()
const createAccount = jest.fn()

const loginHookSpy = jest.spyOn(loginHook, 'useLoginMutation')
loginHookSpy.mockImplementation(() => ({ loginHandler }))

const createSpy = jest.spyOn(createHook, 'useCreateAccountMutation')
createSpy.mockImplementation(() => ({createAccount, loading: true}))

describe('tests with isLogin = true', () => {
  
  it('should call loginHandler', () => {
    const { result } = renderHook<boolean, AuthSubmitHandlerHook>(() => useAuthSubmitHandler(true));
    act(() => result.current.authSubmitHandler('testData' as unknown as AuthDataType))
    expect(loginHandler).toBeCalled()
  })

})

describe('tests with isLogin = false', () => {
  
  it('should call createAccount', () => {
    const { result } = renderHook<boolean, AuthSubmitHandlerHook>(() => useAuthSubmitHandler(false));
    act(() => result.current.authSubmitHandler('testData' as unknown as AuthDataType))
    expect(createAccount).toBeCalled()
    expect(createAccount).toBeCalledWith('testData')
  })

})