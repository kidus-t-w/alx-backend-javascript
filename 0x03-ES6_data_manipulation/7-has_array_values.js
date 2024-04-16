export default function hasValuesFromArray(s, array) {
  let value = false;
  for (let i = 0; i < array.length; i += 1) {
    if (s.has(array[i])) {
      value = true;
    } else if (!s.has(array[i])) {
      value = false;
    }
  }
  return value;
}
