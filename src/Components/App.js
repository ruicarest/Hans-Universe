import { css } from "@emotion/core";
import styled from "@emotion/styled";

import React, { Component } from "react";
import _ from "lodash";

import GameWindow from "./GameWindow";

const app = css`
  width: min-content;
`;

const dynamicStyle = (props) => ({
  position: "absolute",
  left: props.windowDimensions.width / 2 - props.appDimensions.width / 2 + "px",
  top:
    props.windowDimensions.height / 2 - props.appDimensions.height / 2 + "px",
});

const DynamicStyleContainer = styled.div`
  ${dynamicStyle};
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

  //fn, [] -> similar to component did mount (but after first paint)
  React.useLayoutEffect(handleResize, []);

  console.log("agora 1", appDimensions, windowDimensions);

  function handleResize() {
    console.log("agora 2", window.innerHeight, window.innerWidth);
    setWindowDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    const appElem = document.getElementById("app");
    if (appElem) {
      var rect = appElem.getBoundingClientRect();
      console.log("agora 3", rect.height, rect.width);
      setAppDimensions({
        height: rect.height,
        width: rect.width,
      });
    }
  }

  //fn, [] -> similar to component did update
  React.useEffect(() => {
    const throttledHandleResize = _.throttle(
      handleResize.bind(this, "inside"),
      250
    );

    window.addEventListener("resize", throttledHandleResize);

    return (_) => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  });

  return (
    <DynamicStyleContainer
      windowDimensions={windowDimensions}
      appDimensions={appDimensions}
    >
      <div id="app" css={app}>
        App {appDimensions.width} x {appDimensions.height} <br /> Window{" "}
        {windowDimensions.width} x {windowDimensions.height}
        <GameWindow />
      </div>
    </DynamicStyleContainer>
  );
}
