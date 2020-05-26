import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import CV_TextBox from "../formBlocks/CV_TextBox";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { IParagraph } from "shared/dist/interfaces/Paragraph";
import DeleteIcon from "@material-ui/icons/Delete";

export const JobInputs = ({ onChange, experience }: any) => {
  const handleDateChange = (idx: number, name: string, date: Date | null) => {
    changeExperienceEntity(idx, name, date);
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
    newJobsArr[idx] = { ...newJobsArr[idx], [name]: value};

    onChange("experience", newJobsArr);
  };

  return experience.map((val: IParagraph, idx: number) => {
    console.log("idx:", idx);
    const jobTitleId = `jobTitle-${idx}`;
    const employerId = `employer-${idx}`;
    const dateStartId = `dateStart-${idx}`;
    const dateEndId = `dateEnd-${idx}`;
    const descriptionId = `description-${idx}`;
    return (
      <Grid key={idx} container spacing={2}>
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
            onChange={d => handleDateChange(idx, "dateStart", d)}
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
            onChange={d => handleDateChange(idx, "dateEnd", d)}
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
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Grid>
    );
  });
};
