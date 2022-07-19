import {useState} from 'react'
import { UserContext } from './userContext'

const user = {
  id: 123,
  name: 'Matias',
  email: 'matiasgodoy072@gmail.com'
}

export const UserProvider = ({ children }) => {
  //esto hace que cualquier componente puede usar la informacion que le puse en el value de provider

  const [user, setUser] = useState();

  return (
      // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
      <UserContext.Provider value={{ user, setUser }}>
          { children }
      </UserContext.Provider>
  )
}