import test from 'node:test';
import assert from 'node:assert/strict';
import { extractQuantity, extractAllQuantities } from './farmosUtil.extractQuantity.js';

test('extractQuantity and extractAllQuantities parse multi-unit farmOS strings', () => {
  const raw = '2 TRAYS (Count), 102.5 FEET (Length/depth); 72 CELLS/TRAY';
  assert.equal(extractQuantity(raw, 'TRAYS'), 2);
  assert.equal(extractQuantity(raw, 'FEET'), 102.5);
  assert.equal(extractQuantity(raw, 'CELLS/TRAY'), 72);
  const all = extractAllQuantities(raw);
  assert.deepEqual(all, { TRAYS: 2, FEET: 102.5, 'CELLS/TRAY': 72 });
  assert.deepEqual(extractAllQuantities(''), {});
});
