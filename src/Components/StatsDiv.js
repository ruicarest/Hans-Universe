import React, { useContext } from "react";

import { css } from "@emotion/core";
import _ from "lodash";

import { StatsLabel } from "./StatsLabel";
import GameContext from "../Stores/GameContext";

const stats_div = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  padding: 5px;
  height: 20px;
`;

export function StatsDiv(props) {
  const { playerNumber } = props;
  const { stats } = useContext(GameContext).playersState[playerNumber - 1];

  return (
    <div css={stats_div}>
      <StatsLabel
        key={_.uniqueId()}
        {...props}
        label="DEF"
        value={stats.defence}
      />
      <StatsLabel
        key={_.uniqueId()}
        {...props}
        label="ATK"
        value={stats.power}
      />
    </div>
  );
}
