import React from "react";
import { Currencies } from "../Currencies/Currencies";
import { Cryptos } from "../Cryptos/Cryptos";
import { ResultLimit } from "../ResultLimit";
import { History } from "../History";

export const Header = props => {
  const style = {
    textAlign: "center"
  };
  return (
    <ul style={style} className="center">
      <History onSelectHis={props.onSelectHistory} />
      <Cryptos onSelectCry={props.onSelectCrypto} />
      <Currencies onSelectISO={props.onSelectIso} />
      <ResultLimit onSelectLim={props.onSelectLimit} />
    </ul>
  );
};
