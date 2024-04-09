import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";


export const AuthContext = new createContext(null)


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerAuth = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateProfile = (name, photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: {name},
            photoURL: {photo}
        })
    }

    const loginAuth = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser =>{
            console.log('Current user is:', user)
            setUser(currentUser)
            setLoading(false)

        }))
        return()=>{
            unSubscribe()
        }
    })


   const authInfo ={
    user,
    registerAuth,
    loginAuth,
    loading,
    logOut,
    updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;