import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <TableUsers />
      </Container>
      <ModalAddNew 
      />
    </div>
  );
}

export default App;
