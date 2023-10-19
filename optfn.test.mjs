// Filename: optfn.spec.js  
// Timestamp: 2017.12.23-17:21:52 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

import test from 'node:test'
import assert from 'node:assert/strict'
import optfn from './optfn.mjs'

function asyncfn (fn, deffn) {
  optfn(fn, deffn)('done');
}

test('should call an optional callback', async () => {
  const res = await new Promise(resolve => {
    asyncfn(res => {
      resolve(res)
    });
  })

  assert.strictEqual( res, 'done' );
});

test('should not call an optional callback not passed', () => {  
  asyncfn();
  assert.strictEqual( true, true );
});

test('should a default callback if optional callback not passed', async () => {
  const res = await new Promise(resolve => {
    asyncfn(null, res => {
      resolve(res)
    });
  })

  assert.strictEqual( res, 'done' );
});  
