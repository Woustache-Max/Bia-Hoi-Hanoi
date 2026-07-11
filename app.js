/* ============================================================
   CONFIG — Supabase keys, constants, lookup tables
   ============================================================ */
const SUPABASE_URL = 'https://genqahabkjsmnoqbnkob.supabase.co';
const SUPABASE_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlbnFhaGFia2pzbW5vcWJua29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5ODYzMzQsImV4cCI6MjA5NjU2MjMzNH0.66pxak3FnH-U5DPSvKMh3pybhQi-qtWV-FYLwnSoRH4';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

const ACTIVE_CODE = 'BIAHOI-TEAM-2026';
const NEWCOMER_CHAR_LIMIT = 250;
const QUEST_A_REVIEWS = 2;

const HANOI = [21.0285, 105.85];
const URBAN_DISTRICTS = [
  'Hoàn Kiếm',
  'Ba Đình',
  'Đống Đa',
  'Hai Bà Trưng',
  'Tây Hồ',
  'Cầu Giấy',
  'Thanh Xuân',
  'Long Biên',
  'Hoàng Mai',
  'Nam Từ Liêm',
  'Bắc Từ Liêm',
  'Hà Đông',
];
const DISTRICTS = [...URBAN_DISTRICTS, 'Other'];
const VIBES = [
  'Touristy',
  'Local-only',
  'Lively',
  'Chill',
  'Cheap',
  'Riverside',
  'Lakeside',
  'Rooftop',
  'Good View',
  'Balcony',
  'Live music',
  'Good for groups',
  'Street-side',
  'Friendly',
];
const SEATING_OPTS = [
  'Indoor',
  'Outdoor',
  'Stools',
  'Wooden chairs',
  'Metal chairs',
  'Plastic chairs',
  'Metal tables',
  'Plastic tables',
  'Comfortable',
];
const RCATS = [
  ['beer', 'Beer quality'],
  ['food', 'Food & snacks'],
  ['atmosphere', 'Atmosphere'],
  ['clean', 'Cleanliness'],
  ['value', 'Staff / Service'],
];
const BADGES = [
  /* Spots */
  {
    id: 'first_spot',
    icon: '📍',
    name: 'First Pour',
    desc: 'Added your first bia hơi spot',
  },
  { id: 'scout', icon: '🔭', name: 'Scout', desc: 'Added 10 spots to the map' },
  {
    id: 'cartographer',
    icon: '🏙️',
    name: 'Cartographer',
    desc: 'Added 25 spots to the map',
  },
  {
    id: 'completionist',
    icon: '🧭',
    name: 'Completionist',
    desc: 'Added 5 spots with every detail filled in (+ a photo)',
  },
  {
    id: 'trendsetter',
    icon: '🌱',
    name: 'Trendsetter',
    desc: 'A spot you added drew 10 different reviewers',
  },
  /* Reviews */
  {
    id: 'first_review',
    icon: '✍️',
    name: 'First Words',
    desc: 'Wrote your first review',
  },
  { id: 'regular', icon: '📝', name: 'Regular', desc: 'Wrote 20 reviews' },
  {
    id: 'critic',
    icon: '🎙️',
    name: 'Bia Hơi Critic',
    desc: 'Wrote 30 reviews',
  },
  {
    id: 'century_club',
    icon: '🏅',
    name: 'Century Club',
    desc: 'Wrote 100 reviews',
  },
  {
    id: 'pioneer',
    icon: '🆕',
    name: 'Pioneer',
    desc: 'First to review 5 new spots',
  },
  {
    id: 'wordsmith',
    icon: '💬',
    name: 'Wordsmith',
    desc: 'Wrote 1,500+ words across your reviews',
  },
  {
    id: 'all_rounder',
    icon: '🎖️',
    name: 'All-Rounder',
    desc: 'Rated all 5 categories in 20 reviews',
  },
  {
    id: 'beer_sommelier',
    icon: '🍺',
    name: 'Beer Sommelier',
    desc: 'Gave 5-star beer quality to 10 different spots',
  },
  {
    id: 'foodie',
    icon: '🍜',
    name: 'Foodie',
    desc: 'Rated Food & snacks on 20 different spots',
  },
  {
    id: 'the_usual',
    icon: '🔁',
    name: 'The Usual',
    desc: 'Reviewed the same spot 5 times',
  },
  {
    id: 'streak',
    icon: '🔥',
    name: 'Streak',
    desc: 'Posted reviews across 5 different weeks',
  },
  /* Photos */
  {
    id: 'photographer',
    icon: '📷',
    name: 'Photographer',
    desc: 'Uploaded your first photo',
  },
  {
    id: 'gallery_owner',
    icon: '📸',
    name: 'Gallery Owner',
    desc: 'Uploaded 25 photos total',
  },
  {
    id: 'lensman',
    icon: '🎬',
    name: 'Lensman',
    desc: 'Uploaded photos to 20 different spots',
  },
  {
    id: 'snapshot_star',
    icon: '🖼️',
    name: 'Snapshot Star',
    desc: 'A photo you uploaded got 15 likes',
  },
  /* Social */
  {
    id: 'helpful',
    icon: '👍',
    name: 'Crowd Favourite',
    desc: 'Received 20 helpful votes on reviews',
  },
  {
    id: 'community_pillar',
    icon: '🤝',
    name: 'Community Pillar',
    desc: 'Received 50 helpful votes on reviews',
  },
  /* Verified */
  {
    id: 'verified_spot',
    icon: '✅',
    name: 'Legit',
    desc: 'Had one of your spots verified',
  },
  {
    id: 'trusted',
    icon: '🌟',
    name: 'Trusted Local',
    desc: 'Had 10 of your spots verified',
  },
  /* Explorer */
  {
    id: 'district_explorer',
    icon: '🗺️',
    name: 'District Explorer',
    desc: 'Reviewed spots in 6 different districts',
  },
  {
    id: 'city_wide',
    icon: '🌆',
    name: 'City-Wide',
    desc: 'Reviewed spots in 10 different districts',
  },
  {
    id: 'all_districts',
    icon: '👑',
    name: 'District Champion',
    desc: 'Reviewed a spot in all 12 Hanoi urban districts',
  },
  {
    id: 'old_quarter',
    icon: '🏘️',
    name: 'Old Quarter Crawler',
    desc: 'Reviewed 15 spots in Hoàn Kiếm district',
  },
  {
    id: 'tay_ho',
    icon: '🌊',
    name: 'Tây Hồ Regular',
    desc: 'Reviewed 10 spots in Tây Hồ district',
  },
  {
    id: 'safety_inspector',
    icon: '🦺',
    name: 'Safety Inspector',
    desc: 'Reported 5 spots for correction',
  },
  /* Time & Vibe */
  {
    id: 'early_bird',
    icon: '⏰',
    name: 'Early Bird',
    desc: 'Reviewed 3 places between 9am–noon',
  },
  {
    id: 'golden_hour',
    icon: '🌇',
    name: 'Golden Hours',
    desc: 'Reviewed 3 places between 5–7pm (golden hour)',
  },
  {
    id: 'night_owl',
    icon: '🌃',
    name: 'Night Owl',
    desc: 'Reviewed 3 places between 10pm–3am',
  },
  {
    id: 'plastic_stool',
    icon: '🪑',
    name: 'Plastic Stool Regular',
    desc: 'Reviewed 12 street-side spots',
  },
  /* Uncle */
  {
    id: 'uncle_approved',
    icon: '👍',
    name: 'Uncle Approved',
    desc: 'Uploaded a photo tagged with a thumbs-up',
  },
  {
    id: 'full_uncle',
    icon: '🤙',
    name: 'Full Uncle',
    desc: 'Uploaded a photo with 5+ people doing thumbs-up',
  },
  /* Legend */
  {
    id: 'legend',
    icon: '🏆',
    name: 'Bác Hơi Legend',
    desc: 'Earned 25 other badges — a true bia hơi legend',
  },
];

/* ============================================================
   STATE — runtime variables
   ============================================================ */
let spots = [];
let cur = null; // current user: { id, name, role, since, email }
const profilesCache = {}; // uuid → profile, for fast lookups
const repliesCache = {}; // reviewId → [replies]
let monthlyAwards = []; // rows from monthly_awards (repeatable ×N awards)
let notifs = []; // this user's notifications
const APP_VERSION = '0.9.7';
const MONTHLY_AWARDS = [
  {
    type: 'photo',
    icon: '🖼️',
    name: 'Photo of the Month',
    prestige: '🏛️',
    prestigeName: 'Gallery Legend',
  },
  {
    type: 'reviewer',
    icon: '✍️',
    name: 'Reviewer of the Month',
    prestige: '🏛️',
    prestigeName: 'Review Legend',
  },
  {
    type: 'explorer',
    icon: '📍',
    name: 'Explorer of the Month',
    prestige: '🏛️',
    prestigeName: 'Explorer Legend',
  },
];
const AWARD_PRESTIGE = 10; // wins needed for a prestige badge

/* ============================================================
   DB CONVERTERS — Supabase row → app object
   ============================================================ */
function dbToSpot(s) {
  return {
    id: s.id,
    name: s.name,
    lat: s.lat,
    lng: s.lng,
    district: s.district || '',
    address: s.address || '',
    pricePerGlass: s.price_per_glass || '',
    openH: s.open_h,
    closeH: s.close_h,
    seating: s.seating || '',
    payment: s.payment || '',
    vibes: s.vibes || [],
    desc: s.description || '',
    status: s.status || 'active',
    createdBy: s.created_by || 'anon',
    createdAt: s.created_at,
    verified: s.verified || false,
    verifiedBy: s.verified_by || null,
    verifiedAt: s.verified_at || null,
    reports: s.reports || [],
    cover_photo_url: s.cover_photo_url || null,
    lastCheckinAt: s.last_checkin_at || null,
    atRisk: s.at_risk || false,
    closedAt: s.closed_at || null,
    closedNote: s.closed_note || '',
    reviews: (s.reviews || []).map(dbToReview),
  };
}
function checkinAgo(iso) {
  if (!iso) return '';
  const ms = Date.now() - new Date(iso).getTime();
  const h = ms / 3600000;
  if (h < 1) return 'just now';
  if (h < 24) return Math.floor(h) + 'h ago';
  const d = h / 24;
  if (d < 7)
    return Math.floor(d) + (Math.floor(d) === 1 ? ' day ago' : ' days ago');
  if (d < 31) return 'over a week ago';
  if (d < 365) return 'over a month ago';
  return 'over a year ago';
}
async function checkIn(spotId) {
  if (!cur) {
    authModal(false);
    return;
  }
  const s = byId(spotId);
  if (!s) return;
  if (!navigator.geolocation) {
    showToast('Location not available on this device.');
    return;
  }
  showToast('📍 Checking your location…', 2000);
  navigator.geolocation.getCurrentPosition(
    async (p) => {
      const d = dist(p.coords.latitude, p.coords.longitude, s.lat, s.lng);
      if (d > 0.25) {
        showToast(
          "You need to be at the spot to check in — you're " +
            (d < 1 ? Math.round(d * 1000) + 'm' : d.toFixed(1) + 'km') +
            ' away.',
          3500,
        );
        return;
      }
      try {
        const since = new Date(Date.now() - 8 * 3600 * 1000).toISOString();
        const { data: recent } = await db
          .from('check_ins')
          .select('id')
          .eq('spot_id', spotId)
          .eq('user_id', cur.id)
          .gte('created_at', since)
          .limit(1);
        if (recent && recent.length) {
          showToast('You already checked in here recently. 🍺');
          return;
        }
      } catch (e) {}
      const { error } = await db
        .from('check_ins')
        .insert({ spot_id: spotId, user_id: cur.id });
      if (error) {
        showToast(
          'Could not check in: ' + (error.message || error.code || 'unknown error'),
          5000,
        );
        return;
      }
      s.lastCheckinAt = new Date().toISOString();
      showToast('✅ Checked in — thanks for keeping the record fresh!');
      showDetail(spotId);
    },
    () => {
      showToast(
        'Could not get your location — please allow location access.',
        3500,
      );
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
  );
}
function dbToReview(r) {
  return {
    id: r.id,
    userId: r.user_id || 'anon',
    who: r.who || 'Anonymous',
    ratings: r.ratings || {},
    txt: r.txt || '',
    when: r.review_date,
    createdAt: r.created_at || null,
    helpful: r.helpful || [],
  };
}

/* ============================================================
   HELPERS — pure utility functions
   ============================================================ */
const esc = (t) =>
  (t == null ? '' : String(t)).replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c],
  );
const byId = (id) => spots.find((s) => s.id === id);
const userById = (id) => profilesCache[id] || null;
function revAvg(r) {
  const v = RCATS.map((c) => r.ratings[c[0]]).filter((x) => x > 0);
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0;
}
function spotAvg(s) {
  const a = s.reviews.map(revAvg).filter((x) => x > 0);
  return a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
}
function dist(a, b, c, d) {
  const R = 6371,
    dx = ((c - a) * Math.PI) / 180,
    dy = ((d - b) * Math.PI) / 180;
  const x =
    Math.sin(dx / 2) ** 2 +
    Math.cos((a * Math.PI) / 180) *
      Math.cos((c * Math.PI) / 180) *
      Math.sin(dy / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}
function fmtHr(h) {
  if (h == null || h === '') return '';
  h = +h;
  const d = h % 24,
    ap = d < 12 || d === 24 ? 'am' : 'pm';
  let hh = d % 12;
  if (hh === 0) hh = 12;
  return hh + ap;
}
function isOpen(s) {
  if (s.status !== 'active' || s.openH == null || s.closeH == null)
    return false;
  const n = new Date(),
    now = n.getHours() + n.getMinutes() / 60;
  let o = +s.openH,
    c = +s.closeH;
  if (c <= o) c += 24;
  let t = now;
  if (t < o) t += 24;
  return t >= o && t < c;
}
function rolePill(role) {
  return `<span class="pill role-${role}">${role}</span>`;
}
const val = (id) => {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
};
function spotIsComplete(s) {
  return !!(
    s.address &&
    s.pricePerGlass &&
    s.openH != null &&
    s.openH !== '' &&
    s.closeH != null &&
    s.closeH !== '' &&
    s.seating &&
    s.payment &&
    s.vibes &&
    s.vibes.length &&
    s.desc &&
    s.photos &&
    s.photos.length
  );
}
function isoWeekKey(d) {
  const dt = new Date(d);
  if (isNaN(dt)) return String(d);
  const t = new Date(Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const wk = Math.ceil(((t - yStart) / 86400000 + 1) / 7);
  return t.getUTCFullYear() + '-W' + wk;
}
function hanoiHour(ts) {
  if (!ts) return -1;
  const d = new Date(ts);
  if (isNaN(d)) return -1;
  return (d.getUTCHours() + 7) % 24;
}
function awardCounts(uid) {
  const c = { photo: 0, reviewer: 0, explorer: 0 };
  monthlyAwards.forEach((a) => {
    if (a.user_id === uid && c[a.award_type] != null) c[a.award_type]++;
  });
  return c;
}
async function loadNotifs() {
  if (!cur) {
    notifs = [];
    updateBell();
    return;
  }
  const { data } = await db
    .from('notifications')
    .select('*')
    .eq('user_id', cur.id)
    .order('created_at', { ascending: false })
    .limit(50);
  notifs = data || [];
  updateBell();
}
function unreadCount() {
  return notifs.filter((n) => !n.read).length;
}
function updateBell() {
  const n = unreadCount();
  const dot = document.getElementById('avNotifDot');
  if (dot) dot.style.display = n ? 'block' : 'none';
  const mc = document.getElementById('menuNotifCount');
  if (mc) {
    mc.textContent = n > 9 ? '9+' : n || '';
    mc.style.display = n ? 'inline-flex' : 'none';
  }
}
function notifIcon(t) {
  return t === 'like'
    ? '❤️'
    : t === 'reply'
      ? '💬'
      : t === 'helpful'
        ? '👍'
        : t === 'verified'
          ? '✅'
          : '🔔';
}
function timeAgo(ts) {
  const s = Math.floor((Date.now() - new Date(ts).getTime()) / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60);
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ago';
  const d = Math.floor(h / 24);
  if (d < 7) return d + 'd ago';
  return new Date(ts).toISOString().slice(0, 10);
}
function openInbox() {
  if (!cur) {
    authModal(false);
    return;
  }
  const items = notifs.length
    ? notifs
        .map((n) => {
          const unread = !n.read;
          return (
            '<div' +
            (n.spot_id
              ? ' onclick="notifGo(\'' + esc(n.spot_id) + '\')"'
              : '') +
            ' style="display:flex;gap:10px;align-items:flex-start;padding:11px 12px;border-radius:10px;margin-bottom:6px;' +
            (unread
              ? 'background:rgba(245,179,1,.10);'
              : 'background:var(--card);') +
            'border:1px solid var(--line);' +
            (n.spot_id ? 'cursor:pointer;' : '') +
            '">' +
            '<div style="font-size:18px;line-height:1.2">' +
            notifIcon(n.type) +
            '</div>' +
            '<div style="flex:1;min-width:0"><div style="font-size:13.5px;color:var(--ink);line-height:1.35">' +
            esc(n.body || '') +
            '</div>' +
            '<div style="font-size:11px;color:var(--muted);margin-top:2px">' +
            timeAgo(n.created_at) +
            '</div></div>' +
            (unread
              ? '<span style="width:8px;height:8px;border-radius:50%;background:var(--gold);flex-shrink:0;margin-top:5px"></span>'
              : '') +
            '</div>'
          );
        })
        .join('')
    : '<div style="text-align:center;color:var(--muted);padding:26px 0;font-size:14px">🔕 No notifications yet</div>';
  modal(
    '<h2 style="margin:0 0 12px;font-size:18px">🔔 Notifications</h2><div style="max-height:60vh;overflow-y:auto;margin:0 -4px;padding:0 4px">' +
      items +
      '</div>',
  );
  if (notifs.some((n) => !n.read)) {
    notifs.forEach((n) => (n.read = true));
    updateBell();
    db.from('notifications')
      .update({ read: true })
      .eq('user_id', cur.id)
      .eq('read', false)
      .then(() => {});
  }
}
function notifGo(sid) {
  closeModal();
  const s = byId(sid);
  if (s) {
    if (typeof map !== 'undefined' && map && s.lat)
      map.setView([s.lat, s.lng], 17);
    showDetail(sid);
  }
}

/* ============================================================
   QUESTS & PROGRESS — newcomer unlock system
   ============================================================ */
function getUserStats(uid) {
  let spotsAdded = 0,
    reviewCount = 0;
  const spotIdsReviewed = new Set();
  spots.forEach((s) => {
    if (s.createdBy === uid) spotsAdded++;
    s.reviews.forEach((r) => {
      if (r.userId === uid) {
        reviewCount++;
        spotIdsReviewed.add(s.id);
      }
    });
  });
  return { spotsAdded, reviewCount, uniqueSpotsReviewed: spotIdsReviewed.size };
}
function questComplete(uid) {
  const { reviewCount } = getUserStats(uid);
  return reviewCount >= QUEST_A_REVIEWS;
}
async function checkAndUpgrade() {
  if (!cur || cur.role !== 'newcomer') return;
  if (questComplete(cur.id)) {
    const { data, error } = await db.rpc('claim_active');
    if (error || data !== 'active') return;
    cur.role = 'active';
    profilesCache[cur.id] = cur;
    setUserLabel();
    if (typeof fireConfetti === 'function') fireConfetti();
    modal(`<h2>🎉 You're now Active!</h2>
      <p>You've contributed enough to unlock full reviews and trusted status. Your spots will now be auto-verified. Thanks for helping build the map!</p>
      <button class="btn-gold" style="width:100%;margin-top:10px" onclick="closeModal()">Let's go 🍺</button>`);
  }
}
function questProgressHTML(uid, role) {
  const { reviewCount } = getUserStats(uid);
  const done = role && role !== 'newcomer';
  const aRev = done ? QUEST_A_REVIEWS : Math.min(reviewCount, QUEST_A_REVIEWS);
  const aDone = done || reviewCount >= QUEST_A_REVIEWS;
  const subtitle = done
    ? '<span style="color:var(--green);font-size:12px">&#10003; Completed &mdash; Active status unlocked</span>'
    : '<span style="font-size:12px;color:var(--muted)">Write ' +
      QUEST_A_REVIEWS +
      ' reviews to unlock full-length reviews and auto-verified spots.</span>';
  return `<div class="quest-box">
    <h4 style="display:flex;justify-content:space-between;align-items:center;margin:0 0 6px">
      <span>&#128506; Quest &mdash; Active status</span>
    </h4>
    <div style="margin-bottom:10px">${subtitle}</div>
    <div class="quest-path">
      <div class="label" style="color:${aDone ? 'var(--green)' : 'var(--ink)'}">Write ${QUEST_A_REVIEWS} reviews ${aDone ? '&#10003;' : ''}</div>
      <div class="q-step"><span>Reviews written</span><span>${aRev}/${QUEST_A_REVIEWS}</span></div>
      <div class="q-bar"><div class="q-bar-fill${aRev >= QUEST_A_REVIEWS ? ' done' : ''}" style="width:${(aRev / QUEST_A_REVIEWS) * 100}%"></div></div>
    </div>
  </div>`;
}

/* ============================================================
   MAP — Leaflet setup, tile layers, markers
   ============================================================ */
const map = L.map('map').setView(HANOI, 13);
const CARTO_ATTR =
  '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>';
const tileLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  { maxZoom: 19, attribution: CARTO_ATTR },
);
const tileDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { maxZoom: 19, attribution: CARTO_ATTR },
);
(localStorage.getItem('theme') === 'dark' ? tileDark : tileLight).addTo(map);
const cluster = L.markerClusterGroup({
  maxClusterRadius: 45,
  iconCreateFunction(c) {
    const n = c.getChildCount();
    const sz = n < 10 ? 'sm' : n < 30 ? 'md' : 'lg';
    const px = sz === 'sm' ? 36 : sz === 'md' ? 46 : 58;
    return L.divIcon({
      className: '',
      html: `<div class="bh-cluster ${sz}">${n}</div>`,
      iconSize: [px, px],
      iconAnchor: [px / 2, px / 2],
    });
  },
});
map.addLayer(cluster);
let tmpMarker = null,
  adding = false;
try {
  window._showGhosts = !!localStorage.getItem('bhGhosts');
} catch (e) {}
function pinIcon(closed, unverified) {
  let cls = 'bia-pin';
  if (closed) cls += ' closed';
  else if (unverified) cls += ' unverified';
  return L.divIcon({
    className: '',
    html: `<div class="${cls}">🍺</div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 44],
  });
}
function highlightMarker(id) {
  clearMarkerHighlight();
  const m = window._spotMarkers && window._spotMarkers[id];
  if (!m) return;
  window._highlightedMarker = { id, m };
  const applyRing = () => {
    const el = m.getElement();
    if (el) {
      const pin = el.querySelector('.bia-pin');
      if (pin) pin.classList.add('selected');
    }
  };
  applyRing();
  cluster.zoomToShowLayer(m, () => setTimeout(applyRing, 60));
}
function clearMarkerHighlight() {
  if (!window._highlightedMarker) return;
  const el = window._highlightedMarker.m.getElement();
  if (el) {
    const pin = el.querySelector('.bia-pin');
    if (pin) pin.classList.remove('selected');
  }
  window._highlightedMarker = null;
}
/* ── SPOTS: "peek" panel (mobile sheet preview) ── */
function peekDetail(id) {
  const s = byId(id);
  if (!s) return;
  window._peekSpotId = id;
  const avg = spotAvg(s);
  const pill = avg
    ? `<span style="background:var(--gold);color:#000;font-size:13px;font-weight:800;padding:2px 10px;border-radius:20px">${avg.toFixed(1)} 🍺</span>`
    : '<span style="color:var(--muted);font-size:12px">No ratings yet</span>';
  const _pCover =
    s.cover_photo_url || (s.photos && s.photos.length ? s.photos[0].url : '');
  const _pCoverIdx = s.photos
    ? Math.max(
        0,
        s.photos.findIndex((p) => p.url === _pCover),
      )
    : 0;
  const _pCoverCol = _pCover
    ? `<div style="flex-shrink:0;width:84px;height:84px;border-radius:12px;overflow:hidden"><img src="${_pCover}" onclick="event.stopPropagation();viewPhoto('${s.id}',${_pCoverIdx})" style="width:100%;height:100%;object-fit:cover;display:block;cursor:pointer" title="View photo"></div>`
    : '';
  const _vibeChips = (s.vibes || [])
    .slice(0, 2)
    .map(
      (v) =>
        `<span style="font-size:11px;font-weight:600;padding:2px 9px;border-radius:20px;background:var(--card);border:1px solid var(--line);color:var(--muted)">${esc(v)}</span>`,
    )
    .join('');
  const _closed = s.status && s.status !== 'active';
  const _openChip = _closed
    ? `<span class="chip closed">${s.status === 'perm_closed' ? 'Closed' : 'Temp closed'}</span>`
    : isOpen(s)
      ? '<span class="chip open">Open now</span>'
      : '';
  const _metaBits = [
    s.reviews.length
      ? s.reviews.length + ' review' + (s.reviews.length === 1 ? '' : 's')
      : '',
    s.pricePerGlass ? esc(s.pricePerGlass) : '',
  ]
    .filter(Boolean)
    .join(' · ');
  const _meta = _metaBits
    ? `<span style="font-size:12px;color:var(--muted)">${_metaBits}</span>`
    : '';
  const _riskChip =
    s.atRisk && !_closed
      ? '<span class="chip" style="background:#fde8c4;color:#8a5a00;border:1px solid #e0b062">⚠ At risk</span>'
      : '';
  const _chipRow =
    s.verified || _openChip || _riskChip || _vibeChips
      ? `<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px">${s.verified ? '<span class="chip verified">✓ Verified</span>' : ''}${_openChip}${_riskChip}${_vibeChips}</div>`
      : '';
  const _addr = s.address
    ? `<div style="font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:7px">📍 ${esc(s.address)}</div>`
    : '';
  document.getElementById('sidebarBody').innerHTML =
    `<div style="padding-bottom:0">
    <div onclick="expandFromPeek()" style="cursor:pointer">
      <div style="display:flex;justify-content:center;padding:8px 0 3px"><span style="width:38px;height:4px;border-radius:3px;background:var(--line)"></span></div>
      <div style="display:flex;gap:10px;padding:2px 14px 11px">
        <div style="flex:1;min-width:0">
          <h2 style="margin:0;font-size:17px;line-height:1.22;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${esc(s.name)}</h2>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px">${pill}${_meta}</div>
          ${_chipRow}
          ${_addr}
        </div>
        ${_pCoverCol}
      </div>
    </div>
    <div onclick="expandFromPeek()" style="cursor:pointer;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:center;gap:6px;padding:9px 0;color:var(--muted);font-size:12px;font-weight:600">Swipe up for details <span style="font-size:13px">↑</span></div>
  </div>`;
  const sb = document.getElementById('sidebar');
  sb.classList.remove('open');
  sb.classList.add('peek');
  sb.scrollTop = 0;
  navPush('peek:' + id);
  document.getElementById('sheetOverlay').classList.remove('on');
  const isl = document.getElementById('floatingIsland');
  if (isl) isl.style.display = 'none';
  highlightMarker(id);
}
function expandFromPeek() {
  const id = window._peekSpotId;
  if (!id) return;
  window._peekSpotId = null;
  showDetail(id);
}
/* ── SPOTS: pin-drop confirmation (part of Add Spot flow) ── */
function showPinConfirmBar(lat, lng) {
  window._pendingPin = { lat, lng };
  const ex = document.getElementById('pinConfirmBar');
  if (ex) ex.remove();
  const sub = document.querySelector('#pinDropBanner .pdb-sub');
  if (sub) sub.textContent = `Pin placed — confirm or move it`;
  const bar = document.createElement('div');
  bar.id = 'pinConfirmBar';
  bar.innerHTML = `<div class="pcb-label">📍 Confirm this location?</div>
    <div class="pcb-coords">${lat.toFixed(5)}, ${lng.toFixed(5)}</div>
    <div class="pcb-btns">
      <button class="pcb-confirm" onclick="acceptPin()">✓ Confirm location</button>
      <button class="pcb-move" onclick="movePinAgain()">↺ Move pin</button>
    </div>`;
  document.body.appendChild(bar);
}
function acceptPin() {
  const p = window._pendingPin;
  if (!p) return;
  const bar = document.getElementById('pinConfirmBar');
  if (bar) bar.remove();
  confirmPinDrop(p.lat, p.lng);
  window._pendingPin = null;
}
function movePinAgain() {
  const bar = document.getElementById('pinConfirmBar');
  if (bar) bar.remove();
  if (tmpMarker) {
    map.removeLayer(tmpMarker);
    tmpMarker = null;
  }
  window._pendingPin = null;
  const sub = document.querySelector('#pinDropBanner .pdb-sub');
  if (sub) sub.textContent = 'Tap anywhere on the map to place your spot';
}
/* ── Sidebar swipe gestures (mobile) ── */
function setupSwipe() {
  const sb = document.getElementById('sidebar');
  let _sy = 0,
    _sx = 0,
    _st = 0;
  sb.addEventListener(
    'touchstart',
    (e) => {
      _sy = e.touches[0].clientY;
      _sx = e.touches[0].clientX;
      _st = sb.scrollTop;
    },
    { passive: true },
  );
  sb.addEventListener(
    'touchend',
    (e) => {
      const dy = e.changedTouches[0].clientY - _sy;
      const dx = Math.abs(e.changedTouches[0].clientX - _sx);
      if (dy < -55 && dx < 50 && sb.classList.contains('peek')) {
        expandFromPeek();
        return;
      }
      if (dy > 70 && dx < 50) {
        if (sb.classList.contains('peek')) {
          closeSidebar();
          return;
        }
        // Only dismiss a full sheet if content was already at the top —
        // otherwise a downward swipe is just the user scrolling up to read.
        if (sb.classList.contains('open') && _st <= 0) {
          const detId =
            window._highlightedMarker && window._highlightedMarker.id;
          if (detId) peekDetail(detId);
          else closeSidebar();
        }
      }
    },
    { passive: true },
  );
}
/* ── MAP: marker rendering ── */
function drawMarkers() {
  cluster.clearLayers();
  window._spotMarkers = {};
  visibleSpots().forEach((s) => {
    const closed = s.status !== 'active',
      unverified = !s.verified;
    const m = L.marker([s.lat, s.lng], { icon: pinIcon(closed, unverified) });
    const _ptu =
      s.cover_photo_url || (s.photos && s.photos.length ? s.photos[0].url : '');
    const popPhoto = _ptu
      ? `<img class="popup-thumb" src="${_ptu}" onclick="map.closePopup();innerWidth<=680?peekDetail('${s.id}'):showDetail('${s.id}')" alt="">`
      : '';
    const popOpen = isOpen(s)
      ? '<span style="color:#2e7d32;font-weight:700;font-size:11px"> · Open now</span>'
      : '';
    const popAvg = spotAvg(s);
    m.bindPopup(
      `${popPhoto}<div style="padding:6px 8px 6px"><b style="font-size:14px">${esc(s.name)}</b>${popOpen}<div style="margin:5px 0">${popAvg ? `<span style="background:var(--gold);color:#000;font-size:11px;font-weight:700;padding:1px 7px;border-radius:12px">${popAvg.toFixed(1)} 🍺</span> <span style="color:#888;font-size:11px">(${s.reviews.length} review${s.reviews.length === 1 ? '' : 's'})</span>` : '<span style="color:#888;font-size:11px">No reviews yet</span>'}</div>${s.pricePerGlass ? `<div style="color:#888;font-size:11px;margin-bottom:6px">${esc(s.pricePerGlass)}</div>` : ''}<button onclick="map.closePopup();innerWidth<=680?peekDetail('${s.id}'):showDetail('${s.id}')" style="background:var(--gold);color:var(--ink);border:none;border-radius:7px;padding:6px 0;font-size:12px;font-weight:700;cursor:pointer;width:100%;font-family:inherit">View details →</button></div>`,
      {
        maxWidth: 220,
        autoPanPaddingBottomRight: L.point(0, 80),
        className: 'bh-popup',
      },
    );
    window._spotMarkers[s.id] = m;
    cluster.addLayer(m);
  });
  if (window._showGhosts) {
    spots
      .filter((s) => s.status === 'perm_closed')
      .forEach((s) => {
        const gm = L.marker([s.lat, s.lng], { icon: ghostIcon() });
        gm.bindPopup(
          '<div style="padding:6px 8px"><b style="font-size:14px">' +
            esc(s.name) +
            '</b><div style="color:#888;font-size:11px;margin:3px 0">🕯️ Closed' +
            (s.closedAt ? ' · ' + s.closedAt : '') +
            '</div><button onclick="map.closePopup();innerWidth<=680?peekDetail(\'' +
            s.id +
            "'):showDetail('" +
            s.id +
            '\')" style="background:#8a8272;color:#fff;border:none;border-radius:7px;padding:5px 0;font-size:12px;font-weight:700;cursor:pointer;width:100%;font-family:inherit">View →</button></div>',
          { maxWidth: 200, className: 'bh-popup' },
        );
        cluster.addLayer(gm);
      });
  }
}

/* ============================================================
   FILTERING — spot search and filter logic
   ============================================================ */
function onSearch() {
  const q = document.getElementById('searchBox').value;
  const clr = document.getElementById('searchClear');
  if (clr) clr.classList.toggle('show', q.length > 0);
  renderList();
}
function clearSearch() {
  const sb = document.getElementById('searchBox');
  if (sb) sb.value = '';
  const clr = document.getElementById('searchClear');
  if (clr) clr.classList.remove('show');
  const rb = document.getElementById('resultBar');
  if (rb) {
    rb.textContent = '';
    rb.classList.remove('show');
  }
  renderList();
}
function clearFilters() {
  const setV = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  };
  const setC = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.checked = val;
  };
  setV('fDistrict', '');
  window._vibeFilter = [];
  updateVibeBtn();
  setV('fRating', '0');
  setV('fPrice', '0');
  setC('fOpen', false);
  setC('fVerified', false);
  try {
    localStorage.removeItem('bhFilters');
  } catch (e) {}
  renderList();
}
function saveFilters() {
  try {
    const f = {
      d: (document.getElementById('fDistrict') || {}).value || '',
      v: window._vibeFilter || [],
      r: (document.getElementById('fRating') || {}).value || '0',
      p: (document.getElementById('fPrice') || {}).value || '0',
      o: !!(document.getElementById('fOpen') || {}).checked,
      vf: !!(document.getElementById('fVerified') || {}).checked,
      rad: (document.getElementById('fRadius') || {}).value || '',
    };
    localStorage.setItem('bhFilters', JSON.stringify(f));
  } catch (e) {}
}
function loadFilters() {
  try {
    const raw = localStorage.getItem('bhFilters');
    if (!raw) return;
    const f = JSON.parse(raw);
    const setV = (id, val) => {
      const el = document.getElementById(id);
      if (el && val != null) el.value = val;
    };
    const setC = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.checked = !!val;
    };
    setV('fDistrict', f.d);
    window._vibeFilter = Array.isArray(f.v) ? f.v : f.v ? [f.v] : [];
    updateVibeBtn();
    setV('fRating', f.r);
    setV('fPrice', f.p);
    setC('fOpen', f.o);
    setC('fVerified', f.vf);
    if (f.rad) setV('fRadius', f.rad);
  } catch (e) {}
}
function visibleSpots() {
  const q = (document.getElementById('searchBox').value || '').toLowerCase();
  const d = document.getElementById('fDistrict').value;
  const vibeSel = window._vibeFilter || [];
  const minR = +document.getElementById('fRating').value,
    maxP = +document.getElementById('fPrice').value;
  const openOnly = document.getElementById('fOpen').checked;
  const verifiedOnly = document.getElementById('fVerified').checked;
  const radiusSel = document.getElementById('fRadius');
  const maxKm =
    radiusSel && radiusSel.style.display !== 'none' ? +radiusSel.value : 0;
  return spots.filter((s) => {
    if (s.status === 'perm_closed') return false;
    if (
      maxKm &&
      window._me &&
      dist(window._me[0], window._me[1], s.lat, s.lng) > maxKm
    )
      return false;
    if (
      q &&
      !(
        s.name.toLowerCase().includes(q) ||
        (s.address || '').toLowerCase().includes(q)
      )
    )
      return false;
    if (d && s.district !== d) return false;
    if (vibeSel.length && !vibeSel.some((vv) => (s.vibes || []).includes(vv)))
      return false;
    if (minR && spotAvg(s) < minR) return false;
    if (maxP) {
      const p = parseInt((s.pricePerGlass || '').replace(/\D/g, '')) || 0;
      if (!p || p > maxP) return false;
    }
    if (openOnly && !isOpen(s)) return false;
    if (verifiedOnly && !s.verified) return false;
    return true;
  });
}

