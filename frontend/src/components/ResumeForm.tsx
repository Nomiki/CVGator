import React, { useState, useEffect } from "react";
import { IResume } from "shared/dist/interfaces/Resume";
import InfoPage from "./pages/InfoPage";
import Button from "@material-ui/core/Button";
import { JobPage } from "./pages/JobPage";
import DeleteIcon from "@material-ui/icons/Delete";

const ResumeForm = ({ superResumeUpdater, superResume }: any) => {
  const [resume, setResume] = useState<IResume>(superResume);
  const [pageIndex, setPageIndex] = useState<number>(1);

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

  const onClickPageIndex = (buttonType: string) => {
    console.log("button clicked:", buttonType);
    if (buttonType === "back") {
      setPageIndex(pageIndex - 1);
    } else {
      setPageIndex(pageIndex + 1);
    }

    console.log(pageIndex);
  };

  const showButtons = (pageNumber: number) => {
    const buttonArr = [];
    const nextButton = (
      <Button
        id="nextButton"
        color="primary"
        variant="contained"
        onClick={(e) => onClickPageIndex("next")}
      >
        Next
      </Button>
    );
    const backButton = (
      <Button
        id="backButton"
        variant="contained"
        onClick={(e) => onClickPageIndex("back")}
      >
        Back
      </Button>
    );
    if (pageNumber > 0) {
      buttonArr.push(backButton);
    }
    if (pageNumber < 3) {
      buttonArr.push(nextButton);
    }

    return <div>{buttonArr}</div>;
  };

  const viewPageByIndex = (pageNumber: number) => {
    switch (pageNumber) {
      case 0:
        return <InfoPage onChange={onChange} resume={resume} />;
      case 1:
        return <JobPage onChange={onChange} resume={resume} />;
      default:
        return <span>MoFo</span>;
    }
  };

  return (
    <span>
      {viewPageByIndex(pageIndex)}
      {showButtons(pageIndex)}
    </span>
  );
};

export default ResumeForm;
