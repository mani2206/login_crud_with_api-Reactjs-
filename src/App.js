import './App.css';
import LoginModule from './components/pageComponents/LoginModule';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/pageComponents/ProtectedRoute';
import Master from './components/pageComponents/Master';
import DashBoard from './components/pageComponents/Dashboard';
import Employee from './components/pageComponents/Employee';
import AddEmployee from './components/layerComponents/AddEmployee';
import UpdateEmployee from './components/layerComponents/UpdateEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginModule />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Master />}>
              <Route path='/' element={<DashBoard />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/view-employee/:id" element={<Employee />} />
              <Route path="/update-employee/:id" element={<UpdateEmployee />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
