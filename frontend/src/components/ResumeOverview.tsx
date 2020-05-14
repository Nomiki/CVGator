import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import ResumeForm from './ResumeForm';
import Preview from './resumePreview/Preview';
import Resume, { IResume } from '../interfaces/Resume';

const ResumeOverview: React.FC = (props) => {
    const [resume, setResume] = useState<IResume>(new Resume());

    const setNewResume = (newResume: any) => {
        console.log("Updating Overview", newResume);
        setResume(newResume);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
                <ResumeForm superResumeUpdater={setNewResume}/>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Preview resume={resume}/>
            </Grid>
        </Grid>
    );
}

export default ResumeOverview

