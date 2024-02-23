// First In First Out
// enqueue --->>> add element to end
// dequeue --->>> remove element from start
// peek --->>> get or see the first element
// isEmpty --->>> check if the array is empty
// size --->>> get the size

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(ele) {
    this.queue.push(ele);
  }

  dequeue = () => {
    if (this.isEmpty()) {
      return "underflow";
    }

    return this.queue.shift();
  };

  isEmpty() {
    return this.queue.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "No element in the Queue";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  print() {
    return this.queue;
  }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue(5);
myQueue.enqueue(58);
myQueue.enqueue(45);

myQueue.dequeue();

console.log(myQueue.front());
console.log(myQueue.print());
