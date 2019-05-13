const enhancer = require('./enhancer.js');
const {succeed, fail, repair, get} = require('./enhancer.js');

describe('enhancer.js', () => {
  describe('repair() method', () => {
    it('should return a new item with a durability of 100 when passed an item', () => {
      const item = {};
      expect(repair(item).durability).toBe(100);
      item.durability = 20;
      expect(repair(item).durability).toBe(100);
    })
  });

  describe('success() method', () => {

  });
  describe('fail() method', () => {

  });
  describe('get() method', () => {

  });
});
