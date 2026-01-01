import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/user.reducer';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalContext);

