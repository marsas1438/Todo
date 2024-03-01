import viteLogo from '/vite.svg'
import indraLogo from './assets/indra.svg'
import './App.css'
import GetStudent from './GetStudent'
import CreateStudent from './CreateStudent'
import data from './CommonData'
import { Student } from './types/Student'
import { useEffect, useState } from 'react'
import GetTeacher from './GetTeacher'
import { getStudents, createStudent, deleteStudent } from './services/StudentsService'

function App() {

  const [students, setStudents]  = useState<Student[]>([]);

  const queryStudents = async () => {
    try {
      const dataStudents = await getStudents();
      setStudents(dataStudents);
    } catch (error) {
      console.error('Error al cargar estudiantes:', error);
    }
  };

  const createNewStudent = async (student: Student) => {
    try {
      const newStudent:Student={
        id: 0,
        career: student.career,
        firstName: student.firstName,
        surName: student.surName,
        birthDate: student.birthDate,
        sex: student.sex 
      }
      await createStudent(newStudent);
      queryStudents();
    } catch (error) {
      console.error('Error al crear estudiante:', error);
    }
  };

  const removeStudent = async (id: number) => {
    try {
      await deleteStudent(id);
      queryStudents();
    } catch (error) {
      console.error('Error al crear estudiante:', error);
    }
  };

  const onDelete = (id: number) => {
    removeStudent(id)
  }

  const onSubmit = (student: Student) => {
    createNewStudent(student);
  }

  useEffect(() => {
    queryStudents();
  }, []);

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
