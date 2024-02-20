import { Person } from "./Person";

export interface Student extends Person{
    id: number,
    career: string
}