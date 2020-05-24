import React, { useEffect } from "react";

import { css } from "@emotion/core";

const dice_image = css`
  max-width: 100%;
  max-height: 100%;
`;

export function DiceImage(props) {
  const { diceNumber } = props;

  //secont argument is null so it will be called only once
  useEffect(() => console.log("Dice Image mounted", diceNumber), []);

  return (
    <img css={dice_image} src={`./public/images/Dice/${diceNumber}.jpg`} />
  );
}
