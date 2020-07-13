function factorial(num) {
  if (num <= 0) {
    return 'Number must be one or greater';
  }
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}