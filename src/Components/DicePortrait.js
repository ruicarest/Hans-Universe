import React, { useContext } from "react";

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
  const { updatePlayer, playersState } = useContext(GameContext);

  const rollDice = (seed) => {
    const { diceList } = playersState[0];

    let dicePosition = Math.floor(Math.random() * diceList.length);
    let diceID = diceList[dicePosition];

    updatePlayer(0, { currentDiceID: diceID });

    if (seed == 0) {
      return;
    }

    let newSeed = seed - 1;
    setTimeout(rollDice.bind(this, newSeed), 50);
  };

  return (
    <div css={dice_portrait} onClick={rollDice.bind(this, 5)}>
      <DiceImage diceNumber={playersState[0].currentDiceID} isPortrait />
      <DiceImage diceNumber={playersState[1].currentDiceID} isPortrait />
    </div>
  );
}
