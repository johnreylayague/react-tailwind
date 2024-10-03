import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import Divider from "./Divider.js";
import SocialLoginButtons from "./SpecialLoginButtons.js";
import ActionPrompt from "./ActionPrompt.js";

const LoginSection = ({ handleSubmit }) => {
  return (
    <div className="bg-[#F0F2F3] sm:p-[60px] p-[30px] relative flex-1">
      <LoginForm title={"Log In"} handleSubmit={handleSubmit} />
      <Divider text={"OR"} />
      <SocialLoginButtons platforms={["facebook", "google"]} />
      <ActionPrompt
        text={"Don't have an account? "}
        linkText={"Create One"}
        linkPath={"/sign-up"}
      />
    </div>
  );
};

export default LoginSection;
