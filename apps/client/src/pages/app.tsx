import { h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import { Home } from './home';
import { Courses } from './courses';
import { Profile } from './profile';
import { Notfound } from './notfound';
import { Header } from '../components/header';
import { IndividualCourse } from './courses/IndividualCourse';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}

export function App() {
  return (
    <div id="app">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <Route path="/courses/" component={Courses} />
        <Route path="/courses/:name" component={IndividualCourse} />
        <Notfound default />
      </Router>
    </div>
  );
}
