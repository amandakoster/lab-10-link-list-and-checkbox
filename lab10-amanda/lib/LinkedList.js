'use strict';

class SLL {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendNode(node) {
    if(!(node instanceof SLL))
      return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback) {
    let current = this;
    while(current) {
      callback(current,this);
      current = current.next;
    }
  }

  findMiddle() {
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next) {
      slow = slow.nextfast = fast.next.next;
    }
    return slow;
  }

  remove(node) {
    if (!(node instanceof SLL)) {
      return null;
    }
    if (this.next.value === node.value) {
      this.next = this.next.next;
      return;
    }
    this.next.remove(node);
  }
}

//Keeping code here to help wiith next part of lab
// `reverse()`

// try {
//   console.log('testing SLL');
//
//   let head = new SLL(4);
//   console.assert(head.value === 4);
//   console.assert(head.next === null);
//
//   head.appendNode(new SLL(20));
//   head.appendNode(new SLL(30));
//   head.appendNode(new SLL(40));
//   head.appendNode(new SLL(50));
//
//   console.assert(head.value == 4);
//   console.assert(head.next.value == 87);
//   console.assert(head.next.next.value == 43);
//   console.assert(head.next.next.next.value == 50);
//   console.assert(head.next.next.next.value == 50);
//
//   head.remove(new SLL(43));
//   console.assert(head.value == 4);
//   console.assert(head.next.next.value == 50);
//   console.dir(head, {depth:100});
//
// } catch (err) {
//   console.log('failed', err);
// }

  //how to prepend
  // let tmp = new SLL(8);
  // tmp.next = head;
  // head = tmp;

  // let sum = 0;
  // head.forEach((node, list) => {
  //   console.assert(list === head);
  //   sum += node.value;
  // });

  // console.assert(sum == 142);

//0 -> 8-> 4 -> 87 -> 43 -> null
//   let middle = head.findMiddle();
//   console.log('middle.value', middle.value);
//   console.assert(middle.value === 4);
//
//   console.log('success');
