// Filename: optfn.spec.js  
// Timestamp: 2017.12.23-17:21:52 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

const optfn = require('../optfn');

describe('optfn', () => {

  function asyncfn (fn, deffn) {
    optfn(fn, deffn)('done');
  }
  
  it('should call an optional callback', done => {  
    asyncfn(res => {
      expect( res ).toBe( 'done' );      
      done();
    });
  });

  it('should not call an optional callback not passed', () => {  
    asyncfn();
    expect( true ).toBe( true );
  });

  it('should a default callback if optional callback not passed', done => {  
    asyncfn(null, res => {
      expect( res ).toBe( 'done' );      
      done();      
    });
  });  

});

