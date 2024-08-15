import React, { useState } from "react";
import { darklogo } from "../assets/index";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight } from "@mui/icons-material";
import { RotatingLines } from "react-loader-spinner";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/amazonSlice";
const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [userEmailerr, setUserEmailErr] = useState("");
  const [userpasserr, setUserPassErr] = useState("");
  // loading state
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            setUserInfo({
              _id: user.uid,
              userName: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          setLoading(false);
          setSuccessMsg("Logged in  Successfully ! Welcome back");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid email")) {
            setUserEmailErr("Invalid email");
          }
          if (errorCode.includes("auth/wrong password")) {
            setUserPassErr("Wrong password ! Try Again");
          }
          console.log("something is up, try with correct credentials");
        });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        {successMsg ? (
          <div className="w-full flex justify-center items-center py-32">
            <p className="border-[1px] border-green-600 text-green-500 font-titleFont text-lg font-semibold px-6 py-2">
              {successMsg}
            </p>
          </div>
        ) : (
          <form className="w-[350px] mx-auto flex flex-col items-center">
            <NavLink to={"/"}>
              <img className="w-32 mt-2" src={darklogo} alt="signinlogo" />
            </NavLink>
            <div className="w-full border border-zinc-200 p-6 mt-2">
              <h2 className="font-titleFont text-3xl font-medium mb-4">
                Sign-In
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">e-mail or phone number</p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                    type="email"
                    autoComplete="username"
                  />
                  {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errEmail}
                    </p>
                  )}
                  {userEmailerr && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userEmailerr}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">password</p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                    type="password"
                    autoComplete="current-password"
                    fdprocessedid="7xnjqs"
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {errPassword}
                    </p>
                  )}
                  {userpasserr && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>
                      {userpasserr}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                >
                  Continue
                </button>
                {loading && (
                  <div className="flex justify-center">
                    <RotatingLines
                      visible={true}
                      height="96"
                      width="50"
                      color="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-black leading-4 mt-4">
                By continue you agrees to Amazon's{" "}
                <span className="text-blue-600">conditions of use </span>and{" "}
                <span className="text-blue-600">privacy notice</span>
              </p>
              <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                <ArrowRight />{" "}
                <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1  ">
                  Need Help?
                </span>
              </p>
            </div>
            <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
              <span className="w-1/3 text-center">New to Amazon?</span>
              <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            </p>
            <NavLink className={"w-full"} to={"/registration"}>
              <button className=" w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to bg-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput  ">
                create your Amazon Account
              </button>
            </NavLink>
          </form>
        )}
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200  flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6">
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-75">
            conditions of use
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-75">
            privacy notice
          </p>
          <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-75">
            copyright
          </p>
        </div>
        <p className="text-xs xs:text-sm xs:text-center sm:text-base md:text-lg text-gray-600 px-4 xs:px-4 sm:px-8 md:px-10">
          © 2024 Amazon Clone. All rights reserved. This site is a demonstration
          project and not affiliated with Amazon.com.
        </p>
      </div>
    </div>
  );
};

export default Signin;
