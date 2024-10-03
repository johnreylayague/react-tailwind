import React from "react";
import InputField from "./InputField.js";
import Button from "./Button.js";
import Textarea from "./Textarea.js";
import SectionTitle from "../../../../components/common/elements/Section/SectionTitle.js";

const ContactUsForm = ({ title, handleSubmit }) => {
  return (
    <div className="lg:col-span-7 col-span-12 px-[15px]">
      <SectionTitle title={title} />
      <form onSubmit={handleSubmit} className="mt-[15px]">
        <div className="grid grid-cols-12 -mx-[15px]">
          <InputField
            className={"col-span-12 lg:col-span-6 px-[15px]"}
            name="in-first-name"
            placeholder="First Name"
          />
          <InputField
            className={"col-span-12 lg:col-span-6 px-[15px]"}
            name="in-last-name"
            placeholder="Last Name"
          />
          <InputField
            className="col-span-12 px-[15px]"
            name="in-email-address"
            placeholder="Email Address"
          />
          <InputField className="col-span-12 px-[15px]" name="in-subject" placeholder="Subject" />
          <Textarea rows={8} name={"in-subjet"} placeholder={"Type your message"} />
          <Button type={"submit"} name={"btnSubmit"} text={"SEND MESSAGE"} />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
