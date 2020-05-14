import React from "react";
import { Typography } from "@material-ui/core";
import CV_TextBox from "./CV_TextBox";

const CV_ContactInformation = (props: any) => {

  const { contactInformationState, onContactInformationChanged } = props;

  return (
    <div>
      <Typography>Contact Information</Typography>
      <CV_TextBox
        name="email"
        display="Email"
        value={contactInformationState?.email}
        onChange={onContactInformationChanged}
      ></CV_TextBox>
      <CV_TextBox
        name="phone"
        display="Phone"
        value={contactInformationState?.phone}
        onChange={onContactInformationChanged}
      ></CV_TextBox>
      <CV_TextBox
        name="address"
        display="Address"
        value={contactInformationState?.address}
        onChange={onContactInformationChanged}
      ></CV_TextBox>
    </div>
  );
};

export default CV_ContactInformation;
