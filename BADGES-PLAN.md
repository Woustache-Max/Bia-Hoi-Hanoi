# Bác Hơi — Badges Plan

**STATUS: numbers AGREED with Stein (2026-07-02). Ready to implement in the badge-rework build, then recalc all.**
Easy to re-tune later — they're just thresholds. Test with the team; adjusting + recalc is quick.

Legend: ✅ keep · ⬆ raise · ✏️ change criteria · ➕ new · 🔧 needs plumbing fix (reporting / helpful-votes)

---

## 📍 Spots
| Badge | New requirement |
|---|---|
| First Pour | add 1 spot |
| Scout | 10 spots |
| Cartographer | 25 spots |

## ✍️ Reviews
| Badge | New requirement |
|---|---|
| First Words | 1 review |
| Regular | 20 reviews |
| Critic | 30 reviews |
| Pioneer | first to review **5** spots |
| Wordsmith | 1,500 words total |
| All-Rounder | all 5 categories in 20 reviews |
| Beer Sommelier | 5★ beer to 10 spots |

## 📷 Photos
| Badge | New requirement |
|---|---|
| Photographer | 1 photo |
| Gallery Owner | 25 photos |
| Lensman | photos to 20 spots |

## 👍 Social (helpful votes) — 🔧 plumbing fix
| Badge | New requirement |
|---|---|
| Crowd Favourite | 20 helpful votes |
| Community Pillar | 50 helpful votes |

## ✅ Verified
| Badge | New requirement |
|---|---|
| Legit | 1 verified |
| Trusted Local | 10 verified |

## 🗺️ Explorer
| Badge | New requirement |
|---|---|
| District Explorer | 6 districts |
| City-Wide | 10 districts |
| District Champion | all 12 |
| Old Quarter Crawler | 15 in Hoàn Kiếm |
| Tây Hồ Regular | 10 in Tây Hồ |

## ⚑ Reports — 🔧 plumbing fix (form + RPC being built now)
| Badge | New requirement |
|---|---|
| Safety Inspector | 5 reports |

## ⏰ Time & Vibe
| Badge | New requirement |
|---|---|
| Early Bird | 3 spots open before noon |
| Golden Hour | 3 spots open before 5pm |
| Night Owl | 5 spots open after 10pm |
| Plastic Stool Regular | 12 street-side spots |

## 🤙 Uncle
| Badge | New requirement |
|---|---|
| Uncle Approved | 1 thumbs-up photo |
| Full Uncle | 1 photo w/ 5+ thumbs-up |

## 🏆 Legend
| Badge | New requirement |
|---|---|
| Bác Hơi Legend | earn 25 badges |

---

## ➕ New badges
| Badge | Requirement |
|---|---|
| 📸 Snapshot Star | a photo you uploaded gets 15 likes |
| 🔁 The Usual | review the same spot 5× |
| 🧭 Completionist | add 5 spots with every field filled |
| 🌱 Trendsetter | a spot you added gets 10 different reviewers |
| 🍜 Foodie | rate Food & snacks on 20 spots |
| 🔥 Streak | post reviews across 5 different weeks |
| 🏅 Century Club | 100 reviews |
| ~~💸 Big Spender~~ | dropped |

---

## 🔁 Repeatable / tiered ("×N" system) — AGREED, next build

Three monthly awards, each earnable repeatedly and shown with a ×N count:
- 🖼️ **Photo of the Month** — uploader of the most-liked photo that month.
- ✍️ **Reviewer of the Month** — most reviews posted that month.
- 📍 **Explorer of the Month** — most new spots added that month.
(Helper of the Month — dropped for now.)

Mechanics:
- **Fully automatic** via Supabase **pg_cron** — a `crown_monthly_winners()` SQL function runs on the 1st of each month (Hanoi time), computes the *previous* month's winners, and increments each winner's ×N count. No manual step.
- **Storage:** new `monthly_awards` table (period `YYYY-MM`, award_type, user_id, photo_id, metric). A user's ×N = their row count per award_type.
- **Prestige:** hitting **×5** of any monthly award unlocks a special higher-tier badge (e.g. 👑 Hall of Fame).
- **Display:** show earned monthly awards with their ×N in the profile / quest view.
- Ties: earliest to reach the metric wins (or all tie-winners get it — decide at build).

## ✅ Done in the badge build
- Fixed the welcome-screen count 29 → 37.
- Golden Hour → **Golden Hours** (5–7pm Hanoi, by review timestamp).
