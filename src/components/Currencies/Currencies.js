import React from "react";
import { currencies } from "../data/currency";
import { ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";
import "../../components/UI/Btn/btn-container.css";

export const Currencies = props => (
  <DropdownButton id="bg-nested-dropdown" title="ISO Code" height={{}}>
    <div className="container btn-container">
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
