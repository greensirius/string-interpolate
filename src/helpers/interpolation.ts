import lookUpByPath from './lookUpByPath';
import parseString from './parseString';
import toString from './toString';

type PlainObject = ObjectOf<unknown>;

export default function interpolation(data: PlainObject, text: string): string {
  let result = '';
  let stringTokenList = parseString(text);
  console.log('tokens : ', stringTokenList);
  for (let token of stringTokenList) {
    if (token.type === 'expression') {
      result += toString(lookUpByPath(data, token.value));
      console.log('result : ', result);
    } else {
      result += token.value;
    }
  }
  return result;
}
