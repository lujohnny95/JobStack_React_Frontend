import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { FindJobs } from './pages/FindJobs';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />      
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="findjobs" element={<FindJobs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
