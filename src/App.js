import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';
import Error from './Pages/Shared/Error';
import RequireAuth from './Pages/Login/RequireAuth';
import Login from './Pages/Login/Login';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/purchase/:id" element={
    <RequireAuth>
      <Purchase />
      </RequireAuth>
      }/>
   <Route path="/login" element={<Login />}/>




      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
