import { isEmpty } from "./isEmptyObject"

describe('Is empty object', () => {
  it('should return false when object is not empty', () => {
    const obj = { a: 'a', b: 'b'}
    expect(isEmpty(obj)).toBeFalsy()
  });
  it('should return true when object is empty', () => {
    const obj = {}
    expect(isEmpty(obj)).toBeTruthy()
  }) 
})