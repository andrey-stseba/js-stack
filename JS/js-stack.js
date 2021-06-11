"use strict";
class Node {
  constructor(data, next) {
    this._data = data;
    this._next = next;
  }
}

class Stack {
  constructor(maxSize = 50) {
    this._maxSize = maxSize;
    this._size = 0;
    this._top = null;
  }
  /**
   *
   * @param {*} value
   */
  push(value) {
    if (this._size === this._maxSize) {
      throw new RangeError("Stack overflow");
    }
    this._top = new Node(value, this._top);
    this._size++;
  }
  pop() {
    if (!this.isEmpty) {
      const value = this._top._data;
      this._top = this._top._next;
      this._size--;
      return value;
    }
  }
  get peek() {
    return this._top?._data;
  }
  get isEmpty() {
    return this._size === 0;
  }
}

// Написать функцию, которая принимает строку и проверяет, является ли строка палиндромом, и в зависимости от этого возвращает ИСТИНУ или ЛОЖЬ. (https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC).
// Вход: строка str.
// Выход: true, если строка палиндром;
//              false, если строка не палиндром.

// Пример:
// -  Вход: 'tenet'
//    Выход: true.
// -  Вход: 'guest'
//    Выход: false.
function checkWordPolyindrome(str) {
  const wordStack = new Stack();
  if (!str.trim() || 0 === str.length) {
    return false;
  }
  for (const s of str) {
    wordStack.push(s);
  }
  for (const s of str) {
    if (s !== wordStack.pop()) {
      return false;
    }
  }
  return wordStack.isEmpty;
}

//console.log(checkWordPolyindrome("tenet"));
//console.log(checkWordPolyindrome("guest"));

// ** То же самое, но не принимать во внимание пробелы:

// Пример:
// -  Вход: 'а роза упала на лапу Азора'
//    Выход: true.

function checkPolyindromesStrings(str) {
  const wordStack = new Stack();
  if (!str.trim() || 0 === str.length) {
    return false;
  }
  str = str.toLowerCase().replace(/\s+/g, "");
  for (const s of str) {
    wordStack.push(s);
  }
  for (const s of str) {
    if (s !== wordStack.pop()) {
      return false;
    }
  }
  return wordStack.isEmpty;
}

//console.log(checkPolyindromesStrings("а роза упала на лапу Азора"));
