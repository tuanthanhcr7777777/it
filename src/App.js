import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import NotFound from './components/NotFound';

function App() {

  const { user } = useContext(UserContext)

  return (
    <div className="app-container">
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/users' element={<TableUsers />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
