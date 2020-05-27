import React from "react";

import { css } from "@emotion/core";

import { ActorImage } from "./ActorImage";
import { StatsDiv } from "./StatsDiv";

const actor_portrait = css`
  margin: 1px;
  border: 5px solid black;
  background-color: white;
  width: 200px;
  height: 300px;
`;

export function ActorPortrait(props) {
  return (
    <div css={actor_portrait}>
      <StatsDiv playerNumber={props.playerNumber} />
      <ActorImage playerNumber={props.playerNumber} />
    </div>
  );
}
