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

  describe('succeed() method', () => {
    it('should increase passed items enhancement by 1 if less than 20 or do nothing', () => {
      const item = {};
      expect(succeed(item).enhancement).toBe(1);
      item.enhancement = 10;
      expect(succeed(item).enhancement).toBe(11);
      item.enhancement = 20;
      expect(succeed(item).enhancement).toBe(20);
    })
  });
  describe('fail() method', () => {
    it('should decrease durability by 5 if enhancement is less than 15', () => {
      const item = {enhancement: 14, durability: 3};
      expect(fail(item).durability).toBe(0);
      item.durability = 7;
      expect(fail(item).durability).toBe(2);
    })
    it('should decrease durability by 10 if enhancement is greater than or equal to 15', () => {})
      const item = {enhancement: 15, durability: 3};
      expect(fail(item).durability).toBe(0);
      item.durability = 12;
      expect(fail(item).durability).toBe(2);
    it('should decrease enhancement by 1 if enhancement is greater than 16', () => {
      const item = {enhancement: 15}
      expect(fail(item).enhancement).toBe(15);
      item.enhancement = 16
      expect(fail(item).enhancement).toBe(15);
    })
  });
  describe('get() method', () => {

  });
});
