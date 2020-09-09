import React, { FC, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from 'layouts/MainPage';
import { CreatePost } from 'layouts/CreatePost';
import Post from 'layouts/Post/Post';
import { GlobalStateContext } from 'shared/store/GlobalState';

const Routes: FC = () => {
  const { state } = useContext(GlobalStateContext)

  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      {/* should change state to state.user after tests */}
      <Route path='/newpost' render={props => state ? <CreatePost /> : <Redirect to='/' />} />
      <Route path='/posts/:post' component={Post} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;