import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Purchase from "./Pages/Purchase/Purchase";
import Error from "./Pages/Shared/Error";
import RequireAuth from "./Pages/Login/RequireAuth";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Dashboard/Orders";
import Reviews from "./Pages/Dashboard/Reviews";
import Profile from "./Pages/Dashboard/Profile";
import Blogs from "./Pages/Blogs/Blogs";
import Users from "./Pages/Dashboard/Users";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "./hooks/useAdmin";
import auth from "./firebase.init";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import AllOrders from "./Pages/Dashboard/AllOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Loading from "./Pages/Shared/Loading";
import Footer from "./Pages/Shared/Footer";
import Test from "./Pages/Home/Test";

function App() {
  const [user,loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
if(loading){
  return <Loading></Loading>
}
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
        {!admin &&   <Route index element={<Orders></Orders>}></Route>}
        {!admin &&     <Route path="review" element={<Reviews></Reviews>}></Route>}
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="update" element={<UpdateProfile></UpdateProfile>}></Route>
          {admin && <Route path="users" element={<Users></Users>}></Route>}
          {admin && <Route path="allorders" element={<AllOrders></AllOrders>}></Route>}
          {admin && <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>}
          {admin && <Route path="mngproduct" element={<ManageProduct></ManageProduct>}></Route>}
        </Route>

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
