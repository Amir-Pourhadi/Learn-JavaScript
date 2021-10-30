const capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa",
};

const highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergio", "Frank"],
};

const capitalCitiesKeys = Object.keys(capitalCities);
const highScoresKeys = Object.keys(highScores);
const capitalCitiesValues = Object.values(capitalCities);
const highScoresValues = Object.values(highScores);

console.log(capitalCitiesKeys);
// [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys);
// ['34, '55', '89', '100']

console.log(capitalCitiesValues);
// [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]

console.log(highScoresValues);
// [[ 'Sergio', 'Frank' ], 'Alistair, 'David', 'Hannah']
