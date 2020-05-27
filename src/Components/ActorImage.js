import React, { useEffect } from "react";

import { css } from "@emotion/core";

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
    <img
      css={actor_image}
      src={`./images/Actors/solid${playerNumber}_front.jpg`}
    />
  );
}
