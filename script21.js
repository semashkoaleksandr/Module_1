/*
Написать функцию, которая принимает на вход объект вида { first_name: ‘Ivan’, last_name: ‘Ivanov’, email: ‘ivanov@pochta.com’ } и возвращает строку вида: “Ivanov Ivan E-mail: ivanov@pochta.com”
*/

const user = {
  first_name: 'Ivan',
  last_name: 'Ivanov',
  email: 'ivanov@pochta.com'
};

const getUser = (object) => {
  const { first_name, last_name, email } = object;
  const string = `${last_name} ${first_name} E-mail: ${email}`;

  return string;
};

console.log(getUser(user));