import axios from 'axios';

const API_URL = 'https://backreact-dev-drsa.2.us-1.fl0.io/students';

export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStudent = async (newStudent: any) => {
  try {
    const response = await axios.post(API_URL, newStudent);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async (id: number) => {
  try {
    const response = await axios.delete(API_URL+'/'+id);
    return response.data;
  } catch (error) {
    throw error;
  }
};