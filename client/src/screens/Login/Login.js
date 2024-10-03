import React from "react";
import ContentWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection.js";
import LoginSection from "./components/LoginSection/LoginSection.js";

function Login() {
  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <ContentWrapper className={"pt-[50px]"}>
      <div className="lg:flex-row  flex-col flex  shadow-[0_3px_12px_-4px_rgba(0,0,0,.1)]">
        <WelcomeSection
          title={"Welcome Back!"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />
        <LoginSection handleSubmit={noAction} />
      </div>
    </ContentWrapper>
  );
}

export default Login;
