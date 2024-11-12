import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Alerts from "./Alerts";
import AuthInputElementLayoutWrapper from "./AuthInputElementLayoutWrapper";

export default function Signup() {
  const [show, setShow] = useState(0);
  const [ActivateAlert, setActivateAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    statusCode: "",
    msg: "",
  });
  const adminLogin = localStorage.getItem("adminLogged");
  const userLogged = localStorage.getItem("userLogged");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    collegeId: 21038201000,
    password: "",
  });
  const [isPassInFocus, setIsPassInFocus] = useState(false);

  function handleShow() {
    if (show === 1) {
      setShow(0);
    } else {
      setShow(1);
    }
  }
  function handleSubmit() {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.collegeId === 21038201000 ||
      formData.emailId === "" ||
      formData.password === ""
    ) {
      alert("Fill the all details");
    } else {
      const postData = {
        name:
          formData.firstName.charAt(0).toUpperCase() +
          formData.firstName.slice(1) +
          " " +
          formData.lastName.charAt(0).toUpperCase() +
          formData.lastName.slice(1),
        email: formData.emailId,
        collegeId: formData.collegeId,
        password: formData.password,
      };
      axios({
        method: "post",
        url: "https://wax-nostalgic-macaroni.glitch.me/api/auth/signup",
        data: postData,
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          //handle success
          if (response.data.statusCode === 200) {
            localStorage.setItem("adminLogged", false);
            localStorage.setItem("userLogged", true);
            localStorage.setItem("id", formData.collegeId);
            setActivateAlert(true);
            setAlertMsg({
              statusCode: response.data.statusCode,
              msg: response.data.message,
            });
            window.location.href = "/home";
          } else {
            setActivateAlert(true);
            setAlertMsg({
              statusCode: response.data.statusCode,
              msg: response.data.message,
            });
          }
        })
        .catch(function (response) {
          //handle error
          console.error(response);
        });
    }
  }
  return (
    <>
      {adminLogin === "true" ? (
        <Navigate to="/admin/dashboard" />
      ) : userLogged === "true" ? (
        <Navigate to="/home" />
      ) : (
        <>
          <div className="min-w-screen min-h-screen flex">
            <div
              className="w-full  bg-cover bg-center "
              style={{
                backgroundImage: `url("/signup-img.jpg")`,
              }}
            ></div>
            <div className="w-full flex justify-center items-center flex-col">
              <div className="flex w-full flex-col items-center mb-10">
                <h1 className="font-bold  text-3xl text-gray-700 pb-4">
                  Register Now
                </h1>

                <p className="">Sign up to check out all the events</p>
              </div>
              <div>
                <div className="flex mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          });
                        }}
                        value={formData.firstName}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          });
                        }}
                        value={formData.lastName}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="cId" className="text-xs font-semibold px-1">
                      College ID
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa-solid fa-id-badge"></i>
                      </div>
                      <input
                        type="number"
                        name="cId"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="21038201000XX"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            collegeId: e.target.value,
                          });
                        }}
                        value={formData.collegeId}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold px-1"
                    >
                      Email ID
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa-solid  fa-envelope"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@gmail.com"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            emailId: e.target.value,
                          });
                        }}
                        value={formData.emailId}
                      />
                    </div>
                  </div>
                </div>
                <AuthInputElementLayoutWrapper>
                  <div className="">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold px-1"
                    >
                      Password
                    </label>

                    <div
                      className={`flex border-2 outline-none rounded-lg ${
                        isPassInFocus ? "border-indigo-500" : "border-gray-200"
                      }`}
                    >
                      <div className="w-10 ml-1 text-center pointer-events-none flex items-center justify-center px-2">
                        <i className="fa-solid fa-lock z-10"></i>
                      </div>

                      <input
                        type={show ? "text" : "password"}
                        name="password"
                        className="w-full pr-3 py-2 outline-none"
                        placeholder="Password"
                        onFocus={() => {
                          setIsPassInFocus(true);
                        }}
                        onBlur={() => {
                          setIsPassInFocus(false);
                        }}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          });
                        }}
                        value={formData.password}
                      />
                      <div
                        className="w-10 px-1 text-center flex items-center justify-center rounded-lg border-gray-200 outline-none focus:border-indigo-500 bg-white"
                        onClick={handleShow}
                      >
                        {show ? (
                          <i className="fa-solid fa-eye-slash"></i>
                        ) : (
                          <i className="fa-solid fa-eye"></i>
                        )}
                      </div>
                    </div>
                  </div>
                </AuthInputElementLayoutWrapper>

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5 mt-8 flex flex-col items-center">
                    <button
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                    <p className="text-gray-800 mt-5">
                      Already have an Account?{" "}
                      <Link to={"/login"} className="underline text-black">
                        {" "}
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden">
            {ActivateAlert === true ? (
              alertMsg.statusCode === 200 ? (
                <Alerts msg={alertMsg.msg} type={200} />
              ) : (
                <Alerts msg={alertMsg.msg} type={400} />
              )
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </>
  );
}
