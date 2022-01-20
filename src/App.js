import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { getAuth,} from "firebase/auth";
import { firbaseApp } from './screens/Firebase';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  const auth = getAuth(firbaseApp);

  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        console.log(userAuth);
      }else{

      }
    });

  }, []);

  return (
    <BrowserRouter>
    <div className="app">
      {!user ? (<LoginScreen/>) : (
        <Routes>
        <Route exact path="/"
        element={<HomeScreen/>}>
        </Route>
      </Routes>
      )}
      
    </div>
    </BrowserRouter>

  );
}

export default App;
 