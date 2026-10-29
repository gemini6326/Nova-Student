import test from 'node:test';
import assert from 'node:assert/strict';
import {VALUES, GEMS, totalValue, gemsIn, valueOf} from '../public/benefits/value.js';
import {OFFERS} from '../src/data/seed.js';

test('values and gems point to curated offers', () => {
  const slugs = new Set(OFFERS.map(o => o.slug));
  for (const s of Object.keys(VALUES)) assert.ok(slugs.has(s), s);
  for (const g of GEMS) assert.ok(slugs.has(g.slug) && g.why.length > 10, g.slug);
});

test('total counts only offers that are present and gems keep their order', () => {
  const list = [{slug: 'clerk-estudiantes', id: 1}, {slug: 'unknown', id: 2}, {slug: 'new-relic-estudiantes', id: 3}];
  assert.equal(totalValue(list), VALUES['clerk-estudiantes'].usd + VALUES['new-relic-estudiantes'].usd);
  assert.deepEqual(gemsIn(list).map(g => g.offer.id), [3, 1]);
  assert.equal(valueOf({slug: 'unknown'}), null);
});
