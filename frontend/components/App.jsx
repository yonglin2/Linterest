import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavContainer from './nav/nav_container';
import PinsIndexContainer from './pins/pins_index_container';
import SessionFormContainer from './session_form/session_form_container';
import FooterContainer from './footer/footer_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main">
    <ProtectedRoute path="/" component={NavContainer} />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/" component={PinsIndexContainer} />
    </Switch>
    <ProtectedRoute path="/" component={FooterContainer} />
  </div>
);

export default App;
