import './App.css'
import { Student } from "./types/Student.ts"

interface props {
  student: Student
  onDelete: (id: number) => void
}

const GetStudent = ({student,onDelete}:props)=>  {

  return (
    <section className="itemLista">
      <hr></hr>
      <tr key={student.id}>
            <td className="nombreLista">{student.firstName} {student.surName}</td>
            <td className="nombreLista">{new Date(student.birthDate).toISOString().split('T')[0]}</td>
            <td className="nombreLista">{student.sex}</td>
            <td className="nombreLista">{student.career}</td>
            <td><button onClick={() => onDelete(student.id)} className="botonEliminar">Eliminar</button></td>
          </tr>
    </section>
  )
}

export default GetStudent
