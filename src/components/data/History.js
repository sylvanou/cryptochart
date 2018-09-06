import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const History = props => {
  const history = ["minute", "hour", "day"];

  return (
    <ButtonGroup>
      {history.map(hist => (
        <Button
          onClick={() => props.onSelectHis(hist)}
          key={hist}
          value={hist}
        >
          1{hist.split('')[0].toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  )
}
