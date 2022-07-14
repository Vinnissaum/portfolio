import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
}
