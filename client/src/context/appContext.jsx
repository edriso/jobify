import { createContext, useContext, useState } from 'react';

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const AppContext = createContext();

function AppProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
