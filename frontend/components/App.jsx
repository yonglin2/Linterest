import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main">
      <Switch>
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute path="/signup" component={SessionFormContainer} />
       <ProtectedRoute path="/" component={GreetingContainer} />
     </Switch>
  </div>
);

export default App;
