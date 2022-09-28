/*
Написать функцию, принимающую на вход массив чисел, функцию фильтрации и функцию преобразования, которая фильтрует массив, преобразует данные, а затем выводит их.

Input: [1, 2, 3, 4], (el) => el %2 == 0, (el) => el * 2

Output:

4
8
*/
const array = [1, 2, 3, 4];

const filterFunction = (elem) => elem % 2 == 0;
const convertFunction = (elem) => elem * 2;

const returnModifiedArray = (array, filterElementsArray, convertElementsArray) => {
  const newArr = [];

  array.map(item => {
    if (filterElementsArray(item)) {
      newArr.push(convertElementsArray(item));
    }
  })

  return newArr;
}

console.log(returnModifiedArray(array, filterFunction, convertFunction));