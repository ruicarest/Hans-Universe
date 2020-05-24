import { css } from "@emotion/core";

import React, { Component } from "react";
import _ from "lodash";

import { ActorPortrait } from "./ActorPortrait";
import { DicePortrait } from "./DicePortrait";
import { DiceDisplay } from "./DiceDisplay";

const battle = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: pink;

  width: min-content;
`;

export default class GameWindow extends Component {
  render() {
    return (
      <>
        <div css={battle}>
          <ActorPortrait portraitNumber={1} />
          <DicePortrait />
          <ActorPortrait portraitNumber={2} />
        </div>
        <DiceDisplay />
      </>
    );
  }
}
