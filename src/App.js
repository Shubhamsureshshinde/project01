import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import './App.css'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  console.log(dispatch)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth, 'userAuthfrom app')
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        // logged out
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
          {user ?
            <>
              <Route exact path='/profile' element={<ProfileScreen />} />
              <Route exact path='/' element={<HomeScreen />} />
            </> :
            <Route exact path='/' element={<LoginScreen />} />
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
