/*
Имеется массив пользователей вида [{ name: “Ivan”, age: 24 }]. Вывести имена тех пользователей, возраст которых больше 18 лет.
Input: [{ name: “Ivan”, age: 24 }, { name: “Oleg”, age: 16}, { name: “Igor”, age: 24}]
Output:
Ivan
Igor
*/
const arr = [
 { name: 'Ivan', age: 24 },
 { name: 'Oleg', age: 16 },
 { name: 'Igor', age: 24 }
];

const returnName = (array) => {
  const arrayName = [];
  for (let elem of array) {
    const { name, age } = elem;
    
    if (age > 18) {
      arrayName.push(name);
    }
  }
  return arrayName;
}

console.log(returnName(arr));