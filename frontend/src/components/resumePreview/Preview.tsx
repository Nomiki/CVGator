import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button } from "@material-ui/core";
import jsPDF from "jspdf";
import $ from "jquery";
import html2canvas from "html2canvas";

export const Preview = (props: any) => {
  const { resume } = props;
  let pdf: jsPDF;
  window.html2canvas = html2canvas;

  const a4PageStyle = {
    width: "210mm",
    "min-height": "297mm",
    border: "1px black solid",
    "border-radius": "5px",
    background: "white",
    "text-align": "center",
  };

  const toCss = () => {
    var css = [];

    for (var sheeti = 0; sheeti < document.styleSheets.length; sheeti++) {
      var sheet = document.styleSheets[sheeti] as any;
      var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
      for (var rulei = 0; rulei < rules.length; rulei++) {
        var rule = rules[rulei];
        if ("cssText" in rule) css.push(rule.cssText);
        else
          css.push(rule.selectorText + " {\n" + rule.style.cssText + "\n}\n");
      }
    }

    const allCss = css.join("\n");
    return allCss;
  };

  const printElem = (elemId: string) => {
    const element = $(`#${elemId}`);
    var divContents = element.html();
    const e = document.getElementById(elemId);
    console.log("elem", e);
    if (e) {
      console.log("hello");
      html2canvas(e).then(canvas => {
        let imgData = canvas.toDataURL("image/png");
        console.log("url", imgData);
        pdf = new jsPDF("p");
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.output("dataurlnewwindow");
      })
    }
  };

  const useStyles = makeStyles({
    a4: a4PageStyle,
  });

  useEffect(() => {
    console.log("using preview effect!");
  }, [resume]);

  const classes = useStyles();
  toCss();
  return (
    <div>
      <div>
        <Container className={classes.a4} id="toPrint">
          <div>Hello! {resume?.fullName}</div>
        </Container>
      </div>
      <Button onClick={(e) => printElem("toPrint")}>Print</Button>
    </div>
  );
};

export default Preview;
