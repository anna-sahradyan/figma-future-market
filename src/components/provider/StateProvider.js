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