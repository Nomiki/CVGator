import React, { useState } from "react";
import { Container, IconButton, Grid } from "@material-ui/core";
import CV_TextBox from "../formBlocks/CV_TextBox";

import AddBoxIcon from "@material-ui/icons/AddBox";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { JobInputs } from "./JopInputs";

export const JobPage = ({ onChange, resume }: any) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth="lg">
        <IconButton>
          <AddBoxIcon color="primary" />
        </IconButton>

        <Container maxWidth="lg">
          <JobInputs onChange={onChange} experience={resume.experience}/>
        </Container>
      </Container>
    </MuiPickersUtilsProvider>
  );
};