/* ============================================================
   VIBE FILTER (multi-select) + SURPRISE PICKER
   ============================================================ */
function updateVibeBtn() {
  const btn = document.getElementById('fVibeBtn');
  if (!btn) return;
  const sel = window._vibeFilter || [];
  btn.textContent = sel.length
    ? sel.length === 1
      ? sel[0]
      : sel.length + ' vibes'
    : 'Any vibe';
  btn.style.borderColor = sel.length ? 'var(--gold)' : 'var(--line)';
  btn.style.fontWeight = sel.length ? '700' : '400';
}
function openVibeFilter() {
  const sel = window._vibeFilter || [];
  const chips = VIBES.map((v) => {
    const on = sel.includes(v);
    return (
      '<button type="button" data-v="' +
      esc(v) +
      '" data-on="' +
      (on ? '1' : '0') +
      '" onclick="toggleVibePick(this)" style="padding:7px 12px;border-radius:20px;border:1.5px solid ' +
      (on ? 'var(--gold)' : 'var(--line)') +
      ';background:' +
      (on ? 'rgba(245,179,1,.13)' : 'var(--card)') +
      ';color:var(--ink);font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">' +
      esc(v) +
      '</button>'
    );
  }).join('');
  modal(
    '<h2 style="margin:0 0 4px;font-size:18px">Filter by vibe</h2>' +
      '<p style="font-size:12px;color:var(--muted);margin:2px 0 12px">Pick any that appeal — shows spots matching at least one.</p>' +
      '<div id="vibePicks" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px">' +
      chips +
      '</div>' +
      '<button class="btn-gold" style="width:100%" onclick="applyVibeFilter()">Show spots</button>' +
      '<button class="btn-line" style="width:100%;margin-top:8px" onclick="clearVibeFilter()">Clear vibes</button>',
  );
}
function toggleVibePick(btn) {
  const on = btn.getAttribute('data-on') === '1';
  btn.setAttribute('data-on', on ? '0' : '1');
  btn.style.borderColor = on ? 'var(--line)' : 'var(--gold)';
  btn.style.background = on ? 'var(--card)' : 'rgba(245,179,1,.13)';
}
function applyVibeFilter() {
  window._vibeFilter = [
    ...document.querySelectorAll('#vibePicks button[data-on="1"]'),
  ].map((b) => b.getAttribute('data-v'));
  updateVibeBtn();
  closeModal();
  renderList();
  saveFilters();
}
function clearVibeFilter() {
  window._vibeFilter = [];
  updateVibeBtn();
  closeModal();
  renderList();
  saveFilters();
}
function surpriseSpot() {
  let pool = visibleSpots();
  const bounds =
    typeof map !== 'undefined' && map && map.getBounds ? map.getBounds() : null;
  if (bounds) pool = pool.filter((s) => bounds.contains([s.lat, s.lng]));
  if (!pool.length) {
    showToast('No spots in view — zoom out a little, then try Random again.');
    return;
  }
  const s = pool[Math.floor(Math.random() * pool.length)];
  if (typeof map !== 'undefined' && map && map.setView)
    map.setView([s.lat, s.lng], 16);
  if (innerWidth <= 680) peekDetail(s.id);
  else showDetail(s.id);
}

/* ============================================================
   LIST — sidebar spot list rendering
   ============================================================ */
function sortBarHTML() {
  const m = window._sortMode || 'top';
  const chip = (id, label) =>
    `<button class="lsort${m === id ? ' on' : ''}" onclick="setSort('${id}')">${label}</button>`;
  return (
    '<div class="list-sort">' +
    chip('top', 'Top rated') +
    chip('week', '🔥 This week') +
    chip('new', 'Newest') +
    '</div>'
  );
}
function setSort(mode) {
  window._sortMode = mode;
  renderList();
}
function adjRating(s) {
  const n = s.reviews ? s.reviews.length : 0;
  if (!n) return 0;
  const m = 2;
  const prior = window._globalAvg || 4.0;
  return (spotAvg(s) * n + prior * m) / (n + m);
}
async function loadWeekPopular() {
  window._weekLoaded = true;
  try {
    const wk = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data } = await db
      .from('check_ins')
      .select('spot_id')
      .gte('created_at', wk);
    const map = {};
    (data || []).forEach((r) => {
      map[r.spot_id] = (map[r.spot_id] || 0) + 1;
    });
    window._weekCounts = map;
  } catch (e) {}
  renderList();
}
function renderList(sortByDist) {
  {
    var _tb = document.querySelector('.toolbar');
    if (_tb) _tb.style.display = '';
  }
  adding = false;
  if (tmpMarker) {
    map.removeLayer(tmpMarker);
    tmpMarker = null;
  }
  drawMarkers();
  let list = visibleSpots();
  if (sortByDist && window._me)
    list = list
      .slice()
      .sort(
        (a, b) =>
          dist(window._me[0], window._me[1], a.lat, a.lng) -
          dist(window._me[0], window._me[1], b.lat, b.lng),
      );
  else {
    const rated = spots.filter((x) => x.reviews && x.reviews.length);
    window._globalAvg = rated.length
      ? rated.reduce((a, x) => a + spotAvg(x), 0) / rated.length
      : 4.0;
    const mode = window._sortMode || 'top';
    const wc = window._weekCounts || {};
    if (mode === 'new')
      list = list
        .slice()
        .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
    else if (mode === 'week')
      list = list
        .slice()
        .sort(
          (a, b) =>
            (wc[b.id] || 0) - (wc[a.id] || 0) || adjRating(b) - adjRating(a),
        );
    else list = list.slice().sort((a, b) => adjRating(b) - adjRating(a));
  }
  if (!window._weekLoaded) loadWeekPopular();
  const body = document.getElementById('sidebarBody');
  // Update result count bar
  const rb = document.getElementById('resultBar');
  if (rb) {
    const q = (document.getElementById('searchBox').value || '').trim();
    if (q && spots.length) {
      rb.textContent = `${list.length} result${list.length === 1 ? '' : 's'} for "${q}"`;
      rb.classList.add('show');
    } else {
      rb.textContent = '';
      rb.classList.remove('show');
    }
  }
  if (!spots.length) {
    body.innerHTML =
      '<div class="empty-note">🍺 No spots yet.<br><br><b>Sign in</b>, then tap <b>+ Add spot</b> to put the first bia hơi on the map!</div>';
    return;
  }
  if (!list.length) {
    const activeFilters = [];
    const q = (document.getElementById('searchBox') || {}).value || '';
    if (q.trim()) activeFilters.push(`"${q.trim()}"`);
    if ((document.getElementById('fDistrict') || {}).value)
      activeFilters.push('district');
    if ((window._vibeFilter || []).length) activeFilters.push('vibe');
    if (parseFloat((document.getElementById('fRating') || {}).value) > 0)
      activeFilters.push('rating');
    if (parseFloat((document.getElementById('fPrice') || {}).value) > 0)
      activeFilters.push('price');
    if ((document.getElementById('fOpen') || {}).checked)
      activeFilters.push('open now');
    if ((document.getElementById('fVerified') || {}).checked)
      activeFilters.push('verified only');
    const filterTxt = activeFilters.length
      ? `Filtering by: <b>${activeFilters.join(', ')}</b>`
      : 'Your current filters returned nothing.';
    body.innerHTML = `<div class="empty-note" style="padding:32px 20px;text-align:center">
      <div style="font-size:36px;margin-bottom:12px">🔍</div>
      <div style="font-size:15px;font-weight:700;margin-bottom:8px">No spots found</div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:20px">${filterTxt}</div>
      <button class="btn-gold btn-sm" onclick="clearFilters()" style="padding:9px 22px;font-size:14px">Clear filters</button>
    </div>`;
    return;
  }
  const _wk = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const _new = spots.filter((s) => s.createdAt && s.createdAt > _wk);
  const _newSec = '';
  body.innerHTML =
    sortBarHTML() +
    _newSec +
    list
      .map((s) => {
        const open = isOpen(s),
          closed = s.status !== 'active';
        const d = window._me
          ? dist(window._me[0], window._me[1], s.lat, s.lng)
          : null;
        const dtxt =
          d !== null
            ? `<span style="background:#e8f0fe;color:#185fa5;border-radius:20px;padding:1px 7px;font-size:11px;font-weight:700">${d < 1 ? (d * 1000).toFixed(0) + 'm' : d.toFixed(1) + 'km'}</span>`
            : '';
        const _wc = window._weekCounts || {};
        const hotTag =
          (_wc[s.id] || 0) >= 2
            ? '<span style="background:#fff1e0;color:#c2410c;border:1px solid #fed7aa;border-radius:20px;padding:1px 7px;font-size:10px;font-weight:800;white-space:nowrap">🔥 Popular this week</span>'
            : '';
        const verBadge = s.verified
          ? ''
          : `<span class="chip unverified">Unverified</span> `;
        const reviewed = cur && s.reviews.some((r) => r.userId === cur.id);
        const rvBadge = reviewed
          ? '<span style="position:absolute;bottom:3px;right:3px;background:#4caf50;color:#fff;border-radius:50%;width:17px;height:17px;font-size:10px;font-weight:700;line-height:17px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,.25)">✓</span>'
          : '';
        const bkBadge =
          cur && (cur.bookmarks || []).includes(s.id)
            ? '<span style="position:absolute;top:3px;left:3px;font-size:13px;line-height:1;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))">🔖</span>'
            : '';
        const thumb =
          s.photos && s.photos.length
            ? `<div style="position:relative;flex-shrink:0">${bkBadge}${rvBadge}<img class="list-thumb" src="${s.photos[0].url}" alt="" loading="lazy"></div>`
            : `<div class="list-thumb-ph" style="position:relative">${bkBadge}${rvBadge}🍺</div>`;
        return `<div class="list-item" onclick="showDetail('${s.id}')">
      ${thumb}
      <div class="list-text">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
          <h3 style="margin:0 0 3px;flex:1;min-width:0">${verBadge}${esc(s.name)}</h3>
          ${closed ? '<span class="chip closed" style="flex-shrink:0;white-space:nowrap;margin-top:1px">' + (s.status === 'perm_closed' ? 'Closed' : 'Temp closed') + '</span>' : open ? '<span class="chip open" style="flex-shrink:0;white-space:nowrap;margin-top:1px">Open</span>' : ''}
        </div>
        <div class="meta"><span>${(() => {
          const a = spotAvg(s);
          return a
            ? `<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 7px;border-radius:20px">${a.toFixed(1)} 🍺</span>`
            : '<i style="color:var(--muted)">new</i>';
        })()}&nbsp;${s.reviews.length ? '(' + s.reviews.length + ') ' : ''}${dtxt}${hotTag ? ' ' + hotTag : ''}</span>
        <span>${esc(s.district || '')}${s.pricePerGlass ? ' · ' + esc(s.pricePerGlass) : ''}${s.openH != null && s.closeH != null && !closed ? ' · ' + fmtHr(s.openH) + '–' + fmtHr(s.closeH) : ''}</span></div>
      </div></div>`;
      })
      .join('');
}

/* ============================================================
   DETAIL — spot detail panel
   ============================================================ */
let chosen = {};
function toggleMore(id) {
  const m = document.getElementById('txm_' + id);
  const e = document.getElementById('txe_' + id);
  const b = document.getElementById('txb_' + id);
  if (!m) return;
  const open = m.style.display !== 'none';
  m.style.display = open ? 'none' : 'inline';
  if (e) e.style.display = open ? 'inline' : 'none';
  b.textContent = open ? 'Read more' : 'Show less';
}
function sortedReviews(s, mode) {
  const rs = [...s.reviews];
  if (mode === 'top')
    rs.sort((a, b) => {
      const avg = (r) => {
        const v = Object.values(r.ratings || {}).filter((x) => x > 0);
        return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0;
      };
      return avg(b) - avg(a);
    });
  else if (mode === 'helpful')
    rs.sort((a, b) => (b.helpful || []).length - (a.helpful || []).length);
  else rs.sort((a, b) => (b.when || '').localeCompare(a.when || ''));
  return rs;
}
function sortReviews(sid, mode, btn) {
  const s = byId(sid);
  if (!s) return;
  document
    .querySelectorAll('#sortBtns .sort-btn')
    .forEach((b) => b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('reviewList').innerHTML = sortedReviews(s, mode)
    .map((r) => reviewHTML(s, r))
    .join('');
}
async function showDetail(id) {
  navPush('detail:' + id);
  const _sd_sb = document.getElementById('sidebar');
  _sd_sb.classList.remove('peek');
  const s = byId(id);
  if (!s) return;
  if (innerWidth <= 680) {
    _sd_sb.classList.add('open');
    const _sd_isl = document.getElementById('floatingIsland');
    if (_sd_isl) _sd_isl.style.display = 'none';
    map.setView([s.lat, s.lng], 16);
    setTimeout(() => {
      const _pt = map.latLngToContainerPoint([s.lat, s.lng]);
      const _ty = window.innerHeight * 0.14;
      if (_pt.y > _ty + 20)
        map.panBy([0, _pt.y - _ty], { animate: true, duration: 0.3 });
    }, 350);
  } else {
    openSidebar();
    map.setView([s.lat, s.lng], 16);
  }
  highlightMarker(id);
  const admin = cur && cur.role === 'admin';
  const canEdit = cur && (s.createdBy === cur.id || admin);
  const canVerify = cur && !s.verified;
  const _dm = window._me
    ? dist(window._me[0], window._me[1], s.lat, s.lng)
    : null;
  const distStr =
    _dm != null
      ? _dm < 1
        ? (_dm * 1000).toFixed(0) + 'm away'
        : _dm.toFixed(1) + 'km away'
      : null;
  const primaryFacts = [
    s.pricePerGlass ? ['Price / glass', s.pricePerGlass] : null,
    s.openH != null
      ? ['Hours', fmtHr(s.openH) + ' – ' + fmtHr(s.closeH)]
      : null,
    distStr ? ['Distance', distStr] : null,
  ].filter(Boolean);
  const secondaryFacts = [
    ['District', s.district],
    ['Address', s.address],
    ['Seating', s.seating],
    ['Payment', s.payment],
    ['Vibe', (s.vibes || []).join(', ')],
  ].filter((f) => f && f[1]);
  const gmaps = `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`;
  const addedBy =
    s.createdBy && s.createdBy !== 'anon' && s.createdBy !== 'seed'
      ? userById(s.createdBy)
      : null;
  const body = document.getElementById('sidebarBody');
  body.innerHTML = `<div class="panel detail">
    <span class="back" onclick="bhBack()">← All spots</span>
    <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:6px">
      <div style="flex:1;min-width:0">
        <h2 style="margin-top:0">${esc(s.name)}</h2>
        <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center">
          ${s.verified ? '<span class="chip verified">✓ Verified</span>' : '<span class="chip unverified">⚠ Unverified</span>'}
          ${isOpen(s) ? '<span class="chip open">Open now</span>' : ''}
          ${s.status === 'perm_closed' ? '<span class="chip closed">Permanently closed</span>' : s.status === 'temp_closed' ? '<span class="chip closed">Temporarily closed</span>' : ''}
          ${s.atRisk && s.status !== 'perm_closed' ? '<span class="chip" style="background:#fde8c4;color:#8a5a00;border:1px solid #e0b062">⚠ At risk</span>' : ''}
        </div>
      </div>
      ${s.cover_photo_url ? `<img src="${s.cover_photo_url}" onclick="event.stopPropagation();viewPhoto('${s.id}',Math.max(0,(s.photos||[]).findIndex(p=>p.url===s.cover_photo_url)))" style="width:120px;height:120px;object-fit:cover;border-radius:10px;flex-shrink:0;cursor:pointer" title="View photo">` : ''}
    </div>
    ${(() => {
      const avg = spotAvg(s);
      const pill = avg
        ? `<span style="background:var(--gold);color:#000;font-size:14px;font-weight:800;padding:2px 11px;border-radius:20px">${avg.toFixed(1)} 🍺</span><small style="color:var(--muted);margin-left:6px">${s.reviews.length} review${s.reviews.length === 1 ? '' : 's'}</small>`
        : '<span style="color:var(--muted);font-size:13px">No ratings yet</span>';
      return '<div style="margin:2px 0 8px">' + pill + '</div>';
    })()}
    ${primaryFacts.length ? `<div style="display:flex;flex-wrap:wrap;gap:6px;margin:0 0 10px">${primaryFacts.map((f) => `<span style="background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:3px 9px;font-size:13px"><b style="color:var(--muted);font-weight:600">${f[0]}</b> ${esc(f[1])}</span>`).join('')}</div>` : ''}
    ${(() => {
      const fa = s.lastCheckinAt ? checkinAgo(s.lastCheckinAt) : '';
      const label = fa
        ? 'Last checked in ' + fa
        : 'Not yet confirmed — have you been?';
      return (
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:7px 10px;margin:0 0 10px;flex-wrap:wrap"><span style="font-size:12px;color:var(--muted)">🕓 ' +
        label +
        '</span>' +
        (cur
          ? '<button class="btn-line btn-sm" style="font-size:12px" onclick="checkIn(\'' +
            s.id +
            '\')">✓ Check in</button>'
          : '') +
        '</div>'
      );
    })()}
    ${!s.verified ? `<div class="hint-verify">Added anonymously — not yet verified.${canVerify ? " If you've been here and it's real, hit <b>Verify</b>." : ' Sign in to verify it.'}</div>` : ''}
    <div class="actions">
      <a href="${gmaps}" target="_blank"><button class="btn-gold btn-sm">🧭 Directions</button></a>
      ${canVerify ? `<button class="btn-verify" onclick="verifySpot('${s.id}')">✓ Verify spot</button>` : ''}
      ${cur ? `<button id="bk-btn-${s.id}" class="btn-line btn-sm btn-bk${(cur.bookmarks || []).includes(s.id) ? ' on' : ''}" onclick="toggleBookmark('${s.id}')">${(cur.bookmarks || []).includes(s.id) ? '🔖 Saved' : '🔖 Save'}</button>` : ''}
      <button class="btn-line btn-sm" onclick="shareSpot('${s.id}')">🔗 Share</button>
      <button class="btn-line btn-sm" onclick="spotMoreMenu('${s.id}')">⋯ More</button>
    </div>
    ${s.desc ? `<div class="desc">${esc(s.desc)}</div>` : ''}
    <div class="sec" style="margin-top:10px">Details</div>
      ${(() => {
        const cats = s.reviews.length
          ? RCATS.map((c) => {
              const vals = s.reviews
                .map((r) => r.ratings[c[0]])
                .filter((v) => v > 0);
              if (!vals.length) return null;
              const ca = (
                vals.reduce((a, b) => a + b, 0) / vals.length
              ).toFixed(1);
              return (
                '<span><b style="font-size:13px">' +
                ca +
                '🍺</b> <span style="color:var(--muted)">' +
                c[1] +
                '</span></span>'
              );
            })
              .filter(Boolean)
              .join('')
          : '';
        return cats
          ? '<div class="rgrid" style="margin:8px 0">' + cats + '</div>'
          : '';
      })()}
      <div class="factbox">
        ${secondaryFacts.map((f) => `<div class="factrow"><b>${f[0]}</b><span>${esc(f[1])}</span></div>`).join('')}
        ${addedBy ? `<div class="factrow"><b>Added by</b><span><a style="color:var(--blue);cursor:pointer" onclick="showProfile('${addedBy.id}')">${crownFor(addedBy.id)}${esc(addedBy.name)}</a></span></div>` : '<div class="factrow"><b>Added by</b><span style="color:var(--muted)">Anonymous</span></div>'}
      </div>
    <div class="sec" style="display:flex;justify-content:space-between;align-items:center">
      <span>Photos</span>
      ${cur && (cur.role === 'active' || cur.role === 'admin') ? `<button class="btn-line btn-sm" style="font-size:12px" onclick="uploadPhoto('${s.id}')" title="Add a photo of this spot">📷 Add photo</button>` : ''}
    </div>
    <div class="photos">${s.photos && s.photos.length ? s.photos.map((p, i) => `<div style="position:relative"><img src="${p.url}" onclick="viewPhoto('${s.id}',${i})" style="width:100%;height:90px;object-fit:cover;border-radius:6px;cursor:pointer">${cur && (p.uploaded_by === cur.id || cur.role === 'admin') ? `<button onclick="deletePhoto('${p.id}','${p.path}','${s.id}')" title="Delete photo" style="position:absolute;top:3px;right:3px;background:rgba(0,0,0,.6);color:#fff;border:none;border-radius:50%;width:20px;height:20px;font-size:11px;padding:0;cursor:pointer;line-height:20px;text-align:center">✕</button>` : ''}${admin ? `<button onclick="adminSetCover('${s.id}','${p.url}')" style="position:absolute;bottom:3px;left:3px;background:${s.cover_photo_url === p.url ? 'var(--gold)' : 'rgba(0,0,0,.55)'};color:${s.cover_photo_url === p.url ? '#000' : '#fff'};border:none;border-radius:8px;font-size:10px;font-weight:700;padding:2px 5px;cursor:pointer;line-height:1.4">${s.cover_photo_url === p.url ? '★ Cover' : '☆ Cover'}</button>` : ''}<button onclick="event.stopPropagation();likePhoto('${p.id}','${s.id}')" title="Like photo" style="position:absolute;bottom:3px;right:3px;background:rgba(0,0,0,.55);color:#fff;border:none;border-radius:12px;font-size:11px;font-weight:700;padding:2px 7px;cursor:pointer;line-height:1.4">${cur && p.likes && p.likes.includes(cur.id) ? '❤️' : '🤍'}${p.likes && p.likes.length ? ' ' + p.likes.length : ''}</button>  </div>`).join('') : '<div style="grid-column:1/4;color:var(--muted);font-size:13px;padding:6px 0">No photos yet — be the first to add one!</div>'}</div>
    <div class="sec" style="display:flex;justify-content:space-between;align-items:center">
      <span>Reviews</span>
      ${
        s.reviews.length > 1
          ? `<div style="display:flex;gap:4px" id="sortBtns">
        <button class="sort-btn on" data-sort="newest" onclick="sortReviews('${s.id}','newest',this)">Newest</button>
        <button class="sort-btn" data-sort="top" onclick="sortReviews('${s.id}','top',this)">Top rated</button>
        <button class="sort-btn" data-sort="helpful" onclick="sortReviews('${s.id}','helpful',this)">Helpful</button>
      </div>`
          : ''
      }
    </div>
    <div id="reviewList">${
      s.reviews.length
        ? sortedReviews(s, 'newest')
            .map((r) => reviewHTML(s, r))
            .join('')
        : '<div style="color:var(--muted);font-size:13px">No reviews yet — be the first.</div>'
    }</div>
    <div class="sec">Add your review</div>
    ${reviewFormHTML(s.id)}
  </div>`;
  chosen = {};
  // Async: fetch replies, then re-render review list
  if (s.reviews.length) {
    const rids = s.reviews.map((r) => r.id);
    const { data: rd } = await db
      .from('review_replies')
      .select('*')
      .in('review_id', rids);
    (rd || []).forEach((rep) => {
      if (!repliesCache[rep.review_id]) repliesCache[rep.review_id] = [];
      if (!repliesCache[rep.review_id].find((x) => x.id === rep.id))
        repliesCache[rep.review_id].push(rep);
    });
    const rUids = [
      ...new Set(
        (rd || [])
          .map((r) => r.user_id)
          .filter((id) => id && !profilesCache[id]),
      ),
    ];
    if (rUids.length) {
      const { data: rps } = await db
        .from('profiles')
        .select('*')
        .in('id', rUids);
      (rps || []).forEach((p) => {
        profilesCache[p.id] = p;
      });
    }
    const rl = document.getElementById('reviewList');
    if (rl) {
      const sb = document.querySelector('#sortBtns .sort-btn.on');
      rl.innerHTML = sortedReviews(s, sb ? sb.dataset.sort : 'newest')
        .map((r) => reviewHTML(s, r))
        .join('');
    }
  }
}

/* ============================================================
   VERIFY — spot verification
   ============================================================ */
async function verifySpot(id) {
  if (!cur) return;
  const s = byId(id);
  const verifiedAt = new Date().toISOString().slice(0, 10);
  const { error } = await db
    .from('spots')
    .update({ verified: true, verified_by: cur.id, verified_at: verifiedAt })
    .eq('id', id);
  if (error) return alert('Error verifying: ' + error.message);
  s.verified = true;
  s.verifiedBy = cur.id;
  s.verifiedAt = verifiedAt;
  showDetail(id);
  renderList();
}

/* ============================================================
   REVIEWS — review rendering, submission, voting
   ============================================================ */
function reviewHTML(s, r) {
  const admin = cur && cur.role === 'admin';
  const helped = r.helpful ? r.helpful.length : 0;
  const didI = cur && r.helpful && r.helpful.includes(cur.id);
  const isAnon = !r.userId || r.userId === 'anon';
  const whoLink = isAnon
    ? `<span style="color:var(--muted)">Anonymous</span>`
    : `<a style="color:inherit;cursor:pointer" onclick="showProfile('${r.userId}')">${crownFor(r.userId)}${esc(r.who)}</a>${inlineBadges(r.userId)}`;
  const avg = revAvg(r);
  const avgBadge = avg
    ? `<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 7px;border-radius:20px;margin-left:4px">${avg.toFixed(1)} 🍺</span>`
    : '';
  const _reps = repliesCache[r.id] || [];
  const repliesHtml = _reps.length
    ? `<div class="reply-list">${_reps
        .map((rep) => {
          const rn = esc((profilesCache[rep.user_id] || {}).name || 'User');
          const own = cur && cur.id === rep.user_id;
          return `<div class="reply-item"><span class="reply-who">${rn}:</span> ${esc(rep.body)}${own ? ` <button class="vote" style="color:var(--red)" onclick="deleteReply('${rep.id}','${r.id}','${s.id}')">delete</button>` : ''}${!own && cur ? ` <button class="vote" onclick="reportContent('reply','${rep.id}','reply')">⚑ Report</button>` : ''}</div>`;
        })
        .join('')}</div>`
    : '';
  const canReply = cur && (cur.role === 'active' || cur.role === 'admin');
  const replyBtn = canReply
    ? ` · <button class="vote" onclick="toggleReplyForm('${r.id}')">💬 Reply</button>`
    : '';
  const replyFormHtml = canReply
    ? `<div id="rf_${r.id}" style="display:none;margin-top:6px"><textarea class="reply-textarea" id="rt_${r.id}" placeholder="Write a reply…"></textarea><div style="display:flex;gap:6px;margin-top:4px"><button class="btn-gold btn-sm" style="font-size:12px" onclick="submitReply('${r.id}','${s.id}')">Post</button><button class="btn-line btn-sm" style="font-size:12px" onclick="toggleReplyForm('${r.id}')">Cancel</button></div></div>`
    : '';
  const reportBtn = cur && r.userId !== cur.id
    ? ` · <button class="vote" onclick="reportContent('review','${r.id}','review')">⚑ Report</button>`
    : '';
  return `<div class="review">
    <div class="who"><span>${whoLink}${avgBadge}</span>
      <span>${cur && r.userId === cur.id ? `<button class="vote" onclick="editReview('${s.id}','${r.id}')">edit</button> · ` : ''}${admin || (cur && r.userId === cur.id) ? `<button class="vote" style="color:var(--red)" onclick="delReview('${s.id}','${r.id}')">delete</button>` : ''}</span></div>
    <div class="rgrid">${RCATS.filter((c) => r.ratings[c[0]] > 0)
      .map(
        (c) =>
          `<span><b style="font-size:13px">${r.ratings[c[0]]}🍺</b> <span style="color:var(--muted)">${c[1]}</span></span>`,
      )
      .join('')}</div>
    ${r.txt ? (r.txt.length > 200 ? `<div class="txt">${esc(r.txt.slice(0, 200))}<span id="txe_${r.id}">… </span><span id="txm_${r.id}" style="display:none">${esc(r.txt.slice(200))} </span><button class="vote" id="txb_${r.id}" onclick="toggleMore('${r.id}')">Read more</button></div>` : `<div class="txt">${esc(r.txt)}</div>`) : ''}
    <div class="when">${r.when} · <button class="vote" onclick="voteHelpful('${s.id}','${r.id}')">${didI ? '✓ Helpful' : '👍 Helpful'}${helped ? ' (' + helped + ')' : ''}</button>${replyBtn}${reportBtn}</div>
    ${repliesHtml}${replyFormHtml}
  </div>`;
}

