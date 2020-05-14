import React, { useEffect } from "react";

export const Preview = (props: any) => {
  const { resume } = props;

  useEffect(() => {
    console.log("using preview effect!");
  }, [resume]);

  return <div>Hello! {resume?.fullName}</div>;
};

export default Preview;
