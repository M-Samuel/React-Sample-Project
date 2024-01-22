import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, createContext } from 'react'
import { initialState, store, reducer } from './store/store';
import Home from './components/Home'

export const StoreContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = {state: state, dispatch: dispatch}
  return (
    <StoreContext.Provider value={store}>
      <Home></Home>
    </StoreContext.Provider>
  );
}

export default App;
