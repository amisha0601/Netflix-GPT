import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
          alt=""
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder=" Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-2 w-full bg-gray-700 rounded-lg"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded-lg"
        ></input>
        <button className="p-3 my-5 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
