/*
Написать функцию, которая принимает три параметра: массив array и два числа start и end. Функция должна возвращать массив фрагмент массива array, начиная с индекса start и заканчивая end.
Input: [13, 14, 32, 23, 34, 21, 44, 47, 86], 4, 6
Output: [34, 21, 44]
*/
const arr = [13, 14, 32, 23, 34, 21, 44, 47, 86];

const returnArrayFragment = (arr, start, end) => {
  const newArr = [];

  // if (start > end || start || end && start < 0 || end >= arr.length) {
    if (start > end || end > arr.length  || false) {
    return 'error';
  } else {
    for (let i = start; i <= end; i++) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log(returnArrayFragment(arr, 0));