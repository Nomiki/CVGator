import React, { useState, useEffect } from "react";
import Resume, { IResume } from "../interfaces/Resume";
import { ResumeApi } from "../api/ResumeApi";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const ResumeForm: React.FC<IResume> = (props) => {
  const [resume, setResume] = useState<IResume>(new Resume());

  const useStyles = makeStyles(() => ({
    textFieldStyle: {
      margin: "10px"
    }
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

  const classes = useStyles();
  return (
    <form>
      <div>
        <TextField
          fullWidth
          className={classes.textFieldStyle}
          id="standard-helperText"
          label="Full-Name"
          value={resume?.fullName}
          helperText=""
          onChange={onChangeName}
          name="fullName"
        />
      </div>
      <div>
        <TextField
          multiline
          fullWidth
          className={classes.textFieldStyle}
          rows={1}
          rowsMax={4}
          label="Summary"
          helperText=""
          onChange={onChangeName}
          name="summary"
        />
      </div>
    </form>
  );
};

export default ResumeForm;
