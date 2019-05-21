"use strict";
exports.__esModule = true;
var isObject_1 = require("./isObject");
function lookUpByPath(data, path) {
    var value = data;
    var splittedPath = path.split('.');
    for (var _i = 0, splittedPath_1 = splittedPath; _i < splittedPath_1.length; _i++) {
        var path_1 = splittedPath_1[_i];
        if (Array.isArray(value) || isObject_1["default"](value)) {
            var objectOrArray = value;
            value = objectOrArray[path_1];
        }
        else {
            value = undefined;
            break;
        }
    }
    return value;
}
exports["default"] = lookUpByPath;
