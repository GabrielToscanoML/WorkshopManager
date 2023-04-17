import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import ClientInfo from './pages/ClientInfo';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/tasks' component={ Tasks } />
      <Route exact path='/ClientInfo' component={ ClientInfo } />
    </Switch>
  );
}

export default App;
