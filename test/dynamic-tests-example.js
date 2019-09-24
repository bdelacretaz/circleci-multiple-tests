const assert = require('assert');
const shell = require('shelljs');
const folders = ['sub/one', 'sub/two', 'sub/three/deep'];

folders.forEach(folder => {
  console.log(folder);
  describe(`******** Context: ${folder} ********`, function() {
    it(`Should pass the ${folder} tests`, () => {
      assert(shell.exec(`cd ${folder} ; npm test ; cd -`).code == 0);
    });
  });
});
