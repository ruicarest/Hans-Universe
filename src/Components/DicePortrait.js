import React from "react";

import { css } from "@emotion/core";

import { DiceImage } from "./DiceImage";

import GameContext from "../Stores/GameContext";

const dice_portrait = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border: 5px solid black;
  margin: 2px;
  padding: 2px;

  width: max-width;
  height: 75px;
`;

export function DicePortrait() {
  return (
    <GameContext.Consumer>
      {(context) => (
        <div css={dice_portrait}>
          <DiceImage
            diceNumber={context.playersState[0].dicePortraitID}
            isPortrait
          />
          <DiceImage
            diceNumber={context.playersState[1].dicePortraitID}
            isPortrait
          />
        </div>
      )}
    </GameContext.Consumer>
  );
}
