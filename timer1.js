const TerminalInput = process.argv.slice(2);

// Keeps only input elements convertible to non-negative numbers.
let timesN = [];
TerminalInput.forEach(elem => {
  if (Number(elem) >= 0) {
    timesN.push(Number(elem));
  }
});

for(const time of timesN) {
  setTimeout(() => process.stdout.write('\x07'), time*1000);
}

setTimeout(() => process.stdout.write("\n"), Math.max(...timesN)*1000);