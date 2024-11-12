import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Alerts from "./Alerts";

export default function Login() {
  const [show, setShow] = useState(0);
  const [ActivateAlert, setActivateAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    statusCode: "",
    msg: "",
  });
  const [formData, setFormData] = useState({
    collegeId: 21038201000,
    password: "",
  });
  const adminLogin = localStorage.getItem("adminLogged");
  const userLogged = localStorage.getItem("userLogged");
  const [isPassInFocus, setIsPassInFocus] = useState(false);

  function handleShow() {
    if (show === 1) {
      setShow(0);
    } else {
      setShow(1);
    }
  }
  function handleSubmit() {
    if (formData.collegeId === 21038201000 || formData.password === "") {
      alert("Please fill all the details");
    } else {
      axios({
        method: "post",
        url: "https://wax-nostalgic-macaroni.glitch.me/api/auth/login",
        data: formData,
        headers: { "Content-Type": "application/json" },
      })
        .then(function (response) {
          //handle success
          if (response.data.statusCode === 200) {
            if (response.data.role === "Admin") {
              localStorage.setItem("adminLogged", true);
              localStorage.setItem("userLogged", false);
              localStorage.setItem("id", formData.collegeId);
              setActivateAlert(true);
              setAlertMsg({
                statusCode: response.data.statusCode,
                msg: response.data.message,
              });

              window.location.href = "/admin/dashboard";
            } else {
              localStorage.setItem("adminLogged", false);
              localStorage.setItem("userLogged", true);
              localStorage.setItem("id", formData.collegeId);
              setActivateAlert(true);
              setAlertMsg({
                statusCode: response.data.statusCode,
                msg: response.data.message,
              });
              window.location.href = "/home";
            }
          } else {
            setActivateAlert(true);
            setAlertMsg({ ...alertMsg, statusCode: response.data.statusCode });
            setAlertMsg({ ...alertMsg, msg: response.data.message });
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
      <div className="min-w-screen min-h-screen flex">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="flex w-full flex-col items-center mb-10">
            <h1 className="font-bold  text-3xl text-gray-700 pb-4">Login</h1>

            <p className="">Login to catch up on all the events</p>
          </div>
          <div className="">
            <div className="flex mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  College ID
                </label>
                <div className="flex">
                  <div className="w-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="fa-solid fa-id-badge z-10"></i>
                  </div>
                  <input
                    type="number"
                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="21038201000XX"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        collegeId: parseInt(e.target.value),
                      });
                    }}
                    value={formData.collegeId}
                  />
                </div>
              </div>
            </div>
            <div className="flex mx-3">
              <div className="w-full px-3 mb-12">
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
                      setFormData({ ...formData, password: e.target.value });
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

                <div className="text-sm pt-2">
                  <a
                    href="/forgetPassword"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div className="flex mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p className="text-gray-800 mt-4">
                  Don't have an account?{" "}
                  <Link to={"/signup"} className="underline text-black">
                    Create an Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full  bg-cover bg-center "
          style={{
            backgroundImage: `url("/login-img.jpg")`,
          }}
        ></div>
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
  );
}
