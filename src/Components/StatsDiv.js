import React from "react";

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

  return (
    <GameContext.Consumer>
      {(context) => (
        <div css={stats_div}>
          {context.playersState[playerNumber - 1].stats.map(
            ({ label, value }) => (
              <StatsLabel
                key={_.uniqueId()}
                {...props}
                label={label}
                value={value}
              />
            )
          )}
        </div>
      )}
    </GameContext.Consumer>
  );
}
