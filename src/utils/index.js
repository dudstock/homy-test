export function _isArrayEmpty(arr = []) {
  return (arr || []).length === 0;
}

export function _isArray(arr) {
  return Array.isArray(arr);
}

export function _isNumber(value) {
  return !Number.isNaN(Number(value));
}

export function _isNumberInteger(value) {
  return Number.isInteger(Number(value));
}
