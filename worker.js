onmessage = function(e) {
    console.log('Worker: Message received from main script');
    const total = e.data[0] * e.data[1];
    if (isNaN(total)) {
      postMessage('Please write two numbers');
    } else {
      const workerResult = 'Result: ' + total;
      console.log('Worker: Posting message back to main script');
      postMessage(workerResult);
    }
  }