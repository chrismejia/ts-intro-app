"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        // default to null
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    add(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            return;
        }
        // Move along list until reaching the end of the list.
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIdx, rightIdx) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIdx).data > this.at(rightIdx).data;
    }
    swap(leftIdx, rightIdx) {
        const leftNode = this.at(leftIdx);
        const rightNode = this.at(rightIdx);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
