const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.last = this.queue;
  }

  get size() {
    let tmp = this.queue;
    let count = 0;
    while (tmp) {
      count++;
      tmp = tmp.next;
    }
    return count;
  }

  enqueue(element) {
    if (this.queue.next === undefined) {
      this.queue.next = new ListNode();
      this.queue.value = element;
      this.last = this.queue.next;
    } else {
      this.last.value = element;
      this.last.next = new ListNode();
      this.last = this.last.next;
    }
  }

  dequeue() {
    const result = this.queue.value;
    this.queue = this.queue.next;
    return result;
  }
}

module.exports = Queue;
