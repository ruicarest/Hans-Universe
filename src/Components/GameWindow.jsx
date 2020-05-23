import { css } from "@emotion/core";

import React, { Component } from "react";
import _ from "lodash";

const base = css`
  background-color: pink;
`;

export default class GameWindow extends Component {
  constructor() {
    super();
  }

  render() {
    return <div css={base}>Some text example</div>;
  }
}
