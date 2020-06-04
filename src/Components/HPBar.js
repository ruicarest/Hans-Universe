import React, { useContext } from "react";

import { css } from "@emotion/core";

import GameContext from "../Stores/GameContext";

const hp_bar_container = css`
  border: 1px solid gray;
  padding: 2px;

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
  const { playersState } = useContext(GameContext);
  const { playerNumber } = props;
  const { HP, currentActor } = playersState[playerNumber - 1];

  return (
    <div css={[hp_bar_container, playerNumber == 1 ? bottom_bar : top_bar]}>
      <div
        css={hp_bar}
        style={{ width: (HP / currentActor.MaxHP) * 100 + "%" }}
      ></div>
    </div>
  );
}
