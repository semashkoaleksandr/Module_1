/*
Написать функцию, принимающую на вход строку, написанную в стиле snake_case и возвращающую эту же строку, но уже в стиле camelCase.
Input: find_and_replace_element_of_array
Output: findAndReplaceElementOfArray
*/

const string = 'find_and_replace_element_of_array';

const returnString = (string) => {
  const arr = string.split('_');
  const newArr = [];

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  };
  const newString = arr[0] + newArr.join(''); 

  return newString;
}

console.log(returnString(string));