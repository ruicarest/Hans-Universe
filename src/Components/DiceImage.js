import React from "react";

import { css } from "@emotion/core";

const dice_image = css`
  max-width: 100%;
  max-height: 100%;
`;

export class DiceImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  handleEnter() {
    this.setState({
      isHovered: true,
    });
  }

  handleLeave() {
    this.setState({
      isHovered: false,
    });
  }

  render() {
    const { diceNumber, label = "placeholder", isPortrait } = this.props;

    return (
      <>
        <img
          css={dice_image}
          src={`./images/Dice/${diceNumber}.jpg`}
          onMouseEnter={this.handleEnter.bind(this)}
          onMouseLeave={this.handleLeave.bind(this)}
        />

        {!isPortrait && this.state.isHovered ? <div>{label}</div> : <></>}
      </>
    );
  }
}
