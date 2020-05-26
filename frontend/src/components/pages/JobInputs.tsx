import React from "react";
import { Grid, IconButton, Button, Container } from "@material-ui/core";
import CV_TextBox from "../formBlocks/CV_TextBox";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Paragraph, { IParagraph } from "shared/dist/interfaces/Paragraph";
import DeleteIcon from "@material-ui/icons/Delete";
import makeStyles from "@material-ui/styles/makeStyles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles(() => ({
  buttonFlex: {
    textAlign: "right",
  },
}));

const getFormattedDate = (date: Date) => {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};

export const JobInputs = ({ onChange, experience }: any) => {
  
  const onClickDelete = (idx: number) => {
    console.log("delete job idx:", idx);
    let newJobsArr = experience;
    newJobsArr.splice(idx, 1);
    onChange("experience", newJobsArr);
  };

  const onClickAdd = (e : any) => {
    console.log("Add job idx:", experience.length);
    let newJobsArr = experience;
    newJobsArr.push(new Paragraph());
    onChange("experience", newJobsArr);
  };

  const handleDateChange = (idx: number, name: string, date: Date | null) => {
    changeExperienceEntity(idx, name, date && getFormattedDate(date));
  };

  const onChangeJob = (idx: number, event: any) => {
    event.preventDefault();
    console.log(
      "handler trying to change",
      event.target.name,
      "with value:",
      event.target.value,
      "idx:",
      idx
    );

    changeExperienceEntity(idx, event.target.name, event.target.value);
  };

  const changeExperienceEntity = (idx: number, name: string, value: any) => {
    let newJobsArr = experience;
    newJobsArr[idx] = { ...newJobsArr[idx], [name]: value };

    onChange("experience", newJobsArr);
  };

  const classes = useStyles();

  return (
    <Container>
      <Button color="primary" onClick={onClickAdd}>
        <AddCircleIcon />
      </Button>
      {experience.map((val: IParagraph, idx: number) => {
        console.log("idx:", idx);
        const jobTitleId = `jobTitle-${idx}`;
        const employerId = `employer-${idx}`;
        const dateStartId = `dateStart-${idx}`;
        const dateEndId = `dateEnd-${idx}`;
        const descriptionId = `description-${idx}`;
        return (
          <Grid key={idx} container spacing={2}>
            <Grid item xs={12} className={classes.buttonFlex}>
              <IconButton onClick={(e: any) => onClickDelete(idx)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} lg={6}>
              <CV_TextBox
                name="jobTitle"
                display="Job Title"
                value={experience[idx].jobTitle}
                onChange={(e: any) => onChangeJob(idx, e)}
                id={jobTitleId}
              ></CV_TextBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <CV_TextBox
                name="employer"
                display="Employer"
                value={experience[idx].employer}
                onChange={(e: any) => onChangeJob(idx, e)}
                id={employerId}
              ></CV_TextBox>
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id={dateStartId}
                label="Start Date"
                fullWidth
                value={experience[idx].dateStart}
                onChange={(d) => handleDateChange(idx, "dateStart", d)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id={dateEndId}
                label="End Date"
                fullWidth
                value={experience[idx].dateEnd}
                onChange={(d) => handleDateChange(idx, "dateEnd", d)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <CV_TextBox
                name="description"
                display="Description"
                value={experience[idx].description}
                onChange={(e: any) => onChangeJob(idx, e)}
                type="multiline"
                id={descriptionId}
              ></CV_TextBox>
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
};
