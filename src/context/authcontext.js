import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]= useState(JSON.parse(localStorage.getItem("user"))|| null);

    const login =()=>{
        setCurrentUser({id:1,name:"Shivay",profilepic:"https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&w=600"})
    }

    //useeffect to write the state to local storage
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    );

}