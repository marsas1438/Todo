import './App.css'
import { Teacher } from "./types/Teacher.ts"

const GetTeacher = (teacher:Teacher)=>  {

  return (
    <section>
      <label className="itemTeacher"><strong>Nombre:</strong> {teacher.firstName} {teacher.surName} </label>
      <br />
      <label className="itemTeacher"><strong>Fecha de nacimiento:</strong> {teacher.birthDate.toISOString().split('T')[0]} </label>
      <br />
      <label className="itemTeacher"><strong>Género:</strong> {teacher.sex} </label>
      <br />
      <label className="itemTeacher"><strong>Categoría:</strong> {teacher.category} </label>
      <br /><br />
    </section>
  )
}

export default GetTeacher