function toggleReplyForm(rid) {
  const el = document.getElementById('rf_' + rid);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
async function submitReply(rid, sid) {
  if (!cur) return;
  const el = document.getElementById('rt_' + rid);
  const body = ((el && el.value) || '').trim();
  if (!body) return showToast('Write something first.');
  el.disabled = true;
  const { data, error } = await db
    .from('review_replies')
    .insert({ review_id: rid, user_id: cur.id, body })
    .select()
    .single();
  if (error) {
    el.disabled = false;
    return showToast('Error: ' + error.message);
  }
  if (!repliesCache[rid]) repliesCache[rid] = [];
  repliesCache[rid].push(data);
  showDetail(sid);
}
async function deleteReply(replyId, rid, sid) {
  if (!confirm('Delete this reply?')) return;
  const { error } = await db.from('review_replies').delete().eq('id', replyId);
  if (error) return showToast('Error: ' + error.message);
  if (repliesCache[rid])
    repliesCache[rid] = repliesCache[rid].filter((r) => r.id !== replyId);
  showDetail(sid);
}
function reviewFormHTML(id) {
  if (!cur) {
    return `<div>
      <div style="pointer-events:none;opacity:.45;user-select:none">
        ${RCATS.map(
          (c) => `
        <div class="rate-row"><span class="lbl">${c[1]}</span>
          <span class="gpick">${[1, 2, 3, 4, 5].map((i) => `<span>🍺</span>`).join('')}</span></div>`,
        ).join('')}
      </div>
      <div style="background:#fbf6ea;border:1px solid var(--line);border-radius:10px;padding:13px 16px;margin-top:8px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <p style="margin:0;font-size:13px;color:var(--ink);font-weight:600;line-height:1.4">Sign in to add spots, rate &amp; review<br><span style="font-weight:400;color:var(--muted)">It's free and takes seconds.</span></p>
        <div style="display:flex;gap:7px;flex-shrink:0">
          <button class="btn-gold btn-sm" onclick="authModal(true)">Join free</button>
          <button class="btn-line btn-sm" onclick="authModal(false)">Sign in</button>
        </div>
      </div>
    </div>`;
  }
  const isNewcomer = cur.role === 'newcomer';
  const textNote = isNewcomer
    ? `<span style="color:var(--orange)"> — ${NEWCOMER_CHAR_LIMIT} char limit until you reach Active status</span>`
    : '';
  const charCounter = isNewcomer
    ? `<div class="char-count" id="charCount">0 / ${NEWCOMER_CHAR_LIMIT}</div>`
    : '';
  const oninput = isNewcomer ? `oninput="updateCharCount(this)"` : '';
  return `<div>
    ${isNewcomer ? `<div class="hint-upgrade">✨ Write reviews (up to ${NEWCOMER_CHAR_LIMIT} chars). Complete the quest in your profile to unlock full reviews!</div>` : ''}
    ${RCATS.map(
      (c) => `
    <div class="rate-row"><span class="lbl">${c[1]}</span>
      <span class="gpick" id="gp_${c[0]}">${[1, 2, 3, 4, 5].map((i) => `<span onclick="pick('${c[0]}',${i})">🍺</span>`).join('')}<span class="clr" onclick="pick('${c[0]}',0)">clear</span></span></div>`,
    ).join('')}
    <div style="background:#fbf6ea;border:1px solid var(--line);border-radius:8px;padding:10px 12px;margin-top:6px">
      <div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:6px">Your thoughts${textNote}</div>
      <textarea id="revTxt" placeholder="What's the crowd like? Best snacks? What makes it special…" ${oninput} style="width:100%;padding:8px 10px;border:1.5px solid var(--line);border-radius:7px;font-size:14px;font-family:inherit;resize:vertical;min-height:72px;background:#fff;color:var(--ink);display:block"></textarea>
      ${charCounter}
    </div>
    <div id="revError" style="display:none;color:#c62828;font-size:13px;font-weight:600;margin-top:8px;padding:8px 10px;background:#fdecea;border-radius:7px"></div>
    <div style="font-size:12px;color:var(--muted);margin-top:8px;text-align:center">Rate at least 2 categories to post — written review is optional</div>
    <button class="btn-gold" style="width:100%;margin-top:8px;padding:11px;font-size:15px;border-radius:10px" onclick="submitReview('${id}')">Post review</button>
  </div>`;
}

function updateCharCount(el) {
  const c = document.getElementById('charCount');
  if (!c) return;
  const len = el.value.length;
  c.textContent = `${len} / ${NEWCOMER_CHAR_LIMIT}`;
  c.className = 'char-count' + (len > NEWCOMER_CHAR_LIMIT ? ' over' : '');
}

function pick(cat, v) {
  chosen[cat] = v;
  const sp = document.querySelectorAll('#gp_' + cat + ' span');
  sp.forEach((el, i) => {
    if (i < 5) el.classList.toggle('on', i < v);
  });
}
let eChosen = {};
function editReview(sid, rid) {
  if (!cur) return;
  const s = byId(sid);
  if (!s) return;
  const r = s.reviews.find((x) => x.id === rid);
  if (!r) return;
  if (r.userId !== cur.id && cur.role !== 'admin') return;
  eChosen = {};
  RCATS.forEach((c) => (eChosen[c[0]] = r.ratings[c[0]] || 0));
  window._editReviewSid = sid;
  window._editReviewRid = rid;
  modal(`<h2 style="margin:0 0 10px;font-size:18px">Edit your review</h2>
    ${RCATS.map(
      (c) => `<div class="rate-row"><span class="lbl">${c[1]}</span>
      <span class="gpick" id="egp_${c[0]}">${[1, 2, 3, 4, 5].map((i) => `<span onclick="epick('${c[0]}',${i})">🍺</span>`).join('')}<span class="clr" onclick="epick('${c[0]}',0)">clear</span></span></div>`,
    ).join('')}
    <textarea id="eRevTxt" style="width:100%;padding:8px 10px;border:1.5px solid var(--line);border-radius:7px;font-size:14px;font-family:inherit;resize:vertical;min-height:72px;margin-top:8px">${esc(r.txt || '')}</textarea>
    <button class="btn-gold" style="width:100%;margin-top:10px" onclick="saveReviewEdit()">Save changes</button>
    <button class="btn-line" style="width:100%;margin-top:6px" onclick="closeModal()">Cancel</button>`);
  RCATS.forEach((c) => epick(c[0], eChosen[c[0]]));
}
function epick(cat, v) {
  eChosen[cat] = v;
  const sp = document.querySelectorAll('#egp_' + cat + ' span');
  sp.forEach((el, i) => {
    if (i < 5) el.classList.toggle('on', i < v);
  });
}
async function saveReviewEdit() {
  const sid = window._editReviewSid,
    rid = window._editReviewRid;
  const s = byId(sid);
  if (!s) return;
  const r = s.reviews.find((x) => x.id === rid);
  if (!r) return;
  const ratings = {};
  RCATS.forEach((c) => (ratings[c[0]] = eChosen[c[0]] || 0));
  if (RCATS.filter((c) => ratings[c[0]] > 0).length < 2)
    return showToast('Rate at least 2 categories.');
  const txtEl = document.getElementById('eRevTxt');
  let txt = txtEl ? txtEl.value.trim() : '';
  if (cur && cur.role === 'newcomer' && txt.length > NEWCOMER_CHAR_LIMIT)
    return showToast(
      'Review too long for your level (' + NEWCOMER_CHAR_LIMIT + ' max).',
    );
  const { error } = await db
    .from('reviews')
    .update({ ratings, txt })
    .eq('id', rid);
  if (error) return showToast('Could not save: ' + error.message);
  r.ratings = ratings;
  r.txt = txt;
  closeModal();
  showDetail(sid);
  showToast('✅ Review updated.');
}

async function submitReview(id) {
  if (!cur) {
    authModal(true);
    return;
  }
  const s = byId(id);
  const ratings = {};
  RCATS.forEach((c) => (ratings[c[0]] = chosen[c[0]] || 0));
  let txt = '';
  const txtEl = document.getElementById('revTxt');
  if (txtEl) txt = txtEl.value.trim();
  // Anonymous users cannot write text reviews
  if (!cur && txt) {
    authModal(true);
    return;
  }
  if (cur && cur.role === 'newcomer' && txt.length > NEWCOMER_CHAR_LIMIT) {
    alert(
      `Reviews are limited to ${NEWCOMER_CHAR_LIMIT} characters until you reach Active status.`,
    );
    return;
  }
  const errEl = document.getElementById('revError');
  const rated = RCATS.filter((c) => ratings[c[0]] && ratings[c[0]] > 0);
  if (rated.length < 2) {
    if (errEl) {
      errEl.textContent = 'Please rate at least 2 categories before posting.';
      errEl.style.display = 'block';
    }
    return;
  }
  if (errEl) errEl.style.display = 'none';
  const who = cur ? cur.name : 'Anonymous';
  const userId = cur ? cur.id : null;
  const reviewData = {
    id: 'r' + Date.now(),
    spot_id: id,
    user_id: userId,
    who,
    ratings,
    txt,
    review_date: new Date().toISOString().slice(0, 10),
    helpful: [],
  };
  const { error } = await db.from('reviews').insert([reviewData]);
  if (error) {
    alert('Error saving review: ' + error.message);
    return;
  }
  s.reviews.unshift({
    id: reviewData.id,
    userId: userId || 'anon',
    who,
    ratings,
    txt,
    when: reviewData.review_date,
    createdAt: new Date().toISOString(),
    helpful: [],
  });
  chosen = {};
  if (cur) {
    await checkAndUpgrade();
    await checkBadges();
  }
  showDetail(id);
}

async function voteHelpful(sid, rid) {
  if (!cur) return alert('Sign in to vote helpful.');
  const r = byId(sid).reviews.find((x) => x.id === rid);
  r.helpful = r.helpful || [];
  const i = r.helpful.indexOf(cur.id);
  i >= 0 ? r.helpful.splice(i, 1) : r.helpful.push(cur.id);
  showDetail(sid);
  const { error } = await db.rpc('toggle_helpful', { p_review_id: rid });
  if (error) {
    if (i >= 0) r.helpful.push(cur.id);
    else {
      const j = r.helpful.indexOf(cur.id);
      if (j >= 0) r.helpful.splice(j, 1);
    }
    showToast('Vote failed: ' + error.message);
    showDetail(sid);
  }
}

async function delReview(sid, rid) {
  if (!confirm('Delete this review?')) return;
  const { error } = await db.from('reviews').delete().eq('id', rid);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  const s = byId(sid);
  s.reviews = s.reviews.filter((x) => x.id !== rid);
  showDetail(sid);
}

/* ── PHOTOS: upload, lightbox, likes ── */
async function uploadPhoto(spotId) {
  if (!cur || !(cur.role === 'active' || cur.role === 'admin'))
    return alert('Active members can upload photos.');
  window._pendingUploadSpotId = spotId;
  modal(
    '<h2>📷 Add a Photo</h2>' +
      '<p style="font-size:13px;color:var(--muted);margin:0 0 14px">Optionally tag your photo before selecting it.</p>' +
      '<div style="margin-bottom:14px">' +
      '<label style="display:flex;align-items:flex-start;gap:10px;padding:10px;border:1px solid var(--line);border-radius:8px;cursor:pointer;margin-bottom:8px">' +
      '<input type="checkbox" id="tagThumbsUp" style="width:18px;height:18px;margin-top:2px;flex-shrink:0">' +
      '<div><div style="font-weight:700">👍 Uncle Approved</div><div style="font-size:12px;color:var(--muted)">I\'m doing a thumbs-up in this photo</div></div>' +
      '</label>' +
      '<label style="display:flex;align-items:flex-start;gap:10px;padding:10px;border:1px solid var(--line);border-radius:8px;cursor:pointer">' +
      '<input type="checkbox" id="tagFullUncle" style="width:18px;height:18px;margin-top:2px;flex-shrink:0">' +
      '<div><div style="font-weight:700">🤙 Full Uncle</div><div style="font-size:12px;color:var(--muted)">5+ people all doing thumbs-up in the photo</div></div>' +
      '</label></div>' +
      '<button class="btn-gold" style="width:100%" onclick="proceedUpload()">Choose Photo & Upload</button>' +
      '<button class="btn-ghost" style="width:100%;margin-top:8px" onclick="closeModal()">Cancel</button>',
  );
}

function compressImage(file, maxPx = 1280, startQ = 0.75, targetKB = 900) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let w = img.width,
        h = img.height;
      if (w > maxPx || h > maxPx) {
        const r = Math.min(maxPx / w, maxPx / h);
        w = Math.round(w * r);
        h = Math.round(h * r);
      }
      const c = document.createElement('canvas');
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      const name = file.name.replace(/\.[^.]+$/, '.jpg');
      const tryQ = (q) => {
        c.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('compress failed'));
              return;
            }
            if (blob.size > targetKB * 1024 && q > 0.45) {
              tryQ(Math.max(0.45, q - 0.12));
              return;
            }
            resolve(new File([blob], name, { type: 'image/jpeg' }));
          },
          'image/jpeg',
          q,
        );
      };
      tryQ(startQ);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('load failed'));
    };
    img.src = url;
  });
}
async function proceedUpload() {
  const spotId = window._pendingUploadSpotId;
  if (!spotId || !cur) return;
  const thumbsUp = !!(
    document.getElementById('tagThumbsUp') &&
    document.getElementById('tagThumbsUp').checked
  );
  const fullUncle = !!(
    document.getElementById('tagFullUncle') &&
    document.getElementById('tagFullUncle').checked
  );
  closeModal();
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/jpeg,image/png,image/webp,image/gif';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/'))
      return showToast('Please choose an image file.');
    if (file.size > 25 * 1024 * 1024)
      return showToast(
        'That image is very large (max 25 MB) — please pick a smaller one.',
      );
    showToast('⏳ Optimising photo…', 8000);
    let upload;
    try {
      upload = await compressImage(file, 1280, 0.75, 900);
    } catch (err) {
      return showToast('Could not process that image — please try another.');
    }
    const path = spotId + '/' + cur.id + '_' + Date.now() + '.jpg';
    showToast('⏳ Uploading photo…', 10000);
    const { error: upErr } = await db.storage
      .from('spot-photos')
      .upload(path, upload, {
        contentType: 'image/jpeg',
        upsert: false,
        cacheControl: '2592000',
      });
    if (upErr) return showToast('Upload failed: ' + upErr.message);
    const {
      data: { publicUrl },
    } = db.storage.from('spot-photos').getPublicUrl(path);
    const { data: row, error: dbErr } = await db
      .from('photos')
      .insert({
        spot_id: spotId,
        uploaded_by: cur.id,
        url: publicUrl,
        path,
        thumbs_up: thumbsUp,
        full_uncle: fullUncle,
      })
      .select()
      .single();
    if (dbErr) {
      await db.storage.from('spot-photos').remove([path]);
      return showToast('Save failed: ' + dbErr.message);
    }
    const spot = byId(spotId);
    if (spot) {
      if (!spot.photos) spot.photos = [];
      spot.photos.push(row);
    }
    await checkBadges();
    showDetail(spotId);
  };
  input.click();
}

async function deletePhoto(photoId, path, spotId) {
  if (!confirm('Delete this photo?')) return;
  const { error: stErr } = await db.storage.from('spot-photos').remove([path]);
  const { error: dbErr } = await db.from('photos').delete().eq('id', photoId);
  if (dbErr) return alert('Error: ' + dbErr.message);
  const spot = byId(spotId);
  if (spot) spot.photos = (spot.photos || []).filter((p) => p.id !== photoId);
  showDetail(spotId);
}

let _lbPhotos = [],
  _lbIdx = 0;
async function likePhoto(photoId, spotId) {
  if (!cur) {
    authModal(false);
    return;
  }
  const spot = byId(spotId);
  if (!spot) return;
  const p = (spot.photos || []).find((x) => x.id === photoId);
  if (!p) return;
  p.likes = p.likes || [];
  const i = p.likes.indexOf(cur.id);
  if (i >= 0) {
    p.likes.splice(i, 1);
    await db
      .from('photo_likes')
      .delete()
      .eq('photo_id', photoId)
      .eq('user_id', cur.id);
  } else {
    p.likes.push(cur.id);
    await db.from('photo_likes').insert({ photo_id: photoId, user_id: cur.id });
  }
  showDetail(spotId);
}
function viewPhoto(spotId, i) {
  const s = byId(spotId);
  if (!s || !s.photos || !s.photos.length) return;
  _lbPhotos = s.photos;
  _lbIdx = i || 0;
  window._lbSpotId = spotId;
  renderLightbox();
  document.getElementById('photoLightbox').classList.add('open');
  document.addEventListener('keydown', lbKey);
}
function renderLightbox() {
  const p = _lbPhotos[_lbIdx];
  document.getElementById('lbImg').src = p.url || p;
  document.getElementById('lbCounter').textContent =
    `${_lbIdx + 1} / ${_lbPhotos.length}`;
  document.getElementById('lbCaption').textContent = p.caption || '';
  document.getElementById('lbPrev').style.display =
    _lbPhotos.length < 2 ? 'none' : 'flex';
  document.getElementById('lbNext').style.display =
    _lbPhotos.length < 2 ? 'none' : 'flex';
  const dots = document.getElementById('lbDots');
  dots.innerHTML =
    _lbPhotos.length > 1
      ? _lbPhotos
          .map(
            (_, i) =>
              `<div class="lb-dot${i === _lbIdx ? ' on' : ''}" onclick="lbGo(${i})"></div>`,
          )
          .join('')
      : '';
  const lb = document.getElementById('lbLike');
  if (lb) {
    const liked = cur && p.likes && p.likes.includes(cur.id);
    lb.innerHTML =
      (liked ? '❤️ Liked' : '🤍 Like') +
      (p.likes && p.likes.length ? ' · ' + p.likes.length : '');
    lb.style.background = liked ? '#ffd9d9' : 'var(--gold)';
  }
}
function lbStep(dir) {
  _lbIdx = (_lbIdx + dir + _lbPhotos.length) % _lbPhotos.length;
  renderLightbox();
}
function lbGo(i) {
  _lbIdx = i;
  renderLightbox();
}
async function lbLike() {
  if (!cur) {
    authModal(false);
    return;
  }
  const p = _lbPhotos[_lbIdx];
  if (!p) return;
  p.likes = p.likes || [];
  const i = p.likes.indexOf(cur.id);
  if (i >= 0) {
    p.likes.splice(i, 1);
    await db
      .from('photo_likes')
      .delete()
      .eq('photo_id', p.id)
      .eq('user_id', cur.id);
  } else {
    p.likes.push(cur.id);
    await db.from('photo_likes').insert({ photo_id: p.id, user_id: cur.id });
  }
  renderLightbox();
}
function lbReport() {
  const p = _lbPhotos[_lbIdx];
  if (!p || !p.id) return;
  if (!cur) { authModal(false); return; }
  reportContent('photo', p.id, 'photo');
}
function closeLightbox() {
  document.getElementById('photoLightbox').classList.remove('open');
  document.removeEventListener('keydown', lbKey);
}
function lbKey(e) {
  if (e.key === 'ArrowLeft') lbStep(-1);
  else if (e.key === 'ArrowRight') lbStep(1);
  else if (e.key === 'Escape') closeLightbox();
}
function lbBgClick(e) {
  if (e.target === document.getElementById('photoLightbox')) closeLightbox();
}

/* ── SOCIAL: bookmarks ── */
async function toggleBookmark(id) {
  if (!cur) {
    showToast('Sign in to save spots');
    return;
  }
  const bk = cur.bookmarks || [];
  const idx = bk.indexOf(id);
  const next = idx > -1 ? bk.filter((x) => x !== id) : [...bk, id];
  const added = next.length > bk.length;
  cur.bookmarks = next;
  if (profilesCache[cur.id]) profilesCache[cur.id].bookmarks = next;
  await db.from('profiles').update({ bookmarks: next }).eq('id', cur.id);
  const btn = document.getElementById('bk-btn-' + id);
  if (btn) {
    btn.className = 'btn-line btn-sm btn-bk' + (added ? ' on' : '');
    btn.textContent = added ? '🔖 Saved' : '🔖 Save';
  }
  renderList();
  showToast(added ? 'Spot saved!' : 'Removed from saved');
}
/* ── SPOTS: menu, report, share ── */
function spotMoreMenu(id) {
  const s = byId(id);
  if (!s) return;
  const admin = cur && cur.role === 'admin';
  const canEdit = cur && (s.createdBy === cur.id || admin);
  let btns =
    '<button class="btn-line" style="width:100%;margin-bottom:8px" onclick="closeModal();reportSpot(\'' +
    id +
    '\')">⚑ Report</button>';
  if (canEdit)
    btns +=
      '<button class="btn-line" style="width:100%;margin-bottom:8px" onclick="closeModal();startAdd(\'' +
      id +
      '\')">✎ Edit</button>';
  if (admin)
    btns +=
      '<button class="btn-line" style="width:100%;margin-bottom:8px" onclick="closeModal();setStatus(\'' +
      id +
      '\')">⚙ Status</button>' +
      '<button class="btn-line" style="width:100%;margin-bottom:8px;color:var(--red)" onclick="closeModal();delSpot(\'' +
      id +
      '\')">🗑 Delete</button>';
  modal(
    '<h2 style="margin:0 0 12px;font-size:18px">Options</h2>' +
      btns +
      '<button class="btn-gold" style="width:100%;margin-top:2px" onclick="closeModal()">Close</button>',
  );
}
function reportSpot(id) {
  if (!cur) {
    authModal(false);
    return;
  }
  window._reportReason = '';
  const s = byId(id);
  const reasons = [
    ['Closed down', '🚫'],
    ['Might be closing', '⏳'],
    ['Wrong location', '📍'],
    ['Duplicate listing', '👯'],
    ['Inappropriate content', '⚠️'],
    ['Other', '✏️'],
  ];
  modal(`
    <div style="display:flex;align-items:center;gap:8px;margin:0 0 2px">
      <span style="font-size:20px">⚑</span><h2 style="margin:0;font-size:18px">Report this spot</h2>
    </div>
    <p style="font-size:13px;color:var(--muted);margin:2px 0 14px">${s ? '“' + (s.name || 'this spot') + '” — ' : ''}help keep the map accurate. What's wrong?</p>
    <div id="reportReasons" style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
      ${reasons.map(([r, e]) => `<button type="button" class="report-reason" data-r="${r}" onclick="pickReportReason(this)" style="display:flex;align-items:center;gap:10px;text-align:left;padding:11px 13px;border:1.5px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink);font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .12s"><span style="font-size:16px">${e}</span>${r}</button>`).join('')}
    </div>
    <textarea id="reportDetails" placeholder="Add any details (optional)…" style="width:100%;box-sizing:border-box;min-height:66px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-family:inherit;font-size:14px;background:var(--card);color:var(--ink);resize:vertical"></textarea>
    <button id="reportSubmitBtn" class="btn-gold" style="width:100%;margin-top:14px;padding:11px;font-weight:800;border-radius:10px" onclick="submitReport('${id}')">Submit report</button>
    <button class="btn-line" style="width:100%;margin-top:7px;padding:10px;border-radius:10px" onclick="closeModal()">Cancel</button>`);
}
function pickReportReason(btn) {
  window._reportReason = btn.getAttribute('data-r');
  document.querySelectorAll('#reportReasons .report-reason').forEach((b) => {
    b.style.borderColor = 'var(--line)';
    b.style.background = 'var(--card)';
  });
  btn.style.borderColor = 'var(--gold)';
  btn.style.background = 'rgba(245,179,1,.13)';
}
async function submitReport(id) {
  if (!cur) {
    authModal(false);
    return;
  }
  const reason = window._reportReason;
  if (!reason) {
    showToast('Please pick a reason first.');
    return;
  }
  const details = (
    document.getElementById('reportDetails')?.value || ''
  ).trim();
  const btn = document.getElementById('reportSubmitBtn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending…';
  }
  const { error } = await db.rpc('add_report', {
    p_spot_id: id,
    p_reason: reason,
    p_details: details,
  });
  if (error) {
    showToast('Could not send report: ' + error.message);
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Submit report';
    }
    return;
  }
  const s = byId(id);
  if (s)
    s.reports = [
      ...(s.reports || []),
      {
        by: cur.name,
        user_id: cur.id,
        reason,
        why: details ? reason + ' — ' + details : reason,
        when: new Date().toISOString().slice(0, 10),
      },
    ];
  closeModal();
  showToast('✅ Report sent — thanks, an admin will review it.');
}
/* ── Generic content reporting (reviews, photos, replies) ── */
const REPORT_REASONS = [
  ['Spam or advertising', '📢'],
  ['Offensive or abusive', '⚠️'],
  ['Off-topic or wrong info', '❓'],
  ['Inappropriate photo', '🔞'],
  ['Duplicate', '👯'],
  ['Other', '✏️'],
];
function reportContent(type, id, label) {
  if (!cur) {
    authModal(false);
    return;
  }
  window._reportReason = '';
  window._reportCtx = { type, id };
  const titles = { review: 'review', photo: 'photo', reply: 'reply' };
  // photos don't need the "wrong info" style reasons but the shared list is fine
  const reasons = REPORT_REASONS.filter(
    ([r]) => type === 'photo' || r !== 'Inappropriate photo',
  );
  modal(`
    <div style="display:flex;align-items:center;gap:8px;margin:0 0 2px">
      <span style="font-size:20px">⚑</span><h2 style="margin:0;font-size:18px">Report this ${titles[type] || 'content'}</h2>
    </div>
    <p style="font-size:13px;color:var(--muted);margin:2px 0 14px">${label ? '“' + esc(label) + '” — ' : ''}thanks for helping keep Bác Hơi friendly. What's wrong?</p>
    <div id="reportReasons" style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
      ${reasons.map(([r, e]) => `<button type="button" class="report-reason" data-r="${r}" onclick="pickReportReason(this)" style="display:flex;align-items:center;gap:10px;text-align:left;padding:11px 13px;border:1.5px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink);font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .12s"><span style="font-size:16px">${e}</span>${r}</button>`).join('')}
    </div>
    <textarea id="reportDetails" placeholder="Add any details (optional)…" style="width:100%;box-sizing:border-box;min-height:66px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-family:inherit;font-size:14px;background:var(--card);color:var(--ink);resize:vertical"></textarea>
    <button id="reportSubmitBtn" class="btn-gold" style="width:100%;margin-top:14px;padding:11px;font-weight:800;border-radius:10px" onclick="submitContentReport()">Submit report</button>
    <button class="btn-line" style="width:100%;margin-top:7px;padding:10px;border-radius:10px" onclick="closeModal()">Cancel</button>`);
}
async function submitContentReport() {
  if (!cur) {
    authModal(false);
    return;
  }
  const ctx = window._reportCtx || {};
  const reason = window._reportReason;
  if (!reason) {
    showToast('Please pick a reason first.');
    return;
  }
  const details = (
    document.getElementById('reportDetails')?.value || ''
  ).trim();
  const btn = document.getElementById('reportSubmitBtn');
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending…';
  }
  const { error } = await db.rpc('add_content_report', {
    p_type: ctx.type,
    p_id: String(ctx.id),
    p_reason: reason,
    p_details: details,
  });
  if (error) {
    showToast('Could not send report: ' + error.message);
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Submit report';
    }
    return;
  }
  closeModal();
  showToast('✅ Report sent — thanks, an admin will review it.');
}

async function shareSpot(id) {
  const s = byId(id);
  const url = `https://woustache-max.github.io/Bia-Hoi-Hanoi/?spot=${encodeURIComponent(id)}`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: s.name || 'Bác Hơi',
        text: `Check out ${s.name || 'this bia hơi spot'} on Bác Hơi 🍺`,
        url,
      });
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast('🔗 Link copied to clipboard!');
  } catch (e) {
    prompt('Copy this link:', url);
  }
}

/* ── ADMIN: spot status / deletion ── */
async function setStatus(id) {
  const s = byId(id);
  modal(`<h2>Set status</h2><p>Current: ${s.status}${s.atRisk ? ' · ⚠ at-risk' : ''}</p>
    <div class="seg"><button onclick="applyStatus('${id}','active')" class="${s.status === 'active' ? 'on' : ''}">Active</button>
    <button onclick="applyStatus('${id}','temp_closed')" class="${s.status === 'temp_closed' ? 'on' : ''}">Temp closed</button>
    <button onclick="applyStatus('${id}','perm_closed')" class="${s.status === 'perm_closed' ? 'on' : ''}">Closed</button></div>
    <button class="btn-line btn-sm" style="margin-top:12px;width:100%" onclick="applyAtRisk('${id}',${s.atRisk ? 'false' : 'true'})">${s.atRisk ? '✓ At-risk — tap to clear' : '⚠ Mark as at-risk'}</button>`);
}

async function applyStatus(id, st) {
  const upd = { status: st };
  if (st === 'perm_closed')
    upd.closed_at = new Date().toISOString().slice(0, 10);
  const { error } = await db.from('spots').update(upd).eq('id', id);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  const s = byId(id);
  s.status = st;
  if (st === 'perm_closed') {
    s.closedAt = upd.closed_at;
    s.atRisk = false;
  }
  closeModal();
  showDetail(id);
}
async function applyAtRisk(id, val) {
  const { error } = await db
    .from('spots')
    .update({ at_risk: val })
    .eq('id', id);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  byId(id).atRisk = val;
  closeModal();
  showDetail(id);
}

async function delSpot(id) {
  if (!confirm('Permanently delete this spot and all its reviews?')) return;
  const { error } = await db.from('spots').delete().eq('id', id);
  if (error) {
    alert('Error deleting: ' + error.message);
    return;
  }
  spots = spots.filter((s) => s.id !== id);
  renderList();
}

/* ============================================================
   ADD / EDIT SPOT — spot creation and editing form
   ============================================================ */
function renderAddForm(editId, lat, lng) {
  const s = editId ? byId(editId) : null;
  const _fd = window._addFormData || {};
  const body = document.getElementById('sidebarBody');
  body.innerHTML = `<div class="panel" style="padding-bottom:28px"><form onsubmit="return false">
    <span class="back" onclick="cancelAdd()">← Cancel</span>
    <h2 style="font-size:20px;margin:4px 0 2px;font-weight:800">${s ? 'Edit spot' : 'Add a spot'}</h2>
    <p style="font-size:13px;color:var(--muted);margin:0 0 4px">${s ? 'Update the details below.' : 'Fill in what you know — every field helps!'}</p>
    ${!s && innerWidth > 680 ? '<div class="hint" style="margin:8px 0 2px">📌 Click the map to move the pin.</div>' : ''}

    <div class="form-sec-title">Basic info</div>
    <div class="form-section">
      <div><label>Name *</label><input id="f_name" value="${s ? esc(s.name) : esc(_fd.name || '')}" placeholder="e.g. Bia Hơi Minh"><div id="f_name_err" style="display:none;color:#c62828;font-size:12px;margin-top:4px;font-weight:600">⚠ Spot name is required</div></div>
      <div class="row2">
        <div><label>District</label><select id="f_district"><option value="">Auto-detect…</option>${DISTRICTS.map((d) => `<option value="${d}" ${(s && s.district === d) || (_fd.district && _fd.district === d) ? 'selected' : ''}>${d}</option>`).join('')}</select></div>
        <div><label>Price per glass</label><select id="f_price" style="width:100%;padding:9px 11px;border:1.5px solid var(--line);border-radius:9px;font-size:14px;font-family:inherit;background:#fff;color:var(--ink)">${(() => {
          const cur = s ? s.pricePerGlass : _fd.price || '';
          let opts = '<option value="">Select…</option>';
          for (let v = 5000; v <= 30000; v += 1000) {
            const lbl = v.toLocaleString('en-US') + '₫';
            opts += `<option value="${lbl}" ${cur === lbl ? 'selected' : ''}>${lbl}</option>`;
          }
          opts += `<option value="Ask" ${cur === 'Ask' ? 'selected' : ''}>Ask</option>`;
          return opts;
        })()}</select></div>
      </div>
      <div><label>Address</label><input id="f_addr" value="${s ? esc(s.address) : ''}" placeholder="Street or nearby landmark"></div>
    </div>

    <div class="form-sec-title">Hours &amp; details</div>
    <div class="form-section">
      <div class="row2">
        <div><label>Opens (24h)</label><input id="f_open" type="number" min="0" max="23" value="${s && s.openH != null ? s.openH : 16}"></div>
        <div><label>Closes (24h)</label><input id="f_close" type="number" min="0" max="30" value="${s && s.closeH != null ? s.closeH : 23}"></div>
      </div>
      <div><label>Seating</label><div class="tagpick" id="f_seat_tags" style="margin-top:4px">${SEATING_OPTS.map(
        (v) => {
          const chk = (s && s.seating ? s.seating : _fd.seat || '')
            .split(', ')
            .includes(v);
          return `<label class="${chk ? 'on' : ''}"><input type="checkbox" value="${v}" ${chk ? 'checked' : ''} onchange="this.parentElement.classList.toggle('on',this.checked)">${v}</label>`;
        },
      ).join('')}</div></div>
      <div><label>Payment</label><input id="f_pay" value="${s ? esc(s.payment) : 'Cash or QR code transfer'}"></div>
    </div>

    <div class="form-sec-title">Vibe</div>
    <div class="tagpick" id="f_vibes" style="margin:0 0 4px">${VIBES.map((v) => `<label class="${s && (s.vibes || []).includes(v) ? 'on' : ''}"><input type="checkbox" value="${v}" ${s && (s.vibes || []).includes(v) ? 'checked' : ''} onchange="this.parentElement.classList.toggle('on',this.checked)">${v}</label>`).join('')}</div>

    <div class="form-sec-title">${s ? 'Description' : 'Describe this place — neutral facts, not a review'}</div>
    <textarea id="f_desc" placeholder="${s ? 'Atmosphere, crowd, what makes it special…' : 'What is this place? e.g. street-side bia hơi on a busy corner, serves grilled snacks, popular with locals after work…'}">${s ? esc(s.desc) : ''}</textarea>
    ${s ? '' : '<p style="font-size:12px;color:var(--muted);margin:6px 0 0">This is a neutral description so people know what the place is. After you submit, open the spot to add your personal ⭐ review separately.</p>'}

    <div class="form-sec-title" style="display:flex;justify-content:space-between;align-items:center">📍 Pin location${!s ? `<button type="button" style="font-size:12px;font-weight:700;color:var(--blue);background:none;border:none;cursor:pointer;padding:0" onclick="changeSpotLocation()">📍 Change location</button>` : ''}
    </div>
    <div class="form-section">
      <div class="row2">
        <div><label>Latitude *</label><input id="f_lat" value="${s ? s.lat : lat || ''}" placeholder="21.0345"></div>
        <div><label>Longitude *</label><input id="f_lng" value="${s ? s.lng : lng || ''}" placeholder="105.8525"></div>
      <div id="f_pin_err" style="display:none;color:#c62828;font-size:12px;margin-top:6px;font-weight:600">⚠ Pin required — use the 📍 Change location button above</div>
      </div>
    </div>

    <div id="addSpotErr" style="display:none;color:#c62828;font-size:13px;font-weight:600;margin-top:12px;padding:8px 10px;background:#fdecea;border-radius:7px"></div>
    <button class="btn-gold" style="width:100%;margin-top:10px;padding:12px;font-size:15px;border-radius:10px" onclick="saveSpot('${editId || ''}')">${s ? 'Save changes' : 'Submit spot'}</button>
    ${!cur && !s ? `<p style="font-size:12px;color:var(--muted);margin-top:10px;text-align:center">Submitting anonymously. <a style="color:var(--gold-dark);cursor:pointer" onclick="authModal(true)">Create a free account</a> to track your contributions.</p>` : ''}
    </form></div>`;
}

