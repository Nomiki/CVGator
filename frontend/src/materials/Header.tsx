import React from "react"
import {AppBar, Toolbar, Typography } from "@material-ui/core"
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(() => ({
    typographyStyles : {
        flex : 1,
    }
}));

const Header = (props : {userName : string}) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h3' className={classes.typographyStyles}> ResumeFx</Typography>
                <Typography> Welcome {props.userName}</Typography>
                <AssignmentIndIcon/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;