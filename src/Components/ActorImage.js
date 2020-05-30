import React, { useEffect } from "react";

import { css } from "@emotion/core";

import GameContext from "../Stores/GameContext";

const actor_image = css`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

export function ActorImage(props) {
  const { playerNumber } = props;

  //secont argument is null so it will be called only once
  useEffect(() => console.log("ActorImage mounted", playerNumber), []);

  return (
    <GameContext.Consumer>
      {({ playersState }) => (
        <img
          css={actor_image}
          src={playersState[playerNumber - 1].currentActor.src}
        />
      )}
    </GameContext.Consumer>
  );
}
