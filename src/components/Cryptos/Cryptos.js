import React from "react";
import { cryptos, cryptoNames } from "../data/crypto";
import { ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";

export const Cryptos = props => (
  <DropdownButton id="bg-nested-dropdown" title="Crypto Code" height={{}}>
    <div className="container">
      <ButtonGroup bsSize="small">
        {cryptos.map((curr, index) => (
          <MenuItem
            onSelect={() => props.onSelectCry(curr, cryptoNames[index])}
            value={curr}
            key={curr}
          >
            {curr}: {cryptoNames[index]}
          </MenuItem>
        ))}
      </ButtonGroup>
    </div>
  </DropdownButton>
);
