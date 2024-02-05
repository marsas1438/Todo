import viteLogo from '/vite.svg'
import indraLogo from './assets/indra.svg'
import './App.css'
import GetStudent from './GetStudent'
import CreateStudent from './CreateStudent'
import data from './CommonData'
import { Student } from './types/Student'
import { useState } from 'react'
import GetTeacher from './GetTeacher'

function App() {

  const [students, setStudents]  = useState(data.students);

  const maxStudent = students.reduce((maxStudent, currentStudent) => {
    return currentStudent.id > maxStudent.id ? currentStudent : maxStudent;
  }, students[0]);

  const onDelete = (id: number) => {
    const newStudents = students.filter((student:Student)=>student.id !== id)
    setStudents(newStudents)
  }

  const onSubmit = (student: Student) => {
    const newStudent:Student={
      id: maxStudent.id+1,
      career: student.career,
      firstName: student.firstName,
      surName: student.surName,
      birthDate: student.birthDate,
      sex: student.sex 
    }
    //student.id = maxStudent.id+1;
    setStudents([... students ,newStudent])
  }

  return (
    
    <>
      <section>
        <a target="_blank">
          <img src={indraLogo} className="logo" alt="Indra logo" />
        </a>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </section>
      <h1>Curso: {data.assignment}</h1>
      <h2>Información profesor:</h2>
      {GetTeacher(data.teacher)}
      <hr />
      <h2>Estudiantes:</h2>
      <CreateStudent onSubmit={onSubmit}></CreateStudent>
      <table>
      <thead>
        <tr>
          <th className="nombreLista">Nombre</th>
          <th className="nombreLista">Fecha de nacimiento</th>
          <th className="nombreLista">Género</th>
          <th className="nombreLista">Carrera</th>
          <th className="nombreLista">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student : Student) => {
          return(<GetStudent
          student={student} 
          onDelete={onDelete}
          />)
        })}
      </tbody>
    </table>
      
    </>
  )
}

export default App
