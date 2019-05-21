import isObject from './isObject';

export default function lookUpByPath(data: unknown, path: string) {
  let value = data;
  let splittedPath = path.split('.');
  for (let path of splittedPath) {
    if (Array.isArray(value) || isObject(value)) {
      let objectOrArray = value;
      value = objectOrArray[path];
    } else {
      value = undefined;
      break;
    }
  }
  return value;
}
