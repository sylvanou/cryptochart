import React from "react";
import { ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";

const limit = 100;
var styles = {
  color: "red",
  fontWeight: "bold",
  height: "300px",
  width: "200px",
  overflow: "auto"
};
// console.log(currencies)
let numList = [];
for (let i = 0; i <= limit; i++) {
  numList.push(i);
}
export const ResultLimit = props => (
  <DropdownButton id="bg-nested-dropdown" title="Limit Results" height={{}}>
    <div style={styles} className="container">
      <ButtonGroup bsSize="small">
        {numList.map(num => (
          <MenuItem
            onSelect={() => props.onSelectLim(num)}
            value={num}
            key={num}
          >
            {num}
          </MenuItem>
        ))}
      </ButtonGroup>
    </div>
  </DropdownButton>
);