function startAdd(editId) {
  if (!editId && !cur) {
    authModal(true);
    return;
  }
  adding = !editId;
  if (!editId && innerWidth <= 680) {
    if (window._addDraftCoords) {
      navPush('add');
      openSidebar();
      renderAddForm(null, window._addDraftCoords[0], window._addDraftCoords[1]);
      return;
    }
    startPinDrop();
    return;
  }
  navPush('add');
  openSidebar();
  renderAddForm(editId, null, null);
}
function startPinDrop() {
  adding = true;
  const isl = document.getElementById('floatingIsland');
  if (isl) isl.style.display = 'none';
  const b = document.createElement('div');
  b.id = 'pinDropBanner';
  b.innerHTML = `<div class="pdb-title">📍 Drop a pin</div>
    <div class="pdb-sub">Tap anywhere on the map to place your spot</div>
    <div class="pdb-btns">
      <button class="pdb-use-loc" onclick="useMyLocationForPin()">📡 Use my location</button>
      <button class="pdb-cancel" onclick="cancelAdd()">✕ Cancel</button>
    </div>`;
  document.body.appendChild(b);
}
function confirmPinDrop(lat, lng) {
  const b = document.getElementById('pinDropBanner');
  if (b) b.remove();
  adding = false;
  window._addDraftCoords = [lat, lng];
  navPush('add');
  openSidebar();
  renderAddForm(null, lat, lng);
  setTimeout(() => reverseGeocode(lat, lng), 100);
}
function changeSpotLocation() {
  window._addFormData = {
    name: val('f_name'),
    district: val('f_district'),
    price: val('f_price'),
    open: val('f_open'),
    close: val('f_close'),
    seat: val('f_seat'),
    pay: val('f_pay'),
    desc: val('f_desc'),
    vibes: [...document.querySelectorAll('#f_vibes input:checked')].map(
      (i) => i.value,
    ),
  };
  if (tmpMarker) {
    map.removeLayer(tmpMarker);
    tmpMarker = null;
  }
  closeSidebar();
  adding = true;
  startPinDrop();
}
function cancelAdd() {
  adding = false;
  window._addFormData = null;
  window._pendingPin = null;
  window._addDraftCoords = null;
  const b = document.getElementById('pinDropBanner');
  if (b) b.remove();
  if (tmpMarker) {
    map.removeLayer(tmpMarker);
    tmpMarker = null;
  }
  const isl = document.getElementById('floatingIsland');
  if (isl) isl.style.display = '';
  renderList();
}
function useMyLocationForPin() {
  const btn = document.querySelector('.pdb-use-loc');
  if (btn) btn.textContent = '⏳ Locating…';
  if (window._me) {
    const [lat, lng] = window._me;
    if (tmpMarker) map.removeLayer(tmpMarker);
    tmpMarker = L.marker([lat, lng], { icon: pinIcon(false, true) }).addTo(map);
    map.setView([lat, lng], 17);
    showPinConfirmBar(lat, lng);
    return;
  }
  if (!navigator.geolocation) {
    showToast('Location not available');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (p) => {
      const lat = p.coords.latitude,
        lng = p.coords.longitude;
      window._me = [lat, lng];
      if (!window._meMarker)
        window._meMarker = L.circleMarker([lat, lng], {
          radius: 10,
          color: '#185fa5',
          fillColor: '#4a9fe8',
          fillOpacity: 0.92,
          weight: 2.5,
        }).addTo(map);
      if (tmpMarker) map.removeLayer(tmpMarker);
      tmpMarker = L.marker([lat, lng], { icon: pinIcon(false, true) }).addTo(
        map,
      );
      map.setView([lat, lng], 17);
      showPinConfirmBar(lat, lng);
    },
    () => {
      showToast('Could not get your location — please allow location access.');
      if (btn) btn.textContent = '📡 Use my location';
    },
    { enableHighAccuracy: true, timeout: 8000 },
  );
}
async function reverseGeocode(lat, lng) {
  const el = document.getElementById('f_addr');
  if (!el) return;
  el.value = '';
  el.placeholder = 'Looking up address…';
  try {
    const r = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`,
    );
    const d = await r.json();
    const a = d.address || {};
    const parts = [a.road, a.suburb || a.neighbourhood || a.quarter].filter(
      Boolean,
    );
    if (parts.length) el.value = parts.join(', ');
    // Match district
    const rawDist = (a.city_district || a.suburb || '')
      .replace(/^(Quận|Huyện|Thị xã)\s+/i, '')
      .trim();
    if (rawDist) {
      const match = DISTRICTS.find(
        (d) =>
          d.toLowerCase() === rawDist.toLowerCase() ||
          rawDist.toLowerCase().includes(d.toLowerCase()),
      );
      if (match) {
        const sel = document.getElementById('f_district');
        if (sel) sel.value = match;
      }
    }
  } catch (e) {}
  el.placeholder = 'Street or nearby landmark';
}
map.on('click', (e) => {
  if (!adding) return;
  const lat = e.latlng.lat,
    lng = e.latlng.lng;
  if (tmpMarker) map.removeLayer(tmpMarker);
  tmpMarker = L.marker(e.latlng, { icon: pinIcon(false, true) }).addTo(map);
  if (document.getElementById('pinDropBanner')) {
    showPinConfirmBar(lat, lng);
  } else {
    const fl = document.getElementById('f_lat'),
      fn = document.getElementById('f_lng');
    if (fl) fl.value = lat.toFixed(5);
    if (fn) fn.value = lng.toFixed(5);
    reverseGeocode(lat, lng);
  }
});

async function saveSpot(editId) {
  const name = val('f_name'),
    lat = parseFloat(val('f_lat')),
    lng = parseFloat(val('f_lng'));
  const _ae = document.getElementById('addSpotErr');
  const _errs = [];
  const _ni = document.getElementById('f_name');
  const _li = document.getElementById('f_lat');
  const _lni = document.getElementById('f_lng');
  const _nei = document.getElementById('f_name_err');
  const _pei = document.getElementById('f_pin_err');
  if (!name) {
    _errs.push('spot name');
    if (_ni) {
      _ni.style.borderColor = '#c62828';
      _ni.style.background = '#fff5f5';
    }
    if (_nei) _nei.style.display = 'block';
  } else {
    if (_ni) {
      _ni.style.borderColor = '';
      _ni.style.background = '';
    }
    if (_nei) _nei.style.display = 'none';
  }
  if (isNaN(lat) || isNaN(lng)) {
    _errs.push('pin location');
    if (_li) {
      _li.style.borderColor = '#c62828';
      _li.style.background = '#fff5f5';
    }
    if (_lni) {
      _lni.style.borderColor = '#c62828';
      _lni.style.background = '#fff5f5';
    }
    if (_pei) _pei.style.display = 'block';
  } else {
    if (_li) {
      _li.style.borderColor = '';
      _li.style.background = '';
    }
    if (_lni) {
      _lni.style.borderColor = '';
      _lni.style.background = '';
    }
    if (_pei) _pei.style.display = 'none';
  }
  if (_errs.length) {
    if (_ae) {
      _ae.textContent = '⚠ Required: ' + _errs.join(' and ');
      _ae.style.display = 'block';
    }
    const _fe = !name ? _ni : isNaN(lat) ? _li : null;
    if (_fe) _fe.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  if (_ae) _ae.style.display = 'none';
  window._addDraftCoords = null;
  const vibes = [...document.querySelectorAll('#f_vibes input:checked')].map(
    (i) => i.value,
  );
  const formData = {
    name,
    lat,
    lng,
    district: val('f_district'),
    address: val('f_addr'),
    price_per_glass: (document.getElementById('f_price') || {}).value || '',
    open_h: val('f_open') === '' ? null : +val('f_open'),
    close_h: val('f_close') === '' ? null : +val('f_close'),
    seating: [...document.querySelectorAll('#f_seat_tags input:checked')]
      .map((i) => i.value)
      .join(', '),
    payment: val('f_pay'),
    vibes,
    description: val('f_desc'),
  };
  if (editId) {
    const existing = byId(editId);
    const update = { ...formData };
    if (cur && !existing.verified) {
      update.verified = true;
      update.verified_by = cur.id;
      update.verified_at = new Date().toISOString().slice(0, 10);
    }
    const { error } = await db.from('spots').update(update).eq('id', editId);
    if (error) {
      showToast('⚠ Error saving: ' + error.message);
      return;
    }
    Object.assign(existing, {
      name,
      lat,
      lng,
      district: formData.district,
      address: formData.address,
      pricePerGlass: formData.price_per_glass,
      openH: formData.open_h,
      closeH: formData.close_h,
      seating: formData.seating,
      payment: formData.payment,
      vibes,
      desc: formData.description,
    });
    if (cur && !existing.verified) {
      existing.verified = true;
      existing.verifiedBy = cur.id;
      existing.verifiedAt = update.verified_at;
    }
    if (tmpMarker) {
      map.removeLayer(tmpMarker);
      tmpMarker = null;
    }
    if (cur) {
      await checkAndUpgrade();
      await checkBadges();
    }
    renderList();
    showDetail(editId);
    return;
  }
  const dup = spots.find((s) => dist(s.lat, s.lng, lat, lng) < 0.05);
  if (
    dup &&
    !confirm(`"${dup.name}" is very close by (under 50m). Add anyway?`)
  )
    return;
  const createdBy = cur ? cur.id : 'anon';
  const verified = cur && (cur.role === 'active' || cur.role === 'admin');
  const id = 's' + Date.now();
  const spotData = {
    id,
    ...formData,
    status: 'active',
    photos: [],
    created_by: createdBy,
    created_at: new Date().toISOString(),
    verified,
    verified_by: verified ? cur.id : null,
    verified_at: verified ? new Date().toISOString().slice(0, 10) : null,
    reports: [],
  };
  const { error } = await db.from('spots').insert([spotData]);
  if (error) {
    alert('Error saving: ' + error.message);
    return;
  }
  spots.push({
    id,
    name,
    lat,
    lng,
    district: formData.district,
    address: formData.address,
    pricePerGlass: formData.price_per_glass,
    openH: formData.open_h,
    closeH: formData.close_h,
    seating: formData.seating,
    payment: formData.payment,
    vibes,
    desc: formData.description,
    status: 'active',
    photos: [],
    reviews: [],
    reports: [],
    createdBy,
    verified,
    verifiedBy: verified ? cur.id : null,
    verifiedAt: verified ? spotData.verified_at : null,
    createdAt: Date.now(),
  });
  if (tmpMarker) {
    map.removeLayer(tmpMarker);
    tmpMarker = null;
  }
  if (cur) {
    await checkAndUpgrade();
    await checkBadges();
  }
  renderList();
  showDetail(id);
  showToast('✅ Spot added! Now add your personal ⭐ review below.', 6000);
}

/* ── BADGES / QUESTS: progress display (used within the add/edit spot form) ── */
function badgeProgressList(uid) {
  const mySpots = spots.filter((s) => s.createdBy === uid);
  const myReviews = [],
    reviewedDistricts = new Set();
  spots.forEach((s) =>
    s.reviews.forEach((r) => {
      if (r.userId === uid) {
        myReviews.push(
          Object.assign({}, r, {
            spotId: s.id,
            spotOpenH: s.openH,
            spotCloseH: s.closeH,
          }),
        );
        if (s.district) reviewedDistricts.add(s.district);
      }
    }),
  );
  const myPhotos = spots.flatMap((s) =>
    (s.photos || []).filter((p) => p.uploaded_by === uid),
  );
  const photoSpots = new Set(myPhotos.map((p) => p.spot_id));
  const myVerified = mySpots.filter((s) => s.verified);
  const helpfulVotes = myReviews.reduce(
    (a, r) => a + (r.helpful || []).length,
    0,
  );
  const myName = (profilesCache[uid] || {}).name || '';
  const reportCount = spots.reduce(
    (a, s) => a + (s.reports || []).filter((r) => r.by === myName).length,
    0,
  );
  const totalWords = myReviews.reduce(
    (a, r) =>
      a + (r.txt ? r.txt.trim().split(/\s+/).filter(Boolean).length : 0),
    0,
  );
  const fullRated = myReviews.filter((r) =>
    RCATS.every((c) => r.ratings[c[0]] >= 1),
  );
  const beerFive = new Set(
    myReviews.filter((r) => r.ratings.beer === 5).map((r) => r.spotId),
  );
  const hoankiemSpots = spots.filter(
    (s) =>
      s.district === 'Hoàn Kiếm' && s.reviews.some((r) => r.userId === uid),
  ).length;
  const tayhoSpots = spots.filter(
    (s) => s.district === 'Tây Hồ' && s.reviews.some((r) => r.userId === uid),
  ).length;
  const nightOwlSpots = new Set(
    myReviews
      .filter((r) => {
        const h = hanoiHour(r.createdAt);
        return h >= 22 || h < 3;
      })
      .map((r) => r.spotId),
  ).size;
  const streetSideSpots = spots.filter(
    (s) =>
      (s.vibes || []).includes('Street-side') &&
      s.reviews.some((r) => r.userId === uid),
  ).length;
  const pioneerCount = spots.filter((s) => {
    const all = s.reviews
      .slice()
      .sort((a, b) => (a.when || '').localeCompare(b.when || ''));
    return all.length > 0 && all[0].userId === uid;
  }).length;
  const earlyBirdSpots = new Set(
    myReviews
      .filter((r) => {
        const h = hanoiHour(r.createdAt);
        return h >= 9 && h < 12;
      })
      .map((r) => r.spotId),
  ).size;
  const goldenHourSpots = new Set(
    myReviews
      .filter((r) => {
        const h = hanoiHour(r.createdAt);
        return h >= 17 && h < 19;
      })
      .map((r) => r.spotId),
  ).size;
  const isUncleApproved = myPhotos.some((p) => p.thumbs_up);
  const isFullUncle = myPhotos.some((p) => p.full_uncle);
  const reviewsPerSpot = {};
  myReviews.forEach(
    (r) => (reviewsPerSpot[r.spotId] = (reviewsPerSpot[r.spotId] || 0) + 1),
  );
  const sameSpotMax = Object.values(reviewsPerSpot).reduce(
    (m, n) => Math.max(m, n),
    0,
  );
  const foodSpots = new Set(
    myReviews.filter((r) => r.ratings.food >= 1).map((r) => r.spotId),
  ).size;
  const trendsetterMax = mySpots.reduce(
    (m, s) =>
      Math.max(
        m,
        new Set(
          s.reviews
            .map((r) => r.userId)
            .filter((id) => id && id !== 'anon' && id !== uid),
        ).size,
      ),
    0,
  );
  const completeSpots = mySpots.filter(spotIsComplete).length;
  const topPhotoLikes = myPhotos.reduce(
    (m, p) => Math.max(m, (p.likes || []).length),
    0,
  );
  const streakWeeks = new Set(
    myReviews.filter((r) => r.when).map((r) => isoWeekKey(r.when)),
  ).size;
  const earned = badgesFor(uid);
  const pr = (cur, tot) => ({
    progress: Math.min(cur, tot) / tot,
    current: Math.min(cur, tot),
    total: tot,
    isCount: true,
  });
  const bn = (val) => ({
    progress: val ? 1 : 0,
    current: val ? 1 : 0,
    total: 1,
    isCount: false,
  });
  const MAP = {
    first_spot: pr(mySpots.length, 1),
    scout: pr(mySpots.length, 10),
    cartographer: pr(mySpots.length, 25),
    completionist: pr(completeSpots, 5),
    trendsetter: pr(trendsetterMax, 10),
    first_review: pr(myReviews.length, 1),
    regular: pr(myReviews.length, 20),
    critic: pr(myReviews.length, 30),
    century_club: pr(myReviews.length, 100),
    pioneer: pr(pioneerCount, 5),
    wordsmith: pr(totalWords, 1500),
    all_rounder: pr(fullRated.length, 20),
    beer_sommelier: pr(beerFive.size, 10),
    foodie: pr(foodSpots, 20),
    the_usual: pr(sameSpotMax, 5),
    streak: pr(streakWeeks, 5),
    photographer: pr(myPhotos.length, 1),
    gallery_owner: pr(myPhotos.length, 25),
    lensman: pr(photoSpots.size, 20),
    snapshot_star: pr(topPhotoLikes, 15),
    helpful: pr(helpfulVotes, 20),
    community_pillar: pr(helpfulVotes, 50),
    verified_spot: pr(myVerified.length, 1),
    trusted: pr(myVerified.length, 10),
    district_explorer: pr(reviewedDistricts.size, 6),
    city_wide: pr(reviewedDistricts.size, 10),
    all_districts: pr(
      URBAN_DISTRICTS.filter((d) => reviewedDistricts.has(d)).length,
      12,
    ),
    old_quarter: pr(hoankiemSpots, 15),
    tay_ho: pr(tayhoSpots, 10),
    safety_inspector: pr(reportCount, 5),
    early_bird: pr(earlyBirdSpots, 3),
    golden_hour: pr(goldenHourSpots, 3),
    night_owl: pr(nightOwlSpots, 3),
    plastic_stool: pr(streetSideSpots, 12),
    uncle_approved: bn(isUncleApproved),
    full_uncle: bn(isFullUncle),
    legend: pr(earned.filter((b) => b !== 'legend').length, 25),
  };
  return BADGES.map((b) =>
    Object.assign(
      { badge: b, isEarned: earned.includes(b.id) },
      MAP[b.id] || { progress: 0, current: 0, total: 1, isCount: false },
    ),
  );
}

function incompleteQuestsHTML(uid) {
  const all = badgeProgressList(uid);
  const unearned = all.filter((x) => !x.isEarned);
  if (!unearned.length)
    return '<div style="color:var(--green);font-size:13px;padding:8px 0">&#127942; All badges earned!</div>';
  unearned.sort((a, b) => b.progress - a.progress);
  const top5 = unearned.slice(0, 5);
  const rest = unearned.slice(5);
  const inProg = rest.filter((x) => x.progress > 0);
  const notStarted = rest.filter((x) => x.progress === 0);
  const item = (x, bar) => {
    const pct = Math.round(x.progress * 100);
    const barHtml =
      bar && x.isCount && x.total > 1
        ? `<div class="qprog"><div class="qprog-fill" style="width:${pct}%"></div></div><div class="qi-num">${x.current} / ${x.total}</div>`
        : '';
    return `<div class="qitem"><div class="qi-icon">${x.badge.icon}</div><div class="qi-body"><div class="qi-name">${x.badge.name}</div><div class="qi-desc">${x.badge.desc}</div>${barHtml}</div></div>`;
  };
  let html = '';
  if (top5.length) {
    html +=
      '<div class="qsec">&#9889; Closest to earning</div>' +
      top5.map((x) => item(x, true)).join('');
  }
  if (inProg.length) {
    html +=
      '<div class="qsec">&#128260; In progress</div>' +
      inProg.map((x) => item(x, true)).join('');
  }
  if (notStarted.length) {
    html +=
      '<div class="qsec">&#9711; Not started</div>' +
      notStarted.map((x) => item(x, false)).join('');
  }
  return html;
}

function setFlair(badgeId) {
  if (!cur) return;
  if (badgeId === localStorage.getItem('bhFlair_' + cur.id)) {
    localStorage.removeItem('bhFlair_' + cur.id);
  } else {
    localStorage.setItem('bhFlair_' + cur.id, badgeId);
  }
  setUserLabel();
  showProfile(cur.id);
}

/* ============================================================
   PROFILES — user profile view
   ============================================================ */
function showSaved() {
  if (!cur) {
    authModal(false);
    return;
  }
  navPush('saved');
  openSidebar();
  {
    var _tb = document.querySelector('.toolbar');
    if (_tb) _tb.style.display = 'none';
  }
  var bk = cur.bookmarks || [];
  var bkSpots = spots.filter(function (s) {
    return bk.indexOf(s.id) >= 0;
  });
  var html =
    '<div class="panel"><span class="back" onclick="bhBack()">&#8592; All spots</span><div class="sec">&#128278; Saved spots (' +
    bkSpots.length +
    ')</div>';
  if (!bkSpots.length) {
    html +=
      '<div class="txt-muted" style="padding:12px 2px">No saved spots yet. Tap &#128278; Save on any spot to keep it here.</div>';
  } else {
    html += bkSpots
      .map(function (s) {
        var th =
          s.photos && s.photos.length
            ? '<img class="list-thumb" src="' +
              s.photos[0].url +
              '" alt="" loading="lazy">'
            : '<div class="list-thumb-ph">\u{1F37A}</div>';
        var av = spotAvg(s);
        var avHtml = av
          ? '<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 6px;border-radius:20px">' +
            av.toFixed(1) +
            ' \u{1F37A}</span>'
          : '';
        var rv = s.reviews.length ? ' (' + s.reviews.length + ')' : '';
        return (
          '<div class="list-item" onclick="showDetail(\'' +
          s.id +
          '\')">' +
          th +
          '<div class="list-text"><h3>' +
          esc(s.name) +
          (s.verified
            ? ' <span class="chip verified" style="font-size:10px">✓</span>'
            : '') +
          '</h3><div class="meta"><span>' +
          avHtml +
          rv +
          '</span><span>' +
          esc(s.district || '') +
          '</span></div></div></div>'
        );
      })
      .join('');
  }
  html += '</div>';
  document.getElementById('sidebarBody').innerHTML = html;
  document.getElementById('sidebar').scrollTop = 0;
}
async function ensureFollowing() {
  if (!cur) {
    window._following = new Set();
    return window._following;
  }
  if (window._following) return window._following;
  window._following = new Set();
  try {
    const { data } = await db
      .from('follows')
      .select('following_id')
      .eq('follower_id', cur.id);
    (data || []).forEach((r) => window._following.add(r.following_id));
  } catch (e) {}
  return window._following;
}
async function toggleFollow(uid, ctx) {
  if (!cur) {
    authModal(false);
    return;
  }
  if (uid === cur.id) return;
  await ensureFollowing();
  if (window._following.has(uid)) {
    await db
      .from('follows')
      .delete()
      .eq('follower_id', cur.id)
      .eq('following_id', uid);
    window._following.delete(uid);
  } else {
    const { error } = await db
      .from('follows')
      .insert({ follower_id: cur.id, following_id: uid });
    if (error) {
      showToast('Could not follow.');
      return;
    }
    window._following.add(uid);
  }
  if (ctx === 'feed') {
    showWhatsNew();
  } else {
    showProfile(uid);
  }
}
function editBio() {
  if (!cur) return;
  modal(
    '<h2 style="margin:0 0 8px">Edit bio</h2><textarea id="bioInput" maxlength="160" style="width:100%;box-sizing:border-box;min-height:80px;padding:10px;border:1px solid var(--line);border-radius:8px;font-family:inherit;font-size:14px;background:var(--card);color:var(--ink);resize:vertical" placeholder="A short line about you (max 160 characters)">' +
      esc(cur.bio || '') +
      '</textarea><button class="btn-gold" style="width:100%;margin-top:10px" onclick="saveBio()">Save</button>',
  );
}
async function saveBio() {
  const v = ((document.getElementById('bioInput') || {}).value || '')
    .trim()
    .slice(0, 160);
  const { error } = await db
    .from('profiles')
    .update({ bio: v })
    .eq('id', cur.id);
  if (error) return showToast('Could not save bio.');
  cur.bio = v;
  if (profilesCache[cur.id]) profilesCache[cur.id].bio = v;
  closeModal();
  showProfile(cur.id);
  showToast('✅ Bio updated.');
}
function _topCandidates() {
  const ids = new Set();
  spots.forEach((s) => {
    if (s.reviews.some((r) => r.userId === cur.id)) ids.add(s.id);
  });
  (cur.bookmarks || []).forEach((id) => ids.add(id));
  (window._topEdit || []).forEach((id) => ids.add(id));
  return [...ids].map((id) => byId(id)).filter(Boolean);
}
function editTopSpots() {
  if (!cur) return;
  window._topEdit = [...(cur.top_spots || [])]
    .filter((id) => byId(id))
    .slice(0, 5);
  modal(
    '<h2 style="margin:0 0 6px">My top spots</h2><p style="font-size:12px;color:var(--muted);margin:0 0 10px">Pick up to 5 to recommend. Tap to add in order; tap a chosen spot to remove.</p><div id="topEditBody"></div><button class="btn-gold" style="width:100%;margin-top:12px" onclick="saveTopSpots()">Save</button>',
  );
  renderTopEditor();
}
function renderTopEditor() {
  const body = document.getElementById('topEditBody');
  if (!body) return;
  const sel = window._topEdit || [];
  const selHtml = sel.length
    ? sel
        .map((id, i) => {
          const s = byId(id);
          return s
            ? '<div class="list-item" onclick="topRemove(\'' +
                id +
                '\')" style="cursor:pointer"><div style="width:22px;height:22px;border-radius:50%;background:var(--gold);color:#000;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">' +
                (i + 1) +
                '</div><div class="list-text"><h3>' +
                esc(s.name) +
                '</h3><div class="meta"><span>' +
                esc(s.district || '') +
                '</span><span style="color:var(--red)">Remove ✕</span></div></div></div>'
            : '';
        })
        .join('')
    : '<div class="txt-muted" style="padding:4px 0 8px">Nothing chosen yet.</div>';
  const cand = _topCandidates().filter((s) => !sel.includes(s.id));
  const candHtml = cand.length
    ? cand
        .map(
          (s) =>
            '<div class="list-item" onclick="topAdd(\'' +
            s.id +
            '\')" style="cursor:pointer"><div class="list-thumb-ph">🍺</div><div class="list-text"><h3>' +
            esc(s.name) +
            '</h3><div class="meta"><span>' +
            esc(s.district || '') +
            '</span><span style="color:var(--gold-dark)">Add +</span></div></div></div>',
        )
        .join('')
    : '<div class="txt-muted" style="padding:4px 0">No spots you\'ve reviewed or saved yet.</div>';
  body.innerHTML =
    '<div style="font-size:12px;font-weight:700;color:var(--muted);margin:0 0 4px">Chosen (' +
    sel.length +
    '/5)</div>' +
    selHtml +
    '<div style="font-size:12px;font-weight:700;color:var(--muted);margin:12px 0 4px">Your spots</div><div style="max-height:220px;overflow-y:auto">' +
    candHtml +
    '</div>';
}
function topAdd(id) {
  const s = window._topEdit || [];
  if (s.length >= 5) {
    showToast('Max 5 spots.');
    return;
  }
  if (!s.includes(id)) s.push(id);
  window._topEdit = s;
  renderTopEditor();
}
function topRemove(id) {
  window._topEdit = (window._topEdit || []).filter((x) => x !== id);
  renderTopEditor();
}
async function saveTopSpots() {
  const arr = (window._topEdit || []).slice(0, 5);
  const { error } = await db
    .from('profiles')
    .update({ top_spots: arr })
    .eq('id', cur.id);
  if (error) return showToast('Could not save.');
  cur.top_spots = arr;
  if (profilesCache[cur.id]) profilesCache[cur.id].top_spots = arr;
  closeModal();
  showProfile(cur.id);
  showToast('✅ Top spots updated.');
}
async function showProfile(uid) {
  navPush('profile:' + uid);
  if (!cur) {
    openSidebar();
    {
      var _tbg = document.querySelector('.toolbar');
      if (_tbg) _tbg.style.display = 'none';
    }
    document.getElementById('sidebarBody').innerHTML =
      '<div class="panel"><span class="back" onclick="bhBack()">← All spots</span><div style="text-align:center;padding:44px 20px"><div style="font-size:40px;margin-bottom:10px">🔒</div><h2 style="margin:0 0 8px">Members only</h2><p style="color:var(--muted);font-size:14px;margin:0 0 18px">Sign in to view member profiles, contributions and badges.</p><button class="btn-gold" onclick="authModal(false)">Sign in</button></div></div>';
    document.getElementById('sidebar').scrollTop = 0;
    return;
  }
  let u = userById(uid);
  try {
    const { data } = await db
      .from('profiles')
      .select('*')
      .eq('id', uid)
      .single();
    if (data) {
      u = data;
      profilesCache[uid] = u;
    }
  } catch (e) {}
  if (!u) return;
  await ensureFollowing();
  let _followers = 0,
    _flwing = 0;
  try {
    const _fa = await db
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('following_id', uid);
    _followers = _fa.count || 0;
    const _fb = await db
      .from('follows')
      .select('*', { count: 'exact', head: true })
      .eq('follower_id', uid);
    _flwing = _fb.count || 0;
  } catch (e) {}
  const _isF = !!(window._following && window._following.has(uid));
  openSidebar();
  {
    var _tb = document.querySelector('.toolbar');
    if (_tb) _tb.style.display = 'none';
  }
  const added = spots.filter((s) => s.createdBy === uid);
  // Collect this user's reviews with their spot context
  const userReviews = [];
  spots.forEach((s) =>
    s.reviews.forEach((r) => {
      if (r.userId === uid)
        userReviews.push({ ...r, spotId: s.id, spotName: s.name });
    }),
  );
  userReviews.sort((a, b) => (b.when || '').localeCompare(a.when || ''));
  const verified = spots.filter((s) => s.verifiedBy === uid).length;
  const isOwn = cur && cur.id === uid;
  const isNewcomer = u.role === 'newcomer';
  const hasTitle = !!u.title;
  const avClass = hasTitle ? ' class="gold-anim"' : '';
  const avBorder = hasTitle ? '' : 'border:2px solid var(--gold);';
  const profileThumb = u.avatar_url
    ? `<img src="${u.avatar_url}" style="width:54px;height:54px;border-radius:50%;object-fit:cover;${avBorder}flex-shrink:0"${avClass} alt="">`
    : added.length && added[0].photos && added[0].photos.length
      ? `<img src="${added[0].photos[0].url}" style="width:54px;height:54px;border-radius:50%;object-fit:cover;${avBorder}flex-shrink:0"${avClass} alt="">`
      : `<div style="width:54px;height:54px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0"${avClass}>👤</div>`;
  document.getElementById('sidebarBody').innerHTML = `<div class="panel">
    <span class="back" onclick="bhBack()">← All spots</span>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
        ${profileThumb}
        ${isOwn ? '<button class="vote" style="font-size:11px;margin-top:2px" onclick="changeAvatar()">📷 Change</button>' : ''}
      </div>
      <div style="min-width:0">
        <h2 style="margin:0 0 2px">${u.title ? '<span style="color:var(--gold-dark)">' + u.title.split(' ')[0] + '</span> ' : ''}${esc(u.name)} ${rolePill(u.role)}</h2>
        ${u.title ? '<div style="font-size:12px;color:var(--gold-dark);font-weight:700;margin-bottom:2px">' + esc(u.title) + '</div>' : ''}<div style="font-size:12px;color:var(--muted)">Member since ${u.since || '—'}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:2px"><b style="color:var(--ink)">${_followers}</b> followers · <b style="color:var(--ink)">${_flwing}</b> following</div>
        ${isOwn ? '<button class="vote" style="font-size:11px;margin-top:4px" onclick="editUsername()">✎ Edit name</button>' : '<button class="' + (_isF ? 'btn-line' : 'btn-gold') + ' btn-sm" style="margin-top:6px" onclick="toggleFollow(\'' + uid + '\')">' + (_isF ? '✓ Following' : '+ Follow') + '</button>'}
      </div>
    </div>
    ${u.bio || isOwn ? `<div style="margin:0 0 8px;font-size:13px;line-height:1.5">${u.bio ? esc(u.bio) : '<span style="color:var(--muted)">No bio yet.</span>'}${isOwn ? ' <button class="vote" style="font-size:11px" onclick="editBio()">✎</button>' : ''}</div>` : ''}
    <div class="factbox">
      <div class="factrow"><b>Spots added</b><span>${added.length}</span></div>
      <div class="factrow"><b>Reviews written</b><span>${userReviews.length}</span></div>
      <div class="factrow"><b>Spots verified</b><span>${verified}</span></div>
    </div>
    ${isOwn ? districtsWidgetHTML(reviewedDistrictsSet(uid).size, URBAN_DISTRICTS.length, 'districtsWidgetProfile') : ''}
    ${(() => {
      const ts = (u.top_spots || [])
        .map((id) => byId(id))
        .filter(Boolean)
        .slice(0, 5);
      if (!ts.length && !isOwn) return '';
      const head =
        '<div class="sec" style="display:flex;justify-content:space-between;align-items:center"><span>★ Top spots</span>' +
        (isOwn
          ? '<button class="btn-line btn-sm" style="font-size:12px" onclick="editTopSpots()">✎ Edit</button>'
          : '') +
        '</div>';
      if (!ts.length)
        return (
          head +
          '<div class="txt-muted" style="padding:6px 0">Pick up to 5 spots you recommend.</div>'
        );
      return (
        head +
        ts
          .map((s, i) => {
            const av = spotAvg(s);
            const avHtml = av
              ? '<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 6px;border-radius:20px">' +
                av.toFixed(1) +
                ' 🍺</span>'
              : '';
            const th =
              s.photos && s.photos.length
                ? '<img class="list-thumb" src="' +
                  s.photos[0].url +
                  '" alt="" loading="lazy">'
                : '<div class="list-thumb-ph">🍺</div>';
            return (
              '<div class="list-item" onclick="showDetail(\'' +
              s.id +
              '\')"><div style="width:22px;height:22px;border-radius:50%;background:var(--gold);color:#000;font-weight:800;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-right:2px">' +
              (i + 1) +
              '</div>' +
              th +
              '<div class="list-text"><h3>' +
              esc(s.name) +
              '</h3><div class="meta"><span>' +
              avHtml +
              (s.reviews.length ? ' (' + s.reviews.length + ')' : '') +
              '</span><span>' +
              esc(s.district || '') +
              '</span></div></div></div>'
            );
          })
          .join('')
      );
    })()}
    ${(() => {
      const earned = badgesFor(uid);
      const ub = u.badges || [];
      const allEarned = [...new Set([...earned, ...ub])];
      const earnedCount = allEarned.length;
      return `<div class="sec">Badges (${earnedCount}/${BADGES.length})</div><div class="badge-grid">${BADGES.map(
        (b) => {
          const ok = allEarned.includes(b.id);
          return `<div class="badge-item" title="${b.desc}"><span class="badge-icon${ok ? '' : ' locked'}">${b.icon}</span><span class="badge-name${ok ? '' : ' locked'}">${b.name}</span></div>`;
        },
      ).join('')}</div>`;
    })()}
    ${(() => {
      const uCount = badgeProgressList(uid).filter((x) => !x.isEarned).length;
      return (
        '<details style="margin:10px 0"><summary style="cursor:pointer;font-size:13px;font-weight:700;color:var(--gold-dark);padding:8px 12px;background:var(--paper);border:1px solid var(--line);border-radius:8px;list-style:none;display:flex;justify-content:space-between;align-items:center">&#127919; Badge Progress<span style="font-size:11px;color:var(--muted)">' +
        uCount +
        ' remaining</span></summary><div style="background:var(--paper);border:1px solid var(--line);border-top:none;border-radius:0 0 8px 8px;padding:10px 12px">' +
        incompleteQuestsHTML(uid) +
        '</div></details>'
      );
    })()}
    ${(() => {
      if (!isOwn) return '';
      const earned = badgesFor(uid);
      if (!earned.length) return '';
      const curFlair = localStorage.getItem('bhFlair_' + uid) || '';
      const badges = BADGES.filter((b) => earned.includes(b.id));
      const items = badges
        .map(
          (b) =>
            `<div title="${b.name}" onclick="setFlair('${b.id}')" style="cursor:pointer;padding:6px;border-radius:8px;text-align:center;border:2px solid ${curFlair === b.id ? 'var(--gold)' : 'transparent'};background:${curFlair === b.id ? '#fff8e1' : 'transparent'};transition:.15s"><span style="font-size:22px">${b.icon}</span></div>`,
        )
        .join('');
      return (
        '<div class="sec">Display flair <span style="font-size:11px;color:var(--muted);font-weight:400;text-transform:none">— tap a badge to show it next to your name</span></div><div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:4px">' +
        items +
        '</div>' +
        (curFlair
          ? '<div style="font-size:11px;color:var(--muted)">Tap again to remove.</div>'
          : '')
      );
    })()}
    ${(() => {
      const questLabel =
        u.role === 'newcomer'
          ? '&#128506; Quest Progress'
          : '&#128506; Quest Progress';
      return (
        '<details style="margin:10px 0"><summary style="cursor:pointer;font-size:13px;font-weight:700;color:var(--gold-dark);padding:8px 12px;background:var(--paper);border:1px solid var(--line);border-radius:8px;list-style:none;display:flex;justify-content:space-between;align-items:center">' +
        questLabel +
        '<span style="font-size:11px;color:var(--muted)">' +
        (u.role === 'newcomer' ? 'tap to view' : 'completed &#10003;') +
        '</span></summary>' +
        questProgressHTML(uid, u.role) +
        '</details>'
      );
    })()}
    <details><summary class="sec" style="cursor:pointer;list-style:none">Spots added (${added.length}) &#9662;</summary>
    ${
      added.length
        ? added
            .map((s) => {
              const thumb =
                s.photos && s.photos.length
                  ? `<img class="list-thumb" src="${s.photos[0].url}" alt="" loading="lazy">`
                  : `<div class="list-thumb-ph">🍺</div>`;
              return `<div class="list-item" onclick="showDetail('${s.id}')">${thumb}
        <div class="list-text"><h3>${esc(s.name)}${s.verified ? ' <span class="chip verified" style="font-size:10px">✓</span>' : ''}</h3>
        <div class="meta"><span>${(() => {
          const a = spotAvg(s);
          return a
            ? `<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 6px;border-radius:20px">${a.toFixed(1)} 🍺</span>`
            : '';
        })()}&nbsp;${s.reviews.length ? '(' + s.reviews.length + ')' : ''}</span><span>${esc(s.district || '')}</span></div></div></div>`;
            })
            .join('')
        : '<div class="txt-muted" style="padding:6px 0">None yet.</div>'
    }
    </details>
    <details><summary class="sec" style="cursor:pointer;list-style:none">Reviews written (${userReviews.length}) &#9662;</summary>
    ${
      userReviews.length
        ? userReviews
            .map(
              (r) => `
      <div class="review" style="cursor:pointer" onclick="showDetail('${r.spotId}')">
        <div class="who"><a style="color:var(--gold-dark);font-weight:700">${esc(r.spotName)}</a>
          <span style="font-size:11px;color:var(--muted)">${r.when || ''}</span></div>
        <div style="margin:3px 0">${(() => {
          const a = revAvg(r);
          return a
            ? `<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 7px;border-radius:20px">${a.toFixed(1)} 🍺</span>`
            : '';
        })()}</div>
        ${r.txt ? `<div class="txt">${esc(r.txt.length > 120 ? r.txt.slice(0, 120) + '…' : r.txt)}</div>` : ''}
      </div>`,
            )
            .join('')
        : '<div class="txt-muted" style="padding:6px 0">No reviews yet.</div>'
    }
    </details>
    ${(() => {
      if (!isOwn || (cur.bookmarks || []).length === 0) return '';
      const bkSpots = spots.filter((s) => (cur.bookmarks || []).includes(s.id));
      if (!bkSpots.length) return '';
      return (
        '<div class="sec">Saved spots (' +
        bkSpots.length +
        ')</div>' +
        bkSpots
          .map((s) => {
            const th =
              s.photos && s.photos.length
                ? '<img class="list-thumb" src="' +
                  s.photos[0].url +
                  '" alt="" loading="lazy">'
                : '<div class="list-thumb-ph">\u{1F37A}</div>';
            const av = spotAvg(s);
            const avHtml = av
              ? '<span style="background:var(--gold);color:#000;font-size:11px;font-weight:800;padding:1px 6px;border-radius:20px">' +
                av.toFixed(1) +
                ' \u{1F37A}</span>'
              : '';
            const rv = s.reviews.length ? ' (' + s.reviews.length + ')' : '';
            const dt = esc(s.district || '');
            return (
              '<div class="list-item" onclick="showDetail(\'' +
              s.id +
              "')\"><div style='position:relative;flex-shrink:0'>" +
              (s.verified
                ? "<span style='position:absolute;top:2px;left:2px;font-size:10px;background:var(--gold);border-radius:3px;padding:0 3px;font-weight:700'>✓</span>"
                : '') +
              th +
              '</div><div class="list-text"><h3>' +
              esc(s.name) +
              '</h3><div class="meta"><span>' +
              avHtml +
              rv +
              '</span><span>' +
              dt +
              '</span></div></div></div>'
            );
          })
          .join('')
      );
    })()}
  </div>`;
  document.getElementById('sidebar').scrollTop = 0;
  if (isOwn) {
    districtsExploredCount(uid).then((n) => {
      const el = document.getElementById('districtsWidgetProfile');
      if (el) el.innerHTML = districtsBarInnerHTML(n, URBAN_DISTRICTS.length);
    });
  }
}

async function editUsername() {
  if (!cur) return;
  const name = (prompt('New display name:', cur.name) || '').trim();
  if (!name || name === cur.name) return;
  if (name.length > 40) return showToast('Name too long (max 40 characters).');
  const _ni = await nameIssue(name, cur.id);
  if (_ni) return showToast(_ni);
  const { error } = await db.from('profiles').update({ name }).eq('id', cur.id);
  if (error) return showToast('Could not update name: ' + error.message);
  await db.from('reviews').update({ who: name }).eq('user_id', cur.id);
  cur.name = name;
  if (profilesCache[cur.id]) profilesCache[cur.id].name = name;
  spots.forEach((s) =>
    s.reviews.forEach((r) => {
      if (r.userId === cur.id) r.who = name;
    }),
  );
  setUserLabel();
  showProfile(cur.id);
  showToast('✅ Name updated.');
}
async function changeAvatar() {
  if (!cur) return;
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/'))
      return showToast('Please choose an image file.');
    if (file.size > 25 * 1024 * 1024)
      return showToast('That image is very large — please pick a smaller one.');
    showToast('⏳ Optimising photo…', 6000);
    let up;
    try {
      up = await compressImage(file, 400, 0.82, 200);
    } catch (err) {
      return showToast('Could not process that image — please try another.');
    }
    const oldPath =
      cur.avatar_url && cur.avatar_url.includes('/spot-photos/avatars/')
        ? cur.avatar_url.split('/spot-photos/')[1].split('?')[0]
        : null;
    const fpath = 'avatars/' + cur.id + '_' + Date.now() + '.jpg';
    const { error: upErr } = await db.storage
      .from('spot-photos')
      .upload(fpath, up, { contentType: 'image/jpeg', upsert: false });
    if (upErr) return showToast('Upload failed: ' + upErr.message);
    const {
      data: { publicUrl },
    } = db.storage.from('spot-photos').getPublicUrl(fpath);
    const { error: dbErr } = await db
      .from('profiles')
      .update({ avatar_url: publicUrl })
      .eq('id', cur.id);
    if (dbErr) return showToast('Save failed: ' + dbErr.message);
    cur.avatar_url = publicUrl;
    profilesCache[cur.id] = cur;
    setUserLabel();
    showProfile(cur.id);
    showToast('✅ Profile photo updated!');
    if (oldPath) {
      try {
        await db.storage.from('spot-photos').remove([oldPath]);
      } catch (e) {}
    }
  };
  input.click();
}

