import { h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import { Home } from './home';
import { Profile } from './profile';
import { Notfound } from './notfound';
import { Header } from '../components/header';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}

export function App() {
  let currentUrl = '';
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };
  console.log(currentUrl);
  return (
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <Notfound default />
      </Router>
    </div>
  );
}
