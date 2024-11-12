import React from "react";

const AuthInputElementLayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex mx-3">
        <div className="w-full px-3 mb-5">{children}</div>
      </div>
    </>
  );
};

export default AuthInputElementLayoutWrapper;
