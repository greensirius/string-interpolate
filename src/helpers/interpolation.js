"use strict";
exports.__esModule = true;
var lookUpByPath_1 = require("./lookUpByPath");
var parseString_1 = require("./parseString");
var toString_1 = require("./toString");
function interpolation(data, text) {
    var result = '';
    var stringTokenList = parseString_1["default"](text);
    console.log('tokens : ', stringTokenList);
    for (var _i = 0, stringTokenList_1 = stringTokenList; _i < stringTokenList_1.length; _i++) {
        var token = stringTokenList_1[_i];
        if (token.type === 'expression') {
            result += toString_1["default"](lookUpByPath_1["default"](data, token.value));
            console.log('result : ', result);
        }
        else {
            result += token.value;
        }
    }
    return result;
}
exports["default"] = interpolation;
