/* eslint-disable no-unused-vars */
import React from 'react'; 
import app from '../../Firebase/firebase.init'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
    const auth=getAuth(app);
    console.log(app);
    const provider= new GoogleAuthProvider();
    const googleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log('error', error.message);
        })
    }
    return (
        <div>
            <button onClick={googleSignIn}>Log In</button>
        </div>
    );
};

export default Login;