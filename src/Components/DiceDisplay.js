import React from "react";

import { css } from "@emotion/core";

import { DiceImage } from "./DiceImage";

import DiceListLoader from "../Services/DiceList";

const dice_display = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: pink;
  border: 5px solid black;
  margin-top: 5px;
  padding: 2px;

  width: max-content;
  height: 75px;
`;

export function DiceDisplay() {
  return (
    <div css={dice_display}>
      {DiceListLoader().map(({ id, src, title, description }) => (
        <DiceImage key={id} diceNumber={id} label={description} />
      ))}
    </div>
  );
}
