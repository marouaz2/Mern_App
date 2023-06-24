const React = require('react');
const { useState, useEffect } = require('react');
const axios = require('axios');
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import Categories from './Categories';
import Comments from './Comments';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/users" component={Users} />
        <Route path="/categories" component={Categories} />
        <Route path="/comments" component={Comments} />
      </Switch>
    </Router>
  );
};

export default App;
