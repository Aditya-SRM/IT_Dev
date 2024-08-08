import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
// import Signup from './Signup';
// import Signin from './Signin';
// import About from './About';
// import Blog from './Blog';
// import Main from './Main';
// import Support1 from './support1';
// import Support from './Support';
// import { AuthProvider } from './AuthContext';
// import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
         </Routes>
      </Router>
    
  );
};

export default App;
