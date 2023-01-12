import { createContext, ReactNode, useContext, useState } from "react";

interface IProps {
    children: ReactNode
}

interface IAuthContext {
    isAuthenticated: boolean,
    setIsAuthenticated: (newSate: boolean) => void
}

const initialValue = {
    isAuthenticated: false,
    setIsAuthenticated: () => {}
};

export const AuthContext = createContext<IAuthContext>(initialValue);

export const UserContextProvider = ({children}: IProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(initialValue.isAuthenticated);
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}