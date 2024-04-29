// let numbers = [1, 2, 3, 4, 5, 100];
// let [n1, n2, ...rest] = numbers;
// console.log(n1, n2);
// console.log(rest);

let user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

let {
  name,
  id,
  address: { city, street },
} = user;
console.log(name, id);
console.log(city, street);
