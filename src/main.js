"use strict";
exports.__esModule = true;
var interpolation_1 = require("./helpers/interpolation");
var data = {
    username: 'Dominggus Octovianus',
    organization: 'Kode Fox'
};
var userList = {
    username: {
        firstname: 'Dominggus',
        lastname: 'Octovianus'
    },
    password: 'HelloWorld'
};
var text1 = 'Hello {data.username}, your org is {data.organization}.';
var text2 = 'Your username is {data.username}, your org is {data.organization}.';
console.log(interpolation_1["default"](data, text1));
console.log(interpolation_1["default"](userList, text2));
