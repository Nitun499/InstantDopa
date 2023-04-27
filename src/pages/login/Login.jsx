import { Link } from "react-router-dom"
import "./Login.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/authcontext"

const Login = () => {
  const {login} = useContext(AuthContext)

  const handlelogin =()=>{
    login();
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>Hello World</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero facilis numquam iusto, ipsum id provident quod porro excepturi molestiae quos!</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
             <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form >
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password"/>
                <button onClick={handlelogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
