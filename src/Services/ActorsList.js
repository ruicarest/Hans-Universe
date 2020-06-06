const ActorsList = [
  {
    id: 1,
    name: "Pakato",
    description: "1 speed",
    src: "./images/Actors/solid1_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid1_front_tn.jpg",
    MaxHP: 180,
    power: 8,
    shield: 4,
  },
  {
    id: 2,
    src: "./images/Actors/solid2_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid2_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 3,
    src: "./images/Actors/solid3_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid3_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 4,
    src: "./images/Actors/solid4_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid4_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 5,
    src: "./images/Actors/solid5_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid5_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 6,
    src: "./images/Actors/solid6_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid6_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 7,
    src: "./images/Actors/solid7_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid7_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 8,
    src: "./images/Actors/solid8_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid8_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 9,
    src: "./images/Actors/solid9_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid9_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
  {
    id: 10,
    src: "./images/Actors/solid10_front.jpg",
    thumbnail: "./images/Actors/thumbnails/solid10_front_tn.jpg",
    name: "Agirtado",
    description: "2 speed",
    power: 4,
    shield: 3,
    MaxHP: 100,
  },
];

export const getActorByID = (id) => {
  return ActorsList.find((actor) => actor.id == id);
};

function ActorsListLoader() {
  return ActorsList;
}

export default ActorsListLoader;
