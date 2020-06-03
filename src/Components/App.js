import { css } from "@emotion/core";

import React from "react";
import _ from "lodash";

import GameWindow from "./GameWindow";

const app = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default function App() {
  return (
    <div id="app" css={app}>
      <GameWindow />
    </div>
  );
}
