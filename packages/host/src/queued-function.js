const queuedFunction = (functionPromise) => {
  let queueFunc = null;
  const queue = [];
  let pending = false;

  return (msg) => {
    if (queueFunc) {
      queueFunc(msg);
    } else {
      queue.push(msg);

      if (!pending) {
        pending = true;
        functionPromise
          .then((func) => {
            queueFunc = func;
            queue.forEach(queueFunc);
            queue = [];
          })
          .catch((err) => console.log(`Error getting queued function`));
      }
    }
  };
};
