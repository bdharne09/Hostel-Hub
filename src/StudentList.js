import React, { useState, useContext, useEffect } from "react";
import StudentContext from "./StudentContext"; // Import StudentContext
import Modal from "./Modal";
import { MdDelete } from "react-icons/md";

import "./StudentList.css";
import { PiPlaceholder } from "react-icons/pi";

function StudentList() {
  const [editedStudentIndex, setEditedStudentIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEnteringTime, setEditedEnteringTime] = useState("");
  const [editedLeavingTime, setEditedLeavingTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { students, updateStudent, deleteStudent } = useContext(StudentContext); // Get updateStudent function from context
  const [updatedStudents, setUpdatedStudents] = useState([]);

  const openModal = (index) => {
    const student = students[index];
    setEditedStudentIndex(index);
    setEditedName(student.name);
    setEditedEnteringTime(student.enteringTime);
    setEditedLeavingTime(student.leavingTime);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveEdit = () => {
    const updatedStudent = {
      name: editedName,
      enteringTime: editedEnteringTime,
      leavingTime: editedLeavingTime,
    };

    updateStudent(editedStudentIndex, updatedStudent); // Update student using context function
    closeModal();
  };

  const handleDeleteStudent = (index) => {
    deleteStudent(index);
  };

  useEffect(() => {
    setUpdatedStudents(students);
  }, [students]);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students ? (
        <ul>
          {updatedStudents.map((student, index) => (
            <li key={index}>
              <div>
                <span>Name: {student.name} </span>
                <span> Entering Time: {student.enteringTime} </span>
                <span> Leaving Time: {student.leavingTime} </span>
                <button
                  className="editBtn"
                  onClick={() => {
                    openModal(index);
                  }}
                >
                  Edit
                </button>

                <button onClick={() => handleDeleteStudent(index)}>
                  <MdDelete className="delBtn" size={32} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Edit Student</h2>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="text"
          value={editedEnteringTime}
          onChange={(e) => setEditedEnteringTime(e.target.value)}
          placeholder="Enter Entering Time"
        />
        <input
          type="text"
          value={editedLeavingTime}
          onChange={(e) => setEditedLeavingTime(e.target.value)}
          placeholder="Enter Leaving Time"
        />
        <button onClick={handleSaveEdit}>Save</button>
      </Modal>
    </div>
  );
}

export default StudentList;
