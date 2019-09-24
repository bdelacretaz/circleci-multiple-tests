const assert = require('assert');
const shell = require('shelljs');
const folders = ['sub/one', 'sub/two', 'sub/three/deep'];

folders.forEach(folder => {
  console.log(folder);
  describe(`******** Context: ${folder} ********`, function() {
    it(`Should pass the ${folder} tests`, () => {
      assert(shell.exec(`pushd ${folder} ; npm test ; popd`).code == 0);
    });
  });
});
