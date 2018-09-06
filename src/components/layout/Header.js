import React from "react";
import { Currencies } from "../data/Currencies";
import { Cryptos } from "../data/Cryptos";
import { ResultLimit } from "../data/ResultLimit";
import { History } from "../data/History";

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
