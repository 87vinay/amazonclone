import React, { useState } from "react";
import { darklogo } from "../assets/index";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [errusername, setErrUserName] = useState("");
  const [erremail, setErrEmail] = useState("");
  const [errpassword, setErrPassword] = useState("");
  const [errcpassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");
  // loading state
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handelName = (e) => {
    setUserName(e.target.value);
    setErrUserName("");
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handelCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };
  // e-mail Validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const handelRegistration = (e) => {
    e.preventDefault();
    if (!username) {
      setErrUserName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
      setFirebaseErr("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Enter valid email");
      }
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("password must be atleast 6 characters");
      }
    }
    if (!cpassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (!cpassword !== password) {
        setErrCPassword("password not match");
      }
    }
    if (
      username &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cpassword &&
      cpassword === password
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fquick-saves--873628027698515699%2F&psig=AOvVaw04S5yG2USppJl-0f1y3Gh0&ust=1721892051995000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID34P-Rv4cDFQAAAAAdAAAAABAE",
          });
          setLoading(false);
          setSuccessMsg("Account Created Successfully !");
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email already in use , try another one");
          }
        });
      setUserName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[370px] mx-auto flex flex-col items-center">
          <NavLink to={"/"}>
            <img className="w-32 mt-2" src={darklogo} alt="amazonlogo" />
          </NavLink>
          <div className="w-full border border-zinc-200 p-6 mt-2">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  onChange={handelName}
                  value={username}
                  type="text"
                  autoComplete="username"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none  focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errusername && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                    <span className="italic font-titleFont fontextrabold text-base">
                      !
                    </span>
                    {errusername}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or phone number</p>
                <input
                  onChange={handelEmail}
                  value={email}
                  type="email"
                  autoComplete="username"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {erremail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont fontextrabold text-base">
                      !
                    </span>
                    {erremail}
                  </p>
                )}
                {firebaseErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont fontextrabold text-base">
                      !
                    </span>
                    {firebaseErr}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">password</p>
                <input
                  onChange={handelPassword}
                  value={password}
                  type="password"
                  autoComplete="current-password"
                  fdprocessedid="7xnjqs"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errpassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                    <span className="italic font-titleFont fontextrabold text-base">
                      !
                    </span>
                    {errpassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  password must be atleast 6 characters
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  onChange={handelCPassword}
                  value={cpassword}
                  type="password"
                  autoComplete="current-password"
                  fdprocessedid="7xnjqs"
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                />
                {errcpassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    {" "}
                    <span className="italic font-titleFont fontextrabold text-base">
                      !
                    </span>
                    {errcpassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  password must be atleast 6 characters
                </p>
              </div>
              <button
                onClick={handelRegistration}
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
              {successMsg && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-base font-titleFont font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                  >
                    {successMsg}
                  </motion.p>
                </div>
              )}
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use </span>and{" "}
              <span className="text-blue-600">Privace Notice.</span>
            </p>
            <div>
              <p className="text-xs text-black mb-1">
                Already have an account?{" "}
                <NavLink to={"/signin"}>
                  <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Sign in{" "}
                    <span>
                      <ArrowRight />
                    </span>
                  </span>
                </NavLink>
              </p>
              <p className="text-xs text-black -mt-2">
                Buying for work?{" "}
                <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
        </form>
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

export default Registration;
