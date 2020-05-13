import React, { useState, useEffect } from "react";
import Resume, { IResume } from "../interfaces/Resume";
import { ResumeApi } from "../api/ResumeApi";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Input } from "@material-ui/core";
import metaResume from "../meta/resume";
import IResumeStruct from "../meta/resume";
import CV_TextBox from "./formBlocks/CV_TextBox";

const ResumeForm: React.FC<IResume> = (props) => {
  const [resume, setResume] = useState<IResume>(new Resume());

  const useStyles = makeStyles(() => ({
    textFieldStyle: {
      margin: "10px",
    },
  }));

  const fetchResume = async () => {
    let res = await ResumeApi.get("2");
    formGenerator();
    console.log("hook fetched!");
    if (res) {
      console.log(res);
      return res;
    } else {
      return new Resume();
    }
  };

  const classes = useStyles();

  const formGenerator = () => {
    
    const fields = Object.keys(metaResume);
    console.log(fields);

    const elements = [];

    for (const field of fields) {
      const metaData = metaResume[field];
      switch (metaData.type) {
        case "text":
        case "multiline":
          elements.push(
            <div>
              <CV_TextBox
                name={field}
                {...metaData}
                className={classes.textFieldStyle}
                value={(resume as any)[field]}
                onChange={onChangeName}
              ></CV_TextBox>
            </div>
          );
          
      }
      
    }
    
    return elements;
  };

  useEffect(() => {
    console.log("using effect!");

    fetchResume().then((resm) => {
      setResume(resm);
    });
  }, []);

  const onChangeName = (event: any) => {
    console.log(
      "handler trying to change",
      event.target.name,
      "with value:",
      event.target.value
    );
    const newResume = { ...resume, [event.target.name]: event.target.value };
    setResume(newResume);
  };

  
  console.log(formGenerator());

  return (
    <span>
      <div>
        {formGenerator()}
      </div>
    </span>
  );
};

export default ResumeForm;
