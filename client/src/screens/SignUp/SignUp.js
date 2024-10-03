import React from "react";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection.js";
import ConentWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import SignUpSection from "./components/SignUpSection/SignUpSection.js";

function SignUp() {
  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <ConentWrapper className={"pt-[50px]"}>
      <div className="lg:flex-row flex-col flex shadow-[0_3px_12px_-4px_rgba(0,0,0,.1)]">
        <WelcomeSection
          title={"Hello World!"}
          description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        />
        <SignUpSection handleSubmit={noAction} />
      </div>
    </ConentWrapper>
  );
}

export default SignUp;
