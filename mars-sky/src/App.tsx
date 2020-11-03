import * as Pages from 'page';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route 
      exact
      path='/'
      render={() => <Pages.WeatherPage/>}
      />
      <Redirect to='/'/>
    </Switch>
  );
};

export default App;