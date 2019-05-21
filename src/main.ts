import interpolation from './helpers/interpolation';

let data = {
  username: 'Dominggus Octovianus',
  organization: 'Kode Fox'
};

let userList = {
  username: {
    firstname: 'Dominggus',
    lastname: 'Octovianus'
  },
  password: 'HelloWorld'
};

let text1 = 'Hello {data.username}, your org is {data.organization}.';
let text2 =
  'Your username is {data.username}, your org is {data.organization}.';
console.log(interpolation(data, text1));
console.log(interpolation(userList, text2));
