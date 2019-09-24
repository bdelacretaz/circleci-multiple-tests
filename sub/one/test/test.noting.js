const assert = require('assert')
describe('Testing one', () => {
  if(Math.random() > 0.5) {
    it('is passing in one', () => assert(true));
  } else {
    it('is failing in one', () => assert(false));
  }
});
