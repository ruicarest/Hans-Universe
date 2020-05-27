import React from "react";

import { css } from "@emotion/core";

import GameContext from "../Stores/GameContext";

const hp_bar_container = css`
  border: 5px solid black;
  padding: 2px;
  margin-bot: 5px;

  width: 100px;
  height: 20px;
`;

const hp_bar = css`
  background-color: teal;
  height: 20px;
`;

const bottom_bar = css`
  align-self: flex-start;
`;

const top_bar = css`
  align-self: flex-end;
`;

export function HPBar(props) {
  const { playerNumber } = props;

  return (
    <GameContext.Consumer>
      {(context) => {
        const { HP, MaxHP } = context.playersState[playerNumber - 1];

        return (
          <div
            css={[hp_bar_container, playerNumber == 1 ? bottom_bar : top_bar]}
          >
            <div css={hp_bar} style={{ width: (HP / MaxHP) * 100 + "%" }}></div>
          </div>
        );
      }}
    </GameContext.Consumer>
  );
}
