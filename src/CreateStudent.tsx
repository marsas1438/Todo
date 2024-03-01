import React, { useState } from 'react'
import './App.css'
import { Student } from "./types/Student.ts"


interface props {
  onSubmit: (student: Student) => void
}
const CreateStudent = ({onSubmit}:props)=> {

  const [student, setStudent] = useState<Student>({
    id:0,
    career: '',
    firstName: '',
    surName: '',
    birthDate: new Date(),
    sex: 'M',
  });

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const isInvalidForm = Object.values(student).some((attr) => attr === '')

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setStudent({
      ...student,
      birthDate: date,
    });
  };

  return (
    <section className="addForm">
      <div className="formNuevo">
          <label>
            Nombre: <input type="text" name="firstName" value={student.firstName} onChange={handleTextChange} className="nombreAgregar"/>
          </label>
          <br />
          <label>
            Apellido: <input type="text" name="surName" value={student.surName} onChange={handleTextChange} className="nombreAgregar"/>
          </label>
          <br />
          <label>
            Fecha de Nacimiento: <input type="date" name="birthDate" value={new Date(student.birthDate).toISOString().split('T')[0]} onChange={handleDateChange} className="nombreAgregar"/>
          </label>
          <br />
          <label>
            Carrera: <input type="text" name="career" value={student.career} onChange={handleTextChange} className="nombreAgregar"/>
          </label>
          <br />
          <label>
            Género:
            <select name="sex" value={student.sex} onChange={handleTextChange} className="nombreAgregar">
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </label>
          <br /><br />
          <div className={`botonAgregar ${isInvalidForm ? 'disabled' : 'enabled'}`}>
          <button className='botonAgregar' onClick={() => onSubmit(student)} disabled={isInvalidForm}>Crear Estudiante</button>
          </div>
      </div>
    </section>
  )
}

export default CreateStudent
