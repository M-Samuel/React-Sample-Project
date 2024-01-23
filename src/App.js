import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { StoreContext } from './store/StoreContext'
import { GenerateStateAndDispatch } from './reducers/RootReducer';
import AppRouter from './Router'
import { Link, NavLink, RouterProvider } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './components/Header';



function App() {
  const store = GenerateStateAndDispatch();

  return (
    <StoreContext.Provider value={store}>
      <Header></Header>
      <RouterProvider router={AppRouter} />
    </StoreContext.Provider>
  );
}

export default App;
