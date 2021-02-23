import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import New from './components/New';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={New} />
          </Switch>
      </Router>

    </div>
  );
}

export default App;
