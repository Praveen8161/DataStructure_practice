// Stack --->>> Last In First Out
// Imporntant Elements --->>> peek() , push, pop, isEmpty, size

class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(e) {
    this.stack.push(e);
  }

  pop() {
    if (this.isEmpty()) {
      return "This stack is Empty";
    }

    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "This stack is Empty";
    }

    return this.stack[this.stack.length - 1];
  }

  all() {
    return this.stack;
  }
}

const stack = new Stack();

stack.push(54);
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.all());
console.log(stack.pop());
