import './App.css';
import Signin from './pages/auth/Signin'
import Home from './pages/main/Home'
import Detail from './pages/main/Detail'
import Signup from './pages/auth/Signup'
import About from './pages/main/About'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route exact path="/home" component={Home}/>
        <Route path="/detail/:idfilm" component={Detail}/>
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
