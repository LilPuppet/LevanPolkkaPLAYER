
'use client'
import React, {createContext, ReactNode, useState} from "react";
type HomeContextData = {//quais dados e operações serão disponibilizadas
    aux: number;
    play: () =>void;
    pause: () =>void;
    stop: () =>void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}
const HomeContextProvider = ({children}:ProviderProps) => {//provedor das informações
    const [aux, setAux] = useState(0);
    const play = () => {
        setAux(1);
    }
    const pause = () => {
        setAux(0);
    }
    const stop = () => {
        setAux(-1);
    }

    return(
        <HomeContext.Provider value={
            {
                aux, play, pause, stop
            }
        }>
           {children} 
        </HomeContext.Provider>
    )
}

export default HomeContextProvider