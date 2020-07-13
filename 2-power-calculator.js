function powerCalculator(int1, int2) {
  if (int2 < 0) {
    return console.log('exponent should be >= 0');
  }
  if (int2 === 0) {
    return 1;
  }
  return int1 * powerCalculator(int1, int2 - 1);
}
