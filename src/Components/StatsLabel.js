import React from "react";

import { css } from "@emotion/core";

const stats_div = css`
  height: 20px;
`;

export function StatsLabel(props) {
  const { label, value } = props;

  return (
    <div css={stats_div}>
      {label} : {value}
    </div>
  );
}