/* ============================================================
   AUTH — sign up, login, logout
   ============================================================ */
function pwField(id, placeholder, mb = '10px') {
  return `<div style="position:relative;margin-bottom:${mb}">
    <input id="${id}" type="password" placeholder="${placeholder}" style="width:100%;padding:8px 36px 8px 8px;border:1px solid var(--line);border-radius:7px">
    <span onclick="togglePw('${id}')" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;font-size:16px;user-select:none" id="${id}_eye">👁</span>
  </div>`;
}
function togglePw(id) {
  const el = document.getElementById(id);
  el.type = el.type === 'password' ? 'text' : 'password';
}
function authModal(signup) {
  modal(`<h2>${signup ? 'Create a free account 🍺' : 'Welcome back 🍺'}</h2>
   <p>${signup ? 'Free to join. Rate spots, write reviews, and track your contributions.' : 'Sign in to your account.'}</p>
   <div>
     <input id="a_name" placeholder="Display name" style="width:100%;padding:8px;border:1px solid var(--line);border-radius:7px;margin-bottom:6px;display:${signup ? 'block' : 'none'}">
     <input id="a_email" placeholder="Email" style="width:100%;padding:8px;border:1px solid var(--line);border-radius:7px;margin-bottom:6px">
     ${pwField('a_pw', 'Password', '6px')}
     ${signup ? `${pwField('a_pw2', 'Confirm password', '6px')}` : ''}
     <div id="cfTurnstile" style="margin:8px 0;display:flex;justify-content:center"></div>
     <button class="btn-gold" style="width:100%;margin-bottom:8px" onclick="${signup ? 'doSignup()' : 'doLogin()'}">
       ${signup ? 'Create account' : 'Sign in'}
     </button>
     <p style="text-align:center;margin:0;font-size:13px">${signup ? 'Have an account? <a style="color:var(--gold-dark);cursor:pointer" onclick="authModal(false)">Sign in</a>' : 'New here? <a style="color:var(--gold-dark);cursor:pointer" onclick="authModal(true)">Create a free account</a>'}</p>
     ${!signup ? '<p style="text-align:center;margin:6px 0 0;font-size:13px"><a style="color:var(--gold-dark);cursor:pointer" onclick="forgotPasswordModal()">Forgot password?</a></p>' : ''}
     <p style="text-align:center;margin:9px 0 0;font-size:11px;color:var(--muted)">By continuing you agree to our <a style="color:var(--muted);cursor:pointer;text-decoration:underline" onclick="showTerms()">Terms</a> and <a style="color:var(--muted);cursor:pointer;text-decoration:underline" onclick="showPrivacy()">Privacy Policy</a>.</p>
   </div>`);
  renderCaptcha();
}

const TURNSTILE_SITEKEY = '0x4AAAAAADyihgbkjaSQ4Co_';
function renderCaptcha() {
  const el = document.getElementById('cfTurnstile');
  if (!el) return;
  if (window.turnstile && !el.dataset.rendered) {
    try {
      window.turnstile.render(el, { sitekey: TURNSTILE_SITEKEY });
      el.dataset.rendered = '1';
    } catch (e) {}
  } else if (!window.turnstile) {
    setTimeout(renderCaptcha, 300);
  }
}
function getCaptchaToken() {
  try {
    return window.turnstile ? window.turnstile.getResponse() : '';
  } catch (e) {
    return '';
  }
}

const RESERVED_NAMES = [
  'admin',
  'administrator',
  'moderator',
  'mod',
  'official',
  'support',
  'staff',
  'system',
  'root',
  'anonymous',
  'anon',
  'biahoi',
  'bachoi',
  'bac hoi',
  'bác hơi',
  'null',
  'undefined',
];
async function nameIssue(name, excludeId) {
  const low = (name || '').trim().toLowerCase();
  if (!low) return 'Please enter a display name.';
  if (RESERVED_NAMES.includes(low))
    return 'That name is reserved — please choose another.';
  try {
    const { data, error } = await db
      .from('profiles')
      .select('id,name')
      .ilike('name', name.trim())
      .limit(50);
    if (
      !error &&
      data &&
      data.some(
        (r) =>
          r.id !== excludeId && (r.name || '').trim().toLowerCase() === low,
      )
    )
      return 'That display name is already taken — please choose another.';
  } catch (e) {}
  return '';
}
async function doSignup() {
  const name = val('a_name'),
    email = val('a_email').toLowerCase(),
    pw = val('a_pw'),
    pw2 = val('a_pw2');
  const code = (document.getElementById('a_code') || {}).value || '';
  if (!name || !email || !pw)
    return alert('Please fill in name, email, and password.');
  if (pw !== pw2) return alert("Passwords don't match.");
  if (pw.length < 6) return alert('Password must be at least 6 characters.');
  const _ni = await nameIssue(name, null);
  if (_ni) return alert(_ni);
  let role = 'newcomer';
  const c = code.trim().toUpperCase();
  if (c === ACTIVE_CODE) role = 'active';
  else if (c && c !== '')
    return alert('Invalid invite code. Leave blank to join as Newcomer.');
  const { error } = await db.auth.signUp({
    email,
    password: pw,
    options: { data: { name, role }, captchaToken: getCaptchaToken() },
  });
  if (error) return alert(error.message);
  closeModal();
  modal(`<h2>Welcome, ${esc(name)}! 🍺</h2>
    <p>Check your email for a confirmation link, then sign in to start contributing.</p>
    <button class="btn-gold" style="width:100%" onclick="closeModal()">Got it 🗺</button>`);
}

async function doLogin() {
  const email = val('a_email').toLowerCase(),
    pw = val('a_pw');
  if (!email || !pw) return alert('Enter your email and password.');
  const { error } = await db.auth.signInWithPassword({
    email,
    password: pw,
    options: { captchaToken: getCaptchaToken() },
  });
  if (error) return alert('Wrong email or password.');
  closeModal();
}

function forgotPasswordModal() {
  modal(
    '<h2 style="margin:0 0 6px">Reset your password 🔑</h2>' +
      '<p style="font-size:13px;color:var(--muted);margin:0 0 12px">Enter your email and we\'ll send you a link to set a new password.</p>' +
      '<input id="fp_email" placeholder="Email" style="width:100%;box-sizing:border-box;padding:9px;border:1px solid var(--line);border-radius:7px;margin-bottom:8px;font-family:inherit;background:var(--card);color:var(--ink)">' +
      '<div id="cfTurnstile" style="margin:8px 0;display:flex;justify-content:center"></div>' +
      '<button class="btn-gold" style="width:100%" onclick="sendReset()">Send reset link</button>' +
      '<button class="btn-line" style="width:100%;margin-top:8px" onclick="authModal(false)">Back to sign in</button>',
  );
  renderCaptcha();
}
async function sendReset() {
  const email = (val('fp_email') || '').toLowerCase().trim();
  if (!email) return alert('Please enter your email.');
  const { error } = await db.auth.resetPasswordForEmail(email, {
    redirectTo: location.origin + location.pathname,
    captchaToken: getCaptchaToken(),
  });
  if (error) return alert(error.message);
  closeModal();
  modal(
    '<h2 style="margin:0 0 8px">Check your email 📧</h2>' +
      '<p style="font-size:14px">If an account exists for <b>' +
      esc(email) +
      '</b>, we\'ve sent a link to reset your password. Open it on this device to set a new one.</p>' +
      '<button class="btn-gold" style="width:100%;margin-top:10px" onclick="closeModal()">Got it</button>',
  );
}
function setNewPasswordModal() {
  modal(
    '<h2 style="margin:0 0 6px">Set a new password 🔒</h2>' +
      '<p style="font-size:13px;color:var(--muted);margin:0 0 12px">Enter a new password for your account.</p>' +
      pwField('np_pw', 'New password', '8px') +
      pwField('np_pw2', 'Confirm new password', '8px') +
      '<button class="btn-gold" style="width:100%" onclick="savePassword()">Update password</button>',
  );
}
async function savePassword() {
  const pw = val('np_pw'),
    pw2 = val('np_pw2');
  if (!pw || pw.length < 8)
    return alert('Password must be at least 8 characters.');
  if (pw !== pw2) return alert("Passwords don't match.");
  const { error } = await db.auth.updateUser({ password: pw });
  if (error) return alert(error.message);
  closeModal();
  showToast("✅ Password updated — you're signed in.");
}

async function logout() {
  await db.auth.signOut();
  cur = null;
  window._following = null;
  setUserLabel();
  renderList();
}

/* ── User account menu (header dropdown) ── */
function setUserLabel() {
  checkBackupReminder();
  const el = document.getElementById('userLabel');
  if (!cur) {
    el.innerHTML =
      '<button class="btn-ghost btn-sm" title="Games" onclick="openGames()">🎲</button> <button class="btn-ghost btn-sm" onclick="authModal(false)">Sign in</button>';
    return;
  }
  const av = cur.avatar_url
    ? '<img class="av-sm" src="' + cur.avatar_url + '" alt="">'
    : '👤';
  const bkCount = (cur.bookmarks || []).length;
  let html = '<div class="user-dropdown" id="userDropWrap">';
  const _flair = localStorage.getItem('bhFlair_' + cur.id);
  const _flairIcon = _flair
    ? (BADGES.find((b) => b.id === _flair) || {}).icon || ''
    : '';
  html +=
    '<button class="user-btn" onclick="toggleUserMenu()">' +
    '<span style="position:relative;display:inline-block;vertical-align:middle">' +
    av +
    '<span id="avNotifDot" style="display:none;position:absolute;top:-2px;right:-2px;width:9px;height:9px;background:var(--red);border-radius:50%;border:2px solid var(--nav-bg);z-index:2"></span></span>' +
    '<span style="font-size:8px;color:var(--gold);opacity:.8;margin-left:2px">&#9660;</span><span class="user-meta"> <span>' +
    esc(cur.name) +
    '</span>' +
    (_flairIcon
      ? ' <span title="' + (_flair || '') + '">' + _flairIcon + '</span>'
      : ' ' + rolePill(cur.role)) +
    '</span></button>';
  html += '<div class="user-menu" id="userMenu" style="display:none">';
  html +=
    '<div style="padding:9px 12px;border-bottom:1px solid var(--line);font-weight:700;font-size:13px;display:flex;align-items:center;gap:7px">' +
    av +
    '<span>' +
    esc(cur.name) +
    '</span>' +
    rolePill(cur.role) +
    '</div>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();openInbox()" style="display:flex;align-items:center;justify-content:space-between">🔔 Notifications<span id="menuNotifCount" style="display:none;background:var(--red);color:#fff;font-size:10px;font-weight:800;min-width:16px;height:16px;border-radius:8px;padding:0 4px;align-items:center;justify-content:center;line-height:1"></span></button>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();showProfile(cur.id)">&#128100; My profile</button>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();showWrapped()">&#127873; Bia Hơi Wrapped</button>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();showLeaderboard()">&#127942; Leaderboard</button>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();showQuests()">&#127919; Badges &amp; Quests</button>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();openGames()">&#127922; Games</button>';
  html +=
    '<button class="user-menu-item" onclick="closeUserMenu();openShare()">&#128242; Share Bác Hơi</button>';
  html +=
    '<button class="user-menu-item" onclick="toggleDark()" style="display:flex;align-items:center;justify-content:space-between">&#127769; Dark mode<span class="dm-switch' +
    (document.documentElement.getAttribute('data-theme') === 'dark'
      ? ' on'
      : '') +
    '" id="dmSwitch" aria-hidden="true"></span></button>';
  if (cur.role === 'admin')
    html +=
      '<button class="user-menu-item" onclick="closeUserMenu();openAdmin()">&#9881; Admin panel</button>';
  html +=
    '<button class="user-menu-item danger" onclick="closeUserMenu();logout()">Sign out</button>';
  html +=
    '<div style="padding:5px 12px 3px;display:flex;gap:10px;justify-content:center;font-size:11px"><a onclick="closeUserMenu();showPrivacy()" style="color:var(--muted);cursor:pointer;text-decoration:underline">Privacy</a><a onclick="closeUserMenu();showTerms()" style="color:var(--muted);cursor:pointer;text-decoration:underline">Terms</a></div>';
  html +=
    '<div style="padding:2px 12px 8px;font-size:10px;color:var(--muted);text-align:center">Bác Hơi v' +
    APP_VERSION +
    '</div>';
  html += '</div></div>';
  el.innerHTML = html;
  updateBell();
}
function toggleUserMenu() {
  const m = document.getElementById('userMenu');
  if (!m) return;
  const open = m.style.display !== 'none';
  m.style.display = open ? 'none' : 'block';
  if (!open) {
    setTimeout(() => {
      function outsideClick(e) {
        if (!document.getElementById('userDropWrap')?.contains(e.target)) {
          m.style.display = 'none';
          document.removeEventListener('click', outsideClick);
        }
      }
      document.addEventListener('click', outsideClick);
    }, 10);
  }
}
function closeUserMenu() {
  const m = document.getElementById('userMenu');
  if (m) m.style.display = 'none';
}
/* ── ARCHIVE: logo menu, lost spots, ghost pins ── */
function toggleLogoMenu() {
  const m = document.getElementById('logoMenu');
  if (!m) return;
  const open = m.style.display !== 'none';
  m.style.display = open ? 'none' : 'block';
  if (!open) {
    updateArchiveStat();
    const g = document.getElementById('ghostSwitch');
    if (g) g.classList.toggle('on', !!window._showGhosts);
    setTimeout(() => {
      function outsideClick(e) {
        if (!document.getElementById('logoWrap')?.contains(e.target)) {
          m.style.display = 'none';
          document.removeEventListener('click', outsideClick);
        }
      }
      document.addEventListener('click', outsideClick);
    }, 10);
  }
}
function closeLogoMenu() {
  const m = document.getElementById('logoMenu');
  if (m) m.style.display = 'none';
}
function updateArchiveStat() {
  const el = document.getElementById('archiveStat');
  if (!el) return;
  const lost = spots.filter((s) => s.status === 'perm_closed').length;
  el.textContent = spots.length + ' documented · ' + lost + ' lost';
}
function toggleGhosts() {
  window._showGhosts = !window._showGhosts;
  try {
    localStorage.setItem('bhGhosts', window._showGhosts ? '1' : '');
  } catch (e) {}
  const g = document.getElementById('ghostSwitch');
  if (g) g.classList.toggle('on', !!window._showGhosts);
  drawMarkers();
}
function ghostIcon() {
  return L.divIcon({
    className: '',
    html: '<div class="bia-pin ghost">🍺</div>',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
}
function showLostSpots() {
  navPush('lost');
  openSidebar();
  {
    var _tb = document.querySelector('.toolbar');
    if (_tb) _tb.style.display = 'none';
  }
  const lost = spots
    .filter((s) => s.status === 'perm_closed')
    .sort((a, b) => (b.closedAt || '').localeCompare(a.closedAt || ''));
  const body = document.getElementById('sidebarBody');
  let html =
    '<div class="panel"><span class="back" onclick="bhBack()">← All spots</span>' +
    '<h2 style="margin:0 0 4px">🕯️ Lost spots</h2>' +
    '<p style="font-size:13px;color:var(--muted);margin:0 0 14px">Spots that have closed — kept here so they\'re never forgotten.</p>';
  if (!lost.length) {
    html +=
      '<div class="txt-muted" style="padding:10px 0">No lost spots recorded yet. Long may they pour. 🍺</div>';
  } else {
    html += lost
      .map((s) => {
        const th =
          s.cover_photo_url ||
          (s.photos && s.photos.length ? s.photos[0].url : '');
        const thumb = th
          ? '<img class="list-thumb" src="' +
            th +
            '" alt="" style="filter:grayscale(1)">'
          : '<div class="list-thumb-ph">🕯️</div>';
        const best = [...(s.reviews || [])]
          .filter((r) => r.txt)
          .sort((a, b) => revAvg(b) - revAvg(a))[0];
        const epitaph = s.closedNote
          ? esc(s.closedNote)
          : best && best.txt
            ? '“' +
              esc(best.txt.slice(0, 80)) +
              (best.txt.length > 80 ? '…' : '') +
              '”'
            : '';
        return (
          '<div class="list-item" onclick="showDetail(\'' +
          s.id +
          '\')">' +
          thumb +
          '<div class="list-text"><h3>' +
          esc(s.name) +
          '</h3>' +
          '<div style="font-size:11px;color:var(--muted)">Closed' +
          (s.closedAt ? ' · ' + s.closedAt : '') +
          (s.district ? ' · ' + esc(s.district) : '') +
          '</div>' +
          (epitaph
            ? '<div style="font-size:12px;color:var(--muted);margin-top:2px;font-style:italic">' +
              epitaph +
              '</div>'
            : '') +
          '</div></div>'
        );
      })
      .join('');
  }
  html += '</div>';
  body.innerHTML = html;
  document.getElementById('sidebar').scrollTop = 0;
}
/* ── Games (drinking-game modal) ── */
const GAMES = [
  {
    t: '🍺 Một Hai Ba Dô',
    html: `
    <div style="background:#e6f5e6;color:#1b5e20;font-weight:700;padding:5px 10px;border-radius:6px;margin-bottom:6px">Drink HALF your beer if you see:</div>
    <ul style="margin:0 0 12px;padding-left:18px;font-size:13px;line-height:1.5"><li>4 on a bike</li><li>Tây driving without a helmet</li><li>An uncle cycling against the flow of traffic</li><li>Couple wearing matching helmets</li><li>Shipper on a big bike</li></ul>
    <div style="background:#fbe6e6;color:#8b1a1a;font-weight:700;padding:5px 10px;border-radius:6px;margin-bottom:6px">Drink the REST of your beer if you see:</div>
    <ul style="margin:0 0 12px;padding-left:18px;font-size:13px;line-height:1.5"><li>5 or more on a bike</li><li>Couple wearing matching outfits</li><li>Northern ethnic-minority builder with a colourful headscarf</li><li>Any 4-wheel+ vehicle going against the flow of traffic</li></ul>
    <div style="background:#e3eefc;color:#0d3b8b;font-weight:700;padding:5px 10px;border-radius:6px;margin-bottom:6px">Drink a FULL beer if you see:</div>
    <ul style="margin:0 0 12px;padding-left:18px;font-size:13px;line-height:1.5"><li>Animal carcass on a bike</li><li>Lost-looking foreigners</li><li>Ninja lead (fully-covered motorbike rider)</li></ul>
    <div style="background:var(--gold);color:var(--ink);font-weight:800;padding:6px 10px;border-radius:6px">★ BONUS</div>
    <p style="margin:6px 0 0;font-size:13px;line-height:1.5">Nominate someone to wave at a passer-by. If they wave back, the nominee drinks. If they don't, you drink.</p>`,
  },
  {
    t: '🐴 Horse Racing',
    html: `
    <p style="color:var(--muted);margin:0 0 10px;font-size:12px">🃏 Needs a deck of cards — most hơis have one, or a shop nearby sells them cheap.</p>
    <ol style="margin:0;padding-left:18px;font-size:13px;line-height:1.55">
      <li><b>Set up:</b> take the 4 Aces out and lay them in a row — the horses (♠ ♥ ♦ ♣).</li>
      <li><b>The track:</b> deal 6 cards face-down going away from the start — these are the "fences."</li>
      <li><b>Bet:</b> everyone bets drinks on a suit to win.</li>
      <li><b>Race:</b> flip the deck one card at a time — that suit's horse steps forward.</li>
      <li><b>Fences:</b> once all 4 horses have passed a fence, flip it — that suit steps back one.</li>
      <li><b>Finish:</b> first Ace past the last fence wins. Winner's backers hand out drinks; losers' backers drink. 🍺</li>
    </ol>`,
  },
  {
    t: '👀 Look Up',
    html: `
    <p style="color:var(--muted);margin:0 0 10px;font-size:12px">🙌 No props. Pure chaos — best with 4+ people.</p>
    <ol style="margin:0;padding-left:18px;font-size:13px;line-height:1.55">
      <li>Everyone puts their head <b>down</b>.</li>
      <li>Someone counts: <b>"Một… Hai… Ba!"</b></li>
      <li>On "Ba!", everyone <b>snaps their head up</b> and stares at <b>one</b> other person.</li>
      <li>Two people looking <b>right at each other</b> — both drink! 🍺</li>
      <li>Heads down, go again. Gets faster and funnier.</li>
    </ol>`,
  },
  {
    t: '🔢 Sevens',
    html: `
    <p style="color:var(--muted);margin:0 0 10px;font-size:12px">🔢 No props. A counting game that scrambles your brain.</p>
    <ol style="margin:0;padding-left:18px;font-size:13px;line-height:1.55">
      <li>Go around the circle counting up: 1, 2, 3…</li>
      <li>Any <b>multiple of 7</b> (7, 14, 21…) <b>or number with a 7 in it</b> (7, 17, 27…) → say <b>"Dô!"</b> instead of the number.</li>
      <li>Say the number by mistake, hesitate, or "Dô!" at the wrong time → <b>you drink</b>, restart from 1.</li>
      <li>Speed up each round. Total chaos by 70. 🍺</li>
    </ol>`,
  },
];
function openGames() {
  navPush('games');
  gameTab(0);
}
function gameTab(i) {
  const tabs = GAMES.map(
    (g, idx) =>
      `<button onclick="gameTab(${idx})" style="padding:6px 10px;border-radius:8px;font-size:12px;font-weight:700;border:1px solid var(--line);cursor:pointer;background:${idx === i ? 'var(--gold)' : '#fff'};color:var(--ink)">${g.t}</button>`,
  ).join('');
  modal(`<div style="text-align:left">
    <h2 style="margin:0 0 10px;font-size:18px">🎲 Games at the Hơi</h2>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">${tabs}</div>
    <div style="max-height:62vh;overflow-y:auto">${GAMES[i].html}</div>
  </div>
  <button class="btn-line" style="width:100%;margin-top:12px" onclick="closeModal()">Close</button>`);
}
/* ── Share Bác Hơi (app-level share/QR, not a single spot) ── */
function openShare() {
  const nativeBtn = navigator.share
    ? `<button class="btn-gold" style="width:100%;margin-top:12px" onclick="nativeShare()">Share via…</button>`
    : '';
  modal(`<h2 style="margin:0 0 6px">📲 Share Bác Hơi</h2>
    <p style="font-size:13px;color:var(--muted);margin:0 0 12px">Show this QR for someone to scan, or copy the link.</p>
    <div id="qrBox" style="display:flex;justify-content:center;min-height:170px;align-items:center"></div>
    ${nativeBtn}
    <button class="btn-line" style="width:100%;margin-top:6px" onclick="copyShareLink()">Copy link</button>
    <button class="btn-line" style="width:100%;margin-top:6px" onclick="closeModal()">Close</button>`);
  renderShareQR();
}
function nativeShare() {
  const url = location.origin + location.pathname;
  if (navigator.share)
    navigator
      .share({
        title: 'Bác Hơi',
        text: 'Find the best bia hơi in Vietnam 🍺',
        url,
      })
      .catch(function () {});
}
function renderShareQR() {
  const box = document.getElementById('qrBox');
  if (!box) return;
  const url = location.origin + location.pathname;
  const go = () => {
    box.innerHTML = '';
    try {
      new QRCode(box, {
        text: url,
        width: 170,
        height: 170,
        colorDark: '#1f1a12',
        colorLight: '#ffffff',
      });
    } catch (e) {
      box.innerHTML =
        '<a href="' +
        url +
        '" style="word-break:break-all">' +
        esc(url) +
        '</a>';
    }
  };
  if (window.QRCode) {
    go();
    return;
  }
  box.innerHTML =
    '<span style="color:var(--muted);font-size:12px">Loading QR…</span>';
  const sc = document.createElement('script');
  sc.src =
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
  sc.onload = go;
  sc.onerror = () => {
    box.innerHTML =
      '<a href="' + url + '" style="word-break:break-all">' + esc(url) + '</a>';
  };
  document.head.appendChild(sc);
}
function copyShareLink() {
  const url = location.origin + location.pathname;
  if (navigator.clipboard && navigator.clipboard.writeText)
    navigator.clipboard.writeText(url).then(
      function () {
        showToast('Link copied! 🍺');
      },
      function () {
        showToast(url);
      },
    );
  else showToast(url);
}
/* ── Floating-island nav (mobile bottom bar) ── */
function fiNav(tab) {
  document
    .querySelectorAll('.fi-btn')
    .forEach((b) => b.classList.remove('fi-active'));
  const btn = document.getElementById('fi-' + tab);
  if (btn) btn.classList.add('fi-active');
  if (tab === 'new') {
    navPush('new');
    openSidebar();
    showWhatsNew();
  } else if (tab === 'explore') {
    navPush('list');
    openSidebar();
    renderList();
  } else if (tab === 'near') {
    closeSidebar();
    nearMe();
  } else if (tab === 'saved') {
    showSaved();
  }
}
/* ── SOCIAL: Latest feed, follow suggestions ── */
async function showWhatsNew() {
  navPush('new');
  openSidebar();
  const body = document.getElementById('sidebarBody');
  if (cur) await ensureFollowing();
  const tab = window._feedTab || 'everyone';
  const foll = window._following || new Set();
  const ts = (x) => (x ? new Date(x).getTime() || 0 : 0);
  const evts = [];
  spots.forEach((s) => {
    if (s.createdAt)
      evts.push({
        t: ts(s.createdAt),
        icon: '📍',
        id: s.id,
        author: s.createdBy,
        title: 'New spot: ' + esc(s.name),
        meta: esc(s.district || ''),
      });
    (s.reviews || []).forEach((r) => {
      const d = r.createdAt || r.when;
      if (d)
        evts.push({
          t: ts(d),
          icon: '⭐',
          id: s.id,
          author: r.userId,
          title: esc(s.name),
          meta: r.txt ? esc(r.txt.slice(0, 60)) : 'New review',
        });
    });
    (s.photos || []).forEach((p) => {
      if (p && p.created_at)
        evts.push({
          t: ts(p.created_at),
          icon: '📷',
          id: s.id,
          author: p.uploaded_by,
          title: 'New photo: ' + esc(s.name),
          meta: '',
          thumb: p.url,
        });
    });
  });
  evts.sort((a, b) => b.t - a.t);
  const seg =
    '<div style="display:flex;gap:6px;padding:8px 14px 6px">' +
    '<button onclick="setFeedTab(\'everyone\')" style="flex:1;padding:6px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid var(--line);background:' +
    (tab === 'everyone' ? 'var(--gold)' : 'transparent') +
    ';color:var(--ink)">Everyone</button>' +
    '<button onclick="setFeedTab(\'following\')" style="flex:1;padding:6px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid var(--line);background:' +
    (tab === 'following' ? 'var(--gold)' : 'transparent') +
    ';color:var(--ink)">Following</button>' +
    '</div>';
  const head =
    '<div style="padding:12px 14px 2px;text-align:center">' +
    '<span style="font-size:16px;font-weight:800;color:var(--ink)">✨ What\'s New</span>' +
    '</div>' +
    seg +
    '<div style="border-bottom:2px solid var(--line)"></div>';
  let list = evts;
  if (tab === 'following') {
    if (!cur) {
      body.innerHTML =
        head +
        '<div class="txt-muted" style="padding:22px 14px;text-align:center">Sign in to follow people and see their activity.<br><button class="btn-gold btn-sm" style="margin-top:12px" onclick="authModal(false)">Sign in</button></div>';
      return;
    }
    list = evts.filter((e) => e.author && foll.has(e.author));
    if (!list.length) {
      body.innerHTML = head + followSuggestHTML();
      return;
    }
  }
  const top = list.slice(0, 25);
  if (!top.length) {
    body.innerHTML =
      head +
      '<div class="txt-muted" style="padding:18px 14px">Nothing new yet — be the first to add a spot!</div>';
    return;
  }
  const _miss = [
    ...new Set(
      top
        .map((e) => e.author)
        .filter((a) => a && a !== 'anon' && a !== 'seed' && !profilesCache[a]),
    ),
  ];
  if (_miss.length) {
    try {
      const { data } = await db
        .from('profiles')
        .select('id,name,avatar_url')
        .in('id', _miss);
      (data || []).forEach((p) => {
        profilesCache[p.id] = Object.assign(profilesCache[p.id] || {}, p);
      });
    } catch (e) {}
  }
  body.innerHTML =
    head +
    top
      .map((ev) => {
        const thumb = ev.thumb
          ? '<img class="list-thumb" src="' +
            ev.thumb +
            '" alt="" loading="lazy">'
          : '<div class="list-thumb-ph">' + ev.icon + '</div>';
        const ago = ev.t ? timeAgo(new Date(ev.t).toISOString()) : '';
        const au =
          ev.author && profilesCache[ev.author] && profilesCache[ev.author].name
            ? esc(profilesCache[ev.author].name)
            : ev.author && ev.author !== 'anon' && ev.author !== 'seed'
              ? 'a member'
              : '';
        return (
          '<div class="list-item" onclick="showDetail(\'' +
          ev.id +
          '\')">' +
          thumb +
          '<div class="list-text">' +
          '<h3 style="margin:0 0 2px">' +
          ev.title +
          '</h3>' +
          (au
            ? '<div style="font-size:11px;color:var(--gold-dark);margin-bottom:2px">by ' +
              au +
              '</div>'
            : '') +
          '<div class="meta"><span>' +
          ev.icon +
          (ev.meta ? ' ' + ev.meta : '') +
          '</span><span style="flex-shrink:0">' +
          ago +
          '</span></div>' +
          '</div></div>'
        );
      })
      .join('');
}
function setFeedTab(t) {
  window._feedTab = t;
  showWhatsNew();
}
function followSuggestHTML() {
  const cnt = {};
  spots.forEach((s) => {
    if (s.createdBy && s.createdBy !== 'anon' && s.createdBy !== 'seed')
      cnt[s.createdBy] = (cnt[s.createdBy] || 0) + 2;
    (s.reviews || []).forEach((r) => {
      if (r.userId && r.userId !== 'anon')
        cnt[r.userId] = (cnt[r.userId] || 0) + 1;
    });
  });
  const foll = window._following || new Set();
  const me = cur && cur.id;
  const ranked = Object.keys(cnt)
    .filter((id) => id !== me && !foll.has(id))
    .sort((a, b) => cnt[b] - cnt[a])
    .slice(0, 5);
  if (!ranked.length)
    return '<div class="txt-muted" style="padding:22px 14px;text-align:center">Follow people to see their activity here.</div>';
  return (
    '<div style="padding:14px 14px 4px;font-size:13px;color:var(--muted)">Follow people to fill this feed:</div>' +
    ranked
      .map((id) => {
        const u = profilesCache[id];
        const nm = u ? esc(u.name) : 'Member';
        const av =
          u && u.avatar_url
            ? '<img class="list-thumb" src="' +
              u.avatar_url +
              '" style="border-radius:50%" alt="">'
            : '<div class="list-thumb-ph">👤</div>';
        return (
          '<div class="list-item"><div onclick="showProfile(\'' +
          id +
          '\')" style="display:flex;gap:10px;flex:1;align-items:center;cursor:pointer;min-width:0">' +
          av +
          '<div class="list-text"><h3>' +
          nm +
          '</h3><div class="meta"><span>' +
          cnt[id] +
          ' contributions</span></div></div></div><button class="btn-gold btn-sm" style="font-size:12px;flex-shrink:0" onclick="event.stopPropagation();toggleFollow(\'' +
          id +
          "','feed')\">+ Follow</button></div>"
        );
      })
      .join('')
  );
}

/* ============================================================
   NEAR ME — geolocation and distance filtering
   ============================================================ */
function nearMe() {
  const btn = document.getElementById('nearMeBtn');
  // If already active, clear location
  if (window._meWatcher) {
    navigator.geolocation.clearWatch(window._meWatcher);
    window._meWatcher = null;
    if (window._meMarker) {
      window._meMarker.remove();
      window._meMarker = null;
    }
    window._me = null;
    btn.innerHTML = '📍 Near me';
    btn.classList.remove('btn-gold');
    var _fn = document.getElementById('fi-near');
    if (_fn) _fn.classList.remove('fi-near-on');
    document.getElementById('fRadius').style.display = 'none';
    renderList(false);
    return;
  }
  if (!navigator.geolocation)
    return alert('Location not available on this device.');
  btn.innerHTML = '⏳ Locating…';
  window._meWatcher = navigator.geolocation.watchPosition(
    (p) => {
      const lat = p.coords.latitude,
        lng = p.coords.longitude;
      window._me = [lat, lng];
      if (!window._meMarker) {
        map.setView([lat, lng], 15);
        window._meMarker = L.circleMarker([lat, lng], {
          radius: 10,
          color: '#185fa5',
          fillColor: '#4a9fe8',
          fillOpacity: 0.92,
          weight: 2.5,
        })
          .addTo(map)
          .bindPopup('📍 You are here');
        const sel = document.getElementById('fRadius');
        sel.style.display = '';
        sel.value = '1';
      } else {
        window._meMarker.setLatLng([lat, lng]);
      }
      btn.innerHTML = '📍 Near me ✕';
      btn.classList.add('btn-gold');
      var _fn2 = document.getElementById('fi-near');
      if (_fn2) _fn2.classList.add('fi-near-on');
      var _bd = document.getElementById('sidebarBody'),
        _sbEl = document.getElementById('sidebar');
      if (
        !(_bd && _bd.querySelector('.panel')) &&
        !(_sbEl && _sbEl.classList.contains('peek'))
      )
        renderList(true);
    },
    () => {
      btn.innerHTML = '📍 Near me';
      btn.classList.remove('btn-gold');
      alert('Could not get your location — please allow location access.');
    },
    { enableHighAccuracy: true, maximumAge: 10000 },
  );
}

/* ============================================================
   MODAL / SIDEBAR — UI overlay helpers
   ============================================================ */
function modal(html) {
  closeModal();
  navPush('modal');
  window._modalReturnFocus = document.activeElement;
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  bg.id = 'modal';
  bg.onclick = (e) => {
    if (e.target === bg) closeModal();
  };
  bg.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true" tabindex="-1">' +
    html +
    '</div>';
  document.body.appendChild(bg);
  const _mc = bg.querySelector('.modal');
  if (_mc) _mc.focus();
}
function closeModal() {
  const m = document.getElementById('modal');
  if (m) m.remove();
  if (window._modalReturnFocus && window._modalReturnFocus.focus) {
    try {
      window._modalReturnFocus.focus();
    } catch (e) {}
  }
  window._modalReturnFocus = null;
}
function toggleDark() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
  const _dbtn = document.getElementById('darkBtn');
  if (_dbtn) _dbtn.textContent = dark ? '🌙' : '☀️';
  const _dm = document.getElementById('dmSwitch');
  if (_dm) _dm.classList.toggle('on', !dark);
  localStorage.setItem('theme', dark ? 'light' : 'dark');
  if (dark) {
    map.removeLayer(tileDark);
    tileLight.addTo(map);
  } else {
    map.removeLayer(tileLight);
    tileDark.addTo(map);
  }
}
(function () {
  const t = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('darkBtn');
    if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  });
})();

