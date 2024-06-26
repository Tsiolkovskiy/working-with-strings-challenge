// 'use strict';

// const weekdays = ['mon','tue', 'wed','thu', 'fri','sat', 'sun'];

// const hours= {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };


// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order(starterIndex,mainIndex){
//       return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//   },

//    hours,

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery({starterIndex,mainIndex,time,address}){
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPasta(ing1, ing2, ing3){
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);

//   },

//   orderPizza:function(mainIngredient,...otherIngredient){
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   }
// };

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(" "));

// const [firstName, lastName]='Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.',firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//   const names = name.split(' ');
//   const namesUpper = []; 

//   for(const n of names){
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '))
// }

// capitalizeName ('jessica ann smith davis');
// capitalizeName('artur nurullin');

// //Padding
// const message = "Go to gate 23!";

// console.log(message.padStart(25, "+"));
// console.log("Artur".padEnd(25, "+"));

// const maskCreditCard = function(number){
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length,"*");
// }

// console.log(maskCreditCard(433787463864647384));
// console.log(maskCreditCard('543634745745754571'));


// const message2 = "Bad weathe...All departures dalayed! ";
// console.log(message2.repeat(5));

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click',function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  console.log(text);
  console.log(rows);
  for (const [i,row] of rows.entries()){
    const [first,second]=row.toLowerCase().trim().split('_');
    
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase)
      }`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)`);
  }
});

// underscore_case 
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure