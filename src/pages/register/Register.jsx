import { Link } from "react-router-dom"
import "./Register.scss"

const Register = () => {
  return (
    <div className="Register">
      <div className="card">
        <div className="left">
            <h1>Lets Login</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero facilis numquam iusto, ipsum id provident quod porro excepturi molestiae quos!</p>
            <span>Do  you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form >
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email"/>
                <input type="Password" placeholder="Password" />
                <input type="text" placeholder="Name"/>
                <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
