import { Person } from "./Person";

export interface Teacher extends Person{
    id: number,
    category: string 
}