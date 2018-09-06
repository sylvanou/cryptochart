import React from "react";
import { currencies } from "./currency";
import { ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";

export const Currencies = props => {
  var styles = {
    color: "red",
    fontWeight: "bold",
    height: "300px",
    width: "300px",
    overflow: "auto"
  };

  // console.log(currencies)
  return (
    <DropdownButton id="bg-nested-dropdown" title="ISO Code" height={{}}>
      <div style={styles} className="container">
        <ButtonGroup bsSize="small">
          {Object.entries(currencies).map((key, index) =>
            Object.entries(currencies[index]).map((num, index) => (
              <MenuItem
                onSelect={() => props.onSelectISO(num[index])}
                value={num[index]}
                key={num[index]}
              >
                {num[index]}: {num[index + 1]}
              </MenuItem>
            ))
          )}
        </ButtonGroup>
      </div>
    </DropdownButton>
  );
};
