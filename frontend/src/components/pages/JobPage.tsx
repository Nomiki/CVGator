import React, { useState } from "react";
import { Container, IconButton, Grid } from "@material-ui/core";
import CV_TextBox from "../formBlocks/CV_TextBox";


import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { JobInputs } from "./JobInputs";

export const JobPage = ({ onChange, resume }: any) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth="lg">
        

        <Container maxWidth="lg">
          <JobInputs onChange={onChange} experience={resume.experience} />
        </Container>
      </Container>
    </MuiPickersUtilsProvider>
  );
};
