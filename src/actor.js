'use strict';
const Stat = require('./stat');
const MiniSignal = require('mini-signals');

class Actor{
  constructor(){
    this.signals = {
      beforeApplyDamage : new MiniSignal()
    }
    this.coreStats = {
      hp : {
        fullname : 'Hit Points',
        abv : 'HP',
        stat : new Stat(0, 20, 20, true)
      },

      str : {
        fullname : 'Strength',
        abv : 'STR',
        stat : new Stat(0, 5, 1, true)
      },

      mag : {
        fullname : 'Magic',
        abv : 'MAG',
        stat : new Stat(0, 5, 0, true)
      },

      def : {
        fullname : 'Defense',
        abv : 'DEF',
        stat : new Stat(0, 9999, 2, true)
      },

      res : {
        fullname : 'Resistence',
        abv : 'RES',
        stat : new Stat(0, 9999, 1, true)
      },

      ap : {
        fullname : 'Action Points',
        abv : 'AP',
        stat : new Stat(0, 3, 0, true)
      },

      spd : {
        fullname : 'Speed',
        abv : 'spd',
        stat : new Stat(0, 5, 2, true)
      }
    };

    this.elementalStats = {
      firePower : {
        fullname : 'Fire Power',
        abv : 'FP',
        stat : new Stat(0, 0, 0, true)
      },

      fireRes : {
        fullname : 'Fire Resistence',
        abv : 'FRES',
        stat : new Stat(0, 0, 0, true)
      },

      lightningPower : {
        fullname : 'Lightning Power',
        abv : 'LP',
        stat : new Stat(0, 0, 0, true)
      },

      lightningRes : {
        fullname : 'Lightning Resistence',
        abv : 'LRES',
        stat : new Stat(0, 0, 0, true)
      },

      icePower : {
        fullname : 'Ice Power',
        abv : 'IP',
        stat : new Stat(0, 0, 0, true)
      },

      iceRes : {
        fullname : 'Ice Resistence',
        abv : 'IRES',
        stat : new Stat(0, 0, 0, true)
      },

      lightPower : {
        fullname : 'Light Power',
        abv : 'LP',
        stat : new Stat(0, 0, 0, true)
      },

      lightRes : {
        fullname : 'Light Resistence',
        abv : 'LiRES',
        stat : new Stat(0, 0, 0, true)
      },

      darkPower : {
        fullname : 'Dark Power',
        abv : 'DP',
        stat : new Stat(0, 0, 0, true)
      },

      darkRes : {
        fullname : 'Dark Resistence',
        abv : 'DRES',
        stat : new Stat(0, 0, 0, true)
      },
    };

    this.statusDamage = {
      poisonPower : {
        fullname : 'Poison Power',
        abv : 'POP',
        stat : new Stat(0, 0, 0, true)
      },
      poisonRes : {
        fullname : 'Poison Resistence',
        abv : 'POR',
        stat : new Stat(0, 0, 0, true)
      }
    }
  }

  takeDamage(value, type){
    switch(type){
      case 'hp':  return this._takeHPDamage(value)
      case 'physical': return this._takePhysicalDamage(value)
      case 'magic': return this._takeMagicDamage(value)
      default:
        throw new Error('invalid damage type');
    }
  }

  _takeHPDamage(value){
    this.coreStats.hp.stat.subCurrent(value);
    return value;
  }

  _takePhysicalDamage(value){
    const armor = this.coreStats.res.stat.total() / 8;
    const dr = 100 / (100 + (armor / 6));
    const dmg = value * dr;
    this.coreStats.hp.stat.subCurrent(value);
    return dmg;
  }

  _takeMagicDamage(value){
    const armor = this.coreStats.mag.stat.total() / 5;
    const dr = 100 / (100 + (armor / 9));
    const dmg = value * dr;
    this.coreStats.hp.stat.subCurrent(value);
    return dmg;
  }

};

module.exports = Actor;
