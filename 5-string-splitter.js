function stringSplitter(str, separator = '/', arr = [], index = 0) {
  if (str === '') {
    return arr;
  }
  if (str[0] === separator) {
    return stringSplitter(str.slice(1), separator, arr, index + 1);
  }
  if (arr[index]) {
    arr[index] = arr[index] + str[0];
  } else {
    arr[index] = str[0];
  }

  return stringSplitter(str.slice(1), separator, arr, index);
}
