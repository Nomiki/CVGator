import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import CV_TextBox from "../formBlocks/CV_TextBox";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { IParagraph } from "shared/dist/interfaces/Paragraph";
import DeleteIcon from "@material-ui/icons/Delete";

export const JobInputs = ({ onChange, experience }: any) => {
  const [jobsArr, setJobsArr] = useState<IParagraph[]>(experience);

  //     const [selectedDate, setSelectedDate] = React.useState<Date | null>(
  //     new Date("2014-08-18T21:11:54")
  //   );

  //   const handleDateChange = (date: Date | null) => {
  //     setSelectedDate(date);
  //   };

  const onChangeJob = (event: any) => {
    event.preventDefault();
    console.log(
      "handler trying to change",
      event.target.name,
      "with value:",
      event.target.value
    );
  };

  return experience.map((val: IParagraph, idx: number) => {
    console.log("idx:",idx);
    return (
        <Grid key={idx} container spacing={2}>
          <Grid item xs={12} lg={6}>
            <CV_TextBox
              name="jobTitle"
              display="Job Title"
              value={experience[idx].jobTitle}
              onChange={onChangeJob}
            ></CV_TextBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <CV_TextBox
              name="employer"
              display="employer"
              value={experience[idx].employer}
              onChange={onChangeJob}
            ></CV_TextBox>
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picker-inline"
              label="Start Date"
              fullWidth
              value={experience[idx].dateStart}
              onChange={onChangeJob}
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
              id="date-picker-inline"
              label="End Date"
              fullWidth
              value={experience[idx].dateEnd}
              onChange={onChangeJob}
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
              onChange={onChangeJob}
              type="multiline"
            ></CV_TextBox>
          </Grid>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Grid>
    );
  });
};
