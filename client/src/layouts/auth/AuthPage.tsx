import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query allPets {
  hello
}
`;

interface Hello {
  hello: string
}


export const AuthPage:FC = () => {
  const { data } = useQuery<Hello>(QUERY)

  console.log(data?.hello)


  return(
    <div>

    </div>
  )
}