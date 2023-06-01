'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);

// const flight = 'LH234';
// const alona = {
//   name: 'Alona Akimova',
//   passport: 'TU123456',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mrs. ' + passenger;
//   if (passenger.passport === 'TU123456') {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, alona);
// // console.log(flight);
// // console.log(alona);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(alona);
// checkIn(flight, alona);

// const oneWord = function (str) {
//   return str.replaceAll(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// //higher order function
// const transformer = function (str, fn) {
//   console.log(`original string ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', oneWord);

// ['Alona', 'Dawid', 'Elena'].forEach(oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Alona');

// greet('Hello')('Alona');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Alona Akimova');
lufthansa.book(639, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
book.call(eurowings, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
bookLH(44, 'Alona Akimova');
const bookEW23 = book.bind(eurowings, 11);
bookEW23('Kotek');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => {
  return value + value * rate;
};
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n ${this.options.join('\n')} \n (Write option number)`
    );
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
//CLOSURE
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
h();
f();

// const boardPassengers = function (n, wait) {
//   // const perGroup = n / 3;
//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//   }, wait * 1000);
//   console.log(`There are 3 groups each with ${perGroup} passengers`);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
