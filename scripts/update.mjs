// Copies every snapshot day listed by hunt4coin.com that this repository doesn't have yet.
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://hunt4coin.com';
const dir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'snapshots');
fs.mkdirSync(dir, { recursive: true });

const res = await fetch(`${SITE}/api/snapshots`, { headers: { 'user-agent': 'hunt4coin-data-sync' } });
if (!res.ok) throw new Error(`snapshot list: HTTP ${res.status}`);
const { snapshots } = await res.json();
let added = 0;
for (const s of snapshots) {
  const day = s.day ?? s;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) continue;
  const file = path.join(dir, `${day}.csv`);
  if (fs.existsSync(file)) continue;
  const csv = await fetch(`${SITE}/snapshots/${day}.csv`);
  if (!csv.ok) throw new Error(`${day}: HTTP ${csv.status}`);
  const text = await csv.text();
  if (!text.startsWith('snapshot_utc,')) throw new Error(`${day}: unexpected content`);
  fs.writeFileSync(file, text);
  added++;
  console.log(`added ${day}`);
}
console.log(`${added} new day(s)`);
