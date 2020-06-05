// Filename: optfn.spec.js  
// Timestamp: 2017.12.23-17:21:52 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

const test = require('ava');
const optfn = require('..').default;

function asyncfn (fn, deffn) {
  optfn(fn, deffn)('done');
}

test('should call an optional callback', async t => {  
  asyncfn(res => {
    t.is( res, 'done' );
  });
});

test('should not call an optional callback not passed', t => {  
  asyncfn();
  t.is( true, true );
});

test('should a default callback if optional callback not passed', async t => {  
  asyncfn(null, res => {
    t.is( res, 'done' );      
  });
});  
