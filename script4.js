/*
Написать функцию, принимающую число N, и возвращающую массив длиной N, заполненный числами Фибоначчи. Числа Фибоначчи - элементы числовой последовательности, в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел (пример, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233).
Input: 7
Output: [0, 1, 1, 2, 3, 5, 6]
*/
const number = 7;

const returnArrayFibonacci = (number) => {
  const array = [0, 1];

  for (let i = 0; i < number - 2; i++) {
    array.push(array[i] + array[1 + i]);
  }

  return array;
};

console.log(returnArrayFibonacci(number));