import React, { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./SignUpScreen.css";
import { firbaseApp } from './Firebase';

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = getAuth(firbaseApp);


  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message);
    });
  };

  return (
   <div className='signupScreen'>
     <form>
       <h1>Sign In</h1>
       <input ref={emailRef} type="email" placeholder='email' />
       <input ref={passwordRef} type="password" placeholder='password' />
       <button type="submit" onClick={signIn}>Sign In</button>
       
       <h4>
         <span className='signupScreen__gray'> New to Netflix? </span> 
         <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
         </h4>
     </form>
   </div>
  )
}

export default SignUpScreen;
