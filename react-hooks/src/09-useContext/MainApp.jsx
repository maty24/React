import {Route, Routes, Navigate, } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> */}
        <Navbar />
        <hr />


        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } />

          {/* <Route path="/*" element={ <LoginPage /> } /> */}
          <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>
    </UserProvider>
  )
}

  //el link es como el a la diferencia que no hace una recarga de todo y solo carga el componente que llamamps y para modificar usamos el a en css

//el /* es como un comoding y si escribo culaquier cosa me rediceriona al loginpage o cualuqer cosa que le especifique y el navigate mueve a la ruta espcificada