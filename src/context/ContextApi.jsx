import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { toast } from 'react-hot-toast';
import Auth from './../firebase/firebase.config';
import { Navigate } from "react-router-dom"

export const CreateContextApi = createContext(null)

const ContextApi = ({ children }) => {
    const [users , setUsers] = useState(null)
    const [loading , setLoading] = useState(true)

    const signUpMethod = (email, password) => {
        createUserWithEmailAndPassword(Auth, email, password)
            .then(success => {
                console.log('success msg', success.user);
                toast.success('Account Create Successfully...!!')
            })
            .catch(error => {
                console.log('error mas', error.message);
                toast.error('Already Account Exited...!!')
            })
    }


    const signInMethod = (email, password) => {
        signInWithEmailAndPassword(Auth, email, password)
            .then(success => {
                toast.success('SignIn User Successfully..!!')
                console.log('user login', success.user);
            })
            .catch(error => {
                toast.error('Something wrong..please Try again..!!')
                console.log('user error', error.message);
            })
    }

    const signOutMethod = () =>{
        signOut(Auth)
        .then(success=>{
            console.log(success);
        })
        .catch(error=>{
            toast.error('please Try again..!')
            console.log(error);
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(Auth,user=>{
            const uid = user.uid
                
                setUsers(uid)
                setLoading(false)

        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const homePage = () =>{
        return <Navigate to='/'/>
    }


    const contextValue = {signInMethod,signUpMethod,users,signOutMethod,homePage,loading}
    return (
        <CreateContextApi.Provider value={contextValue}>
            {children}
        </CreateContextApi.Provider>
    );
};

export default ContextApi;


ContextApi.propTypes = {
    children: PropTypes.node
}