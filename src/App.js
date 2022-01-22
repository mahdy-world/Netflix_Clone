import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { getAuth,} from "firebase/auth";
import { firbaseApp } from './screens/Firebase';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const auth = getAuth(firbaseApp);
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();


  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if (userAuth){
          // login 
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email
            })
          );
        }else{
          // logout
          dispatch(logout());
        }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
          ): (
          <Routes>
            <Route path='/profile' element={<ProfileScreen />}></Route>
            <Route exact path="/" element ={<HomeScreen />}>
            </Route>
          </Routes> 
        )}
      </BrowserRouter>

    </div>

  );
}

export default App;
 