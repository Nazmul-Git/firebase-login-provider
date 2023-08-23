/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../Firebase/firebase.init';

const Review = () => {
    const [user, setUser]=useState([])
    const auth=getAuth(app);
    const provider=new GoogleAuthProvider();

    const googleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        }).catch(error=>{
            console.log('error',error.message);
        })

    }

    const signOutHere=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null);
        })
    }
    return (
        <div>
            <button onClick={googleSignIn}>Sign in with google ?</button>
            <button onClick={signOutHere}>Sign Out</button>
            {
                user && <div>
                    <h2>User Name: {user.displayName}</h2>
                    <h2>Email: {user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Review;