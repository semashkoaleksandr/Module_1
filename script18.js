/*
Написать функцию, принимающую на вход ФИО в виде одной строки. Функция должна возвращать объект вида { first_name: “Имя”, last_name: “Фамилия”, patronymic_name: “Отчество”}
Input: “Иванов Пётр Андреевич”
Output: { first_name: “Пётр”, last_name: “Иванов”, patronymic_name: “Андреевич”}
*/

const user = 'Иванов Пётр Андреевич';

const returnObject = (string) => {
  const arrayUser = string.split(' ');
  const [surname, name, patronymic] = arrayUser;

  const objUser = {
    first_name: name,
    last_name: surname,
    patronymic_name: patronymic
  };

  return objUser;
};

console.log(returnObject(user));