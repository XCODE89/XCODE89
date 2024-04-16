import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

const ContextProvider = ({children}) => {

    const [selected, setSelected] = useState("HOME")
    const setSelectedItem = (input) => {
        setSelected(input)
    }

    return(
        <AuthContext.Provider value={{ setSelectedItem, selected }}>
            {children}  
        </AuthContext.Provider>
    )
}

export default ContextProvider