function countingSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence');
  } else {
    console.log(`${num}: Another sheep jumps over the fence`);
    return countingSheep(num - 1);
  }
}