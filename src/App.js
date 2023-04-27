import Leftbar from "./Components/leftbar/Leftbar";
import Navbar from "./Components/navbar/Navbar";
import Rightbar from "./Components/rightbar/Rightbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register.jsx";
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.jsx'
import "./style.scss"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "./context/authcontext";

function App() {
  const {currentUser} = useContext(AuthContext)
  const {darkMode}=useContext(DarkModeContext)
  
  const Layout =()=>{ 
    return (
      <div className={`theme-${darkMode?"dark":"light"}`}>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <Rightbar/>

        </div>
      </div>
    );
  };
  const ProtectedRoute =({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path:"/",
      element:(<ProtectedRoute>
        <Layout />
      </ProtectedRoute>),
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
