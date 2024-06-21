import React from "react";

// nodejs library that concatenates classes -------------------------------------
import classNames from "classnames";

import { Link } from "gatsby"

// material-ui core components --------------------------------------------------
import { makeStyles } from "@material-ui/core/styles";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';


// Styles -----------------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/components/footerStyle";
import "../../assets/css/custom-style.css"
import customClasses from "../../layouts/CustomClasses.js";
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"

const style = {
  ...styles,
  ...customClasses,
  ...teamStyles,
}

const useStyles = makeStyles(style);

export default function Footer() {
  const classes = useStyles();
  return (
    <Link to="/grupyiwspolnoty"><p
                          className={classNames(
                            classes.description,
                            classes.grayText,
                            "mobile-padding"
                          )} style={{
                                paddingRight: "5%",
                                paddingLeft: "5%",
                                paddingBottom: "3%",
                                marginTop: "-40px",
                                }}
                        >
                          <u>Wróć do przeglądania wspólnot</u> <KeyboardReturnIcon style={{
                            marginBottom: "-7px",
                            paddingLeft: "3px",
                          }}/>
                        </p>
                        </Link>
  );
}
