/*
Написать функцию, принимающую два числа и любую операцию над этими числами (сложение, вычитание или др.). В функции выполнить эту операцию и вернуть результат.
*/
const calc = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '**':
      return a ** b;
    case '%':
      return a % b;
    default:
      return 'Неизвестная операция';
  }
}

console.log(calc(10, 3, '+'));