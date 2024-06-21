import React from "react";
import ReactDOM from "react-dom";
import { Collapse } from "react-collapse";

import { css } from "@emotion/css";

class DropdownItem extends React.Component {
  state = {
    isDropdownOpen: false,
    dropdownToggleIcon: "+"
  };

  onDropdownClicked = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "-" : "+"
    }));
  };

  render() {
    return (
      <div
        className={accordionContainer}
        id={this.props.id}
      >
        <div
          className={headerBar}
        >
          <div >{this.props.title}</div>
          <button
            className={openAccordionToggle}
            onClick={this.onDropdownClicked}
          >
            {this.state.dropdownToggleIcon}
          </button>
        </div>
        <Collapse isOpened={this.state.isDropdownOpen}>
          <div className={displayText}>{this.props.children}</div>
        </Collapse>
      </div>
    );
  }
}

export default DropdownItem;

const displayText = css`
  text-align: left;
  color: #535353;
  font-family: Lato;
  font-size: 0.9em;
  padding: 4px 0px 0px 5px;
`;


const headerBar = css`
  display: flex;
  justify-content: space-between;
  font-size: 1.0em;
  font-family: Lato;
  font-weight: bold;
  color: #535353;
`;

const accordionContainer = css`
  margin: 20px 0px 10px 0px;
`;

const openAccordionToggle = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: black;
`;
