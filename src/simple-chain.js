const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    if (position < 1) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    if(position > this.result.length) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    if(!Number.isInteger(position)) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let result2 = this.result.join("~~");
    this.result = [];
    return result2;
  }
};

module.exports = {
  chainMaker
};
