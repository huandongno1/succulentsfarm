# TODO_VERIFY — Unconfirmed facts pending user sign-off

Per EXECUTION 铁律一: any number/factual claim not in `data/site-facts.json` with a confirmed value must be deleted or de-numbered on the page, never left as the old AI-generated figure. This file tracks what's still open.

## Open items

- [ ] **Countries served** — site previously said "40+ countries" with no source. No confirmed number exists. Sitewide replaced with "worldwide" / "globally" per fallback rule. If you have a real count, tell me and I'll restore a specific number.
- [ ] **Rare & Crested pool size** — homepage/rare-succulents page referenced "40" rare/crested varieties; not confirmed against the product catalogue. Left un-numbered ("a curated pool of crested and old-stalk specimens") until confirmed against `Succulent_Catalog_0707.xlsx`.
- [ ] **Founder name + photo** — About page needs a first-person founder module per plan 5.6. No name or photo supplied yet. Section left as a placeholder / omitted until provided.
- [ ] **Real photography** — no farm/greenhouse/packing/team photos in `public/assets/img/` beyond product shots, logo, and og-cover. All Unsplash stock images removed and replaced with plain-layout cards (no image) rather than left as fake photos. Swap in real photos as they become available:
  - Homepage hero background (user confirmed 2026-07-11 the current one is a placeholder snapshot and needs replacing)
  - 3 buyer-type cards (retail / collector / nursery)
  - How-it-works 4-step process photos (wash → dry → wrap → pack)
  - Recent-shipments style packing photos
  - Founder + team photo
  - Farm gate photo (placeholder card added 2026-07-11 to `/about/` "Visit the Farm" section and `/contact/` below the map — replace the dashed-border placeholder div with an `<img>` once the photo exists)

- [ ] **Real video** — user confirmed 2026-07-10 they will upload farm-tour and packing/dispatch footage. Placeholder `.video-card` components are live on `/` (2 slots: farm tour + packing) and `/about/` (1 farm-tour slot replacing the old greenhouse stat placeholder + 1 packing slot near the bottom). To wire up real footage once files exist, drop the `.mp4` into `public/assets/video/` (cache headers already configured in `_headers`) and replace each `.video-card__placeholder` div with:
  ```html
  <video class="video-card__media" controls preload="metadata" poster="/public/assets/img/<poster>.jpg">
    <source src="/public/assets/video/<filename>.mp4" type="video/mp4">
  </video>
  ```
  Suggested filenames: `farm-tour.mp4`, `packing-dispatch.mp4`.

## Resolved (moved from AI-generated to confirmed, see site-facts.json)

- [x] Founded year: 2013 → **2014**
- [x] Greenhouse size: 50,000 m² → **80,000 m² (≈ 20 acres / 8 hectares)**
- [x] Years operating: "11 years" → **12 years** (2026 − 2014)
- [x] Arrival health rate "97%+" → **removed sitewide**, no replacement claim
- [x] MOQ tiers: retail 50 / nursery 500 / collector 10 — confirmed real
- [x] Drying/hardening days: unified to **2–4 days** (was inconsistently 3–7 / 5–7 across pages)
- [x] Transit time: unified to **7–12 days** overall (was fabricated per-region breakdown)
- [x] Phyto certificate fee: **$50 USD under $800, free over $800** — confirmed real
