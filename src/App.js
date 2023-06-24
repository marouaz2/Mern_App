import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Categories from './pages/Categories';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/comments" component={Comments} />
        <Route path="/categories" component={Categories} />
      </Switch>
    </Router>
  );
};

export default App;
