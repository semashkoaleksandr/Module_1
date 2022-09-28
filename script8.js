/*
Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Вывести суммарный возраст всех пользователей.
Input: [{ name: “Ivan”, age: 24 }, { name: “Oleg”, age: 16}, { name: “Igor”, age: 24}]
Output: 64
*/
const users = [
 { name: 'Ivan', age: 24 },
 { name: 'Oleg', age: 16 }, 
 { name: 'Igor', age: 24 }
];

const getSumAges = (array) => {
  let sumAge = 0;

  for (let elem of array) {
    const { age } = elem;
    sumAge += age;
  }
  
  return sumAge;
};

console.log(getSumAges(users));