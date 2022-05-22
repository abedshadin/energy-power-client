import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';
import Error from './Pages/Shared/Error';
import RequireAuth from './Pages/Login/RequireAuth';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orders from './Pages/Dashboard/Orders';
import Reviews from './Pages/Dashboard/Reviews';
import Profile from './Pages/Dashboard/Profile';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="purchase/:id" element={
    <RequireAuth>
      <Purchase />
      </RequireAuth>
      }/>
       <Route path="dashboard" element={
    <RequireAuth>
      <Dashboard />
      </RequireAuth>
      }>
<Route index element={<Orders></Orders>}></Route>
<Route path="review" element={<Reviews></Reviews>}></Route>
<Route path="profile" element={<Profile></Profile>}></Route>



      </Route>
   <Route path="login" element={<Login />}/>
   <Route path="register" element={<Register />}/>




      <Route path="*" element={<Error />}/>
    </Routes>
    </div>
  );
}

export default App;
