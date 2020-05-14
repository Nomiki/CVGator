import React, { useState, useEffect } from "react";
import Resume, { IResume } from "../interfaces/Resume";
import { ResumeApi } from "../api/ResumeApi";
import { makeStyles, Container } from "@material-ui/core";
import CV_TextBox from "./formBlocks/CV_TextBox";
import CV_ContactInformation from "./formBlocks/CV_ContactInformation";
import ContactInformation, {
  IContactInformation,
} from "../interfaces/ContactInformation";

const ResumeForm = (props: any) => {
  const [resume, setResume] = useState<IResume>(new Resume());
  const [contactInformation, setContactInformation] = useState<IContactInformation>(new ContactInformation());

  const {superResumeUpdater} = props;

  const fetchResume = async () => {
    let res = await ResumeApi.get("2");
    console.log("hook fetched!");
    if (res) {
      console.log(res);
      return res;
    } else {
      return new Resume();
    }
  };

  useEffect(() => {
    console.log("using effect!");

    fetchResume().then((resm) => {
      setResume(resm);
      if (resm.contactInformation) {
        setContactInformation(resm.contactInformation);
      }

      superResumeUpdater(resm);
    });
  }, []);

  const onChangeResume = (field: string, value: any) => {
    console.log("Changing", field, "to", value);
    const newResume = { ...resume, [field]: value };
    setResume(newResume);
    superResumeUpdater(newResume);
  };

  const onChange = (event: any) => {
    event.preventDefault();
    console.log(
      "handler trying to change",
      event.target.name,
      "with value:",
      event.target.value
    );

    onChangeResume(event.target.name, event.target.value);
  };

  const onContactInformationChanged = (event: any) => {
    event.preventDefault();
    const newContactInformation = {
      ...contactInformation,
      [event.target.name]: event.target.value,
    };

    setContactInformation(newContactInformation);
    onChangeResume("contactInformation", newContactInformation);
  };

  return (
    <Container maxWidth="lg">
      <CV_TextBox
        name="fullName"
        display="Full Name"
        value={resume?.fullName}
        onChange={onChange}
      ></CV_TextBox>
      <CV_TextBox
        name="summary"
        display="Summary"
        value={resume?.summary}
        onChange={onChange}
      ></CV_TextBox>
      <CV_ContactInformation
        contactInformationState={contactInformation}
        onContactInformationChanged={onContactInformationChanged}
      ></CV_ContactInformation>
    </Container>
  );
};

export default ResumeForm;
