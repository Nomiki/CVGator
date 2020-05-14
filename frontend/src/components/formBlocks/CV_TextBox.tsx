import React from "react";
import { TextField } from "@material-ui/core";

const CV_TextBox = (props: any) => {
  return (
    <div>
      <TextField
        className={props?.className}
        label={props?.display}
        value={props?.value}
        multiline={props?.type === "multiline"}
        onChange={props?.onChange}
        name={props?.name}
        fullWidth
      />
    </div>
  );
};

export default CV_TextBox;
