import React from "react";
import "../Styles/DottedBox.css";
import ClearTwoToneIcon from "@material-ui/icons/ClearTwoTone";

function DottedBox({ textBold, text, linkText }) {
  return (
    <div className="dottedBox">
      <ClearTwoToneIcon />

      <p>
        <span className="dottedBox-text">
          <b className="font-weight-semiBold">{textBold}</b> {text}
        </span>
        <br />
        <span className="blue-primary-color font-weight-semiBold">
          {linkText}
        </span>
      </p>
    </div>
  );
}

export default DottedBox;
