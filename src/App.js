import React , {useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Signup from './Pages/Signup';
import Create from './Pages/Create';
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext'

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>  <Home /> </Route>
        <Route path='/login'> <LoginPage/> </Route>
        <Route path='/signup'> <Signup/> </Route>
        <Route path='/create'> <Create/> </Route>
        <Route path='/view'> <View/> </Route>
      </Router>
      </Post>
     
    </div>
  );
}

export default App;
