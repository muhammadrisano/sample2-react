import './App.css';
import Signin from './pages/auth/Signin'
import Home from './pages/main/Home'
import Detail from './pages/main/Detail'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route exact path="/" component={Home}/>
        <Route path="/detail" component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
