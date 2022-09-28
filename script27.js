/*
Имеется двумерный массив. Пользуясь возможностями ES6 синтаксиса объединить его в одномерный массив.
Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const joinArray = array => {
  const newArr = [];

  for (let elem of array) {
    newArr.push(...elem);
  }

  return newArr;
}

console.log(joinArray(arr));