function hideSplash() {
  var s = document.getElementById('splash');
  if (!s || s._h) return;
  s._h = 1;
  var wait = Math.max(0, 1000 - (Date.now() - (window._splashStart || 0)));
  setTimeout(function () {
    s.classList.add('hide');
    setTimeout(function () {
      if (s.parentNode) s.parentNode.removeChild(s);
    }, 550);
  }, wait);
}
window.hideSplash = hideSplash;
function goHome() {
  closeSidebar();
  try {
    clearFilters();
  } catch (e) {}
  renderList();
  if (typeof map !== 'undefined' && map && map.setView)
    map.setView([21.0278, 105.8342], 13);
}
function toggleSidebar() {
  const _sb = document.getElementById('sidebar');
  _sb.classList.toggle('open');
  const _so = document.getElementById('sheetOverlay');
  if (_so) {
    if (_sb.classList.contains('open')) _so.classList.add('on');
    else _so.classList.remove('on');
  }
}
function openSidebar() {
  if (innerWidth <= 680) {
    const _os = document.getElementById('sidebar');
    _os.classList.remove('peek');
    _os.classList.add('open');
    document.getElementById('sheetOverlay').classList.add('on');
    const _oi = document.getElementById('floatingIsland');
    if (_oi) _oi.style.display = 'none';
  }
}
function openExplore() {
  navPush('list');
  openSidebar();
  renderList();
  setTimeout(function () {
    var s = document.getElementById('searchBox');
    if (s) s.focus();
  }, 80);
}
function toggleFilters() {
  document.getElementById('filters').classList.toggle('open');
}
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (document.getElementById('photoLightbox')?.classList.contains('open'))
    return;
  if (document.getElementById('modal')) {
    closeModal();
    return;
  }
  if (
    innerWidth <= 680 &&
    document.getElementById('sidebar').classList.contains('open')
  )
    closeSidebar();
});
function closeSidebar() {
  const _cs = document.getElementById('sidebar');
  _cs.classList.remove('open');
  _cs.classList.remove('peek');
  document.getElementById('sheetOverlay').classList.remove('on');
  const _ci = document.getElementById('floatingIsland');
  if (_ci) _ci.style.display = '';
  clearMarkerHighlight();
  window._peekSpotId = null;
  _navSig = bhSig();
}

/* ============================================================
   ADMIN PANEL — admin-only management UI
   ============================================================ */
let adminData = { spots: [], users: [], reviews: [] };

async function openAdmin() {
  if (!cur || cur.role !== 'admin') return;
  navPush('admin');
  closeModal();
  const bg = document.createElement('div');
  bg.className = 'modal-bg';
  bg.id = 'modal';
  bg.innerHTML =
    '<div class="modal modal-admin"><div style="text-align:center;padding:40px;color:var(--muted)">🍺 Loading admin data…</div></div>';
  document.body.appendChild(bg);
  const [sr, ur, rr, pr, cr] = await Promise.all([
    db.from('spots').select('*'),
    db.from('profiles').select('*'),
    db.from('reviews').select('*'),
    db.from('photos').select('*'),
    db.from('content_reports')
      .select('*')
      .eq('status', 'open')
      .order('created_at', { ascending: false }),
  ]);
  adminData = {
    spots: sr.data || [],
    users: ur.data || [],
    reviews: rr.data || [],
    photos: pr.data || [],
    contentReports: (cr && cr.data) || [],
  };
  renderAdmin('overview');
}

async function downloadFullBackup() {
  if (!cur || cur.role !== 'admin') return;
  showToast('⏳ Preparing backup…');
  try {
    const [sp, rv, ph, pr, an] = await Promise.all([
      db.from('spots').select('*'),
      db.from('reviews').select('*'),
      db.from('photos').select('*'),
      db.from('profiles').select('*'),
      db.from('announcements').select('*'),
    ]);
    const data = {
      app: 'Bac Hoi',
      exported_at: new Date().toISOString(),
      counts: {
        spots: (sp.data || []).length,
        reviews: (rv.data || []).length,
        photos: (ph.data || []).length,
        profiles: (pr.data || []).length,
      },
      spots: sp.data || [],
      reviews: rv.data || [],
      photos: ph.data || [],
      profiles: pr.data || [],
      announcements: an.data || [],
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download =
      'bac-hoi-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    try {
      await db
        .from('app_settings')
        .upsert({ k: 'last_backup_at', v: new Date().toISOString() });
    } catch (e) {}
    localStorage.setItem('bhLastBackup', new Date().toISOString());
    checkBackupReminder();
    showToast('✅ Backup downloaded — save it somewhere safe.');
  } catch (e) {
    showToast('Backup failed: ' + ((e && e.message) || e));
  }
}
function checkBackupReminder() {
  const existing = document.getElementById('backupNag');
  if (!cur || cur.role !== 'admin') {
    if (existing) existing.remove();
    return;
  }
  const last = localStorage.getItem('bhLastBackup');
  const overdue = !last || Date.now() - new Date(last).getTime() > 7 * 86400000;
  if (!overdue) {
    if (existing) existing.remove();
    return;
  }
  if (existing) return;
  const days = last
    ? Math.floor((Date.now() - new Date(last).getTime()) / 86400000)
    : null;
  const bar = document.createElement('div');
  bar.id = 'backupNag';
  bar.style.cssText =
    'position:fixed;left:0;right:0;bottom:0;z-index:2500;background:#7a1f1f;color:#fff;padding:9px 14px;display:flex;align-items:center;justify-content:center;gap:10px;font-size:13px;box-shadow:0 -2px 10px rgba(0,0,0,.3);flex-wrap:wrap';
  bar.innerHTML =
    '⏰ <b>Weekly backup due</b>' +
    (days != null
      ? ' — last one ' + days + ' day' + (days === 1 ? '' : 's') + ' ago.'
      : ' — none yet.') +
    ' <button class="btn-gold btn-sm" onclick="downloadFullBackup()">⬇ Back up now</button>';
  document.body.appendChild(bar);
}
function exportCSV(type) {
  const d = adminData;
  let rows = [],
    filename = '';
  const csvCell = (v) => {
    if (v == null) return '';
    const s = String(v).replace(/"/g, '""');
    return /[,"\n]/.test(s) ? '"' + s + '"' : s;
  };
  const row = (cols) => cols.map(csvCell).join(',');
  if (type === 'spots') {
    filename =
      'bia-hoi-spots-' + new Date().toISOString().slice(0, 10) + '.csv';
    rows.push(
      row([
        'Name',
        'District',
        'Address',
        'Lat',
        'Lng',
        'Price/Glass',
        'Open',
        'Close',
        'Seating',
        'Payment',
        'Vibes',
        'Avg Rating',
        'Reviews',
        'Verified',
        'Created',
      ]),
    );
    d.spots.forEach((s) => {
      const revs = d.reviews.filter((r) => r.spot_id === s.id);
      const avgR = revs.length
        ? (
            revs.reduce((a, r) => {
              const cats = Object.values(r.ratings || {}).filter((v) => v > 0);
              return (
                a +
                (cats.length
                  ? cats.reduce((x, y) => x + y, 0) / cats.length
                  : 0)
              );
            }, 0) / revs.length
          ).toFixed(1)
        : '';
      rows.push(
        row([
          s.name,
          s.district || '',
          s.address || '',
          s.lat,
          s.lng,
          s.price_per_glass || '',
          s.open_h != null ? s.open_h : '',
          s.close_h != null ? s.close_h : '',
          s.seating || '',
          s.payment || '',
          (s.vibes || []).join(';'),
          avgR,
          revs.length,
          s.verified ? 'Yes' : 'No',
          (s.created_at || '').slice(0, 10),
        ]),
      );
    });
  } else if (type === 'users') {
    filename =
      'bia-hoi-users-' + new Date().toISOString().slice(0, 10) + '.csv';
    rows.push(
      row([
        'Name',
        'Role',
        'Member Since',
        'Spots Added',
        'Reviews Written',
        'Badges',
      ]),
    );
    d.users.forEach((u) => {
      const uSpots = d.spots.filter((s) => s.created_by === u.id).length;
      const uRevs = d.reviews.filter((r) => r.user_id === u.id).length;
      const uBadges = (u.badges || []).length;
      rows.push(
        row([
          u.name || '',
          u.role || '',
          u.since || '',
          uSpots,
          uRevs,
          uBadges,
        ]),
      );
    });
  }
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
/* ===== Announcements — admin broadcast banner ===== */
let _annCache = [];
async function checkAnnouncement() {
  try {
    const { data } = await db
      .from('announcements')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });
    if (!data || !data.length) return;
    if (document.getElementById('modal')) return; // don't cover another modal
    let seen = [];
    try {
      seen = JSON.parse(localStorage.getItem('bhAnnounceSeen')) || [];
    } catch (e) {}
    if (!Array.isArray(seen)) seen = [];
    const a = data.find((x) => !seen.includes(String(x.id)));
    if (!a) return;
    modal(`<div style="text-align:center">
      <img src="icon-192.png" alt="" style="width:54px;height:54px;border-radius:12px;margin-bottom:10px">
      <h2 style="margin:0 0 8px">${esc(a.title || 'Announcement')}</h2>
      <p style="font-size:14px;line-height:1.5;margin:0 0 16px;white-space:pre-wrap;text-align:left">${esc(a.body || '')}</p>
      <button class="btn-gold" style="width:100%" onclick="dismissAnnouncement('${a.id}')">Got it 🍺</button>
    </div>`);
  } catch (e) {
    /* table may not exist yet — ignore */
  }
}
function dismissAnnouncement(id) {
  let seen = [];
  try {
    seen = JSON.parse(localStorage.getItem('bhAnnounceSeen')) || [];
  } catch (e) {}
  if (!Array.isArray(seen)) seen = [];
  if (!seen.includes(String(id))) seen.push(String(id));
  localStorage.setItem('bhAnnounceSeen', JSON.stringify(seen));
  closeModal();
  checkAnnouncement(); // show the next unseen announcement, if any
}
async function postAnnouncement() {
  const t = document.getElementById('annTitle'),
    b = document.getElementById('annBody');
  const title = t ? t.value.trim() : '',
    body = b ? b.value.trim() : '';
  if (!body) return showToast('Write a message first.');
  const { error } = await db
    .from('announcements')
    .insert({ title, body, active: true });
  if (error) return showToast('Could not post: ' + error.message);
  showToast('📣 Posted — users will see it next time they open the app.');
  if (t) t.value = '';
  if (b) b.value = '';
}
async function manageAnnouncements() {
  const { data, error } = await db
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) return showToast('Error: ' + error.message);
  _annCache = data || [];
  const rows = _annCache.length
    ? _annCache
        .map(
          (a) => `
    <div style="border:1px solid var(--line);border-radius:8px;padding:10px;margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
        <b style="font-size:14px">${esc(a.title || '(no title)')}</b>
        <span class="chip ${a.active ? 'open' : ''}" style="font-size:11px">${a.active ? 'Active' : 'Off'}</span>
      </div>
      <div style="font-size:12px;color:var(--muted);margin:4px 0;white-space:pre-wrap">${esc((a.body || '').slice(0, 140))}${(a.body || '').length > 140 ? '…' : ''}</div>
      <div style="font-size:11px;color:var(--muted);margin-bottom:6px">${(a.created_at || '').slice(0, 10)}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn-line btn-sm" onclick="editAnnouncement('${a.id}')">✎ Edit</button>
        <button class="btn-line btn-sm" onclick="toggleAnnouncement('${a.id}',${a.active ? 'false' : 'true'})">${a.active ? 'Turn off' : 'Turn on'}</button>
        <button class="btn-line btn-sm" style="color:var(--red)" onclick="deleteAnnouncement('${a.id}')">🗑 Delete</button>
      </div>
    </div>`,
        )
        .join('')
    : '<div style="color:var(--muted);font-size:13px">No announcements yet.</div>';
  modal(
    `<h2 style="margin:0 0 10px">📣 Manage announcements</h2><div style="max-height:60vh;overflow-y:auto">${rows}</div><button class="btn-line" style="width:100%;margin-top:10px" onclick="closeModal()">Close</button>`,
  );
}
function editAnnouncement(id) {
  const a = _annCache.find((x) => String(x.id) === String(id));
  if (!a) return;
  modal(`<h2 style="margin:0 0 8px">Edit announcement</h2>
    <input id="edAnnTitle" value="${esc(a.title || '')}" style="width:100%;padding:9px;border:1px solid var(--line);border-radius:8px;margin-bottom:8px;font-family:inherit">
    <textarea id="edAnnBody" style="width:100%;min-height:90px;padding:9px;border:1px solid var(--line);border-radius:8px;margin-bottom:10px;font-family:inherit">${esc(a.body || '')}</textarea>
    <button class="btn-gold" style="width:100%" onclick="saveAnnouncementEdit('${a.id}')">Save changes</button>
    <button class="btn-line" style="width:100%;margin-top:6px" onclick="manageAnnouncements()">Cancel</button>`);
}
async function saveAnnouncementEdit(id) {
  const t = document.getElementById('edAnnTitle'),
    b = document.getElementById('edAnnBody');
  const { error } = await db
    .from('announcements')
    .update({ title: t ? t.value.trim() : '', body: b ? b.value.trim() : '' })
    .eq('id', id);
  if (error) return showToast('Error: ' + error.message);
  showToast('✅ Updated.');
  manageAnnouncements();
}
async function toggleAnnouncement(id, makeActive) {
  const { error } = await db
    .from('announcements')
    .update({ active: makeActive })
    .eq('id', id);
  if (error) return showToast('Error: ' + error.message);
  manageAnnouncements();
}
async function deleteAnnouncement(id) {
  if (!confirm('Delete this announcement permanently?')) return;
  const { error } = await db.from('announcements').delete().eq('id', id);
  if (error) return showToast('Delete failed: ' + error.message);
  showToast('Deleted.');
  manageAnnouncements();
}

