import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import Nav from '../Nav';
import { firbaseApp } from './Firebase';
import "./ProfileScreen.css";


function ProfileScreen() {
  const user = useSelector(selectUser);
  const auth = getAuth(firbaseApp);  
  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=''/>

                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    
                    <div className='profileScreen__plans'>
                    <h3>Plans</h3>
                    <p></p>
                        <button 
                            onClick={() => auth.signOut()}
                            className='profileScreen__signOut'>Sign Out
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;
