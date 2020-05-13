import React from "react";
import { TextField } from "@material-ui/core"

const CV_TextBox = (props : any) => {
    console.log("CV", props)
    return (
        <TextField
          className={props?.className}
          label={props?.display}
          value={props?.value}
          //helperText=""
          multiline={props?.type === "multiline"}
          onChange={props?.onChange}
          name={props?.name}
          fullWidth
        />
    )
};

export default CV_TextBox;