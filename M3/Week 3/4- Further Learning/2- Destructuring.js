/* -------------------------- Destructuring Arrays -------------------------- */

const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const [gold, silver, bronze, ...others] = scores;

console.log(gold, silver, bronze, others); //=> 10 9 8 [7, 6, 5, 4, 3, 2, 1, 0]

/* -------------------------- Destructuring Objects ------------------------- */

const sampleUser = {
  email: "zarif@gmail.com",
  password: "asgharTala007",
  firstName: "MJ",
  lastName: "Zarif",
  born: 1950,
  bio: "MJ Zarif supposed people to be Kharrrrr and pretend to release a none releasable dodgy charand",
  tavileh: "kharFarzKon",
  akhor: "Iran",
};

const fName = sampleUser.firstName;
const lName = sampleUser.lastName;
console.log(fName, lName); //=> MJ Zarif

const { email, password, born, died } = sampleUser;
console.log(email, password, born, died); //=> zarif@gmail.com asgharTala007 1950 undefined

const { tavileh: role, akhor: country } = sampleUser;
console.log(role, country); //=> khar farz kon Iran

/* -------------------------- Destructuring Params -------------------------- */

function nameRole1(user) {
  return console.log(`${user.firstName} ${user.tavileh}`);
}
nameRole1(sampleUser); //=> MJ Zarif kharFarzKon

function nameRole2({ firstName, lastName, tavileh }) {
  return console.log(`${firstName} ${lastName} ${tavileh}`);
}
nameRole2(sampleUser); //=> MJ Zarif kharFarzKon

const categories = [
  {
    color: "#f3c32c",
    name: "Housing",
    score_out_of_10: 1,
  },
  {
    color: "#f3d630",
    name: "Cost of Living",
    score_out_of_10: 2.618,
  },
  {
    color: "#f4eb33",
    name: "Startups",
    score_out_of_10: 10,
  },
  {
    color: "#d2ed31",
    name: "Venture Capital",
    score_out_of_10: 10,
  },
  {
    color: "#7adc29",
    name: "Travel Connectivity",
    score_out_of_10: 3.6545000000000005,
  },
  {
    color: "#36cc24",
    name: "Commute",
    score_out_of_10: 4.687250000000001,
  },
  {
    color: "#19ad51",
    name: "Business Freedom",
    score_out_of_10: 8.671,
  },
  {
    color: "#0d6999",
    name: "Safety",
    score_out_of_10: 5.7155000000000005,
  },
  {
    color: "#051fa5",
    name: "Healthcare",
    score_out_of_10: 6.448999999999999,
  },
  {
    color: "#150e78",
    name: "Education",
    score_out_of_10: 8.6245,
  },
  {
    color: "#3d14a4",
    name: "Environmental Quality",
    score_out_of_10: 6.4815000000000005,
  },
  {
    color: "#5c14a1",
    name: "Economy",
    score_out_of_10: 6.5145,
  },
  {
    color: "#88149f",
    name: "Taxation",
    score_out_of_10: 4.488,
  },
  {
    color: "#b9117d",
    name: "Internet Access",
    score_out_of_10: 5.605500000000001,
  },
  {
    color: "#d10d54",
    name: "Leisure & Culture",
    score_out_of_10: 9.407,
  },
  {
    color: "#e70c26",
    name: "Tolerance",
    score_out_of_10: 8.012500000000001,
  },
  {
    color: "#f1351b",
    name: "Outdoors",
    score_out_of_10: 7.014,
  },
];

console.log(categories.filter((category) => category.score_out_of_10 >= 9)); //=> Array of expected objects
console.log(categories.filter(({ score_out_of_10 }) => score_out_of_10 >= 9));

console.log(
  categories.map((category) => {
    return `${category.name} is rated ${category.score_out_of_10}`;
  })
);

console.log(
  categories.map(({ name, score_out_of_10 }) => {
    return `${name} is rated ${score_out_of_10}`;
  })
);
