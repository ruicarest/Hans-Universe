import React from "react";

import { css } from "@emotion/core";

import { DiceImage } from "./DiceImage";

import imageLoader from "../Services/Images";

const dice_display = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 5px solid black;
  padding: 2px;
  margin-top: 5px;
  background-color: pink;

  width: max-content;
  height: 75px;
`;

export function DiceDisplay(props) {
  return (
    <div css={dice_display}>
      {imageLoader().map(({ id, src, title, description }) => (
        <DiceImage key={id} diceNumber={id} />
      ))}
    </div>
  );
}
