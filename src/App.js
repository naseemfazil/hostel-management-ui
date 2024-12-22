// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TableWithPagination from './components/Table';
import { useState } from 'react';
import Modal from './components/Modal';
import HotelViewandEdit from './components/HotelViewandEdit';
import Navbar from './components/NavBar';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const columns = ['ID', 'Name', 'Email', 'Role'];
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Sam Johnson', email: 'sam@example.com', role: 'Manager' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
    { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'User' },
    // Add more data rows as needed
  ];
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Navbar} />
        <Route path="/hotel-view-edit" component={HotelViewandEdit} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>


  );
}

export default App;

