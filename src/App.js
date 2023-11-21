import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loginpage from './components/Login/Login1';
import MainPage from './components/Home-page/Home';
import Footerdown from './components/Footer/Foot';
import CenteredContentPage from './components/content-page/Content';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CenteredContentPage} />
        <Route path="/login" component={loginpage} />
        <Route path="/Main" component={MainPage} />
      </Switch>
      <Footerdown/>
    </Router>
  );
};

export default App;
