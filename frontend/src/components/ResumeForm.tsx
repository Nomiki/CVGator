import React, { useState, useEffect } from "react";
import { IResume } from "../interfaces/Resume";
import InfoPage from "./pages/InfoPage";
import { JobPage } from "./pages/JobPage";

const ResumeForm = ({superResumeUpdater, superResume}: any) => {
  const [resume, setResume] = useState<IResume>(superResume);
  
  useEffect(() => {
    console.log("using effect! child", superResume);
    setResume(superResume);
  }, [superResume]);

  const onChangeResume = (field: string, value: any) => {
    console.log("Changing", field, "to", value);
    const newResume = { ...resume, [field]: value };
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

  return (
    <InfoPage onChange={onChange} resume={resume}/>
  );
};

export default ResumeForm;
