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

const flight = 'LH234';
const alona = {
  name: 'Alona Akimova',
  passport: 'TU123456',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs. ' + passenger;
  if (passenger.passport === 'TU123456') {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, alona);
// console.log(flight);
// console.log(alona);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(alona);
checkIn(flight, alona);
