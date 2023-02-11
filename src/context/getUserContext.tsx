import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../components/utils/api/api";

interface IProps {
    children: ReactNode;
}

const defaultValue = localStorage.getItem('userId') || 'defaultUserId';
    
export const ApiDataContext = createContext(defaultValue);

export const ApiDataProvider = ({children} : IProps) => {
    const [userId, setData] = useState(defaultValue);

    useEffect(() => {
        api.get('/v1/auth/authenticatedUser')
            .then(res => {
                setData(res.data.user._id);
            });

            localStorage.setItem('userId', userId);
    }, [userId]);

    return (
        <ApiDataContext.Provider value={userId}>
            {children}
        </ApiDataContext.Provider>
    );
};


