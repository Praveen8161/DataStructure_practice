// Circulat queue have fixed size --> isFull() && rear()
// Leetcode ---- 622

var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (ele) {
  if (this.size === this.queue.length) return false;
  this.queue.push(ele);
  return true;
};
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.size;
};

var obj = new MyCircularQueue(3);

obj.enQueue(1);
obj.enQueue(2);
obj.enQueue(3);
obj.deQueue();
obj.enQueue(5);
obj.deQueue();
obj.enQueue(88);

console.log(obj.Front(), obj.Rear());
