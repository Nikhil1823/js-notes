// for (var i = 0; i < 5; i++) {

//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);

// }
// for (let i = 0; i < 5; i++) {

//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);

// }
// for (var i = 0; i < 5; i++) {
//   function wrapper(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, x * 1000);
//   }
//   wrapper(i)
// }

// const startButton = document.getElementById("start");
// const drawButton = document.getElementById("draw-card");
// const myCard = document.getElementById("your-card");
// const sum = document.getElementById("sum");
// const messageText = document.querySelector(".safe");
// const cautionText = document.querySelector(".caution");
// const wonText = document.querySelector(".won");
// let cards = [];
// startButton.addEventListener("click", () => {
//   cards = [];
//   console.log("clicked");
//   drawButton.style.display = "inline-block";
//   startButton.style.display = "none";
//   sum.style.display = "inline-block";
//   sum.textContent = "Sum : ";
//   myCard.textContent = "Card : ";
//   myCard.style.display = "inline-block";
//   messageText.style.display = "block";
//   messageText.style.display = "block";
//   wonText.style.display = "none";
//   cautionText.style.display = "none";
// });

// drawButton.addEventListener("click", () => {
//   getRandomCard();
//   myCard.textContent =
//     "Card : " +
//     cards.reduce((accumulator, card) => {
//       return (accumulator += " " + card);
//     }, "");
//   let cardSum = cards.reduce((acc, card) => {
//     return acc + card;
//   }, 0);
//   sum.textContent = "Sum : " + cardSum;
//   game(cardSum);
// });

// function game(x) {
//   if (x == 21) {
//     wonText.style.display = "block";
//     cautionText.style.display = "none";
//     messageText.style.display = "none";

//     drawButton.style.display = "none";
//     startButton.style.display = "inline-block";
//   } else if (x > 21) {
//     wonText.style.display = "none";
//     cautionText.style.display = "block";
//     messageText.style.display = "none";

//     drawButton.style.display = "none";
//     startButton.style.display = "inline-block";
//   }
// }

// function getRandomCard() {
//   let card = Math.floor(Math.random() * 13) + 1;
//   if (card > 10) {
//     card = 10;
//   } else if (card === 1) card = 11;
//   cards.push(card);
//   console.log(cards);
// }

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1);

const radius = [10, 12, 8, 9, 10];

const calculate = (radius, logic) => {
  return radius.map(logic);
};
function area(radius) {
  return Math.PI * Math.pow(radius, 2);
}
function perimeter(radius) {
  return Math.PI * 2 * radius;
}
function toBinary(val) {
  return val.toString(2);
}
console.log(calculate(radius, toBinary));

const person = [
  { name: "nikhil", age: 12, color: "black" },
  { name: "sam", age: 9, color: "white" },
  {
    name: "dean",
    age: 11,
    color: "red",
  },
  {
    name: "soman",
    age: 11,
    color: "yellow",
  },
];

const ageCount = person.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);

const fetchMyProfile = async () => {
  const gitUrl = `https://api.github.com/users/Nikhil1823`;
  const data = await fetch(gitUrl);
  const res = await data.json();
  console.log(res);
};
// fetchMyProfile();

// const create a promise

const createOrder = (cart) => {
  const order = new Promise((resolve, reject) => {
    if (cart.length <= 0) {
      const err = new Error("Cart is empty");
      reject(err);
    }

    const orderId = "112121213";
    setTimeout(() => {
      resolve(orderId);
    }, 3000);
  });
  return order;
};

const validateOrder = (orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId.length > 6) {
      return setTimeout(() => resolve(true), 1000);
    }
    reject(new Error("Invlad order ID"));
  });
};

const proceedToPayment = (orderStatus) => {
  return new Promise((resolve, reject) => {
    if (orderStatus) {
      resolve("0989809");
    }
    reject(new Error("payment failed"));
  });
};
const cart = ["shoe", "watch", "chappel"];

// createOrder(cart)
//   .then((data) => {
//     console.log("your order id is :", data);
//     return data;
//   })
//   .then((status) => validateOrder(status))
//   .then((result) => {
//     console.log("order id verified");
//     return proceedToPayment(result);
//   })
//   .then((paymentId) => console.log("payment success , ", paymentId))

//   .catch((err) => console.log("error happen ", err.message));

// const res = Promise.any([
//   createOrder([]),
//   validateOrder([]),
//   proceedToPayment(false),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err.errors));

const dummyOrder = async () => {
  console.log("started");

  const data1 = await createOrder(cart);
  console.log("first result");
  console.log(data1);

  console.log("second one started");
  const data2 = await validateOrder("1121212121");
  console.log("second result");
  console.log(data2);
};
// dummyOrder();

function outer(a) {
  return function inner(b) {
    return function innermost(c) {
      return a + b + c;
    };
  };
}

const data = outer(1)(2)(3);
console.log(data);

const callAsyncFunc = async () => {
  const order = createOrder(cart);
  const status = validateOrder("112777121");
  const res = await Promise.all([order, status]);
  console.log(res);

  // console.log(await order);
  // console.log(await status);
};
// callAsyncFunc()

const someFunc = (i) => {
  console.log(++i);

  const endTime = new Date().getTime() + time;

  while (new Date().getTime() < endTime) {}
  someFunc(i);
};
// someFunc(0)

function mimicSetInterval(cb, time) {
  let currTime = new Date().getTime();
  t;
  let prevTime = new Date().getTime();
  while (true) {
    currTime = new Date().getTime();
    if (currTime == prevTime + time) {
      cb();
      prevTime = currTime;
    }
  }
}

function dummy(user) {
  this.user = user;
  console.log(this.user);
}
dummy.prototype.getFullName = function () {
  return "my name is mr." + this.user;
};

const dummy1 = new dummy("manu");
const dummy2 = new dummy("suresh");

console.log(dummy1.getFullName());

// mimicSetInterval(() => console.log("hi"), 1000);

// const allPromise = Promise.all([
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(console.log("hello")), 5000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(console.log("bye")), 5001)
//   ),
// ]);

// allPromise.then();

const async1 = function () {
  return new Promise((resolve, reject) => resolve("helo"));
};
const async2 = function () {
  return new Promise((resolve, reject) => resolve("world"));
};

(async function test() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);
});
console.log("apple".split("").reverse().join(""));
var a = 1;

const obj = {
  a: 10,
  getName: () => {
    console.log("hello");
  },
};

const obj2 = {
  b: 12,
};
obj.getName();
Object.prototype.getName = () => {
  console.log("hello");
}
  obj2.getName();

