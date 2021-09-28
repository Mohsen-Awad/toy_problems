/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

class Node {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

const LinkedList = () => {
  //fill me in!
  const newList = {}

  newList.head = null
  newList.tail = null

  newList.addToTail = (value) => {
    const newNode = new Node(value)

    if (newList.head !== null) {
      let node = newList.head

      while (node.next !== null) {
        node = node.next
      }
      node.next = newNode
    }
    newList.tail = newNode

    if (newList.head === null) newList.head = newNode
  }

  newList.contains = (value) => {
    let node = newList.head

    while (node) {
      if (node.value === value) return true
      node = node.next
    }
    return false
  }

  newList.removeHead = () => {
    const value = newList.head.value
    if (newList.head.next) newList.head = newList.head.next

    return value
  }

  return newList
}

describe('Tests', () => {
  it('test LinkedList', () => {
    const list = LinkedList()
    expect(list.tail).toBeNull()
    list.addToTail(4)
    list.addToTail(5)
    expect(list.tail.value).toEqual(5)
    expect(list.head.value).toEqual(4)
    expect(list.contains(5)).toBeTruthy()
    expect(list.contains(6)).toBeFalsy()
    expect(list.removeHead()).toEqual(4)
    expect(list.head.value).toEqual(5)
    expect(list.tail.value).toEqual(5)
    console.log(list)
  })
})

// write methods here!
