import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)
    const auth = getAuth(app) 
   
    const createUser = (email,password) =>{
        setLoading(true)
       return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     const logOut= ()=>{
        signOut(auth)
     }
    useEffect(
       ()=> {
        const unsubcribe = onAuthStateChanged(auth, loggedUser => {
           
        setUser(loggedUser)
        setLoading(false)
       
        }
        )
        return () =>{
            unsubcribe()
        }
       },[])
    const authInfo ={
  user,
  loading,
  createUser,
  signIn,
  logOut,    
    }
    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;