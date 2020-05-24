import React from "react";

import { css } from "@emotion/core";

import { DiceImage } from "./DiceImage";

const dice_portrait = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border: 5px solid black;
  margin: 2px;
  padding: 2px;

  width: 200px;
  height: 75px;
`;

export function DicePortrait(props) {
  return (
    <div css={dice_portrait}>
      <DiceImage diceNumber={1} />
      <DiceImage diceNumber={5} />
    </div>
  );
}
