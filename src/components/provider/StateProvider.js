// import {StateContext} from "../../context/StateContext";
// import { useState} from "react";
//
// export const StateProvider = ({children}) => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     console.log(isDrawerOpen)
//     return (
//
//         <StateContext.Provider value={{
//             isDrawerOpen,
//             setIsDrawerOpen
//         }}>
//             {children}
//
//         </StateContext.Provider>
//     )
// }
import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext();
export const StateProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    return (
        <DrawerContext.Provider
            value={{
                isDrawerOpen, setIsDrawerOpen
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
};
export const useStateProvider = () => useContext(DrawerContext);