/*
Заполнить двумерный массив таблицей умножения от 0 до 10 и вывести её в удобочитаемом виде.
*/

const createTable = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr[i] = []; 

    for (let j = 0; j <= 10; j++) {
      arr[i][j] = i * j;
    }
  }

  return arr;
};

console.table(createTable(0, 10));