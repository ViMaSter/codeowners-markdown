// import ../generate.js and call generate() with absolute path to fixture subdirectory
import generate from '../generate.js';
// import node test runner and test that it equals content of expected.md
import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'path';
const __dirname = path.resolve();

test('fixture generates expected.md content', () => {
    const expectedContent = fs.readFileSync(__dirname+'/tests/expected.md', 'utf-8');
    const actualContent = generate('tests/fixture');
    assert.strictEqual(actualContent, expectedContent);
});