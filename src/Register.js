import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    // AAKASH you can write your code here...
  }

  return (
    <div className=" flex justify-center items-center h-screen bg-blue-700">
      {/* {loading && <Loader />} */}
      <div className=" bg-slate-950 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Register
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" border-solid border-2 border-slate-50 bg-slate-950 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-white"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-slate-950 border-2 border-solid mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-white"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={handleRegister}
            className=" bg-blue-700 w-full text-white font-bold  px-2 py-2 rounded-lg"
          >
            Register
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Already have an account?
            <Link className=" text-yellow-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Register;
