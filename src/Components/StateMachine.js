import React, { useContext } from "react";

import { css } from "@emotion/core";

import GameContext from "../Stores/GameContext";

const GameStates = {
  states: [
    {
      game_state_id: "INIT_GAME",
      on: "PLAYER1_ATTACK",
    },
    {
      game_state_id: "PLAYER1_ATTACK",
      on: "PLAYER1_APPLYDAMAGE",
    },
    {
      game_state_id: "PLAYER2_ATTACK",
      on: "PLAYER2_APPLYDAMAGE",
    },
    {
      game_state_id: "PLAYER1_APPLYDAMAGE",
      on: "PLAYER2_ATTACK",
    },
    {
      game_state_id: "PLAYER2_APPLYDAMAGE",
      on: "PLAYER1_ATTACK",
    },
    {
      game_state_id: "PLAYER1_DIE",
      on: "GAME_FINISH",
    },
    {
      game_state_id: "PLAYER2_DIE",
      on: "GAME_FINISH",
    },
    {
      game_state_id: "GAME_FINISH",
      on: "GAME_RESET",
    },
    {
      game_state_id: "GAME_RESET",
      on: "GAME_INIT",
    },
  ],
};

export function StateMachine() {
  const { changeState, currentState } = useContext(GameContext);

  const nextState = GameStates.states.find(
    (state) => state.game_state_id == currentState
  );
  changeState(nextState);

  return null;
}
