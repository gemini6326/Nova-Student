import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {mkdtempSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {STUDENTOFFERS_PICKS} from '../src/data/studentoffers-picks.js';

test('new curated picks have official https sources and unique slugs', () => {
  const slugs = new Set();
  for (const o of STUDENTOFFERS_PICKS) {
    assert.ok(!slugs.has(o.slug), o.slug); slugs.add(o.slug);
    assert.equal(new URL(o.source_url).protocol, 'https:', o.slug);
    assert.ok(!/studentoffers\.co/.test(o.source_url), `${o.slug} must link to the official page`);
    assert.ok(o.requirements.length && o.steps.length, o.slug);
  }
});

test('existing databases receive new picks once and keep their rows', () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'nova-picks-'));
  const program = `
    import assert from 'node:assert/strict';
    const {db}=await import('./src/db.js');
    const {insertNewCuratedOffers}=await import('./src/seed.js');
    const {STUDENTOFFERS_PICKS}=await import('./src/data/studentoffers-picks.js');
    db.offers=[{id:42,slug:STUDENTOFFERS_PICKS[0].slug,benefit:'kept',status:'active'}];
    const {REGIONAL_PICKS}=await import('./src/data/regional-picks.js');
    assert.equal(insertNewCuratedOffers(),STUDENTOFFERS_PICKS.length+REGIONAL_PICKS.length-1);
    assert.equal(db.offers[0].benefit,'kept');
    assert.equal(insertNewCuratedOffers(),0);
  `;
  try {
    const r = spawnSync(process.execPath, ['--input-type=module', '-e', program], {cwd: process.cwd(), encoding: 'utf8', env: {...process.env, DATABASE_PATH: path.join(dir, 'db.json'), SUPABASE_URL: '', SUPABASE_SECRET_KEY: ''}});
    assert.equal(r.status, 0, r.stderr);
  } finally { rmSync(dir, {recursive: true, force: true}); }
});
