export type InputNamesType = 'email' | 'userName' | 'password'

export type InputsType = FieldSetType[]

export type FieldSetType = {
  title: string,
  name: InputNamesType
  type: string
}

export type AuthDataType = Record<InputNamesType, string>
export type AuthDataValidationType = Record<InputNamesType, boolean>