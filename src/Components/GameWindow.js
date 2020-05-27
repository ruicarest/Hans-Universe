import { css } from "@emotion/core";

import React, { Component } from "react";
import _ from "lodash";

import GameContextProvider from "../Stores/GameContextProvider";

import { ActorPortrait } from "./ActorPortrait";
import { MidSection } from "./MidSection";
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
      <GameContextProvider>
        <div css={battle}>
          <ActorPortrait playerNumber={1} />
          <MidSection />
          <ActorPortrait playerNumber={2} />
        </div>
        <DiceDisplay />
      </GameContextProvider>
    );
  }
}
