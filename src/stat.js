'use strict';
let _ID = 0;

class Stat{
  constructor(min , max , current , isInt ){
    if(typeof min != 'number') throw new Error('min must be a number');
    if(typeof max != 'number') throw new Error('max must be a number');
    if(typeof current != 'number') throw new Error('current must be a number');

    if(min > max) throw new Error('Min cant be greater than max');
    if(current < min) current = min;
    if(current > max) current = max;
    this.min = isInt ? Math.floor(min) : min;
    this.max = isInt ? Math.floor(max) : max;
    this.isInt = isInt === true;
    this.current = isInt ? parseInt(current, 10) : current;
    this.flatModifiers = [];
    this.percentModifiers = [];
  }

  total(){
    const flatM = this.flatModifiers.reduce((p, fm) => fm.fn(this) + p, 0);
    const flatP = this.percentModifiers.reduce((p, pm) => pm.fn(this) + p, 0);
    let t = (this.current + flatM) * (1 + (flatP / 100));
    return this.isInt ? parseInt(t, 10) : t;
  }

  addFlatModifier(fn){
    const id = _ID++;
    const f = {fn, id};
    this.flatModifiers.push(f);
    return id;
  }
  
  addPercentModifier(fn){
    const id = _ID++;
    const f = {fn, id};
    this.percentModifiers.push(f);
    return id;
  }

  removeFlatModifier(id){
    this.flatModifiers = this.flatModifiers.reduce((arr, f) => {
      if(f.id === id) return arr;
      arr.push(f);
      return arr;
    }, []);
  }

  removePercentModifier(id){
    this.percentModifiers = this.percentModifiers.reduce((arr, f) => {
      if(f.id === id) return arr;
      arr.push(f);
      return arr;
    }, []);
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
