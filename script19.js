/*
Написать функцию, которая принимает на вход E-mal в виде строки и возвращает объект вида { username, domain }
Input: “ivanov.oleg@pochta.com”
Output: {
 username: “ivanov.oleg”,
 domain: “pochta.com”
}
*/
const str = 'ivanov.oleg@pochta.com';
const returnObject = (mail) => {
  const index = mail.indexOf('@');
  const strUserName = mail.substring(0, index);
  const strDomain = mail.substring(index + 1);
  const obj = {
    username: strUserName,
    domain: strDomain
  };

  return obj;
}

console.log(returnObject(str));