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
    src: "./images/Dice/3.jpg",
    title: "foo",
    description: "3 speed",
  },
  {
    id: 4,
    src: "./images/Dice/4.jpg",
    title: "foo",
    description: "4 speed",
  },
  {
    id: 5,
    src: "./images/Dice/5.jpg",
    title: "foo",
    description: "5 speed",
  },
  {
    id: 6,
    src: "./images/Dice/6.jpg",
    title: "foo",
    description: "6 speed",
  },
];

export const getActorByID = (id) => {
  return ActorsList.find((actor) => actor.id == id);
};

function ActorsListLoader() {
  return ActorsList;
}

export default ActorsListLoader;
