// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TableWithPagination from './components/Table';
import { useState } from 'react';
import Modal from './components/Modal';

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
    <div className="App">
      {/* <TableWithPagination columns={columns} data={data} rowsPerPage={2}/> */}
      {/* <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal Title">
        <p className="text-gray-600">Working fine</p>
      </Modal> */}
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
