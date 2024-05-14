import Header from "./Header";
import "./Account.css";
import { CgProfile } from "react-icons/cg";

function Account() {
  return (
    <div>
      <Header />
      <div className="container-3">
        <div className="item">
          <CgProfile size={155} />
          <h1>Account created successfully...</h1>
        </div>
      </div>
    </div>
  );
}

export default Account;
