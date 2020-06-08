import React, { useContext, useState } from "react";

import { css, keyframes } from "@emotion/core";

import { DiceImage } from "./DiceImage";
import { getDiceByID } from "./../Services/DiceList";

import GameContext from "../Stores/GameContext";

const dice_portrait = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border: 5px solid white;

  height: 75px;
`;

const bounce = keyframes`
  from, 0%, to {
    border: 5px solid white;
  }
  from, 49%, to {
    border: 5px solid white;
  }
  50%{
    border: 5px solid green;
  }
  100%{
    border: 5px solid green;
  }
`;

const dice_selected = css`
  animation: ${bounce} normal 1s infinite;
`;

const dice_div = css`
  display: flex;
  align-items: center;

  align-self: center;

  width: 65px;
  border: 5px solid white;
  padding: 2px;
`;

export function DicePortrait() {
  const [isPlayerTurn, setIsPlayerTurn] = useState(0);

  const { updatePlayer, playersState, changeState, currentState } = useContext(
    GameContext
  );

  const applyDamage = (playerNumber) => {
    let enemyID = playerNumber == 1 ? 0 : 1;
    const { currentActor } = playersState[playerNumber];
    const { HP } = playersState[enemyID];

    updatePlayer(enemyID, {
      HP: HP - currentActor.power,
    });
    changeState();
  };

  const moveTurn = (playerNumber) => {
    changeState();
    setIsPlayerTurn(0);
    rollDice(8, playerNumber);
  };

  const rollDice = (seed, playerNumber) => {
    const { diceList, modifiers } = playersState[playerNumber];

    let dicePosition = Math.floor(Math.random() * diceList.length);
    let diceID = diceList[dicePosition];

    updatePlayer(playerNumber, { currentDiceID: diceID });

    if (seed == 0) {
      let dice = getDiceByID(diceID);

      //on modifer
      if (dice.type == "modifier") {
        //modifers of the same type don't stack
        updatePlayer(playerNumber, {
          modifiers: { ...modifiers, ...dice.modifier },
        });
        rollDice(8, playerNumber);
      } else {
        applyDamage(playerNumber);
      }
      return;
    }

    let newSeed = seed - 1;
    setTimeout(rollDice.bind(this, newSeed, playerNumber), 100);
  };

  if (isPlayerTurn != 1 && currentState == "PLAYER1_ATTACK") {
    setIsPlayerTurn(1);
  } else if (isPlayerTurn != 2 && currentState == "PLAYER2_ATTACK") {
    setIsPlayerTurn(2);
  }

  return (
    <div css={dice_portrait}>
      <div
        css={[dice_div, isPlayerTurn == 1 ? dice_selected : ""]}
        onClick={isPlayerTurn == 1 ? moveTurn.bind(this, 0) : null}
      >
        <DiceImage diceID={playersState[0].currentDiceID} isPortrait />
      </div>

      <div
        css={[dice_div, isPlayerTurn == 2 ? dice_selected : ""]}
        onClick={isPlayerTurn == 2 ? moveTurn.bind(this, 1) : null}
      >
        <DiceImage diceID={playersState[1].currentDiceID} isPortrait />
      </div>
    </div>
  );
}
