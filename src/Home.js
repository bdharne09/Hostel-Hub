import "./Home.css";
import Header from "./Header";
import Card from "./Card";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="container-1">
        <Link to="/login">
          <Card>Admin</Card>
        </Link>
        <Link to="/login">
          <Card>Student</Card>
        </Link>
      </div>
    </div>
  );
}

export default Home;
