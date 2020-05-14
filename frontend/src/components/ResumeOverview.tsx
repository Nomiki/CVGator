import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import ResumeForm from './ResumeForm';
import Preview from './resumePreview/Preview';
import Resume, { IResume } from '../interfaces/Resume';
import { ResumeApi } from '../api/ResumeApi';

const ResumeOverview: React.FC = (props) => {
    const [resume, setResume] = useState<IResume>(new Resume());

    const setNewResume = (newResume: any) => {
        console.log("Updating Overview", newResume);
        setResume(newResume);
    }


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
        console.log("fetching father resume!");

        fetchResume().then((resm) => {
            setResume(resm);
        });
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
                <ResumeForm superResumeUpdater={setNewResume} superResume={resume} />
            </Grid>
            <Grid item xs={12} lg={8}>
                <Preview resume={resume} />
            </Grid>
        </Grid>
    );
}

export default ResumeOverview

