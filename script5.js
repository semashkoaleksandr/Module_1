/*
Имеется массив объектов, представляющий собой массив треугольников, где поля объекта a, b и c - стороны треугольника. Создать новый массив, заполнив его объектами с единственным полем p - периметром соответствующего треугольника.

Input: [{a: 5, b: 3, c: 4}, {a: 1, b: 3, c: 4}, {a: 4, b: 7, c: 4}, {a: 2, b: 2, c: 3}]

Output: [{ p: 12 }, { p: 8 }, { p: 15 }, { p: 7 }]
*/
const arr = [
 { a: 5, b: 3, c: 4 }, 
 { a: 1, b: 3, c: 4 }, 
 { a: 4, b: 7, c: 4 }, 
 { a: 2, b: 2, c: 3 }
];

const calculatePerimeter = (array) => {
  const newArr = [];

  for (let item of array) {
    const { a, b, c } = item;
    const newItem = { p: a + b + c };
    newArr.push(newItem);
  }
  
  return newArr;
}

console.log(calculatePerimeter(arr));