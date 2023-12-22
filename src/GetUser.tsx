import { createRoot } from "react-dom/client"
import listUsers from './UserList'
import React from 'react'
import App from './App.tsx'
import './App.css'

const GetUser = (nombre:any)=>  {

  const container = document.getElementById("root")
  const root = createRoot(container!);

  function removeUser() {
    
    const index = listUsers.indexOf(nombre, 0);
    console.log(index)
    console.log(nombre)
    if (index > -1) {
      listUsers.splice(index, 1);
    }
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  return (
    <section className="itemLista">
      <hr></hr>
      <label className="nombreLista">{nombre}</label>
      <button onClick={removeUser} className="botonEliminar">Eliminar</button>
    </section>
  )
}

export default GetUser
