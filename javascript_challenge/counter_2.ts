type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let counter = init;
  return {
    increment: () => (counter += 1),
    decrement: () => (counter -= 1),
    reset: () => (counter = init),
  };
}

const myCounter = createCounter(5);
console.log(
  myCounter.increment(),
  myCounter.increment(),
  myCounter.decrement(),
  myCounter.reset(),
);
