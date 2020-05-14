import React, { Component } from "react";
import "./App.css";
import ResumeForm from "./components/ResumeForm";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";
import ResumeOverview from "./components/ResumeOverview";

function App() {
  return (
    <div className="App">
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Header userName="Eyal"></Header>
        </Grid>
        <Grid item>
          {/* <ResumeForm /> */}
          <ResumeOverview />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
