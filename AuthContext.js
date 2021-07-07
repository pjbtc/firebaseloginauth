import React, {useContext, useState ,useEffect} from 'react';
import {auth} from '../firebase';

const AuthContext = React. createContext()


export function  useAuth(){
    return useContext(AuthContext)
    
}


export function AuthProvider ({children}){
    const[currentUser, setCurrentUser]=useState()
    const [loading, setLoading]=useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, pasword){
        return auth. signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }
    function resetPassword(){
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(){
        return currentUser.email(email)

    }
    function updatePassword(){
        return currentUser.password(password)
    }
    useEffect (() =>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setLoading(false)
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    const value= {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updatePassword,
        updateEmail


    }

    

   
    return(
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}