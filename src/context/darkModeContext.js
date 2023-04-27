import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()
export const DarkModeContextProvider=({children})=>{
    const [darkMode,setDarkMode]= useState(JSON.parse(localStorage.getItem("darkMode"))|| false);

    const toggle =()=>{
        setDarkMode(!darkMode);
    }

    //useeffect to write the state to local storage
    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])

    return (
        <DarkModeContext.Provider value={{darkMode,toggle}}>
            {children}
        </DarkModeContext.Provider>
    );

}