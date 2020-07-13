function nthTriangularNumber(num) {
  if (num < 1) {
    return console.log('num must be >= 1');
  }
  if (num === 1) {
    return 1;
  }
  return num + nthTriangularNumber(num - 1);
}