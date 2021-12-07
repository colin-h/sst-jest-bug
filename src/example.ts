import { isValid } from "./dependency";


export function add(a: number, b: number) {
  if (!isValid(a) || !isValid(b)) throw new Error('Bad')

  return a + b
}
