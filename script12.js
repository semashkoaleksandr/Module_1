/* Заполнить двумерный массив таблицей квадратов целых чисел от 0 до 100 и вывести её в удобочитаемом виде. */

const squareNum = (num) => {
  const array = [];

  for (let i = 0; i < num; i++) {
    array.push(i);
  }

  const newArray = array.map(item => {
    return item * item;
  })

  return newArray;
}

console.table(squareNum(100));