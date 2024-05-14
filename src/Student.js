import { useState, useContext } from "react";
import Header from "./Header";
import StudentContext from "./StudentContext";
import "./Student.css";

function Student() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = () => {
    const newStudent = {
      name: name,
      number: number,
      email: email,
      enteringTime: null,
      leavingTime: null,
    };

    addStudent(newStudent);
    // Clear input fields after submitting
    setName("");
    setNumber("");
    setEmail("");
    console.log(newStudent);
    window.location.href = "/account";
  };

  return (
    <div>
      <Header />
      <div className="container-2">
        <h2 className="text-2xl font-bold underline"> Students Details </h2>
        <br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
          required
        />
        <br />
        <input
          type="tel"
          id="mobile"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter your mobile number"
          required
        />
        <br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Student;
