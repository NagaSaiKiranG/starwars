import './App.css';
import Home from './pages/home';
import About from './pages/about';
import People from './pages/people';
import Navbar from './components/navbar.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  // const app = <Home />;
  // console.log("app", app);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/home' alias="/" exact component={Home} />
          <Route path='/people' component={People} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
