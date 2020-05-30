import React, { useContext } from "react";
import _ from "lodash";

import { css } from "@emotion/core";

import ActorsListLoader from "../Services/ActorsList";

import GameContext from "../Stores/GameContext";

const actors_gallery = css`
  border: 5px solid black;
  margin-top: 5px;
  background-color: pink;
  width: 530px;
`;

const actor_thumbnail = css`
  border: 1px solid black;
  margin: 2px 2px;
  &:hover {
    margin: 0px 1px;
    border: 2px solid green;
  }
`;

export function ActorsGallery() {
  const { setNewActor } = useContext(GameContext);
  const ActorsList = ActorsListLoader();

  const loadimages = () => {
    const thumbnails = [];
    for (let i = 0; i < 2; i++) {
      let { thumbnail } = ActorsList[i];

      thumbnails.push(
        <img
          css={actor_thumbnail}
          key={_.uniqueId("tn_")}
          onClick={setNewActor.bind(this, 0, i + 1)}
          src={thumbnail}
        />
      );
    }

    return thumbnails;
  };

  return <div css={actors_gallery}>{loadimages()}</div>;
}
