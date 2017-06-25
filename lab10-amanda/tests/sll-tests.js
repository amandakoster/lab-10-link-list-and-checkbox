'use strict';

let LinkedList = require('../lib/index.js')
let expect = require('expect')

describe('Singley linked list tests', () => {
  describe('testing appendNode', () => {
    it('should append 20', () => {
        let test = new LinkedList(10)
        test.appendNode(new LinkedList(20))
        expect(test.next.value).toEqual(20)
      })
      it('should append 30', () => {
        let test = new LinkedList(10)
        test.appendNode(new LinkedList(30))
        expect(test.next.value).toEqual(30)
        });
      it('should append 40', () => {
        let test = new LinkedList(10)
        test.appendNode(new LinkedList(40))
        expect(test.next.value).toEqual(40)
        });
      });

    describe('testing removeNode', () => {
    it('should remove 20', () => {
      let test = new LinkedList(10)
      test.appendNode(new LinkedList(20))
      test.removeNode(20)
      expect(test.next).toEqual(null);
    });
    it('it should remove 20', () => {
      let test = new LinkedList(10)
      test.appendNode(new LinkList(20))
      test.appendNode(new LinkList(30))
      test.removeNode(20)
      expect(test.next).toEqual(30)
    });
    it('should remove 30', () => {
      let test = new LinkedList(10)
      test.appendNode(new LinkList(30))
      test.appendNode(new LinkedList(40))
      test.removeNode(30)
      expect(test.next).toEqual(40)
    });









// head.appendNode(new SLL(20));
// head.appendNode(new SLL(30));
// head.appendNode(new SLL(40));
// head.appendNode(new SLL(50));
//
// console.assert(head.value == 4);
// console.assert(head.next.value == 87);
// console.assert(head.next.next.value == 43);
// console.assert(head.next.next.next.value == 50);
// console.assert(head.next.next.next.value == 50);


  // describe('testing fp', () => {
  //   describe('testing fp.map', () => {
  //     it('it should return an array', () => {
  //       expect(fp.map(nums, n => n * 3)).toEqual([3, 6, 9, 12]);
  //     });
  //   });

// }) =>
// it ('should delete a node', (done) =>
// {superagent.post('localhost:300'/)}
