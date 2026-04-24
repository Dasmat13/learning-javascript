const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
/*
[
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ]
]
*/

console.log(marvel_heroes[3][1])
/*
flash
*/

const all_heroes1 = marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)
/*
[
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ]
]
*/

console.log(all_heroes1)
/*
[
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
*/


const all_heroes2 = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes2)
/*
[
  'thor',
  'ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
*/


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/


console.log(Array.isArray("hitesh"))
/*
false
*/

console.log(Array.from("hitesh"))
/*
[ 'h', 'i', 't', 'e', 's', 'h' ]
*/

console.log(Array.from({name: "dasmAt"}))
/*
[]
*/


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))
/*
[ 100, 200, 300 ]
*/