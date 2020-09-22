import { HttpLink, split } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { uri, wsUri } from 'core/config/links'
import { getMainDefinition } from 'apollo-utilities'

const wslink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
  },
})

const httpLink = new HttpLink({
  uri,
  //credentials: 'include',
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
})

export const link = split(
  ({ query }) => {
    const defenition = getMainDefinition(query)

    return (
      defenition.kind === 'OperationDefinition' &&
      defenition.operation === 'subscription'
    )
  },
  wslink,
  httpLink
)
