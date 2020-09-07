import { gql } from '@apollo/client';

export const createAccountMutation = gql`
  mutation signUp($email: String! $password: String! $username: String) {
    signUp(email: $email, password: $password, userName: $username)
  }
`;