const DiceList = [
  {
    id: 0,
    src: "./images/Dice/Blocked.jpg",
    title: "foo",
    description: "Nothing...",
    type: "no",
  },
  {
    id: 1,
    src: "./images/Dice/1.jpg",
    title: "foo",
    description: "1 speed",
    type: "speed",
  },
  {
    id: 2,
    src: "./images/Dice/2.jpg",
    title: "foo",
    description: "2 speed",
    type: "speed",
  },
  {
    id: 3,
    src: "./images/Dice/3.jpg",
    title: "foo",
    description: "3 speed",
    type: "speed",
  },
  {
    id: 4,
    src: "./images/Dice/4.jpg",
    title: "foo",
    description: "4 speed",
    type: "speed",
  },
  {
    id: 5,
    src: "./images/Dice/5.jpg",
    title: "foo",
    description: "5 speed",
    type: "speed",
  },
  {
    id: 6,
    src: "./images/Dice/6.jpg",
    title: "foo",
    description: "6 speed",
    type: "speed",
  },
  {
    id: 7,
    src: "./images/Dice/AttackOne.jpg",
    title: "foo",
    description: "Plus 1 ATK",
    type: "modifier",
    modifier: {
      power: 1,
    },
  },
  {
    id: 8,
    src: "./images/Dice/AttackTwo.jpg",
    title: "foo",
    description: "Plus 2 ATK",
    type: "modifier",
    modifier: {
      power: 2,
    },
  },
];

function DiceListLoader() {
  return DiceList;
}

export const getDiceByID = (id) => {
  return DiceList.find((dice) => dice.id == id);
};

export default DiceListLoader;
