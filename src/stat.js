'use strict';

class Stat{
  constructor(min , max , current , isInt ){
    this.min = isInt ? Math.floor(min) : min;
    this.max = isInt ? Math.floor(max) : max;
    this.isInt = isInt === true;
    this.current = isInt ? parseInt(current, 10) : current;
  }
  
  addCurrent(value){
    let newVal = this.current + value;
    if(newVal > this.max){
      newVal = this.max;
      this.current = newVal;
      return newVal;
    }
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.current = newVal;
    return newVal;
  }

  subCurrent(value){
    let newVal = this.current - value;
    if(newVal < this.min){
      newVal = this.min;
      this.current = newVal;
      return newVal;
    }
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.current = newVal;
    return newVal;
  }

  addMax(value){
    let newVal = this.max + value;
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.max = newVal;
    return newVal;
  }

  subMax(value){
    let newVal = this.max - value;
    if(newVal < this.min){
      newVal = this.min;
      this.max = newVal;
      return newVal;
    }
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.max = newVal;
    return newVal;
  }

  addMin(value){
    let newVal = this.min + value;
    if(newVal > this.max){
      newVal = this.max;
      this.min = newVal;
      return newVal;
    }
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.min = newVal;
    return newVal;
  }
  subMin(value){
    let newVal = this.min - value;
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.min = newVal;
    return newVal;
  }
}

module.exports = Stat;
