import { renderHook, act } from '@testing-library/react-hooks';
import { AuthDataHook, useAuthData } from '../useAuthData';

describe('testing of hook', () => {

  test('arguments of changeData should be in authData', () => {
    const { result } = renderHook<null, AuthDataHook>(() => useAuthData());
    expect(result.current.authData.password).toBe('')
    act(() => result.current.changeData('password', 'testPassword'))
    expect(result.current.authData.password).toBe('testPassword')
  })
})