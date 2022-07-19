import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const HomePage = () => {
  //esto hace que traiga los datos
  const {user} = useContext(UserContext)

  //esos datoa globales los impirmo en pantalla
  return (
    <>
    <h1>Home</h1>
    <hr />
    <pre>
            { JSON.stringify( user, null, 3 ) }
          </pre>
    </>
  )
}
