type PlainObject = ObjectOf<unknown>;

export default function isObject(value: unknown): value is PlainObject {
  return Object(value) === value;
}