function renderAdmin(tab) {
  const d = adminData;
  const reported = d.spots.filter((s) => (s.reports || []).length > 0);
  const unverified = d.spots.filter((s) => !s.verified);
  const _repTotal = reported.length + ((d.contentReports) || []).length;
  const tabDefs = {
    overview: '📊 Overview',
    spots: '📍 Spots',
    users: '👥 Users',
    reports: '⚑ Reports',
    photos: '📷 Photos',
    activity: '🔔 Activity',
    announce: '📣 Announce',
  };
  const tabs = Object.keys(tabDefs)
    .map((t) => {
      const badge =
        t === 'reports' && _repTotal
          ? ` <span style="background:var(--red);color:#fff;border-radius:10px;padding:1px 6px;font-size:11px">${_repTotal}</span>`
          : '';
      return `<button class="admin-tab${t === tab ? ' on' : ''}" onclick="renderAdmin('${t}')">${tabDefs[t]}${badge}</button>`;
    })
    .join('');

  let body = '';
  if (tab === 'overview') {
    body = `<div style="margin-bottom:12px;padding:10px 12px;background:#fbf6ea;border:1px solid var(--line);border-radius:8px"><button class="btn-gold btn-sm" onclick="downloadFullBackup()">⬇ Download full backup</button> <span style="font-size:12px;color:var(--muted)">Run this weekly &amp; save the file (computer/Drive) — your data safety net.</span></div><div class="stat-grid">
      <div class="stat-card"><div class="num">${d.spots.length}</div><div class="lbl">Total spots</div></div>
      <div class="stat-card"><div class="num">${unverified.length}</div><div class="lbl">Unverified</div></div>
      <div class="stat-card"><div class="num">${d.users.length}</div><div class="lbl">Registered users</div></div>
      <div class="stat-card"><div class="num">${reported.length}</div><div class="lbl">Reported spots</div></div>
      <div class="stat-card"><div class="num">${d.reviews.length}</div><div class="lbl">Total reviews</div></div>
    </div>
    ${reported.length ? `<div class="hint-verify" style="margin-bottom:14px">⚑ ${reported.length} spot${reported.length > 1 ? 's have' : ' has'} open reports — check the Reports tab.</div>` : ''}
    <div style="font-weight:700;font-size:13px;margin-bottom:8px;color:var(--muted)">UNVERIFIED SPOTS (${unverified.length})</div>
    ${
      unverified.length
        ? `<table class="admin-table">
      <tr><th>Name</th><th>District</th><th>Added by</th><th>Actions</th></tr>
      ${unverified
        .map(
          (s) => `<tr>
        <td><a style="color:var(--blue);cursor:pointer;font-weight:600" onclick="closeModal();showDetail('${s.id}')">${esc(s.name)}</a></td>
        <td>${esc(s.district || '—')}</td>
        <td style="color:var(--muted)">${esc(s.created_by === 'anon' || s.created_by === 'seed' ? 'Anonymous' : s.created_by)}</td>
        <td><button class="btn-verify btn-sm" title="Mark as verified" onclick="adminVerify('${s.id}')">✓ Verify</button>
            <button class="btn-line btn-sm" title="Permanently delete this spot" style="margin-left:4px;color:var(--red)" onclick="adminDeleteSpot('${s.id}')">🗑 Delete</button></td>
      </tr>`,
        )
        .join('')}
    </table>`
        : '<div style="color:var(--muted);font-size:13px">All spots are verified ✓</div>'
    }`;
  } else if (tab === 'announce') {
    body = `<div style="max-width:540px">
      <p style="font-size:13px;color:var(--muted);margin:0 0 12px">Post a message users see as a banner the next time they open the app. New posts no longer replace old ones — view, edit, turn off, or delete past ones with Manage.</p>
      <label style="font-weight:700;font-size:13px">Title</label>
      <input id="annTitle" placeholder="e.g. New look + you can now change your name!" style="width:100%;padding:9px 11px;border:1px solid var(--line);border-radius:8px;margin:4px 0 10px;font-family:inherit">
      <label style="font-weight:700;font-size:13px">Message</label>
      <textarea id="annBody" placeholder="Write your announcement…" style="width:100%;min-height:96px;padding:9px 11px;border:1px solid var(--line);border-radius:8px;margin:4px 0 12px;font-family:inherit"></textarea>
      <button class="btn-gold" onclick="postAnnouncement()">📣 Post announcement</button>
      <button class="btn-line" style="margin-left:8px" onclick="manageAnnouncements()">📋 Manage past announcements</button>
    </div>`;
  } else if (tab === 'spots') {
    body = `<div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;flex-wrap:wrap">
      <b style="font-size:13px">${d.spots.length} spots total</b>
      <select id="adminSpotFilter" onchange="filterAdminSpots()" style="padding:5px 8px;border:1px solid var(--line);border-radius:7px;font-size:13px">
        <option value="all">All spots</option>
        <option value="unverified">Unverified only</option>
        <option value="reported">Reported only</option>
        <option value="closed">Closed/temp closed</option>
      </select>
      <button class="btn-line btn-sm" onclick="exportCSV('spots')" style="margin-left:auto">📥 Export CSV</button>
    </div>
    <div id="adminSpotTable">${renderAdminSpotTable(d.spots)}</div>`;
  } else if (tab === 'users') {
    body = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <b style="font-size:13px">${d.users.length} registered users</b>
      <button class="btn-line btn-sm" onclick="exportCSV('users')">📥 Export CSV</button>
      <button class="btn-line btn-sm" onclick="adminRecalcAllBadges()" title="Recalculate badges for every user from live data">↺ Recalc all badges</button>
    </div>
    <table class="admin-table">
      <tr><th>Name</th><th>Role</th><th>Since</th><th>Spots</th><th>Reviews</th><th>Actions</th></tr>
      ${d.users
        .map((u) => {
          const uSpots = d.spots.filter((s) => s.created_by === u.id).length;
          const uRevs = d.reviews.filter((r) => r.user_id === u.id).length;
          return `<tr>
          <td><b>${esc(u.name)}</b></td>
          <td>${rolePill(u.role)}</td>
          <td style="color:var(--muted);font-size:12px">${u.since || '—'}</td>
          <td>${uSpots}</td><td>${uRevs}</td>
          <td style="white-space:nowrap">
            ${
              u.id === cur.id
                ? '<span style="font-size:11px;color:var(--muted)">you</span> '
                : `
            ${u.role !== 'admin' ? `<button class="btn-line btn-sm" title="Promote to Admin" onclick="adminSetRole('${u.id}','admin')">👑 Admin</button> ` : ''}
            ${u.role !== 'active' ? `<button class="btn-line btn-sm" title="Set role to Active" onclick="adminSetRole('${u.id}','active')">⭐ Active</button> ` : ''}
            ${u.role !== 'newcomer' ? `<button class="btn-line btn-sm" title="Demote to Newcomer" onclick="adminSetRole('${u.id}','newcomer')">↓ Newcomer</button> ` : ''}
            <button class="btn-line btn-sm" title="Delete this user's profile (they can re-register)" style="color:var(--red)" onclick="adminRemoveUser('${u.id}','${esc(u.name)}')">🗑 Remove</button>
            `
            }<button class="btn-line btn-sm" title="Recalculate badges from live data" onclick="adminRecalcBadges('${u.id}')">↺ Badges</button>
          </td>
        </tr>`;
        })
        .join('')}
    </table>`;
  } else if (tab === 'photos') {
    const photos = d.photos || [];
    const flagged = photos.filter((p) => p.flagged);
    const unflagged = photos.filter((p) => !p.flagged);
    body = `<div style="margin-bottom:10px;font-size:13px;color:var(--muted)">${photos.length} total · ${flagged.length} flagged</div>
    ${
      flagged.length
        ? `<div class="form-sec-title" style="color:var(--red);border-color:var(--red);margin-bottom:8px">⚑ Flagged (${flagged.length})</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;margin-bottom:16px">
      ${flagged
        .map(
          (
            p,
          ) => `<div style="position:relative;border:2px solid var(--red);border-radius:8px;overflow:hidden">
        <img src="${p.url}" style="width:100%;height:90px;object-fit:cover;display:block">
        <div style="padding:4px 6px;background:#fff3f3;font-size:11px;color:var(--muted)">Spot: ${esc((d.spots.find((s) => s.id === p.spot_id) || {}).name || '?')}</div>
        <div style="padding:4px 6px;display:flex;gap:4px;flex-wrap:wrap">
          <button class="btn-line btn-sm" style="font-size:11px" onclick="adminUnflagPhoto('${p.id}')" title="Unflag this photo">✓ Keep</button>
          <button class="btn-line btn-sm" style="font-size:11px;color:var(--red)" onclick="adminDeletePhoto('${p.id}','${p.path}')" title="Delete permanently">🗑</button>
        </div>
      </div>`,
        )
        .join('')}
    </div>`
        : ''
    }
    <div class="form-sec-title" style="margin-bottom:8px">All photos (${unflagged.length})</div>
    ${
      unflagged.length
        ? `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px">
      ${unflagged
        .map(
          (
            p,
          ) => `<div style="position:relative;border:1px solid var(--line);border-radius:8px;overflow:hidden">
        <img src="${p.url}" style="width:100%;height:90px;object-fit:cover;display:block;cursor:pointer" onclick="window.open('${p.url}')">
        <div style="padding:4px 6px;font-size:11px;color:var(--muted)">${esc((d.spots.find((s) => s.id === p.spot_id) || {}).name || '?')}</div>
        <div style="padding:4px 6px;display:flex;gap:4px">
          <button class="btn-line btn-sm" style="font-size:11px;color:var(--orange)" onclick="adminFlagPhoto('${p.id}')" title="Flag for review">⚑ Flag</button>
          <button class="btn-line btn-sm" style="font-size:11px;color:var(--red)" onclick="adminDeletePhoto('${p.id}','${p.path}')" title="Delete permanently">🗑</button>
          <button class="btn-line btn-sm" style="font-size:11px;font-weight:700" onclick="adminSetCover('${(d.spots.find((s) => s.id === p.spot_id) || {}).id}','${p.url}')" title="Set as cover photo">☆ Cover</button>
        </div>
      </div>`,
        )
        .join('')}
    </div>`
        : '<div style="color:var(--muted);font-size:13px">No photos yet.</div>'
    }`;
  } else if (tab === 'reports') {
    const cReports = d.contentReports || [];
    const _spotRep = reported.length
      ? `<div class="form-sec-title" style="margin-bottom:8px">⚑ Reported spots (${reported.length})</div><table class="admin-table">
      <tr><th>Spot</th><th>Report details</th><th>Actions</th></tr>
      ${reported
        .map(
          (s) => `<tr>
        <td>
          <a style="color:var(--blue);cursor:pointer;font-weight:600" onclick="closeModal();showDetail('${s.id}')">${esc(s.name)}</a>
          <div style="font-size:11px;color:var(--muted)">${esc(s.district || '')}</div>
        </td>
        <td>${(s.reports || []).map((r) => `<div style="font-size:12px;padding:2px 0"><b>${esc(r.by)}</b>: "${esc(r.why)}" <span style="color:var(--muted)">${r.when || ''}</span></div>`).join('')}</td>
        <td style="white-space:nowrap">
          <button class="btn-line btn-sm" title="Clear all reports for this spot" onclick="adminDismissReports('${s.id}')">✓ Dismiss</button><br style="margin:3px 0">
          <button class="btn-line btn-sm" title="Permanently delete this spot" style="color:var(--red);margin-top:4px" onclick="adminDeleteSpot('${s.id}')">🗑 Delete spot</button>
        </td>
      </tr>`,
        )
        .join('')}
    </table>`
      : '';
    body = _spotRep + contentReportsHTML(cReports);
  } else if (tab === 'activity') {
    const evts = [];
    d.spots.forEach((s) => {
      if (s.created_at)
        evts.push({
          icon: '📍',
          color: '#2e7d32',
          title: 'New spot: ' + esc(s.name),
          meta: esc(s.district || ''),
          date: s.created_at,
        });
    });
    d.users.forEach((u) => {
      if (u.created_at)
        evts.push({
          icon: '👤',
          color: '#185fa5',
          title: 'New user: ' + esc(u.name || u.email || 'Unknown'),
          meta: u.role || '',
          date: u.created_at,
        });
    });
    d.reviews.forEach((r) => {
      if (r.review_date) {
        const sn =
          (d.spots.find((s) => s.id === r.spot_id) || {}).name ||
          'Unknown spot';
        evts.push({
          icon: '⭐',
          color: '#b9780f',
          title: 'Review on: ' + esc(sn),
          meta: esc((r.txt || 'No text').slice(0, 55)),
          date: r.review_date,
        });
      }
    });
    d.spots.forEach((s) =>
      (s.reports || []).forEach((rp) => {
        if (rp.when)
          evts.push({
            icon: '⚑',
            color: '#c0392b',
            title: 'Report: ' + esc(s.name),
            meta: esc(rp.why || '') + (rp.by ? ' — ' + esc(rp.by) : ''),
            date: rp.when,
          });
      }),
    );
    evts.sort((a, b) => b.date.localeCompare(a.date));
    const top10 = evts.slice(0, 10);
    body = top10.length
      ? '<div class="activity-feed">' +
        top10
          .map(
            (ev) =>
              '<div class="activity-item">' +
              '<span class="activity-dot" style="background:' +
              ev.color +
              '"></span>' +
              '<div class="activity-body">' +
              '<div class="activity-title">' +
              ev.icon +
              ' ' +
              ev.title +
              '</div>' +
              '<div class="activity-meta">' +
              ev.meta +
              (ev.meta ? ' &middot; ' : '') +
              ev.date.slice(0, 10) +
              '</div>' +
              '</div></div>',
          )
          .join('') +
        '</div>'
      : '<div style="color:var(--muted);font-size:13px;padding:20px 0">No activity yet.</div>';
  }
  document.querySelector('#modal .modal').innerHTML = `
    <div class="admin-header">
      <span style="font-size:22px">🍺</span>
      <h2 style="margin:0;font-size:17px">Admin Panel</h2>
      <span style="flex:1"></span>
      <button class="btn-line btn-sm" onclick="closeModal()">✕ Close</button>
    </div>
    <div class="admin-tabs">${tabs}</div>
    <div class="admin-body">${body}</div>`;
}

function renderAdminSpotTable(list) {
  if (!list.length)
    return '<div style="color:var(--muted);font-size:13px;padding:10px 0">No spots match.</div>';
  return `<table class="admin-table">
    <tr><th>Name</th><th>District</th><th>Status</th><th>Verified</th><th>Reports</th><th>Actions</th></tr>
    ${list
      .map(
        (s) => `<tr>
      <td><a style="color:var(--blue);cursor:pointer;font-weight:600" onclick="closeModal();showDetail('${s.id}')">${esc(s.name)}</a></td>
      <td>${esc(s.district || '—')}</td>
      <td><span class="chip ${s.status === 'active' ? 'open' : s.status === 'perm_closed' ? 'closed' : ''}">${s.status}</span></td>
      <td>${s.verified ? '<span class="chip verified">✓ Yes</span>' : '<span class="chip unverified">✗ No</span>'}</td>
      <td>${(s.reports || []).length ? `<span style="color:var(--red);font-weight:700">${s.reports.length}</span>` : '—'}</td>
      <td style="white-space:nowrap">
        ${!s.verified ? `<button class="btn-verify btn-sm" title="Mark as verified" onclick="adminVerify('${s.id}')">✓ Verify</button> ` : `<button class="btn-line btn-sm" title="Remove verification" onclick="adminUnverify('${s.id}')" style="color:var(--orange)">✗ Unverify</button> `}
        <button class="btn-line btn-sm" title="Permanently delete this spot" onclick="adminDeleteSpot('${s.id}')" style="color:var(--red)">🗑 Delete</button>
      </td>
    </tr>`,
      )
      .join('')}
  </table>`;
}

function filterAdminSpots() {
  const f = document.getElementById('adminSpotFilter').value;
  let list = adminData.spots;
  if (f === 'unverified') list = list.filter((s) => !s.verified);
  else if (f === 'reported')
    list = list.filter((s) => (s.reports || []).length > 0);
  else if (f === 'closed') list = list.filter((s) => s.status !== 'active');
  document.getElementById('adminSpotTable').innerHTML =
    renderAdminSpotTable(list);
}

async function adminVerify(id) {
  const at = new Date().toISOString().slice(0, 10);
  const { error } = await db
    .from('spots')
    .update({ verified: true, verified_by: cur.id, verified_at: at })
    .eq('id', id);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  const s = adminData.spots.find((x) => x.id === id);
  if (s) {
    s.verified = true;
  }
  const ls = byId(id);
  if (ls) {
    ls.verified = true;
    ls.verifiedBy = cur.id;
    ls.verifiedAt = at;
  }
  renderAdmin(
    document.querySelector('.admin-tab.on')?.textContent.trim().includes('Spot')
      ? 'spots'
      : 'overview',
  );
  renderList();
}

async function adminUnverify(id) {
  const { error } = await db
    .from('spots')
    .update({ verified: false, verified_by: null, verified_at: null })
    .eq('id', id);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  const s = adminData.spots.find((x) => x.id === id);
  if (s) {
    s.verified = false;
    s.verified_by = null;
    s.verified_at = null;
  }
  const ls = byId(id);
  if (ls) {
    ls.verified = false;
    ls.verifiedBy = null;
    ls.verifiedAt = null;
  }
  renderAdmin(
    document.querySelector('.admin-tab.on')?.textContent.trim().includes('Spot')
      ? 'spots'
      : 'overview',
  );
  renderList();
}

async function adminDeleteSpot(id) {
  if (!confirm('Permanently delete this spot and all its reviews?')) return;
  const { error } = await db.from('spots').delete().eq('id', id);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  adminData.spots = adminData.spots.filter((x) => x.id !== id);
  spots = spots.filter((x) => x.id !== id);
  renderAdmin(
    document.querySelector('.admin-tab.on')?.textContent.trim().includes('Spot')
      ? 'spots'
      : 'overview',
  );
  renderList();
}

async function adminSetRole(uid, role) {
  const u = adminData.users.find((x) => x.id === uid);
  if (!confirm(`Change ${u ? u.name : 'this user'} to ${role}?`)) return;
  const { data, error } = await db.rpc('admin_set_role', {
    p_target: uid,
    p_role: role,
  });
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  if (data !== 'ok') {
    alert('Could not change role: ' + data);
    return;
  }
  if (u) u.role = role;
  if (profilesCache[uid]) profilesCache[uid].role = role;
  renderAdmin('users');
}

async function adminSetCover(sid, url) {
  if (!sid) return;
  const s = byId(sid);
  if (!s) return;
  const newUrl = s.cover_photo_url === url ? null : url;
  const { error } = await db
    .from('spots')
    .update({ cover_photo_url: newUrl })
    .eq('id', sid);
  if (error) {
    showToast('⚠ Cover save failed: ' + error.message);
    console.error('adminSetCover', error);
    return;
  }
  s.cover_photo_url = newUrl;
  showToast(newUrl ? '★ Cover photo set' : 'Cover photo cleared');
  showDetail(sid);
}
async function adminRecalcBadges(uid) {
  const correct = badgesFor(uid);
  await db.from('profiles').update({ badges: correct }).eq('id', uid);
  const u = adminData.users.find((x) => x.id === uid);
  if (u) u.badges = correct;
  if (profilesCache[uid]) profilesCache[uid].badges = correct;
  showToast('↺ Badges recalculated for ' + (u ? u.name : uid));
  renderAdmin('users');
}
async function adminRecalcAllBadges() {
  if (
    !confirm(
      'Recalculate badges for all ' +
        adminData.users.length +
        ' users? This may take a moment.',
    )
  )
    return;
  for (const u of adminData.users) {
    const correct = badgesFor(u.id);
    await db.from('profiles').update({ badges: correct }).eq('id', u.id);
    u.badges = correct;
    if (profilesCache[u.id]) profilesCache[u.id].badges = correct;
  }
  showToast('↺ Badges recalculated for ' + adminData.users.length + ' users');
  renderAdmin('users');
}
async function adminRemoveUser(uid, name) {
  if (
    !confirm(
      `Remove ${name}? Their spots and reviews will remain but their profile and login privileges will be deleted. They can re-register.`,
    )
  )
    return;
  const { data, error } = await db.rpc('admin_remove_user', { p_target: uid });
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  if (data !== 'ok') {
    alert('Could not remove user: ' + data);
    return;
  }
  adminData.users = adminData.users.filter((x) => x.id !== uid);
  delete profilesCache[uid];
  renderAdmin('users');
}

async function adminFlagPhoto(id) {
  const { error } = await db
    .from('photos')
    .update({ flagged: true })
    .eq('id', id);
  if (error) return alert('Error: ' + error.message);
  const p = adminData.photos.find((x) => x.id === id);
  if (p) p.flagged = true;
  renderAdmin('photos');
}
async function adminUnflagPhoto(id) {
  const { error } = await db
    .from('photos')
    .update({ flagged: false })
    .eq('id', id);
  if (error) return alert('Error: ' + error.message);
  const p = adminData.photos.find((x) => x.id === id);
  if (p) p.flagged = false;
  renderAdmin('photos');
}
async function adminDeletePhoto(id, path) {
  if (!confirm('Permanently delete this photo?')) return;
  await db.storage.from('spot-photos').remove([path]);
  const { error } = await db.from('photos').delete().eq('id', id);
  if (error) return alert('Error: ' + error.message);
  adminData.photos = adminData.photos.filter((x) => x.id !== id);
  const spotId = (adminData.photos.find((x) => x.id === id) || {}).spot_id;
  if (spotId) {
    const s = byId(spotId);
    if (s) s.photos = (s.photos || []).filter((p) => p.id !== id);
  }
  renderAdmin('photos');
}
async function adminDismissReports(id) {
  const { error } = await db.from('spots').update({ reports: [] }).eq('id', id);
  if (error) {
    alert('Error: ' + error.message);
    return;
  }
  const s = adminData.spots.find((x) => x.id === id);
  if (s) s.reports = [];
  const ls = byId(id);
  if (ls) ls.reports = [];
  renderAdmin('reports');
}

function contentReportsHTML(list) {
  if (!list || !list.length) return '';
  const typeLbl = { review: '📝 Review', photo: '📷 Photo', reply: '💬 Reply' };
  const rows = list
    .map((rp) => {
      const isPhoto = rp.content_type === 'photo';
      const prev = isPhoto
        ? `<a href="${rp.preview}" target="_blank"><img src="${rp.preview}" style="width:56px;height:56px;object-fit:cover;border-radius:8px"></a>`
        : `<div style="font-size:12px;max-width:230px">${esc((rp.preview || '').slice(0, 160)) || '<i>(empty)</i>'}</div>`;
      return `<tr>
        <td><div style="font-weight:700;font-size:12px;margin-bottom:3px">${typeLbl[rp.content_type] || rp.content_type}</div>${prev}<div style="font-size:11px;color:var(--muted);margin-top:3px">${esc(rp.context || '')}</div><div style="font-size:11px;color:var(--muted)">by ${esc(rp.author_name || 'User')}</div></td>
        <td style="font-size:12px"><b>${esc(rp.reason)}</b>${rp.details ? `<div style="color:var(--muted)">${esc(rp.details)}</div>` : ''}<div style="color:var(--muted);font-size:11px;margin-top:3px">— ${esc(rp.reporter_name || 'User')} · ${(rp.created_at || '').slice(0, 10)}</div></td>
        <td style="white-space:nowrap">
          <button class="btn-line btn-sm" onclick="adminDismissContentReport(${rp.id})">✓ Dismiss</button><br style="margin:3px 0">
          <button class="btn-line btn-sm" style="color:var(--red);margin-top:4px" onclick="adminRemoveReportedContent(${rp.id})">🗑 Remove ${rp.content_type}</button><br style="margin:3px 0">
          ${rp.author_id ? `<button class="btn-line btn-sm" style="color:var(--red);margin-top:4px" onclick="adminRemoveReportedUser(${rp.id})">⛔ Remove user</button>` : ''}
        </td>
      </tr>`;
    })
    .join('');
  return `<div class="form-sec-title" style="margin:16px 0 8px">⚑ Reported reviews, photos &amp; replies (${list.length})</div><table class="admin-table"><tr><th>Content</th><th>Report</th><th>Actions</th></tr>${rows}</table>`;
}
async function adminDismissContentReport(id) {
  const { error } = await db
    .from('content_reports')
    .update({ status: 'dismissed' })
    .eq('id', id);
  if (error) return alert('Error: ' + error.message);
  adminData.contentReports = (adminData.contentReports || []).filter(
    (r) => r.id !== id,
  );
  renderAdmin('reports');
}
function adminRemoveReportedUser(id) {
  const rp = (adminData.contentReports || []).find((r) => r.id === id);
  if (!rp || !rp.author_id) return;
  adminRemoveUser(rp.author_id, rp.author_name || 'User');
}
async function adminRemoveReportedContent(id) {
  const rp = (adminData.contentReports || []).find((r) => r.id === id);
  if (!rp) return;
  if (!confirm('Permanently remove this ' + rp.content_type + '?')) return;
  let error = null;
  if (rp.content_type === 'review') {
    ({ error } = await db.from('reviews').delete().eq('id', rp.content_id));
  } else if (rp.content_type === 'reply') {
    ({ error } = await db
      .from('review_replies')
      .delete()
      .eq('id', rp.content_id));
  } else if (rp.content_type === 'photo') {
    if (rp.content_path)
      await db.storage.from('spot-photos').remove([rp.content_path]);
    ({ error } = await db.from('photos').delete().eq('id', rp.content_id));
  }
  if (error) return alert('Error: ' + error.message);
  await db
    .from('content_reports')
    .update({ status: 'actioned' })
    .eq('content_type', rp.content_type)
    .eq('content_id', rp.content_id);
  adminData.contentReports = (adminData.contentReports || []).filter(
    (r) =>
      !(r.content_type === rp.content_type && r.content_id === rp.content_id),
  );
  showToast('Removed. ✅');
  renderAdmin('reports');
}


/* ============================================================
   INIT — app bootstrap, data loading, deep-link handling
   ============================================================ */
DISTRICTS.forEach((d) => fDistrict.add(new Option(d, d)));

async function init() {
  if (/type=recovery/.test(location.hash)) setTimeout(setNewPasswordModal, 900);
  const {
    data: { session },
  } = await db.auth.getSession();
  if (session) {
    const { data: profile } = await db
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    if (profile) {
      cur = { ...profile, email: session.user.email };
      profilesCache[profile.id] = cur;
    }
  }
  try {
    const { data: _bk } = await db
      .from('app_settings')
      .select('v')
      .eq('k', 'last_backup_at')
      .maybeSingle();
    if (_bk && _bk.v) localStorage.setItem('bhLastBackup', _bk.v);
  } catch (e) {}
  db.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') setNewPasswordModal();
    if (session) {
      if (event === 'SIGNED_IN') await new Promise((r) => setTimeout(r, 400));
      const { data: profile } = await db
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      if (profile) {
        cur = { ...profile, email: session.user.email };
        profilesCache[profile.id] = cur;
      }
    } else {
      cur = null;
      notifs = [];
    }
    setUserLabel();
    renderList();
    loadNotifs();
  });
  setUserLabel();
  loadNotifs();
  setInterval(() => {
    if (cur && document.visibilityState === 'visible') loadNotifs();
  }, 90000);
  // Load spots and reviews as separate queries to avoid PostgREST embedding 401s
  const { data: spotsData, error } = await db.from('spots').select('*');
  if (error) {
    console.error('Load error:', error);
    document.getElementById('sidebarBody').innerHTML =
      '<div class="empty-note">⚠ ' +
      error.message +
      ' (' +
      error.code +
      ')</div>';
    return;
  }
  const [{ data: reviewsData }, { data: photosData }, { data: likesData }] =
    await Promise.all([
      db.from('reviews').select('*'),
      db.from('photos').select('*').eq('flagged', false),
      db.from('photo_likes').select('*'),
    ]);
  const likesByPhoto = {};
  (likesData || []).forEach((l) => {
    (likesByPhoto[l.photo_id] = likesByPhoto[l.photo_id] || []).push(l.user_id);
  });
  const reviewsBySpot = {};
  (reviewsData || []).forEach((r) => {
    if (!reviewsBySpot[r.spot_id]) reviewsBySpot[r.spot_id] = [];
    reviewsBySpot[r.spot_id].push(dbToReview(r));
  });
  const photosBySpot = {};
  (photosData || []).forEach((p) => {
    p.likes = likesByPhoto[p.id] || [];
    if (!photosBySpot[p.spot_id]) photosBySpot[p.spot_id] = [];
    photosBySpot[p.spot_id].push(p);
  });
  spots = (spotsData || []).map((s) => ({
    ...dbToSpot(s),
    reviews: reviewsBySpot[s.id] || [],
    photos: photosBySpot[s.id] || [],
  }));
  {
    const { data: awardsData } = await db.from('monthly_awards').select('*');
    monthlyAwards = awardsData || [];
  }
  const pids = [
    ...new Set(
      spots
        .map((s) => s.createdBy)
        .filter((id) => id && id !== 'anon' && id !== 'seed'),
    ),
  ];
  if (pids.length) {
    const { data: profiles } = await db
      .from('profiles')
      .select('*')
      .in('id', pids);
    (profiles || []).forEach((p) => {
      profilesCache[p.id] = p;
    });
  }
  loadFilters();
  setupSwipe();
  renderList();
  hideSplash();
  checkAnnouncement();
  // Deep-link: ?spot=ID opens that spot on load
  const params = new URLSearchParams(window.location.search);
  const deepSpot = params.get('spot');
  if (deepSpot) {
    // Wait a tick for markers to render, then open
    setTimeout(() => {
      const s = byId(deepSpot);
      if (s) {
        map.setView([s.lat, s.lng], 17);
        showDetail(s.id);
      }
    }, 600);
  }
}

/* ============================================================
   BADGES / GAMIFICATION — earning, titles, quests, toasts
   ============================================================ */
function badgesFor(uid) {
  const mySpots = spots.filter((s) => s.createdBy === uid);
  const myReviews = [],
    reviewedDistricts = new Set();
  spots.forEach((s) =>
    s.reviews.forEach((r) => {
      if (r.userId === uid) {
        myReviews.push(
          Object.assign({}, r, {
            spotId: s.id,
            spotOpenH: s.openH,
            spotCloseH: s.closeH,
          }),
        );
        if (s.district) reviewedDistricts.add(s.district);
      }
    }),
  );
  const myPhotos = spots.flatMap((s) =>
    (s.photos || []).filter((p) => p.uploaded_by === uid),
  );
  const photoSpots = new Set(myPhotos.map((p) => p.spot_id));
  const myVerified = mySpots.filter((s) => s.verified);
  const helpfulVotes = myReviews.reduce(
    (a, r) => a + (r.helpful || []).length,
    0,
  );
  const myName = (profilesCache[uid] || {}).name || '';
  const reportCount = spots.reduce(
    (a, s) => a + (s.reports || []).filter((r) => r.by === myName).length,
    0,
  );
  const totalWords = myReviews.reduce(
    (a, r) =>
      a + (r.txt ? r.txt.trim().split(/\s+/).filter(Boolean).length : 0),
    0,
  );
  const fullRated = myReviews.filter((r) =>
    RCATS.every((c) => r.ratings[c[0]] >= 1),
  );
  const beerFive = new Set(
    myReviews.filter((r) => r.ratings.beer === 5).map((r) => r.spotId),
  );
  const pioneerCount = spots.filter((s) => {
    const all = s.reviews
      .slice()
      .sort((a, b) => (a.when || '').localeCompare(b.when || ''));
    return all.length > 0 && all[0].userId === uid;
  }).length;
  const earlyBirdSpots = new Set(
    myReviews
      .filter((r) => {
        const h = hanoiHour(r.createdAt);
        return h >= 9 && h < 12;
      })
      .map((r) => r.spotId),
  ).size;
  const goldenHourSpots = new Set(
    myReviews
      .filter((r) => {
        const h = hanoiHour(r.createdAt);
        return h >= 17 && h < 19;
      })
      .map((r) => r.spotId),
  ).size;
  const reviewsPerSpot = {};
  myReviews.forEach(
    (r) => (reviewsPerSpot[r.spotId] = (reviewsPerSpot[r.spotId] || 0) + 1),
  );
  const sameSpotMax = Object.values(reviewsPerSpot).reduce(
    (m, n) => Math.max(m, n),
    0,
  );
  const foodSpots = new Set(
    myReviews.filter((r) => r.ratings.food >= 1).map((r) => r.spotId),
  ).size;
  const trendsetterMax = mySpots.reduce(
    (m, s) =>
      Math.max(
        m,
        new Set(
          s.reviews
            .map((r) => r.userId)
            .filter((id) => id && id !== 'anon' && id !== uid),
        ).size,
      ),
    0,
  );
  const completeSpots = mySpots.filter(spotIsComplete).length;
  const topPhotoLikes = myPhotos.reduce(
    (m, p) => Math.max(m, (p.likes || []).length),
    0,
  );
  const streakWeeks = new Set(
    myReviews.filter((r) => r.when).map((r) => isoWeekKey(r.when)),
  ).size;
  const earned = [];
  if (mySpots.length >= 1) earned.push('first_spot');
  if (mySpots.length >= 10) earned.push('scout');
  if (mySpots.length >= 25) earned.push('cartographer');
  if (completeSpots >= 5) earned.push('completionist');
  if (trendsetterMax >= 10) earned.push('trendsetter');
  if (myReviews.length >= 1) earned.push('first_review');
  if (myReviews.length >= 20) earned.push('regular');
  if (myReviews.length >= 30) earned.push('critic');
  if (myReviews.length >= 100) earned.push('century_club');
  if (pioneerCount >= 5) earned.push('pioneer');
  if (totalWords >= 1500) earned.push('wordsmith');
  if (fullRated.length >= 20) earned.push('all_rounder');
  if (beerFive.size >= 10) earned.push('beer_sommelier');
  if (foodSpots >= 20) earned.push('foodie');
  if (sameSpotMax >= 5) earned.push('the_usual');
  if (streakWeeks >= 5) earned.push('streak');
  if (myPhotos.length >= 1) earned.push('photographer');
  if (myPhotos.length >= 25) earned.push('gallery_owner');
  if (photoSpots.size >= 20) earned.push('lensman');
  if (topPhotoLikes >= 15) earned.push('snapshot_star');
  if (helpfulVotes >= 20) earned.push('helpful');
  if (helpfulVotes >= 50) earned.push('community_pillar');
  if (myVerified.length >= 1) earned.push('verified_spot');
  if (myVerified.length >= 10) earned.push('trusted');
  if (reviewedDistricts.size >= 6) earned.push('district_explorer');
  if (reviewedDistricts.size >= 10) earned.push('city_wide');
  if (URBAN_DISTRICTS.every((d) => reviewedDistricts.has(d)))
    earned.push('all_districts');
  if (
    spots.filter(
      (s) =>
        s.district === 'Hoàn Kiếm' && s.reviews.some((r) => r.userId === uid),
    ).length >= 15
  )
    earned.push('old_quarter');
  if (
    spots.filter(
      (s) => s.district === 'Tây Hồ' && s.reviews.some((r) => r.userId === uid),
    ).length >= 10
  )
    earned.push('tay_ho');
  if (reportCount >= 5) earned.push('safety_inspector');
  if (earlyBirdSpots >= 3) earned.push('early_bird');
  if (goldenHourSpots >= 3) earned.push('golden_hour');
  if (
    new Set(
      myReviews
        .filter((r) => {
          const h = hanoiHour(r.createdAt);
          return h >= 22 || h < 3;
        })
        .map((r) => r.spotId),
    ).size >= 3
  )
    earned.push('night_owl');
  if (
    spots.filter(
      (s) =>
        (s.vibes || []).includes('Street-side') &&
        s.reviews.some((r) => r.userId === uid),
    ).length >= 12
  )
    earned.push('plastic_stool');
  if (myPhotos.some((p) => p.thumbs_up)) earned.push('uncle_approved');
  if (myPhotos.some((p) => p.full_uncle)) earned.push('full_uncle');
  if (earned.length >= 25) earned.push('legend');
  return earned;
}

async function checkBadges() {
  if (!cur) return;
  const earned = badgesFor(cur.id);
  const existing = cur.badges || [];
  const newOnes = earned.filter((b) => !existing.includes(b));
  if (!newOnes.length) return;
  const updated = [...new Set([...existing, ...earned])];
  await db.from('profiles').update({ badges: updated }).eq('id', cur.id);
  cur.badges = updated;
  if (profilesCache[cur.id]) profilesCache[cur.id].badges = updated;
  for (const bid of newOnes) {
    const b = BADGES.find((x) => x.id === bid);
    if (b) await showBadgeToast(b);
  }
  if (updated.length >= BADGES.length && !cur.title) {
    setTimeout(() => showTitlePicker(), 1200);
  }
}

function crownFor(uid) {
  const u = uid === cur?.id ? cur : profilesCache[uid] || null;
  return u && u.title ? u.title.split(' ')[0] + ' ' : '';
}

function showTitlePicker() {
  const titles = [
    '👑 Bia Hơi King',
    '👑 Bia Hơi Queen',
    '🏮 Grand Uncle',
    '🏮 Grand Auntie',
  ];
  const btns = titles
    .map(
      (t) =>
        '<button class="btn-line" style="padding:14px 8px;display:flex;flex-direction:column;align-items:center;gap:5px;font-size:14px;cursor:pointer" data-tt="' +
        t +
        '" onclick="pickTitle(this)">' +
        '<span style="font-size:30px">' +
        t.split(' ')[0] +
        '</span>' +
        '<span style="font-weight:700">' +
        t.split(' ').slice(1).join(' ') +
        '</span></button>',
    )
    .join('');
  modal(
    '<div style="text-align:center">' +
      '<div style="font-size:44px;margin-bottom:10px">🏆</div>' +
      '<h2 style="margin:0 0 8px">You\'ve earned every badge!</h2>' +
      '<p style="color:var(--muted);font-size:13px;margin:0 0 18px">You are a <strong>Bác Hơi Legend</strong>. Choose your title — it will appear before your name and place you in the hall of fame forever.</p>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">' +
      btns +
      '</div>' +
      '<p style="font-size:11px;color:var(--muted)">This choice is permanent 🍺</p>' +
      '</div>',
  );
}
function pickTitle(el) {
  setTitle(el.dataset.tt);
}

async function setTitle(t) {
  if (!cur) return;
  const { error } = await db
    .from('profiles')
    .update({ title: t })
    .eq('id', cur.id);
  if (error) return alert('Error saving title: ' + error.message);
  cur.title = t;
  if (profilesCache[cur.id]) profilesCache[cur.id].title = t;
  closeModal();
  showToast('🏆 ' + t + ' — You are now in the Bác Hơi Legends!', 4000);
}

/* ============================================================
   WRAPPED — personal recap + districts-explored tracker
   ============================================================ */
function reviewedDistrictsSet(uid) {
  const set = new Set();
  spots.forEach((s) => {
    if (s.district && s.reviews.some((r) => r.userId === uid)) set.add(s.district);
  });
  return set;
}
async function myCheckedInSpotIds(uid) {
  try {
    const { data } = await db
      .from('check_ins')
      .select('spot_id')
      .eq('user_id', uid);
    return (data || []).map((r) => r.spot_id).filter(Boolean);
  } catch (e) {
    return [];
  }
}
function districtsBarInnerHTML(count, total) {
  const pct = total ? Math.round((count / total) * 100) : 0;
  return (
    '<div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;margin-bottom:6px"><span>' +
    count +
    ' / ' +
    total +
    '</span><span style="color:var(--muted);font-weight:400">' +
    pct +
    '%</span></div><div style="background:var(--line);border-radius:6px;height:8px;overflow:hidden"><div style="background:var(--gold);height:100%;width:' +
    pct +
    '%"></div></div>'
  );
}
function districtsWidgetHTML(count, total, id) {
  return (
    '<div class="sec">🗺️ Districts explored</div><div id="' +
    id +
    '" style="background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:10px 12px;margin-bottom:8px">' +
    districtsBarInnerHTML(count, total) +
    '</div>'
  );
}
async function districtsExploredCount(uid) {
  const set = reviewedDistrictsSet(uid);
  const spotIds = await myCheckedInSpotIds(uid);
  spotIds.forEach((id) => {
    const s = byId(id);
    if (s && s.district) set.add(s.district);
  });
  return set.size;
}
async function wrappedStats(uid) {
  const spotIds = await myCheckedInSpotIds(uid);
  const checkinCounts = {};
  spotIds.forEach((id) => (checkinCounts[id] = (checkinCounts[id] || 0) + 1));
  const checkedSpots = [...new Set(spotIds)].map(byId).filter(Boolean);

  const myReviews = [];
  spots.forEach((s) =>
    s.reviews.forEach((r) => {
      if (r.userId === uid)
        myReviews.push({ ...r, spotId: s.id, spotName: s.name, district: s.district });
    }),
  );
  const myPhotos = spots.flatMap((s) =>
    (s.photos || []).filter((p) => p.uploaded_by === uid),
  );

  const districts = new Set();
  checkedSpots.forEach((s) => s.district && districts.add(s.district));
  myReviews.forEach((r) => r.district && districts.add(r.district));

  const visitedSpotIds = new Set([
    ...checkedSpots.map((s) => s.id),
    ...myReviews.map((r) => r.spotId),
  ]);

  let topSpot = null;
  if (checkedSpots.length) {
    let bestCount = -1,
      bestRating = -1;
    checkedSpots.forEach((s) => {
      const c = checkinCounts[s.id] || 0;
      const r = spotAvg(s);
      if (c > bestCount || (c === bestCount && r > bestRating)) {
        topSpot = s;
        bestCount = c;
        bestRating = r;
      }
    });
  }
  if (!topSpot && myReviews.length) {
    const bySpot = {};
    myReviews.forEach((r) => {
      const s = byId(r.spotId);
      if (!s) return;
      const rating = revAvg(r);
      if (!bySpot[r.spotId] || rating > bySpot[r.spotId].rating)
        bySpot[r.spotId] = { spot: s, rating };
    });
    const arr = Object.values(bySpot).sort((a, b) => b.rating - a.rating);
    topSpot = arr.length ? arr[0].spot : null;
  }

  const u = userById(uid) || {};
  const earned = badgesFor(uid);
  const allEarned = [...new Set([...(earned || []), ...(u.badges || [])])];

  return {
    spotsVisited: visitedSpotIds.size,
    districtsCount: districts.size,
    districtsTotal: URBAN_DISTRICTS.length,
    reviewsWritten: myReviews.length,
    photosAdded: myPhotos.length,
    badgesEarned: allEarned.length,
    badgesTotal: BADGES.length,
    topSpot,
    memberSince: u.since || '',
  };
}
function wrappedTile(icon, value, label) {
  return (
    '<div style="background:var(--paper);border:1px solid var(--line);border-radius:10px;padding:14px 10px;text-align:center">' +
    '<div style="font-size:24px">' +
    icon +
    '</div><div style="font-size:22px;font-weight:800;margin:4px 0 2px">' +
    value +
    '</div><div style="font-size:11px;color:var(--muted)">' +
    label +
    '</div></div>'
  );
}
async function showWrapped() {
  if (!cur) return authModal(false);
  navPush('wrapped');
  openSidebar();
  {
    var _tb = document.querySelector('.toolbar');
    if (_tb) _tb.style.display = 'none';
  }
  document.getElementById('sidebarBody').innerHTML =
    '<div class="panel"><span class="back" onclick="bhBack()">← All spots</span><div style="text-align:center;padding:30px;color:var(--muted)">Loading your Wrapped…</div></div>';

  const st = await wrappedStats(cur.id);
  window._lastWrapped = st;

  const topSpotHTML = st.topSpot
    ? '<div class="list-item" onclick="showDetail(\'' +
      st.topSpot.id +
      '\')">' +
      (st.topSpot.photos && st.topSpot.photos.length
        ? '<img class="list-thumb" src="' + st.topSpot.photos[0].url + '" alt="" loading="lazy">'
        : '<div class="list-thumb-ph">🍺</div>') +
      '<div class="list-text"><h3>' +
      esc(st.topSpot.name) +
      '</h3><div class="meta"><span>' +
      esc(st.topSpot.district || '') +
      '</span></div></div></div>'
    : '<div class="txt-muted" style="padding:6px 0">Check in or review a spot to find your top spot.</div>';

  document.getElementById('sidebarBody').innerHTML =
    '<div class="panel">' +
    '<span class="back" onclick="bhBack()">← All spots</span>' +
    '<h2 style="margin:4px 0 2px">🎁 Your Bác Hơi Wrapped</h2>' +
    '<div style="font-size:12px;color:var(--muted);margin-bottom:14px">Member since ' +
    (st.memberSince || '—') +
    '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">' +
    wrappedTile('🍺', st.spotsVisited, 'Spots visited') +
    wrappedTile('🗺️', st.districtsCount + '/' + st.districtsTotal, 'Districts explored') +
    wrappedTile('✍️', st.reviewsWritten, 'Reviews written') +
    wrappedTile('📷', st.photosAdded, 'Photos added') +
    wrappedTile('🎯', st.badgesEarned + '/' + st.badgesTotal, 'Badges earned') +
    '</div>' +
    districtsWidgetHTML(st.districtsCount, st.districtsTotal, 'districtsWidgetWrapped') +
    '<div class="sec">★ Your top spot</div>' +
    topSpotHTML +
    '<button class="btn-gold" style="width:100%;margin-top:16px" onclick="shareWrapped()">📲 Share my Wrapped</button>' +
    '</div>';
  document.getElementById('sidebar').scrollTop = 0;
}
async function shareWrapped() {
  const st = window._lastWrapped || (cur ? await wrappedStats(cur.id) : null);
  if (!st) return;
  const text =
    'My Bác Hơi Wrapped 🍺 ' +
    st.spotsVisited +
    ' spots visited, ' +
    st.districtsCount +
    '/' +
    st.districtsTotal +
    ' districts explored, ' +
    st.reviewsWritten +
    ' reviews written' +
    (st.topSpot ? ', top spot: ' + st.topSpot.name : '') +
    '.';
  const url = 'https://woustache-max.github.io/Bia-Hoi-Hanoi/';
  if (navigator.share) {
    try {
      await navigator.share({ title: 'My Bác Hơi Wrapped', text, url });
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }
  try {
    await navigator.clipboard.writeText(text + ' ' + url);
    showToast('🔗 Wrapped summary copied to clipboard!');
  } catch (e) {
    prompt('Copy this:', text + ' ' + url);
  }
}

async function showQuests() {
  navPush('quests');
  openSidebar();
  document.getElementById('sidebarBody').innerHTML =
    '<div class="panel"><div style="text-align:center;padding:30px;color:var(--muted)">Loading…</div></div>';

  const { data: legendData } = await db
    .from('profiles')
    .select('id,name,title')
    .not('title', 'is', null);
  const legends = legendData || [];

  const legendsHTML = legends.length
    ? '<div class="legends-wall">' +
      legends
        .map(
          (u) =>
            '<div class="legend-card" onclick="showProfile(\'' +
            u.id +
            '\')">' +
            '<div class="legend-av gold-anim"><span style="font-size:24px">' +
            u.title.split(' ')[0] +
            '</span></div>' +
            '<div class="legend-lbl">' +
            esc(u.title.split(' ').slice(1).join(' ')) +
            '</div>' +
            '<div class="legend-name">' +
            esc(u.name) +
            '</div></div>',
        )
        .join('') +
      '</div>'
    : '<div class="legends-empty">' +
      '<div style="font-size:36px;margin-bottom:8px">🍺</div>' +
      '<p style="font-weight:700;margin:0 0 5px;font-size:15px">No Legends yet</p>' +
      '<p style="color:var(--muted);font-size:13px;margin:0">Earn all ' +
      BADGES.length +
      ' badges, choose your title, and become the first Bác Hơi Legend. Glory awaits.</p>' +
      '</div>';

  // King of Thumbs — current month
  const now = new Date(),
    cm = now.getMonth(),
    cy = now.getFullYear();
  const mName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][cm];
  const thumbsCounts = {};
  spots.forEach((s) =>
    (s.photos || []).forEach((p) => {
      if (!p.thumbs_up) return;
      const d = new Date(p.created_at || 0);
      if (d.getMonth() === cm && d.getFullYear() === cy) {
        thumbsCounts[p.uploaded_by] = (thumbsCounts[p.uploaded_by] || 0) + 1;
      }
    }),
  );
  const kotmRows = Object.entries(thumbsCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const kotmHTML = kotmRows.length
    ? kotmRows
        .map(([uid2, cnt], i) => {
          const u2 = profilesCache[uid2];
          return (
            '<div class="kotm-row">' +
            '<span style="font-weight:700;min-width:24px">' +
            (i === 0 ? '👑' : i + 1 + '.') +
            '</span>' +
            '<span style="flex:1">' +
            (u2 ? esc(u2.name) : 'User') +
            '</span>' +
            '<span style="color:var(--gold-dark);font-weight:700">' +
            cnt +
            '</span>' +
            '<span style="color:var(--muted);font-size:11px"> 👍</span></div>'
          );
        })
        .join('')
    : '<div style="font-size:13px;color:var(--muted);padding:8px 0">No thumbs-up photos this month yet.</div>';

  // Progress section for logged-in users
  let progressHTML = '';
  if (cur) {
    const uid = cur.id;
    const mySpots = spots.filter((s) => s.createdBy === uid);
    const myReviews = [],
      reviewedDistricts = new Set();
    spots.forEach((s) =>
      s.reviews.forEach((r) => {
        if (r.userId === uid) {
          myReviews.push(
            Object.assign({}, r, {
              spotId: s.id,
              spotOpenH: s.openH,
              spotCloseH: s.closeH,
            }),
          );
          if (s.district) reviewedDistricts.add(s.district);
        }
      }),
    );
    const myPhotos = spots.flatMap((s) =>
      (s.photos || []).filter((p) => p.uploaded_by === uid),
    );
    const photoSpots = new Set(myPhotos.map((p) => p.spot_id));
    const myVerified = mySpots.filter((s) => s.verified);
    const helpfulVotes = myReviews.reduce(
      (a, r) => a + (r.helpful || []).length,
      0,
    );
    const myName = cur.name || '';
    const reportCount = spots.reduce(
      (a, s) => a + (s.reports || []).filter((r) => r.by === myName).length,
      0,
    );
    const totalWords = myReviews.reduce(
      (a, r) =>
        a + (r.txt ? r.txt.trim().split(/\s+/).filter(Boolean).length : 0),
      0,
    );
    const fullRated = myReviews.filter((r) =>
      RCATS.every((c) => r.ratings[c[0]] >= 1),
    );
    const beerFive = new Set(
      myReviews.filter((r) => r.ratings.beer === 5).map((r) => r.spotId),
    );
    const hkSpots = spots.filter(
      (s) =>
        s.district === 'Hoàn Kiếm' && s.reviews.some((r) => r.userId === uid),
    );
    const thSpots = spots.filter(
      (s) => s.district === 'Tây Hồ' && s.reviews.some((r) => r.userId === uid),
    );
    const nightIds = new Set(
      myReviews
        .filter((r) => {
          const h = hanoiHour(r.createdAt);
          return h >= 22 || h < 3;
        })
        .map((r) => r.spotId),
    );
    const streetSpots = spots.filter(
      (s) =>
        (s.vibes || []).includes('Street-side') &&
        s.reviews.some((r) => r.userId === uid),
    );
    const pioneerCount = spots.filter((s) => {
      const all = s.reviews
        .slice()
        .sort((a, b) => (a.when || '').localeCompare(b.when || ''));
      return all.length > 0 && all[0].userId === uid;
    }).length;
    const earlyBirdSpots = new Set(
      myReviews
        .filter((r) => {
          const h = hanoiHour(r.createdAt);
          return h >= 9 && h < 12;
        })
        .map((r) => r.spotId),
    ).size;
    const goldenHourSpots = new Set(
      myReviews
        .filter((r) => {
          const h = hanoiHour(r.createdAt);
          return h >= 17 && h < 19;
        })
        .map((r) => r.spotId),
    ).size;
    const reviewsPerSpot = {};
    myReviews.forEach(
      (r) => (reviewsPerSpot[r.spotId] = (reviewsPerSpot[r.spotId] || 0) + 1),
    );
    const sameSpotMax = Object.values(reviewsPerSpot).reduce(
      (m, n) => Math.max(m, n),
      0,
    );
    const foodSpots = new Set(
      myReviews.filter((r) => r.ratings.food >= 1).map((r) => r.spotId),
    ).size;
    const trendsetterMax = mySpots.reduce(
      (m, s) =>
        Math.max(
          m,
          new Set(
            s.reviews
              .map((r) => r.userId)
              .filter((id) => id && id !== 'anon' && id !== uid),
          ).size,
        ),
      0,
    );
    const completeSpots = mySpots.filter(spotIsComplete).length;
    const topPhotoLikes = myPhotos.reduce(
      (m, p) => Math.max(m, (p.likes || []).length),
      0,
    );
    const streakWeeks = new Set(
      myReviews.filter((r) => r.when).map((r) => isoWeekKey(r.when)),
    ).size;
    const allEarned = [...new Set([...(cur.badges || []), ...badgesFor(uid)])];
    const legendCount = allEarned.filter((b) => b !== 'legend').length;
    const done = allEarned.length;
    const total = BADGES.length;

    function qi(id, c, mx, extra) {
      const b = BADGES.find((x) => x.id === id);
      if (!b) return '';
      const earned = allEarned.includes(id);
      const pct = Math.min(100, Math.round((c / mx) * 100));
      return (
        '<div class="qitem' +
        (earned ? ' done' : '') +
        '">' +
        '<div class="qi-icon">' +
        b.icon +
        '</div>' +
        '<div class="qi-body">' +
        '<div class="qi-name">' +
        b.name +
        '</div>' +
        '<div class="qi-desc">' +
        b.desc +
        '</div>' +
        (mx > 1
          ? '<div class="qprog"><div class="qprog-fill' +
            (earned ? ' gn' : '') +
            '" style="width:' +
            pct +
            '%"></div></div>' +
            '<div class="qi-num">' +
            Math.min(c, mx) +
            ' / ' +
            mx +
            '</div>'
          : '') +
        (extra || '') +
        '</div>' +
        '<div class="qi-chk">' +
        (earned ? '✅' : '') +
        '</div></div>'
      );
    }

    progressHTML =
      '<div class="sec" style="margin-top:14px">Your Progress (' +
      done +
      ' / ' +
      total +
      ' badges)</div>' +
      '<div class="qsec">📍 Spots</div>' +
      qi('first_spot', Math.min(mySpots.length, 1), 1) +
      qi('scout', mySpots.length, 10) +
      qi('cartographer', mySpots.length, 25) +
      qi('completionist', completeSpots, 5) +
      qi('trendsetter', trendsetterMax, 10) +
      '<div class="qsec">✍️ Reviews</div>' +
      qi('first_review', Math.min(myReviews.length, 1), 1) +
      qi('regular', myReviews.length, 20) +
      qi('critic', myReviews.length, 30) +
      qi('century_club', myReviews.length, 100) +
      qi('pioneer', pioneerCount, 5) +
      qi('wordsmith', totalWords, 1500) +
      qi('all_rounder', fullRated.length, 20) +
      qi('beer_sommelier', beerFive.size, 10) +
      qi('foodie', foodSpots, 20) +
      qi('the_usual', sameSpotMax, 5) +
      qi('streak', streakWeeks, 5) +
      '<div class="qsec">📷 Photos</div>' +
      qi('photographer', Math.min(myPhotos.length, 1), 1) +
      qi('gallery_owner', myPhotos.length, 25) +
      qi('lensman', photoSpots.size, 20) +
      qi('snapshot_star', topPhotoLikes, 15) +
      '<div class="qsec">👥 Community</div>' +
      qi('helpful', helpfulVotes, 20) +
      qi('community_pillar', helpfulVotes, 50) +
      '<div class="qsec">✅ Verified</div>' +
      qi('verified_spot', Math.min(myVerified.length, 1), 1) +
      qi('trusted', myVerified.length, 10) +
      '<div class="qsec">🗺️ Explorer</div>' +
      qi('district_explorer', reviewedDistricts.size, 6) +
      qi('city_wide', reviewedDistricts.size, 10) +
      qi(
        'all_districts',
        URBAN_DISTRICTS.filter((d) => reviewedDistricts.has(d)).length,
        12,
      ) +
      qi('old_quarter', hkSpots.length, 15) +
      qi('tay_ho', thSpots.length, 10) +
      qi('safety_inspector', reportCount, 5) +
      '<div class="qsec">🕐 Time & Vibe</div>' +
      qi('early_bird', earlyBirdSpots, 3) +
      qi('golden_hour', goldenHourSpots, 3) +
      qi('night_owl', nightIds.size, 3) +
      qi('plastic_stool', streetSpots.length, 12) +
      '<div class="qsec">👍 Uncle Missions</div>' +
      qi(
        'uncle_approved',
        myPhotos.filter((p) => p.thumbs_up).length,
        1,
        '<div class="qi-num">(Honor system — tag when uploading)</div>',
      ) +
      qi(
        'full_uncle',
        myPhotos.filter((p) => p.full_uncle).length,
        1,
        '<div class="qi-num">(5+ people doing thumbs-up)</div>',
      ) +
      '<div class="qsec">🌟 Legend</div>' +
      qi('legend', legendCount, 25);
    const ac = awardCounts(uid);
    progressHTML +=
      '<div class="sec" style="margin-top:14px">🏅 Monthly Awards</div>' +
      '<p style="font-size:12px;color:var(--muted);margin:0 0 8px">Won automatically each month — reach ×' +
      AWARD_PRESTIGE +
      ' for a prestige badge</p>' +
      MONTHLY_AWARDS.map((a) => {
        const n = ac[a.type] || 0,
          pr = n >= AWARD_PRESTIGE;
        return (
          '<div class="qitem' +
          (n > 0 ? ' done' : '') +
          '">' +
          '<div class="qi-icon">' +
          (pr ? a.prestige : a.icon) +
          '</div>' +
          '<div class="qi-body">' +
          '<div class="qi-name">' +
          a.name +
          (n > 0
            ? ' <span style="color:var(--gold-dark);font-weight:800">×' +
              n +
              '</span>'
            : '') +
          '</div>' +
          '<div class="qi-desc">' +
          (pr
            ? '🏛️ ' + a.prestigeName + ' — prestige unlocked!'
            : n > 0
              ? 'Win ' +
                (AWARD_PRESTIGE - n) +
                ' more for the ' +
                a.prestigeName +
                ' badge'
              : 'Be the top this month to win it') +
          '</div>' +
          (n > 0
            ? '<div class="qprog"><div class="qprog-fill' +
              (pr ? ' gn' : '') +
              '" style="width:' +
              Math.min(100, Math.round((n / AWARD_PRESTIGE) * 100)) +
              '%"></div></div><div class="qi-num">' +
              Math.min(n, AWARD_PRESTIGE) +
              ' / ' +
              AWARD_PRESTIGE +
              '</div>'
            : '') +
          '</div>' +
          '<div class="qi-chk">' +
          (pr ? '✅' : '') +
          '</div></div>'
        );
      }).join('');
  }

  document.getElementById('sidebarBody').innerHTML =
    '<div class="panel">' +
    '<span class="back" onclick="bhBack()">← All spots</span>' +
    '<h2 style="margin:0 0 4px">🎯 Quests & Badges</h2>' +
    '<p style="font-size:13px;color:var(--muted);margin:0 0 14px">Explore Vietnam\'s bia hơi scene and earn badges</p>' +
    '<div class="sec">🏆 Bác Hơi Legends</div>' +
    legendsHTML +
    '<div class="sec" style="margin-top:14px">👑 King of Thumbs — ' +
    mName +
    ' ' +
    cy +
    '</div>' +
    '<p style="font-size:12px;color:var(--muted);margin:0 0 8px">Most thumbs-up photos this month</p>' +
    kotmHTML +
    (cur
      ? progressHTML
      : '<div style="font-size:13px;color:var(--muted);text-align:center;padding:20px 0">Sign in to track your quest progress.</div>') +
    '</div>';
}

function fireConfetti() {
  const c = document.createElement('canvas');
  c.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(c);
  const x = c.getContext('2d');
  c.width = innerWidth;
  c.height = innerHeight;
  const cols = [
    '#f5b301',
    '#ff6b35',
    '#4caf50',
    '#2196f3',
    '#e91e63',
    '#ff9800',
  ];
  const ps = Array.from({ length: 70 }, () => ({
    x: Math.random() * innerWidth,
    y: -20,
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 3 + 2,
    col: cols[Math.floor(Math.random() * cols.length)],
    sz: Math.random() * 7 + 4,
    r: Math.random() * 360,
    vr: (Math.random() - 0.5) * 10,
  }));
  let f = 0;
  (function draw() {
    x.clearRect(0, 0, c.width, c.height);
    ps.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;
      p.vy += 0.06;
      x.save();
      x.translate(p.x, p.y);
      x.rotate((p.r * Math.PI) / 180);
      x.fillStyle = p.col;
      x.fillRect(-p.sz / 2, -p.sz / 2, p.sz, p.sz);
      x.restore();
    });
    if (++f < 100) requestAnimationFrame(draw);
    else c.remove();
  })();
}
/* ── HELPERS: generic toast (used app-wide, not just for badges) ── */
function showToast(msg, duration) {
  const el = document.getElementById('badgeToast');
  el.innerHTML = msg;
  el.classList.add('show');
  const plain = (msg || '').replace(/<[^>]+>/g, '');
  const dur = Math.max(
    duration || 0,
    Math.min(7000, Math.max(2600, plain.length * 60)),
  );
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => el.classList.remove('show'), dur);
}
function showBadgeToast(b) {
  return new Promise((res) => {
    const old = document.getElementById('badgeCard');
    if (old) old.remove();
    const el = document.createElement('div');
    el.id = 'badgeCard';
    el.style.cssText =
      'position:fixed;top:44%;left:50%;transform:translate(-50%,-50%) scale(.7);z-index:9600;pointer-events:none;background:var(--card);border:2px solid var(--gold);border-radius:18px;box-shadow:0 14px 44px rgba(0,0,0,.4);padding:22px 26px;width:min(84vw,318px);text-align:center;opacity:0;transition:opacity .3s ease,transform .35s cubic-bezier(.2,.9,.3,1.5)';
    el.innerHTML =
      '<div style="font-size:11px;font-weight:800;letter-spacing:1.5px;color:var(--gold-dark);text-transform:uppercase;margin-bottom:10px">🎉 Badge unlocked</div>' +
      '<div style="font-size:54px;line-height:1;margin-bottom:12px">' +
      b.icon +
      '</div>' +
      '<div style="font-size:19px;font-weight:800;margin-bottom:5px">' +
      esc(b.name) +
      '</div>' +
      '<div style="font-size:13px;color:var(--muted);line-height:1.45">' +
      esc(b.desc || '') +
      '</div>';
    document.body.appendChild(el);
    fireConfetti();
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translate(-50%,-50%) scale(1)';
    });
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%,-50%) scale(.92)';
      setTimeout(() => {
        if (el.parentNode) el.remove();
        res();
      }, 350);
    }, 4500);
  });
}

function inlineBadges(uid) {
  const u = profilesCache[uid];
  if (!u || !u.badges || !u.badges.length) return '';
  return `<span class="inline-badges">${u.badges
    .slice(0, 3)
    .map((bid) => {
      const b = BADGES.find((x) => x.id === bid);
      return b ? b.icon : '';
    })
    .join('')}</span>`;
}

/* ============================================================
   LEADERBOARD — top contributors by spots, reviews, helpful votes
   ============================================================ */
async function showLeaderboard(tab = 'spots') {
  navPush('leaderboard');
  openSidebar();
  window._lbTab = tab;
  const scope = window._lbScope || 'all';
  if (cur && scope === 'following') await ensureFollowing();
  const foll = window._following || new Set();
  // Compute stats for every known user
  const stats = {};
  const addUser = (id) => {
    if (id && id !== 'anon' && id !== 'seed' && !stats[id])
      stats[id] = { spotsAdded: 0, reviews: 0, helpful: 0 };
  };
  spots.forEach((s) => {
    addUser(s.createdBy);
    if (stats[s.createdBy]) stats[s.createdBy].spotsAdded++;
    s.reviews.forEach((r) => {
      addUser(r.userId);
      if (r.userId && stats[r.userId]) {
        stats[r.userId].reviews++;
        stats[r.userId].helpful += (r.helpful || []).length;
      }
    });
  });
  // Sort by selected tab
  const key =
    tab === 'spots' ? 'spotsAdded' : tab === 'reviews' ? 'reviews' : 'helpful';
  const rows = Object.entries(stats)
    .map(([id, s]) => ({ id, ...s }))
    .filter(
      (u) =>
        u[key] > 0 &&
        (scope !== 'following' || foll.has(u.id) || u.id === (cur && cur.id)),
    )
    .sort((a, b) => b[key] - a[key])
    .slice(0, 20);

  const rankIcon = (i) =>
    i === 0
      ? '🥇'
      : i === 1
        ? '🥈'
        : i === 2
          ? '🥉'
          : `<span class="lb-rank">${i + 1}</span>`;
  const scoreLabel =
    tab === 'spots' ? 'Spots' : tab === 'reviews' ? 'Reviews' : 'Helpful votes';

  const tableRows = rows
    .map((u, i) => {
      const profile = profilesCache[u.id];
      const crown =
        profile && profile.title ? profile.title.split(' ')[0] + ' ' : '';
      const name = profile
        ? crown + esc(profile.name)
        : `<span style="color:var(--muted)">User</span>`;
      const badges = inlineBadges(u.id);
      return `<tr onclick="showProfile('${u.id}')">
      <td class="lb-rank">${rankIcon(i)}</td>
      <td><a style="color:var(--ink);font-weight:600;cursor:pointer">${name}</a>${badges}${profile ? ` ${rolePill(profile.role)}` : ''}</td>
      <td class="lb-score">${u[key]}</td>
    </tr>`;
    })
    .join('');

  const tabBtns = ['spots', 'reviews', 'helpful']
    .map(
      (t) =>
        `<button class="lb-tab${t === tab ? ' on' : ''}" onclick="showLeaderboard('${t}')">${t === 'spots' ? '📍 Spots' : t === 'reviews' ? '✍️ Reviews' : '👍 Helpful'}</button>`,
    )
    .join('');

  document.getElementById('sidebarBody').innerHTML = `<div class="panel">
    <span class="back" onclick="bhBack()">← All spots</span>
    <h2 style="margin:0 0 4px">🏆 Leaderboard</h2>
    <p style="font-size:13px;color:var(--muted);margin:0 0 14px">Top contributors to Bác Hơi</p>
    <div class="lb-tabs">${tabBtns}</div>
    ${
      cur
        ? `<div style="display:flex;gap:6px;margin:8px 0 4px">
      <button onclick="setLbScope('all')" style="flex:1;padding:5px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid var(--line);background:${scope === 'all' ? 'var(--gold)' : 'transparent'};color:var(--ink)">Everyone</button>
      <button onclick="setLbScope('following')" style="flex:1;padding:5px;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;border:1px solid var(--line);background:${scope === 'following' ? 'var(--gold)' : 'transparent'};color:var(--ink)">Following</button>
    </div>`
        : ''
    }
    ${
      rows.length
        ? `<table class="lb-table">
      <tr><th></th><th>Contributor</th><th style="text-align:right">${scoreLabel}</th></tr>
      ${tableRows}
    </table>`
        : `<div class="empty-note">${scope === 'following' ? 'Follow people to compare with your circle.' : 'No data yet — be the first to contribute!'}</div>`
    }
  </div>`;
}
function setLbScope(s) {
  window._lbScope = s;
  showLeaderboard(window._lbTab || 'spots');
}

/* ============================================================
   ONBOARDING / LEGAL — welcome overlay, About, policies, age gate
   ============================================================ */
function dismissWelcome() {
  const w = document.getElementById('welcomeOverlay');
  if (w) w.classList.add('hidden');
  try {
    localStorage.setItem('welcomed', '1');
  } catch (e) {}
}
function showAbout() {
  modal(
    '<div style="text-align:center;max-height:76vh;overflow-y:auto">' +
      '<div style="font-size:42px;margin-bottom:4px">🍺</div>' +
      '<h2 style="margin:0 0 2px">About Bác Hơi</h2>' +
      '<div style="font-size:12px;color:var(--muted);margin-bottom:14px">v' +
      APP_VERSION +
      '</div>' +
      '<div style="text-align:left;font-size:13px;line-height:1.55">' +
      '<p style="margin:0 0 8px">Bác Hơi is a free, community-run map of Vietnam\'s bia hơi and fresh draft-beer spots — born in Hanoi and growing across the country. Every spot, review and photo is added by people who love Vietnam\'s street-corner beer culture.</p>' +
      '<p style="margin:0 0 8px">Our goal is simple: help you find a good, cheap, cold glass of bia hơi near you — and celebrate the places that make it special.</p>' +
      '<p style="margin:0 0 8px"><b>Please enjoy responsibly.</b> Bác Hơi is intended for adults of legal drinking age (18+). Look after your friends, respect the neighbourhood, and never drink and drive.</p>' +
      '</div>' +
      '<div style="display:flex;gap:12px;justify-content:center;margin:16px 0 2px;font-size:12px"><a onclick="showPrivacy()" style="color:var(--muted);cursor:pointer;text-decoration:underline">Privacy</a><a onclick="showTerms()" style="color:var(--muted);cursor:pointer;text-decoration:underline">Terms</a></div>' +
      '<button class="btn-gold btn-sm" style="margin-top:10px" onclick="closeModal()">Close</button>' +
      '</div>',
  );
}
function showHelp() {
  const s = (t, b) =>
    '<details style="border-bottom:1px solid var(--line)"><summary style="cursor:pointer;list-style:none;padding:11px 2px;font-weight:700;font-size:14px">' +
    t +
    '</summary><div style="font-size:13px;line-height:1.55;padding:0 2px 12px">' +
    b +
    '</div></details>';
  modal(
    '<div style="max-height:78vh;overflow-y:auto;text-align:left;padding-right:4px">' +
      '<h2 style="margin:0 0 4px">❓ Help &amp; FAQ</h2>' +
      '<p style="font-size:12px;color:var(--muted);margin:0 0 10px">Everything you can do on Bác Hơi — tap a topic to expand.</p>' +
      s('🚀 Getting started', 'Bác Hơi is a community map of Vietnam’s best bia hơi spots. Browse the map or the side list and tap a beer icon to open a spot. You can explore freely — you only need a free account to add spots, write reviews, or upload photos.') +
      s('📲 Install it on your phone', 'Add Bác Hơi to your home screen so it opens full-screen like an app.<br><b>iPhone (Safari):</b> tap the Share button (□↑) at the bottom → “Add to Home Screen” → Add.<br><b>Android (Chrome):</b> tap the ⋮ menu → “Install app” → Install.') +
      s('🔎 Finding a spot', 'Use <b>Search</b> to find a place by name, or <b>⚲ Filters</b> to narrow by district, vibe (you can pick several), rating, price, open-now, or verified-only. <b>📍 Near me</b> sorts spots by distance using your location. <b>🔀 Random</b> picks a surprise spot from whatever’s on your screen.') +
      s('➕ Adding a spot', 'Tap <b>+ Add spot</b>, drop a pin on the map, and fill in the details — name, price per glass, hours, vibes, and a photo. Anyone can add a spot; new ones start “unverified” until confirmed by an active member or admin.') +
      s('⭐ Reviews & ratings', 'Open a spot and scroll to “Add your review.” Rate it across categories (beer, food, atmosphere, cleanliness, service) and add a comment if you’re signed in. You can mark other people’s reviews as 👍 Helpful and reply to them.') +
      s('📷 Photos', 'On a spot, tap “Add photo” to upload one — photos are automatically shrunk so they load fast and save space. Tap ❤️ to like a photo. You can tag a photo “👍 Uncle Approved” or “🤙 Full Uncle” for fun badges.') +
      s('🕓 Check-ins & freshness', 'Sitting at a spot? Tap <b>✓ Check in</b> to confirm it’s still open — you need to be nearby for it to count. Each spot shows when it was “last checked in,” so everyone can trust the info is fresh.') +
      s('👥 Following & the Latest feed', 'Open someone’s profile and tap <b>Follow</b>. The <b>Latest</b> feed has two tabs: <b>Everyone</b> (all recent activity) and <b>Following</b> (just people you follow). There’s no messaging — following is only for seeing each other’s contributions.') +
      s('🏅 Badges, Quests & Rewards', 'Earn badges for contributing — adding spots, writing reviews, uploading photos, exploring districts, and more. The 🎯 Quests screen shows your progress. Some awards are monthly (Photo / Reviewer / Explorer of the Month), and winning one repeatedly unlocks a prestige tier.') +
      s('🔑 Account & levels', 'Sign up free with an email (you’ll confirm it via a link). New members start as <b>Newcomer</b> with a shorter review limit; write <b>2 reviews</b> to become <b>Active</b>, which unlocks full-length reviews and auto-verified spots. Forgot your password? Use “Forgot password?” on the sign-in screen.') +
      s('🏆 Leaderboard', 'See the top contributors by spots added, reviews written, or helpful votes. Switch between <b>Everyone</b> and <b>Following</b> to compare with just the people you follow.') +
      s('🔖 Saved spots', 'Tap 🔖 Save on any spot to bookmark it, then find your saved spots from the <b>Saved</b> button or your profile.') +
      s('🔔 Notifications', 'The 🔔 bell lights up when someone likes your photo, marks your review helpful, replies to you, verifies your spot, or follows you.') +
      s('🕯️ Lost spots & the archive', 'When a spot closes for good it isn’t deleted — it moves to the <b>Lost spots</b> memorial (in the logo menu) so it’s never forgotten. Think a spot might be closing? Flag it via a spot’s ⋯ More → Report. Turn on <b>Ghost pins</b> (logo menu) to see closed spots faintly on the map.') +
      s('🎲 Games & sharing', 'The account menu has drinking games to play at the hơi (Một Hai Ba Dô, Horse Racing and more). Use 📲 Share, or a spot’s Share button, to send friends a link or QR code.') +
      s('🌙 Dark mode', 'Switch between light and dark themes any time from the account menu (🌙 Dark mode).') +
      s('⚑ Reporting & safety', 'See something wrong — a closed spot, wrong location, or bad content? Open the spot → ⋯ More → Report. Bác Hơi is for adults of legal drinking age; please enjoy responsibly and never drink and drive.') +
      s('🔒 Privacy', 'We only collect what’s needed to run the app, and we never sell your data. Read the full <a onclick="showPrivacy()" style="color:var(--gold-dark);cursor:pointer">Privacy Policy</a> and <a onclick="showTerms()" style="color:var(--gold-dark);cursor:pointer">Terms of Use</a>.') +
      '<div style="margin-top:14px;text-align:right"><button class="btn-gold btn-sm" onclick="closeModal()">Close</button></div>' +
      '</div>',
  );
}
function policyModal(title, updated, bodyHtml) {
  modal(
    '<div style="max-height:76vh;overflow-y:auto;text-align:left;padding-right:4px">' +
      '<h2 style="margin:0 0 2px">' +
      title +
      '</h2>' +
      '<div style="font-size:12px;color:var(--muted);margin-bottom:12px">Last updated: ' +
      updated +
      '</div>' +
      bodyHtml +
      '<div style="margin-top:16px;text-align:right"><button class="btn-gold btn-sm" onclick="closeModal()">Close</button></div>' +
      '</div>',
  );
}
function _pp(t) {
  return (
    '<p style="font-size:13px;line-height:1.55;margin:0 0 8px">' + t + '</p>'
  );
}
function _ph(t) {
  return '<h3 style="font-size:15px;margin:14px 0 4px">' + t + '</h3>';
}
function showPrivacy() {
  policyModal(
    'Privacy Policy',
    '7 July 2026',
    _pp(
      'Bác Hơi ("we", "us") is a free, community-run, crowdsourced map of bia hơi and draft-beer spots. This policy explains what we collect and how we use it.',
    ) +
      _ph('Information we collect') +
      _pp(
        '<b>Account.</b> When you create an account we store your email address and the display name you choose. Sign-in is handled by our authentication provider.',
      ) +
      _pp(
        '<b>Content you post.</b> Spots, reviews, ratings, photos, replies, bookmarks and reports you submit are stored so the app can display them.',
      ) +
      _pp(
        '<b>Location.</b> If you use "Near me", your device shares your approximate location with your browser to show nearby spots. We use it only to sort spots by distance and do not store your location on our servers.',
      ) +
      _pp(
        "<b>Device storage.</b> We use your browser's local storage to remember preferences such as your theme, filters and age confirmation. We do not use advertising cookies or trackers.",
      ) +
      _ph('How we use it') +
      _pp(
        'To operate the app, display community content, award badges, prevent abuse, and contact you about your account.',
      ) +
      _ph('Storage and sharing') +
      _pp(
        'Data is stored with our backend and cloud-storage providers, who process it on our behalf. We do not sell your data. Content you post — including your display name, spots, reviews and photos — is public to other users. We may disclose information if required by law.',
      ) +
      _ph('Your choices') +
      _pp(
        'You can edit or delete the reviews, photos and spots you add. To request deletion of your account and associated data, contact us using the details below.',
      ) +
      _ph('Age') +
      _pp(
        'Bác Hơi is intended only for adults of legal drinking age (18+). We do not knowingly collect information from anyone under 18.',
      ) +
      _ph('Security and changes') +
      _pp(
        'We take reasonable steps to protect your data, but no online service is completely secure. We may update this policy; the "last updated" date above will change.',
      ) +
      _ph('Contact') +
      _pp(
        'Questions about privacy? A contact address will be added here soon.',
      ),
  );
}
function showTerms() {
  policyModal(
    'Terms of Use',
    '7 July 2026',
    _pp(
      'By using Bác Hơi you agree to these Terms. If you do not agree, please do not use the app.',
    ) +
      _ph('1. Eligibility (18+)') +
      _pp(
        'You must be 18 years or older, and of legal drinking age where you live, to use Bác Hơi.',
      ) +
      _ph('2. The service') +
      _pp(
        'Bác Hơi is a free, community-run guide. All spot information is submitted by users and may be inaccurate, incomplete or out of date. We do not guarantee the accuracy, availability, prices or opening hours of any venue. Please verify details yourself before relying on them.',
      ) +
      _ph('3. Your content') +
      _pp(
        'You keep ownership of the content you post, and grant us a non-exclusive, worldwide, royalty-free licence to display and distribute it within the app. You are responsible for what you post and must not post content that is illegal, infringing, false, misleading or offensive.',
      ) +
      _ph('4. Acceptable use') +
      _pp(
        'Do not spam, harass others, create fake listings, scrape the service, or otherwise misuse it. We may remove content or suspend accounts at our discretion.',
      ) +
      _ph('5. Alcohol and responsibility') +
      _pp(
        'Bác Hơi provides information about venues that serve alcohol. It does not encourage excessive or irresponsible drinking. Please drink responsibly, follow local laws, and never drink and drive.',
      ) +
      _ph('6. Disclaimer and liability') +
      _pp(
        'The app is provided "as is", without warranties of any kind. To the maximum extent permitted by law, we are not liable for any loss or harm arising from your use of the app, your reliance on its content, or your visit to any listed venue.',
      ) +
      _ph('7. Third-party services') +
      _pp(
        'Directions and links may open third-party services (such as map providers) that are governed by their own terms.',
      ) +
      _ph('8. Changes and governing law') +
      _pp(
        'We may update these Terms; continued use means you accept the changes. These Terms are governed by the laws of Vietnam.',
      ) +
      _ph('9. Contact') +
      _pp('A contact address will be added here soon.'),
  );
}
function showAgeGate() {
  try {
    if (localStorage.getItem('bhAge18')) {
      showWelcomeIfNew();
      return;
    }
  } catch (e) {
    showWelcomeIfNew();
    return;
  }
  var el = document.createElement('div');
  el.id = 'ageGate';
  el.style.cssText =
    'position:fixed;inset:0;z-index:2800;background:var(--nav-bg);display:flex;align-items:center;justify-content:center;padding:24px;overflow-y:auto';
  el.innerHTML =
    '<div style="max-width:360px;width:100%;text-align:center;color:#fff">' +
    '<div style="font-size:44px;margin-bottom:6px">🍺</div>' +
    '<h2 style="margin:0 0 8px;color:#fff;font-size:23px">Are you 18 or older?</h2>' +
    '<p style="color:rgba(255,255,255,.82);font-size:14px;line-height:1.55;margin:0 0 20px">Bác Hơi is a guide to bia hơi and draft-beer spots, intended for adults of legal drinking age. Please enjoy responsibly.</p>' +
    '<button onclick="confirmAge()" style="width:100%;background:var(--gold);color:#241b12;border:none;border-radius:11px;padding:13px;font-size:15px;font-weight:800;cursor:pointer;font-family:inherit;margin-bottom:9px">Yes, I\'m 18 or older</button>' +
    '<button onclick="denyAge()" style="width:100%;background:transparent;color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.3);border-radius:11px;padding:12px;font-size:14px;cursor:pointer;font-family:inherit">I\'m under 18</button>' +
    '<div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:16px;line-height:1.5">By entering you agree to our <a onclick="showTerms()" style="color:var(--gold);cursor:pointer;text-decoration:underline">Terms of Use</a> and <a onclick="showPrivacy()" style="color:var(--gold);cursor:pointer;text-decoration:underline">Privacy Policy</a>.</div>' +
    '</div>';
  document.body.appendChild(el);
}
function confirmAge() {
  try {
    localStorage.setItem('bhAge18', '1');
  } catch (e) {}
  var g = document.getElementById('ageGate');
  if (g) g.remove();
  showWelcomeIfNew();
}
function denyAge() {
  var g = document.getElementById('ageGate');
  if (!g) return;
  g.innerHTML =
    '<div style="max-width:340px;text-align:center;color:#fff"><div style="font-size:44px;margin-bottom:6px">🔞</div><h2 style="margin:0 0 8px;color:#fff;font-size:22px">Come back when you\'re 18</h2><p style="color:rgba(255,255,255,.82);font-size:14px;line-height:1.55">Sorry — Bác Hơi is only for adults of legal drinking age. Please close this page.</p></div>';
}
function showWelcomeIfNew() {
  // Don't show if arriving via deep-link — they were sent here intentionally
  const params = new URLSearchParams(window.location.search);
  if (params.get('spot')) return;
  if (!localStorage.getItem('welcomed')) {
    const _wo = document.getElementById('welcomeOverlay');
    if (_wo) _wo.classList.remove('hidden');
  }
}
init();
window.addEventListener('DOMContentLoaded', function () {
  showAgeGate();
});

/* ============================================================
   BACK-BUTTON NAVIGATION (mobile history intercept)
   ============================================================ */
var _navSig = '';
function bhSig() {
  if (document.getElementById('modal')) return 'modal';
  var b = document.getElementById('sidebarBody');
  if (b && b.querySelector('.panel')) return 'panel';
  var sb = document.getElementById('sidebar');
  if (sb && (sb.classList.contains('open') || sb.classList.contains('peek')))
    return 'list';
  return '';
}
// Push ONE real history entry per navigation level, on a normal user tap (reliable —
// no push happens during the back event). Re-render-safe: same view won't stack entries.
function navPush(sig) {
  if (sig === _navSig) return;
  history.pushState({ bhNav: 1 }, '');
  _navSig = sig;
}
// In-app back (← links) route through history so the browser stack stays in sync.
function bhBack() {
  if (_navSig) {
    history.back();
  } else {
    renderList();
  }
}
window.addEventListener('popstate', function () {
  var modal = document.getElementById('modal');
  if (modal) {
    closeModal();
    _navSig = bhSig();
    return;
  }
  var body = document.getElementById('sidebarBody');
  if (body && body.querySelector('.panel')) {
    renderList();
    _navSig = bhSig();
    return;
  }
  var sb = document.getElementById('sidebar');
  if (
    sb &&
    (sb.classList.contains('open') || sb.classList.contains('peek')) &&
    window.innerWidth <= 680
  ) {
    closeSidebar();
    _navSig = bhSig();
    return;
  }
});

/* ── Service Worker registration ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js', { scope: '/Bia-Hoi-Hanoi/' })
      .then((r) => console.log('SW registered:', r.scope))
      .catch((e) => console.warn('SW registration failed:', e));
  });
}

/* ── PWA install prompt ── */
(function () {
  var _deferredPrompt = null;
  var _prompted = localStorage.getItem('pwaPrompted');
  var _installed =
    window.matchMedia('(display-mode: standalone)').matches ||
    navigator.standalone;
  if (_installed || _prompted) return;

  // iOS can't use the auto-install prompt — show Add-to-Home-Screen instructions instead
  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
    document.addEventListener('DOMContentLoaded', function () {
      var el = document.getElementById('pwaPrompt');
      if (!el) return;
      var t = el.querySelector('.pwa-text');
      if (t)
        t.innerHTML =
          'Install <b>Bác Hơi</b>: in Safari, tap the Share icon, then "Add to Home Screen".';
      var ib = document.getElementById('pwaInstallBtn');
      if (ib) ib.style.display = 'none';
      setTimeout(function () {
        el.classList.add('show');
      }, 5000);
    });
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    _deferredPrompt = e;
    setTimeout(function () {
      var el = document.getElementById('pwaPrompt');
      if (el) el.classList.add('show');
    }, 30000); // show after 30 s
  });

  window.addEventListener('appinstalled', function () {
    var el = document.getElementById('pwaPrompt');
    if (el) el.classList.remove('show');
    localStorage.setItem('pwaPrompted', '1');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var installBtn = document.getElementById('pwaInstallBtn');
    var dismissBtn = document.getElementById('pwaDismissBtn');
    if (installBtn) {
      installBtn.addEventListener('click', function () {
        if (!_deferredPrompt) return;
        _deferredPrompt.prompt();
        _deferredPrompt.userChoice.then(function (c) {
          localStorage.setItem('pwaPrompted', '1');
          var el = document.getElementById('pwaPrompt');
          if (el) el.classList.remove('show');
          _deferredPrompt = null;
        });
      });
    }
    if (dismissBtn) {
      dismissBtn.addEventListener('click', function () {
        localStorage.setItem('pwaPrompted', '1');
        var el = document.getElementById('pwaPrompt');
        if (el) el.classList.remove('show');
      });
    }
  });
})();
