type StringToken = {
  type: 'expression' | 'string';
  value: string;
};

type TokenList = Array<StringToken>;

export default function parseString(text: string): TokenList {
  let result: TokenList = [];
  let isExpression: Boolean = false;
  let textValue: string = '';
  for (let ch of text) {
    if (ch === '{' && !isExpression) {
      if (textValue.length) {
        result.push({type: 'string', value: textValue});
      }
      isExpression = true;
      textValue = '';
    } else if (ch === '}' && isExpression) {
      if (textValue.length) {
        result.push({type: 'expression', value: textValue});
      }
      isExpression = false;
      textValue = '';
    } else {
      textValue += ch;
    }
  }
  if (textValue.length) {
    result.push({type: 'string', value: textValue});
  }
  return result;
}
