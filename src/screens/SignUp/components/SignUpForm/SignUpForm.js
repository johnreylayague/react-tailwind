import React from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";

const SignUpForm = ({ title, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-[#18181D] text-[42px] text-center leading-[1.2] font-bold">{title}</h3>
      <div className="mt-[51px] grid grid-cols-12">
        <InputField className={"col-span-12"} name={"in-username"} placeholder={"Username"} />
        <InputField
          className={"col-span-12"}
          name={"in-email-address"}
          placeholder={"Email Address"}
        />
        <InputField className={"col-span-12"} name={"in-password"} placeholder={"Password"} />
        <Button className={"col-span-12 text-center"} text={"SIGN UP"} />
      </div>
    </form>
  );
};

export default SignUpForm;
