import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from 'layouts/MainPage'
import { CreatePost } from 'layouts/CreatePost'
import Post from 'layouts/Post/Post'
import { useUserData } from 'shared/hooks/useUserData'

const Routes: FC = () => {
  const { user } = useUserData()

  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route
        path="/newpost"
        render={() => (user ? <CreatePost /> : <Redirect to="/" />)}
      />
      <Route path="/posts/:post" component={Post} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
