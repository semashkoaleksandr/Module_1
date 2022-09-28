/*
Написать функцию, принимающую массив строк и выводящих их на экран, используя цикл while. Элементы из массива извлекать с помощью оператора .pop()
*/

const arr = ['one','two','three','four','five'];

const showItem = (array) => {
  let lengthArr = array.length;

  while (lengthArr > 0) {
    console.log(array.pop());
    lengthArr--;
  }
}

showItem(arr);