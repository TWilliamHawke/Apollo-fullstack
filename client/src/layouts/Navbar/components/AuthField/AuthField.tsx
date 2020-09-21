import React, { ChangeEvent, FC } from 'react';
import { FieldSetType } from 'layouts/Navbar/types/AuthFormTypes';

type PropTypes = {
  inputData: FieldSetType
  changeHandler: (name: string, value: string) => void
  inputClass: boolean
  inputValue: string
}

const AuthField: FC<PropTypes> = ({inputData, changeHandler, inputClass, inputValue}) => {
  const { name, title, type } = inputData
  const className = inputClass ? 'green' : ''

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    changeHandler(name, value)
  }


  return (
    <fieldset>
      <label htmlFor={`auth-${name}`}>{title}</label>
      <input
        className={className}
        value={inputValue}
        onChange={inputHandler}
        id={`auth-${name}`}
        type={type}
        name={name}
      />
    </fieldset>
  )

};

export default AuthField;