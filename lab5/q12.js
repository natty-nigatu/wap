function printFibo(n, a, b) {
  for (let i = 0; i < n; i++) {
    if (i != 0) process.stdout.write(", ");

    process.stdout.write(String(a));

    temp = a;
    a = b;
    b = temp + a;
  }
}
