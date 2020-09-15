import { FieldSetType } from 'layouts/Navbar/types/AuthFormTypes';
import React, { ChangeEvent, FC } from 'react';

type PropTypes = {
  inputData: FieldSetType
  changeHandler: (name: string, value: string) => void
  inputClass: string
  inputValue: string
}

const AuthField: FC<PropTypes> = ({inputData, changeHandler, inputClass, inputValue}) => {
  const { name, title, type} = inputData

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    changeHandler(name, value)
  }


  return (
    <fieldset key={name}>
      <label htmlFor={`auth-${name}`}>{title}</label>
      <input
        className={inputClass}
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