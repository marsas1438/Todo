import { createRoot } from "react-dom/client"
import listUsers from './UserList'
import React, { useState } from 'react'
import App from './App.tsx'
import './App.css'

const CreateUser = ()=> {

  const[name,setName]= useState('');

  const container = document.getElementById("root")
  const root = createRoot(container!);

  function addUser() {
    listUsers.push(name);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  return (
    <section className="addForm">
      <div className="formNuevo">
        <input name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="nombreAgregar"/>
      </div>
      <button onClick={addUser} className="botonAgregar">Agregar</button>
    </section>
  )
}

export default CreateUser
