import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm.js";
import Divider from "./Divider.js";
import SocialLoginButtons from "./SocialLoginButtons.js";
import ActionPrompt from "./ActionPrompt.js";

const SignUpSection = ({ handleSubmit }) => {
  return (
    <div className="bg-[#F0F2F3] sm:p-[60px] p-[30px] relative flex-1 ">
      <SignUpForm title={"Sign Up"} handleSubmit={handleSubmit} />
      <Divider text={"OR"} />
      <SocialLoginButtons platforms={["facebook", "google"]} />
      <ActionPrompt text={"Already have an account? "} linkText={"Login"} linkPath={"/login"} />
    </div>
  );
};

export default SignUpSection;
