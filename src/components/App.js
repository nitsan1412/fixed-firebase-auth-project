import './App.css';
import Landing from './landingPage'
import {Route, Switch} from 'react-router-dom'
import AppLayout from './appLayout'
import {ProtectedRoute} from "./ProtectedRoute"
import Login from './login'
import SignUp from './signUp'


function App() {
  return (
    <div className="App">
      {/* <h2>{auth?auth.currentUser.email:'guest'}</h2> */}
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signUp" component={SignUp}/>
        <ProtectedRoute exact path="/app" component={AppLayout}/>
        <Route path="*" component={()=> "404 NOT FOUND"}/>
      </Switch>
     
    </div>
  );
}

export default App;
