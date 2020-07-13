function reverseString(str) {
  if (str === '') {
    return '';
  }
  const newString = str[str.length - 1];
  return newString + reverseString(str.slice(0, -1));
}
