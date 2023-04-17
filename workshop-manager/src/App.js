import Header from './components/Header';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Switch>
      <Header />
      <Route exact path='/' Component={ Home } />
      <Route exact path='/tasks' Component={ Tasks } />
    </Switch>
  );
}

export default App;
