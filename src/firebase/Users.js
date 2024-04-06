import { createUserWithEmailAndPassword } from "firebase/auth"
import Auth from './firebase.config';

export const signUpMethod = (email,password) =>{
    createUserWithEmailAndPassword(Auth, email, password)
    .then(success =>{
        console.log('success msg',success.user);
    })
    .catch(error=>{
        console.log('error mas',error.message);
    })
}