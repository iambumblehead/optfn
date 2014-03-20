// Filename: optfn.spec.js  
// Timestamp: 2014.03.20-14:05:53 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var optfn = require('../optfn');

describe("optfn", function () {

  function asyncfn (fn) {
    fn = optfn(fn);
    fn('done');
  }
  
  it("should call an optional callback", function (done) {  
    asyncfn(function (res) {
      expect( res ).toBe( 'done' );      
      done();
    });
  });

  it("should not call an optional callback not passed", function () {  
    asyncfn();
    expect( true ).toBe( true );
  });

});

