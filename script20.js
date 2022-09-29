/*
Написать функцию, которая принимает на вход URL, например https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:

{
 protocol: “http”, 
 hostname: “www.google.com”,
 child: {
  path: “doodles”
  child: {
   rubiks-cube
  }
 }
}
URL может быть любой длины, но формат всегда будет {protocol}://{hostname}/path/path/…/path
*/
const url = "https://www.google.com/doodles/rubiks-cube/user/bank";

const splitString = (stringUrl) => {
  const arraySiteParts = stringUrl.split("://");
  const hostnameAndPaths = arraySiteParts[1].split("/");
  const protocol = arraySiteParts.shift();
  hostnameAndPaths.unshift(protocol);

  return hostnameAndPaths;
};

const out = splitString(url);
console.log(out)

const returnObjectSiteParts = (array) => {
  const output = {};
  let child = {};

  output.protocol = array.shift();
  output.hostname = array.shift();
  array.reverse().forEach((element, index) => {
    if (index === 0) {
      child = { path: element };
      return child;
    }
    child = { path: element, child };
  });

  output.child = child;
  return output;
};

console.log(returnObjectSiteParts(out));
