import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../components/utils/api/api";

interface IUser {
    _id?: string;
}

interface IProps {
    children: ReactNode;
}

//const {data} = await api.get('/v1/auth/authenticatedUser');
    
export const ApiDataContext = createContext({});

export const ApiDataProvider = ({children} : IProps) => {
    const [data, setData] = useState<IUser[]>([]);

    useEffect(() => {
        api.get('/v1/auth/authenticatedUser')
            .then(res => {
                setData(res.data.user._id);
            })
    }, []);

    return (
        <ApiDataContext.Provider value={data}>
            {children}
        </ApiDataContext.Provider>
    );
};


