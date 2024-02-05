import { Person } from "./Person";

export interface Student extends Person{
    id: number,
    carreer: string
}