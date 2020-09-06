import React, { FC, useEffect } from 'react';
import { useCreateAccountMutation } from './hooks/useCreateAccountMutation';


const Navbar: FC = () => {
  const data = useCreateAccountMutation()

  useEffect(() => {
    console.log(data)
  }, [data])

  return(
    <div>
      Navbar
      
    </div>
  )
}

export default Navbar