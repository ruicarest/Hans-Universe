import React from "react";

import { css } from "@emotion/core";
import _ from "lodash";

import { StatsLabel } from "./StatsLabel";

const stats_div = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  padding: 5px;
  height: 20px;
`;

const statsMock = [
  [
    { label: "ATK", value: 10 },
    { label: "DEF", value: 5 },
  ],
  [
    { label: "ATK", value: 10 },
    { label: "DEF", value: 5 },
  ],
];

export function StatsDiv(props) {
  const { portraitNumber } = props;

  return (
    <div css={stats_div}>
      {statsMock[portraitNumber - 1].map(({ label, value }) => (
        <StatsLabel key={_.uniqueId()} {...props} label={label} value={value} />
      ))}
    </div>
  );
}
