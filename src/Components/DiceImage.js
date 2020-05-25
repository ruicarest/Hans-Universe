import React, { useEffect } from "react";

import { css } from "@emotion/core";

const dice_image = css`
  max-width: 100%;
  max-height: 100%;
`;

export function DiceImage(props) {
  const { diceNumber } = props;

  return <img css={dice_image} src={`./images/Dice/${diceNumber}.jpg`} />;
}
