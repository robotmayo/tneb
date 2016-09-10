'use strict';
let _ID = 0;

/** Class for a stat but really can be used for anything where fine control and restrictions are needed */
class Stat{
  /**
   * Create a new Stat
   * @param {number} min
   * @param {number} max
   * @param {number} current
   * @param {boolean=false} isInt
   */
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

  /**
   * The total after applying all the modifiers
   * @returns {number}
   */
  total(){
    const flatM = this.flatModifiers.reduce((p, fm) => fm.fn(this) + p, 0);
    const flatP = this.percentModifiers.reduce((p, pm) => pm.fn(this) + p, 0);
    let t = (this.current + flatM) * (1 + (flatP / 100));
    return this.isInt ? parseInt(t, 10) : t;
  }

  /**
   *
   * @param {Stat~modifierCallback} fn
   * @returns {number} id Used for removal
   */
  addFlatModifier(fn){
    const id = _ID++;
    const f = {fn, id};
    this.flatModifiers.push(f);
    return id;
  }

  /**
   *
   * @param {Stat~modifierCallback} fn
   * @returns {number} id Used for removal
   */
  addPercentModifier(fn){
    const id = _ID++;
    const f = {fn, id};
    this.percentModifiers.push(f);
    return id;
  }

  /**
   *
   * @param {number} id Id of the modifier
   */
  removeFlatModifier(id){
    this.flatModifiers = this.flatModifiers.reduce((arr, f) => {
      if(f.id === id) return arr;
      arr.push(f);
      return arr;
    }, []);
  }

  /**
   *
   * @param {number} id Id of the modifier
   */
  removePercentModifier(id){
    this.percentModifiers = this.percentModifiers.reduce((arr, f) => {
      if(f.id === id) return arr;
      arr.push(f);
      return arr;
    }, []);
  }

  /**
   * Add to the current value keeping within limits
   * @param {number} value
   * @return {number} current The new current value
   */
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

  /**
   * Subtract from the current value keeping within limits
   * @param {number} value
   * @return {number} current The new current value
   */
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

  /**
   * Increase the max value
   * @param {number} value
   * @return {number} max The new max value
   */
  addMax(value){
    let newVal = this.max + value;
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.max = newVal;
    return newVal;
  }

  /**
   * Reduce the max value, not going past the minimum value
   * @param {number} value
   * @return {number} max The new max value
   */
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

  /**
   * Increase the min value, not going past the maximum value
   * @param {number} value
   * @return {number} min The new min value
   */
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

  /**
   * Reduce the max value
   * @param {number} value
   * @return {number} max The new max value
   */
  subMin(value){
    let newVal = this.min - value;
    newVal = this.isInt ? parseInt(newVal, 10) : newVal;
    this.min = newVal;
    return newVal;
  }
}

module.exports = Stat;

/**
 Modifier Callback
 @callback Stat~modifierCallback
 @param {Stat}
 @return {number}
 */