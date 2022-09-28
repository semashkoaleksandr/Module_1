/*
Имеется массив с финансовыми переводами вида: [ { from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, ...]. Вычислить среднюю сумму всех переводов и рассчитать для каждого объекта отклонение от среднего и записать в поле diff. Например, при средней сумме перевода в 2000 отклонение для перевода { from: ‘Ivan’, to: ‘Oleg’, amount: 2500} будет составлять diff = 2500 - 2000 = 1000;
Input: [{ from: ‘Ivan’, to: ‘Oleg’, amount: 2500}, { from: ‘Ivan’, to: ‘Igor’, amount: 2000}, { from: ‘Oleg’, to: ‘Igor’, amount: 1500}]
Output: 2000, [{ from: ‘Ivan’, to: ‘Oleg’, amount: 2500, diff: 500}, { from: ‘Ivan’, to: ‘Igor’, amount: 2000, diff: 0}, { from: ‘Oleg’, to: ‘Igor’, amount: 1500, diff: -500}]
*/
const arr = [
 { from: 'Ivan', to: 'Oleg', amount: 2500 },
 { from: 'Ivan', to: 'Igor', amount: 2000 },
 { from: 'Oleg', to: 'Igor', amount: 1500 }];

const calculateAverageCost = (array) => {
  let averageCost = 0;
  const newArr = [];

  for (let elem of array) {
    const { amount } = elem;
    
    averageCost += amount/ array.length;
    newArr.push(elem);
  
    for (let item of newArr) {
      item.diff = item.amount - averageCost;
    }
  }

  return [averageCost, newArr];
};

console.log(calculateAverageCost(arr));