import './App.css';
import Main from './components/Main';
import Random from './components/Random';
import chuck_img from './img/chuck-cartoon.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Categories from './components/Categories';
import Home from './components/Home';



function App() {

  const handleRtl = () => {
    document.body.classList.toggle('rtl');
  }


  return (
    <Router>
      <div className="App">
        <div className='absolute-btn'>
          <button onClick={handleRtl}>Toggle rtl</button>
        </div>
      <div className='header-cnt'>
        <a href='/'>
            <h2>Chuck Norris</h2>
        </a>
            <img src={chuck_img} height='100px' alt=''/> 
          </div>
          <div className='choice-cnt'>
            <h4 className='choice-item'>
              <a href='/search'>
              Search for a fact
              </a>
            </h4>
            <h4 className='choice-item'>
            <a href='/random'>
            Get random fact
            </a>
            </h4>
            <h4 className='choice-item'>
              <a href='/categories'>
              Get random fact from categories
              </a>
            </h4>
          </div>
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
