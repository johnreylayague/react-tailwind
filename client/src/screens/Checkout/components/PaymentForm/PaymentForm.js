import React from "react";
import InputField from "../InputField/InputField";
import PrivacyNotice from "./PrivacyNotice";
import Button from "./PaymentFormButton";
import GridWrapper from "../../../../components/common/elements/Wrapper/GridWrapper";

const PaymentForm = () => {
  return (
    <form>
      <GridWrapper className={"mt-[33px]"}>
        <InputField
          className={"col-span-12 px-[15px]"}
          type={"number"}
          label={"Card Number"}
          name={"in-card-number"}
          placeholder={"Card Number"}
        />
        <InputField
          className={"col-span-12 px-[15px]"}
          type={"text"}
          label={"Full Name"}
          name={"in-full-name"}
          placeholder={"Full Name"}
        />
        <InputField
          className={"lg:col-span-6 col-span-12 px-[15px]"}
          type={"date"}
          label="Expiry Date"
          name="in-expiry-date"
          placeholder="Expiry Date"
        />
        <InputField
          className={"lg:col-span-6 col-span-12 px-[15px]"}
          type={"number"}
          label="CVV*"
          name="in-cvv"
          placeholder="CVV*"
        />
        <PrivacyNotice
          className={"col-span-12 px-[15px]"}
          mainText={
            "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our "
          }
          linkText={"privacy policy"}
          linkPath={"/"}
        />
        <Button className={"col-span-12 px-[15px]"} btnLabel={"PLACE ORDER"} />
      </GridWrapper>
    </form>
  );
};

export default PaymentForm;
