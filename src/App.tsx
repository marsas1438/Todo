import viteLogo from '/vite.svg'
import indraLogo from './assets/indra.svg'
import './App.css'
import GetUser from './GetUser'
import CreateUser from './CreateUser'
import listUsers from './UserList'

function App() {
  return (
    
    <>
      <section>
        <a href="https://www.indraweb.net" target="_blank">
          <img src={indraLogo} className="logo" alt="Indra logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </section>
      <h1>Lista Usuarios</h1>
      <CreateUser></CreateUser>
      {listUsers.map(txt => GetUser(txt))}
      
    </>
  )
}

export default App
