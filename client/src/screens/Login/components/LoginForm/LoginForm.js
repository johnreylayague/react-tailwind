import React from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";
import ForgotPasswordLink from "./ForgotPasswordLink.js";

const LoginForm = ({ title, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-[#18181D] text-[42px] text-center leading-[1.2] font-bold">{title}</h3>
      <div className="mt-[50px] grid grid-cols-12">
        <InputField
          className={"col-span-12"}
          type={"text"}
          name={"in-username"}
          placeholder={"Username"}
        />
        <InputField
          className={"col-span-12"}
          type={"password"}
          name={"in-password"}
          placeholder={"Password"}
        />
        <ForgotPasswordLink linkText={"Forgot Password?"} linkPath={"/forgot-password"} />
        <Button className={"col-span-12 text-center"} text={"LOGIN"} />
      </div>
    </form>
  );
};

export default LoginForm;
