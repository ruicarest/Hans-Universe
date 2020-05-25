import React from "react";

import { css } from "@emotion/core";

import { DicePortrait } from "./DicePortrait";
import { HPBar } from "./HPBar";

const mid_section = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: white;
  width: 200px;
  height: 300px;
`;

export function MidSection(props) {
  return (
    <div css={mid_section}>
      <HPBar {...props} playerNumber={2} />
      <DicePortrait {...props} />
      <HPBar {...props} playerNumber={1} />
    </div>
  );
}
