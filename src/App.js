import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { StoreContext } from './store/StoreContext'
import { GenerateStateAndDispatch } from './reducers/RootReducer';



function App() {
  const store = GenerateStateAndDispatch();

  return (
    <StoreContext.Provider value={store}>
      <Home></Home>
    </StoreContext.Provider>
  );
}

export default App;
