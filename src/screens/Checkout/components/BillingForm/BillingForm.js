import React from "react";
import InputField from "../InputField/InputField.js";
import SelectField from "../InputField/SelectField.js";
import TextAreaField from "../InputField/TextAreaField.js";
import GridWrapper from "../../../../components/common/elements/Wrapper/GridWrapper.js";
import assets from "../../../../assets/assets.js";

const BillingForm = ({ title }) => {
  return (
    <form>
      <h4 className="text-[#18181D] text-[26px] leading-[1.4] font-bold">{title}</h4>
      <GridWrapper className="mt-[22px]">
        <InputField
          className={"col-span-12 lg:col-span-6 px-[15px]"}
          type={"text"}
          label={"First Name"}
          name={"in-first-name"}
          placeholder={"First Name"}
          required
        />
        <InputField
          className={"col-span-12 lg:col-span-6 px-[15px]"}
          type={"text"}
          label="Last Name"
          name="in-last-name"
          placeholder="Last Name"
          required
        />
        <InputField
          className={"col-span-12 px-[15px]"}
          type={"text"}
          label="Company Name"
          name="in-company-name"
          placeholder="Company Name"
        />
        <SelectField
          className={"col-span-12 px-[15px]"}
          label="Country"
          selectData={assets.jsonData.countryList}
          required
        />
        <InputField
          className={"col-span-12 lg:col-span-6 px-[15px]"}
          type={"text"}
          label="Street Address 1"
          name="in-street-adddress-1"
          placeholder="Street Address 1"
          required
        />
        <InputField
          className={"col-span-12 lg:col-span-6 px-[15px]"}
          type={"text"}
          label="Street Address 2"
          name="in-street-adddress-2"
          placeholder="Street Address 2"
        />
        <InputField
          className={"col-span-12 px-[15px]"}
          type={"text"}
          label="Town / City"
          name="in-town-city"
          placeholder="Town/City"
          required
        />
        <InputField
          className={"col-span-12 lg:col-span-6 px-[15px]"}
          type={"number"}
          label="Phone Number"
          name="in-phone-number"
          placeholder="Phone Number"
          required
        />
        <InputField
          className={"col-span-12 lg:col-span-6 px-[15px]"}
          type={"text"}
          label="Email Address"
          name="in-email-address"
          placeholder="Email Address"
          required
        />
        <TextAreaField
          className={"col-span-12 px-[15px]"}
          label="Order Notes"
          name="in-order-notes"
          rows={5}
          placeholder="Order Notes"
        />
      </GridWrapper>
    </form>
  );
};

export default BillingForm;
