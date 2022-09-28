/*
В функцию подается несколько массивов. Вернуть один массив со всеми элементами.
*/
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];
const arr4 = [16, 17, '', 19, 20, null];

const returnArray = (...arrays) => {
  const newArr = [];

  for (let elem of arrays) {
    for (let item of elem) {
      item ? newArr.push(item) : delete item; 
    }
  }

  return newArr;
};

console.log(returnArray(arr1, arr2, arr3, arr4));