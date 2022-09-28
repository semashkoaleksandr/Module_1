/*
Написать функцию, принимающую на вход неотформатированный номер телефона и возвращающую его в отформатированном виде.
Input: 88005553535
Output: 8 (800) 555-35-35
*/

const str = '88005553535';
const formatNumber = (string) => {
  const part1 = string.slice(0, 1);
  const part2 = string.slice(1, 4);
  const part3 = string.slice(4, 7);
  const part4 = string.slice(7, 9);
  const part5 = string.slice(9, 11);

  return `${part1} (${part2}) ${part3}-${part4}-${part5}`;
}

console.log(formatNumber(str));