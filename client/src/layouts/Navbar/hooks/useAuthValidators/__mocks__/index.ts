type AuthValidatorsHook = {
  authValidation: {a?: string}
  formIsValid: boolean
}



export const useAuthValidators = (): AuthValidatorsHook => {
  return {
    authValidation: {},
    formIsValid: true
  }
}

export default useAuthValidators