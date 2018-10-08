import React from "react";
import { Currencies } from "../Currencies/Currencies";
import { Cryptos } from "../Cryptos/Cryptos";
import { ResultLimit } from "../ResultLimit/ResultLimit";
import { History } from "../History/History";

const style = {
  textAlign: "center"
};
export const ChartHeader = props => (
  <ul style={style} className="center">
    <History onSelectHis={props.onSelectHistory} />
    <Cryptos onSelectCry={props.onSelectCrypto} />
    <Currencies onSelectISO={props.onSelectIso} />
    <ResultLimit onSelectLim={props.onSelectLimit} />
  </ul>
);
