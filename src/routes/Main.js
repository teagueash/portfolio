import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import ItemPage from '../components/ItemPage';

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/documenting tragedy" component={ItemPage} />
        <Route path="/expeditions" component={ItemPage} />
      </Switch>
    </>
  );
};

export default Main;
