/* Take a look at restaurant, your task is to

1- create a variable named 'fullAddress' that points to a string using the information from restaurant.
2- full address should point to a string that includes the address, city, state, and zipCode from the restaurant object. 

Good Luck XD
*/

const restaurant = {
  name: "Brother's of Rahmani except jafar",
  address: `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
  city: "Tehran",
  state: "Persia",
  zipCode: "99999",
};

const fullAddress = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipCode}`;
console.log(fullAddress); // 85 Shah yad Ave Tehran Persia 99999
