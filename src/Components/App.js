import { css } from "@emotion/core";

import React, { Component } from "react";
import _ from "lodash";

import GameWindow from "./GameWindow";

const app = css`
  width: min-content;
`;

export default function App() {
  const [windowDimensions, setWindowDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [appDimensions, setAppDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  var appCenter = css`
    position: absolute;
    left: ${windowDimensions.width / 2 - appDimensions.width / 2}px;
    top: ${windowDimensions.height / 2 - appDimensions.height / 2}px;
  `;

  React.useEffect(() => {
    const throttledHandleResize = _.throttle(function handleResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      const appElem = document.getElementById("app");

      if (appElem) {
        var rect = appElem.getBoundingClientRect();
        setAppDimensions({
          height: rect.height,
          width: rect.width,
        });

        console.log("RUI", rect);
      }
    }, 250);

    window.addEventListener("resize", throttledHandleResize);

    return (_) => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  });

  return (
    <div css={appCenter}>
      <div id="app" css={app}>
        App {appDimensions.width} x {appDimensions.height} <br /> Window{" "}
        {windowDimensions.width} x {windowDimensions.height}
        <GameWindow />
      </div>
    </div>
  );
}

// export default class App extends Component {

//   handleResize = () => {
//     console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);

//     var elem = document.getElementById("appDiv");
//     if (elem) {
//       var rect = elem.getBoundingClientRect();

//       center_div = css`
//       left:${rect.width / 2}
//       top: ${rect.width / 2}
//       `;
//     }
//   };

//   componentDidMount() {
//     console.log("Mounted");
//     window.addEventListener("resize", this.handleResize);
//   }

//   render() {
//     return (
//       <div id="appDiv" css={[app, center_div]}>
//         <GameWindow></GameWindow>
//       </div>
//     );
//   }
// }
