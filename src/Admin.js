import Header from "./Header";
import StudentList from "./StudentList";
import "./Admin.css";

let students = [
  {
    name: "Bob",
    enteringTime: "11:30",
    leavingTime: "17:00",
    number: "",
    email: "",
  },
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
  {
    name: "Bob",
    enteringTime: "11:30",
    leavingTime: "17:00",
    number: "",
    email: "",
  },
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
  {
    name: "Bob",
    enteringTime: "11:30",
    leavingTime: "17:00",
    number: "",
    email: "",
  },
];

function Admin() {
  return (
    <div>
      <Header />
      <StudentList />
    </div>
  );
}

export default Admin;
