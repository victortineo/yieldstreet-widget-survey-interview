export function isEmpty(obj: Object) { 
  for (let x in obj) { return false; }
  return true;
}