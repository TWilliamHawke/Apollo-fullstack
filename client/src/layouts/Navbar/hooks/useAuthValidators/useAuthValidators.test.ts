import { renderHook } from '@testing-library/react-hooks';
import { AuthDataType } from 'layouts/Navbar/types/AuthFormTypes';
import useAuthValidators from './useAuthValidators';
import React from 'react'

const contestMock = jest.spyOn(React, 'useContext')
contestMock.mockImplementation(() => ({ state: { loading: false } }))

const authData: AuthDataType = {
  email: 'test@mail.com',
  password: 'testPassword',
  userName: 'Yo' // I am chinese
}

describe('test of with Default dataType', () => {
  test('email and password should be valid', () => {
    const { result } = renderHook(() => useAuthValidators(authData, false));
    const { email, userName, password} = result.current.authValidation
    expect(email).toBe(true)
    expect(userName).toBe(true)
    expect(password).toBe(true)
    expect(result.current.formIsValid).toBe(true)
  })
})

describe('test with invalid data', () => {
  const authData: AuthDataType = {
    email: 'noEmail',
    password: 'short',
    userName: 'j'
  }

  test('all data should be invalid', () => {
    const { result } = renderHook(() => useAuthValidators(authData, true));
    const { email, userName, password} = result.current.authValidation
    expect(email).toBe(false)
    expect(userName).toBe(false)
    expect(password).toBe(false)
  })

})

describe('when loading = true', () => {
  beforeAll(() => {
    contestMock.mockImplementation(() => ({state: {loading: true}}))
  })
  test('formIsValid should be false even other values is truthly', () => {
    
    const { result } = renderHook(() => useAuthValidators(authData, true));
    const { email, userName, password} = result.current.authValidation
    expect(email).toBe(true)
    expect(userName).toBe(true)
    expect(password).toBe(true)

    expect(result.current.formIsValid).toBe(false)
  })

  afterAll(() => {
    contestMock.mockReset()
  })
})