import { Student } from "./Student";
import { Teacher } from "./Teacher";

export interface Course {
    id: number,
    assignment: string,
    teacher: Teacher,
    students: Student[]
}