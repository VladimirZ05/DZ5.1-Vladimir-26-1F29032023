import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import CreatePost from './CreatePost';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
