function staircase(n) {
  let count = 1;

  while (count < n + 1) {
    let rest = n - count;
    console.log(`${' '.repeat(rest)}${'#'.repeat(count)}`);

    count++;
  }
}

staircase(6);
