//Write a function sortStack that receives a stack of integers into ascending order (with largest integers on top) and returns another stack with sorted integers. You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure.

//Example:

//const s = new Stack();
//s.push(4);
//s.push(10);
//s.push(8);
//s.push(5);
//s.push(1);
//s.push(6);

//const sortedStack = sortStack(s); // sortedStack is also a Stack instance

//sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10
//Analyze the time and space complexity of your solution.

class Stack {
    constructor() {
      this.storage = [];
    }

    push(item) {
      this.storage.push(item);
    }

    pop() {
      return this.storage.pop();
    }

    peek() {
      return this.storage[this.storage.length-1];
    }

    isEmpty() {
      return this.storage.length === 0;
    }

    printContents() {
      this.storage.forEach(elem => console.log(elem));
    }
  }


const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6); // top of stack

// s.printContents();
// console.log(s.peek());


const sortStack = (stack) => {
  const sorted = new Stack();

  while (!stack.isEmpty()) {
      let tmp = stack.pop();
      if (tmp >= sorted.peek()) {
          sorted.push(tmp);
      }
      else {
          while (tmp < sorted.peek()) {
              stack.push(sorted.pop());
          }
          sorted.push(tmp);
      }
  }
  return sorted;
}

const x = sortStack(s);
console.log(x);
