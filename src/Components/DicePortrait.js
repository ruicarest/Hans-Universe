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
  height: 75px;
`;

const dice_div = css`
  width: 75px;
`;

export function DicePortrait() {
  const { updatePlayer, playersState, changeState, currentState } = useContext(
    GameContext
  );

  const rollDice = (seed, playerNumber) => {
    const { diceList, currentDiceCount } = playersState[playerNumber];

    let dicePosition = Math.floor(Math.random() * diceList.length);
    let diceID = diceList[dicePosition];

    updatePlayer(playerNumber, { currentDiceID: diceID });

    if (seed == 0) {
      updatePlayer(playerNumber, {
        currentDiceCount: currentDiceCount + diceID,
      });
      //applyDamage
      changeState();
      return;
    }

    let newSeed = seed - 1;
    setTimeout(rollDice.bind(this, newSeed, playerNumber), 100);
  };

  return (
    <div css={dice_portrait}>
      <div
        css={dice_div}
        onClick={
          currentState == "PLAYER1_ATTACK" ? rollDice.bind(this, 20, 0) : null
        }
      >
        <DiceImage diceNumber={playersState[0].currentDiceID} isPortrait />
      </div>

      <div
        css={dice_div}
        onClick={
          currentState == "PLAYER2_ATTACK" ? rollDice.bind(this, 20, 1) : null
        }
      >
        <DiceImage diceNumber={playersState[1].currentDiceID} isPortrait />
      </div>
    </div>
  );
}
