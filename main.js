const firstnumber = document.querySelector('#number1');
const secondnumber = document.querySelector('#number2');

const total = document.querySelector('.result');

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  [firstnumber, secondnumber].forEach(input => {
    input.onchange = function() {
      myWorker.postMessage([firstnumber.value, secondnumber.value]);
      console.log('Message posted to worker');
    }
  })

  myWorker.onmessage = function(e) {
    total.textContent = e.data;
    console.log('Message received from worker');
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}