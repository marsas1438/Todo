
import './App.css'
import { Course } from './types/Course'

const data:Course = {
    "id": 1,
    "assignment": "React JS",
    "teacher": {
        "id": 1,
        "category": "Front end" ,
        "firstName": "Jeison Antonio",
        "surName": "Diaz Palmera",
        "birthDate": new Date('1993-02-04'),
        "sex": "M" 
    },
    students: [
        {
            "id": 1,
            "career": "Software engineering" ,
            "firstName": "Marco",
            "surName": "Sastoque",
            "birthDate": new Date('1995-04-29'),
            "sex": "M" 
        },
        {
            "id": 2,
            "career": "Software engineering" ,
            "firstName": "Lina",
            "surName": "Medina",
            "birthDate": new Date('1995-03-29'),
            "sex": "F" 
        },
        {
            "id": 3,
            "career": "Software engineering" ,
            "firstName": "Carlos",
            "surName": "Perez",
            "birthDate": new Date('1999-01-07'),
            "sex": "M" 
        }
    ]
}

export default data
