import React, { Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar/>
              <div className="container">
                <Alerts/>
                <Routes>
                  <Route element={<PrivateRoute />}>
                    <Route exact path='/'element={<Home/>} />
                  </Route>
                  <Route exact path='/about' element={<About/>} />
                  <Route exact path='/register' element={<Register/>} />
                  <Route exact path='/login' element={<Login/>} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
