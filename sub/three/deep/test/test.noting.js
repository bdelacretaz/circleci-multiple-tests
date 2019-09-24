const assert = require('assert')
describe('Testing three/deep', () => {
  if(Math.random() > 0.2) {
    it('is passing in three/deep', () => assert(true));
  } else {
    it('is failing in three/deep', () => assert(false));
  }
});
