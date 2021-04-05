import './App.css';
import Main from './components/Main';
import Random from './components/Random';
import Categories from './components/Categories';
import Home from './components/Home';
import Nav from './components/Nav';
import AbsoluteButton from './components/AbsoluteButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <AbsoluteButton />
        <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Main} />
            <Route path='/random' component={Random} />
            <Route path='/categories' component={Categories} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
