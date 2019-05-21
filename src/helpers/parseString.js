"use strict";
exports.__esModule = true;
function parseString(text) {
    var result = [];
    var isExpression = false;
    var textValue = '';
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var ch = text_1[_i];
        if (ch === '{' && !isExpression) {
            if (textValue.length) {
                result.push({ type: 'string', value: textValue });
            }
            isExpression = true;
            textValue = '';
        }
        else if (ch === '}' && isExpression) {
            if (textValue.length) {
                result.push({ type: 'expression', value: textValue });
            }
            isExpression = false;
            textValue = '';
        }
        else {
            textValue += ch;
        }
    }
    if (textValue.length) {
        result.push({ type: 'string', value: textValue });
    }
    return result;
}
exports["default"] = parseString;
