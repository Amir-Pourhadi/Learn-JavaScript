const flowers = {
  tulip: 20,
  rose: 10,
  lily: 15,
};

for (const key in flowers) {
  console.log(`${key}: ${flowers[key]}`);
}

/* Output ==> 
tulip: 20
rose: 10
lily: 15
 */
