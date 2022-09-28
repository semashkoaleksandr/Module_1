
/*
Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Рассчитать минимальный и максимальный возраст всех пользователей. Результат записать в объект вида { min: …, max: … }
Input: [{ name: “Ivan”, age: 24 }, { name: “Oleg”, age: 16}, { name: “Igor”, age: 24}]
Output: { min: 16, max: 24 }
*/

const users = [
 { name: 'Ivan', age: 24 }, 
 { name: 'Oleg', age: 16 },
 { name: 'Igor', age: 24 }
];

const calculateAge = (arr) => {
  const array = [];

  for (let elem of arr) {
    array.push(elem.age);
  }
  
  const minNum = Math.min(...array);
  const maxNum = Math.max(...array);
  const object = {min: minNum, max: maxNum};

  return object;
};

console.log(calculateAge(users));