import React from 'react'
import { Grid } from '@material-ui/core';
import ResumeForm from './ResumeForm';

const ResumeOverview: React.FC = (props) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
                <ResumeForm />
            </Grid>
            <Grid item xs={12} lg={8}>
                Overview
            </Grid>
        </Grid>
    );
}

export default ResumeOverview

