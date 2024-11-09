import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, errors, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs);

    console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg bg-gray-950">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
            {errors?.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </div>
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
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            {errors?.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div>
            <label className="label cursor-pointer">
              <span className="label-text text-blue-500">Male</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                value={"male"}
                onChange={() => setInputs({ ...inputs, gender: "male" })}
              />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text text-red-400">Female</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-400"
                value={"female"}
                onChange={() => setInputs({ ...inputs, gender: "female" })}
              />
            </label>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
