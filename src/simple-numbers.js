for (let i = 1; i <= 100; i++) {
  let isPrime = true;

  for (let j = 100; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}