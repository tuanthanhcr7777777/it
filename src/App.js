import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/users' element={<TableUsers />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
