import { NavLink, Outlet } from "react-router-dom"
import "./Auth.css"
import { useEffect } from "react" 
import { useNavigate } from "react-router-dom" 

const Auth = () => {
  const navigate = useNavigate()
    useEffect(() => {
        navigate('/auth/login')
    }, [])
  return (
    <div className='auth'>
      <div className="auth__container">
        <nav>
          <ul>
            <li><NavLink to="/auth/login">Login</NavLink></li>
            <li><NavLink to="/auth/register">Register</NavLink></li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}

export default Auth