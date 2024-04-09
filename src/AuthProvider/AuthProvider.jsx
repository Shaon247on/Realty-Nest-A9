import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
    const loginAuth = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
    loginAuth

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;