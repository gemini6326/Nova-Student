import test from 'node:test';
import assert from 'node:assert/strict';
import {playbookFor} from '../public/benefits/playbook.js';
import {OFFERS} from '../src/data/seed.js';

test('every curated offer gets a usable playbook', () => {
  for (const o of OFFERS) {
    const pb = playbookFor(o);
    assert.ok(pb.time && pb.effort && pb.impact, o.slug);
    assert.ok(pb.tips.length >= 1 && pb.tips.length <= 4, o.slug);
  }
});

test('playbook combos only point to curated slugs', () => {
  const slugs = new Set(OFFERS.map(o => o.slug));
  for (const o of OFFERS) for (const c of playbookFor(o).combos) assert.ok(slugs.has(c), `${o.slug} -> ${c}`);
});

test('offers that need a card always warn about the charge date', () => {
  const pb = playbookFor({slug: 'x', verification: 'SheerID', requires_card: true});
  assert.ok(pb.tips.some(t => /tarjeta/i.test(t)));
});
