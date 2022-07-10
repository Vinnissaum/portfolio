import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Stack from './pages/Stack';
import Projects from './pages/Projects';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/stack" exact component={Stack} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
  );
}
