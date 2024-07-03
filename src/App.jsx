import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './rautes/home/Home'
import Auth from './rautes/auth/Auth'
import Nav from './components/nav/Nav'
import Login from './rautes/auth/login/Login'
import Register from './rautes/auth/register/Register'
import Contact from './rautes/contact/Contact'
import NotFound from './rautes/404/404'
import Shows from './rautes/shows/Shows'
import SingleShows from './rautes/single-show/SingleShows'

function App() {
  const { pathname } = useLocation();
  return (
    <div className='bg'>
      {
        !pathname.includes("/auth") && !pathname.includes("/not-found") && <Nav/>
      }
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/single-show/:id" element={<SingleShows/>} />
        <Route path="/shows" element={<Shows/>} />
        <Route path="/not-found" element={<NotFound/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
