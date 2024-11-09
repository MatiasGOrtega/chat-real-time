import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useState } from "react";

function Login() {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, errors, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg bg-gray-950">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">User name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
            {errors?.username && (
              <span className="text-red-500 text-sm">{errors.username}</span>
            )}

          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />

            {errors?.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {!loading ? (
                "Login"
              ) : (
                <span className="loading loading-spinner"></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
