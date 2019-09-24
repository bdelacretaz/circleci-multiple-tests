const assert = require('assert')
describe('Testing two', () => {
  if(Math.random() > 0.4) {
    it('is passing in two', () => assert(true));
  } else {
    it('is failing in two', () => assert(false));
  }
});
