// StudentContext.js
import React, { createContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      name: "John",
      enteringTime: "09:00",
      leavingTime: "14:30",
      number: "",
      email: "",
    },
    {
      name: "Alice",
      enteringTime: "10:15",
      leavingTime: "15:45",
      number: "",
      email: "",
    },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
    console.log(student);
  };

  const updateStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
