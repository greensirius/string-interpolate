export default function isString(value: unknown): string {
  return value === null ? '' : String(value);
}
