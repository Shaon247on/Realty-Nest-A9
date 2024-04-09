import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import PropTypes from 'prop-types';


export const AuthContext = new createContext(null)


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerAuth = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const loginAuth = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut= ()=>{
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser =>{
            if(user){
                setUser(currentUser)
                setLoading(false)
            }


        }))
        return
    })


   const authInfo ={
    user,
    setUser,
    registerAuth,
    loginAuth,
    loading,
    logOut,
    profileUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;