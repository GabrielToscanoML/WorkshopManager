import Header from './components/Header';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/' Component={ Home } />
      </div>
    </BrowserRouter>
  );
}

export default App;
