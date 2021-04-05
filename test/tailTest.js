
const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail function test", () => {
  
  it("returns ['Lighthouse', 'Lab'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo','Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

  it("returns ['Lighthouse', 'Lab'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello','Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });

});
