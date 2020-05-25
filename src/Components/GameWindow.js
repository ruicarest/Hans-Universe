import { css } from "@emotion/core";

import React, { Component } from "react";
import _ from "lodash";

import { ActorPortrait } from "./ActorPortrait";
import { MidSection } from "./MidSection";
import { DiceDisplay } from "./DiceDisplay";

const statsMock = [
  {
    playerNumber: 1,
    HP: 100,
    MaxHP: 200,
    stats: [
      { label: "ATK", value: 10 },
      { label: "DEF", value: 5 },
    ],
  },
  {
    playerNumber: 2,
    HP: 120,
    MaxHP: 180,
    stats: [
      { label: "ATK", value: 8 },
      { label: "DEF", value: 3 },
    ],
  },
];

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
          <ActorPortrait statsMock={statsMock} portraitNumber={1} />
          <MidSection statsMock={statsMock} />
          <ActorPortrait statsMock={statsMock} portraitNumber={2} />
        </div>
        <DiceDisplay statsMock={statsMock} />
      </>
    );
  }
}
