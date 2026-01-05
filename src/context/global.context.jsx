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

<<<<<<< HEAD
<<<<<<< HEAD
export const useGlobalState = () => useContext(GlobalContext);
=======
export const useGlobalState = () => useContext(GlobalContext);

>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
=======
export const useGlobalState = () => useContext(GlobalContext);

>>>>>>> f1840473b468f7eb49f49c505ca4f8f24323e2e3
