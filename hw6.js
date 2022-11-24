// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let q = 'hello world'
let w = 'lorem ipsum'
let e = 'javascript is cool'
console.log(q.length)
console.log(w.length)
console.log(e.length)

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let one = 'hello world';
let two = 'lorem ipsum';
let three = 'javascript is cool';
console.log(one.toUpperCase());
console.log(two.toUpperCase());
console.log(three.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let four = 'hello WORLD'; 
let five = 'lorem IPSUM';
let six = 'javascript is COOL';
console.log(four.toLowerCase());
console.log(five.toLowerCase());
console.log(six.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stri = 'Ревуть воли як ясла повні';
let arr = stri.split(" ");
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const arra = [10,8,-7,55,987,-1011,0,1050,0];
let array1 = arra.map(value => value.toString());
console.log(array1);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, 
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let num = [11, 21, 3];
const sortNums = (direction, arri) => {
  if (direction === 'ascending') {
    arri.sort((a, b) => a - b);
} else if (direction === 'descending') {
    arri.sort((a, b) => b - a);
}
return arri;
}
console.log(sortNums('ascending', num));
console.log(sortNums('descending', num));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
      {title: 'JavaScript Complex', monthDuration: 5},
      {title: 'Java Complex', monthDuration: 6},
      {title: 'Python Complex', monthDuration: 6},
      {title: 'QA Complex', monthDuration: 4},
      {title: 'FullStack', monthDuration: 7},
      {title: 'Frontend', monthDuration: 4}
]

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

//  описати колоду карт

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const suits = [
  {cardSuit: 'heart', color: 'red'},
  {cardSuit: 'diamond', color: 'red'},
  {cardSuit: 'spade', color: 'black'},
  {cardSuit: 'clubs', color: 'black'},
]
const cardNames = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
  for (const cardName of cardNames) {
    const card = { 
      cardSuit: suit.cardSuit,
      value: cardName,
      color: suit.color
    }
    deck.push(card);
  }
}
console.log(deck);

//  - знайти піковий туз
let filter = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(filter);
//  - всі шістки
let filter1 = deck.filter(value => value.value === '6');
console.log(filter1);
//  - всі червоні карти
let filter2 = deck.filter(value => value.color === 'red');
console.log(filter2);
//  - всі буби
let filter3 = deck.filter(value => value.cardSuit === 'diamond');
console.log(filter3);
//  - всі трефи від 9 та більше
let filter4 = deck.filter(value => value.cardSuit === 'clubs' && value.value >= '9' || value.value === '10');
console.log(filter4);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((accum, value ) => {
  if (value.cardSuit === 'spade') {
      accum.spades.push(value);
  } else if (value.cardSuit === 'clubs') {
      accum.clubs.push(value)
  } else if (value.cardSuit === 'diamond') {
      accum.diamonds.push(value)
  } else if (value.cardSuit === 'heart') {
      accum.hearts.push(value)
  }
  return accum;
}, {
  spades:[],
  diamonds:[],
  hearts:[],
  clubs:[]

});
console.log(reduce);