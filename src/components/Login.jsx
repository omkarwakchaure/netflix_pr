import React from "react";
import Header from "./Header";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = React.useState(true);
  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="Netflix background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {showSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!showSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
          {showSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-xs py-2 cursor-pointer" onClick={toggleSignInForm}>
          {showSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
