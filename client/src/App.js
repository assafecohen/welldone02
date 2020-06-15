import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './Layout/Layout';
import CategoriesPage from './pages/CategoriesPage';
import LocationsPage from './pages/LocationsPage';
import './App.css';

const App = () => {
  const routes = (
    <Switch>
      <Route exact path='/' component={CategoriesPage} />
      <Route exact path='/categories' component={CategoriesPage} />
      <Route exact path='/locations' component={LocationsPage} />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
};

export default App;
