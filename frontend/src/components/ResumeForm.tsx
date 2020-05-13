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
    console.log("hook fetched!");
    if (res) {
      console.log(res);
      return res;
    } else {
      return new Resume();
    }
  };

  const classes = useStyles();

  const formGenerator = (item: any, metadata: any, prefix: string = "", i: number = 0) => {
    const fields = Object.keys(metadata);
    console.log(fields);
    let elements: any[] = [];
    for (const field of fields) {
      const fieldMetadata = metadata[field];
      switch (fieldMetadata.type) {
        case "text":
        case "multiline":
          elements.push(
            <div key={i++}>
              <CV_TextBox
                name={prefix + field}
                {...fieldMetadata}
                className={classes.textFieldStyle}
                value={item && item[field]}
                onChange={onChangeName}
              ></CV_TextBox>
            </div>
          );
          break;
        case "complex":
          const title = <div key={i++}>{fieldMetadata["display"]}</div>;
          const innerElements = formGenerator(
            item[field],
            fieldMetadata["innerDefinition"],
            `${field}.`, i
          );
          i+= elements.length;
          const allElements = [title, ...innerElements];
          console.log("All elements ", allElements);
          elements = elements.concat(allElements);
          console.log("After concat", elements);
          break;
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

  const changeResume = (part: any, fieldArr: string[], value: any) => {
    console.log("Rec", part, fieldArr, value)
    if (fieldArr.length === 0) {
      return;
    }
    if (fieldArr.length === 1) {
      part[fieldArr[0]] = value;
      return;
    }

    const currField = fieldArr[0];
    fieldArr.splice(0, 1);
    changeResume(part[currField], fieldArr, value);

    return;
  }

  const onChangeName = (event: any) => {
    console.log(
      "handler trying to change",
      event.target.name,
      "with value:",
      event.target.value
    );
    const path = event.target.name.split(".");
    
    const newResume = {
       ...resume,
    };
    changeResume(newResume, path, event.target.value);

    console.log("New Resume", newResume);
    setResume(newResume);
  };

  return (
    <span>
      <div>{resume && formGenerator(resume, metaResume)}</div>
    </span>
  );
};

export default ResumeForm;
