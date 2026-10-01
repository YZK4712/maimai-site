/* ============ 内容数据（直接改这里即可） ============ */

// 玩家资料（来自 B50 成绩图）
const player = { name: "Y2Kago11", dan: "六段", rating: 12732, b35: 8962, b15: 3770 };

// 最喜欢的音乐
const favorites = [
  { title: "月光", artist: "", c: "#6ee7ff", tag: "MOONLIGHT",
    note: "最喜欢的一首。定数 11.2，SSS+ · FC+ · FS+，100.6535%。" },
  { title: "QZKago Requiem", artist: "t+pazolite", c: "#ff7ab8", tag: "REQUIEM",
    note: "定数 13.0，97.7167%，名字里就有 Kago。压迫感与旋律并存。" },
  { title: "とびだせ！TO THE COSMIC!!", artist: "", c: "#a78bfa", tag: "COSMIC",
    note: "定数 12.5，99.3288%，SS · FC。向宇宙的尽头出发。" },
];

// 打过的歌（来自 B50；grp: B35 旧曲 / B15 新曲）
const played = [
  ["月光", "", 11.2, 100.6535, "B15"],
  ["QZKago Requiem", "t+pazolite", 13.0, 97.7167, "B35"],
  ["とびだせ！TO THE COSMIC!!", "", 12.5, 99.3288, "B35"],
  ["Synthesis.", "", 12.6, 100.0954, "B15"],
  ["Destined Marionette", "", 12.5, 100.3917, "B15"],
  ["きゅびびびびずむ", "", 12.0, 100.7718, "B15"],
  ["Fraq", "", 12.2, 100.3054, "B15"],
  ["ウタヒメナイトストーム", "", 11.5, 100.6570, "B15"],
  ["弱虫モンブラン", "", 12.7, 100.1002, "B35"],
  ["ウミユリ海底譚", "", 13.4, 98.6197, "B35"],
  ["tape/stop/night", "", 12.8, 99.5803, "B35"],
  ["系ぎて", "", 13.8, 97.0325, "B35"],
  ["エンドマークに希望と涙を添えて", "", 12.7, 99.7837, "B35"],
  ["New York Back Raise", "", 12.7, 99.4207, "B35"],
  ["Cthugha", "", 12.5, 99.7057, "B35"],
  ["ENERGY SYNERGY MATRIX", "", 13.0, 98.1970, "B35"],
  ["初音ミクの消失", "", 12.0, 100.1298, "B35"],
  ["ULTRA SYNERGY MATRIX", "", 12.0, 100.1038, "B35"],
  ["Ai C", "", 12.0, 100.0669, "B35"],
  ["Chronomia", "", 12.5, 99.1866, "B35"],
  ["エータ・ベータ・イータ", "", 12.4, 99.3505, "B35"],
  ["folern", "", 12.2, 99.7476, "B35"],
  ["零號車輛", "", 12.8, 98.3274, "B35"],
  ["幸せになれる隠しコマンドがあるらしい", "", 12.7, 98.7613, "B35"],
].map(([title, artist, lv, acc, gen]) => ({
  title, artist, lv: lv.toFixed(1), acc: acc.toFixed(4) + "%", gen,
  c: lv >= 13 ? "#ff7ab8" : lv >= 12 ? "#a78bfa" : "#6ee7ff",
}));

// 最喜欢的谱
const charts = [
  { title: "QZKago Requiem", artist: "t+pazolite", diff: "13.0", c: "#ff7ab8",
    note: "97.7167% · S+。还有提升空间，下一个目标是 SS。" },
  { title: "月光", artist: "", diff: "11.2", c: "#6ee7ff",
    note: "SSS+ · FC+ · FS+ 全满贯，最喜欢的谱。" },
  { title: "とびだせ！TO THE COSMIC!!", artist: "", diff: "12.5", c: "#a78bfa",
    note: "99.3288% · SS · FC，差一点就是 SS+。" },
];

// 推し与偏好
const oshi = [
  { tag: "OSHI", title: "shama", c: "#ff7ab8", note: "主推。" },
  { tag: "OSHI", title: "milk", c: "#ffd86b", note: "主推。" },
  { tag: "PROJECT SEKAI", title: "25时", c: "#a78bfa", note: "夜里 25:00，Nightcord 见。",
    members: ["奏", "真冬", "绘名", "瑞希"] },
  { tag: "LEO/NEED", title: "Leo/need 全员", c: "#6ee7ff", note: "全员都喜欢。",
    members: ["一歌", "咲希", "穗波", "志步"] },
  { tag: "KAMITSUBAKI", title: "星界", c: "#c4b5fd", note: "神椿的歌声。" },
  { tag: "KAMITSUBAKI", title: "可不", c: "#ffffff", note: "KAFU，神椿的歌声。" },
  { tag: "BAND", title: "结束乐队", c: "#ff7ab8", note: "最喜欢的乐队之一。" },
  { tag: "BAND", title: "MyGO!!!!!", c: "#6ee7ff", note: "迷子也要一起走下去。" },
  { tag: "ANIME", title: "咒术回战", c: "#a78bfa", note: "喜欢的作品。" },
  { tag: "OSHI", title: "筱泽广", c: "#ffd86b", note: "喜欢。" },
  { tag: "OSHI", title: "纱露朵", c: "#ff7ab8", note: "喜欢。" },
  { tag: "CN", title: "cn：反移情", c: "#9aa0cf", note: "保持一点距离，也保持喜欢。" },
];

/* ============ 渲染 ============ */
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

$("favCards").innerHTML = favorites.map(f => `
  <article class="card" style="--c:${f.c}">
    <div class="tag">${esc(f.tag)}</div>
    <h3>${esc(f.title)}</h3>
    <div class="artist">${esc(f.artist)}</div>
    <p>${esc(f.note)}</p>
  </article>`).join("");

$("chartCards").innerHTML = charts.map(c => `
  <article class="chart" style="--c:${c.c}">
    <span class="diff">${esc(c.diff)}</span>
    <h3>${esc(c.title)}</h3>
    <div class="artist">${esc(c.artist)}</div>
    <p>${esc(c.note)}</p>
  </article>`).join("");

$("oshiCards").innerHTML = oshi.map(o => `
  <article class="card" style="--c:${o.c}">
    <div class="tag">${esc(o.tag)}</div>
    <h3>${esc(o.title)}</h3>
    <p>${esc(o.note)}</p>
    ${o.members ? `<div class="members">${o.members.map(m => `<span>${esc(m)}</span>`).join("")}</div>` : ""}
  </article>`).join("");

// 歌曲列表 + 分类筛选
const gens = ["全部", "B35", "B15"];
let cur = "全部";
function renderSongs() {
  $("songList").innerHTML = played
    .filter(p => cur === "全部" || p.gen === cur)
    .map(p => `
      <li>
        <div><b>${esc(p.title)}</b><small>${esc(p.artist)}</small></div>
        <span class="gen">${esc(p.acc)} · ${esc(p.gen)}</span>
        <span class="lv" style="--c:${p.c}">${esc(p.lv)}</span>
      </li>`).join("");
}
$("filters").innerHTML = gens.map(g => `<button class="${g === cur ? "on" : ""}">${esc(g)}</button>`).join("");
$("filters").addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  cur = e.target.textContent;
  [...$("filters").children].forEach(b => b.classList.toggle("on", b === e.target));
  renderSongs();
});
renderSongs();

/* ============ 背景：飘浮的圆环与星点（舞萌 × 宇宙） ============ */
const cv = $("bg"), ctx = cv.getContext("2d");
let W, H, items = [];
const cols = ["#ff7ab8", "#6ee7ff", "#a78bfa", "#ffd86b"];
function resize() {
  W = cv.width = innerWidth; H = cv.height = innerHeight;
  items = Array.from({ length: 70 }, (_, i) => ({
    x: Math.random() * W, y: Math.random() * H,
    r: i % 7 === 0 ? 14 + Math.random() * 26 : 1 + Math.random() * 1.8,
    ring: i % 7 === 0, v: .1 + Math.random() * .35,
    c: cols[i % cols.length], p: Math.random() * 6.28,
  }));
}
addEventListener("resize", resize); resize();
(function loop(t = 0) {
  ctx.clearRect(0, 0, W, H);
  for (const o of items) {
    o.y -= o.v; if (o.y < -50) { o.y = H + 50; o.x = Math.random() * W; }
    ctx.globalAlpha = o.ring ? .25 : .4 + .4 * Math.sin(t / 700 + o.p);
    ctx.strokeStyle = ctx.fillStyle = o.c;
    ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, 6.283);
    if (o.ring) { ctx.lineWidth = 2; ctx.stroke(); } else ctx.fill();
  }
  requestAnimationFrame(loop);
})();

$("playerInfo").innerHTML = `<b>${esc(player.name)}</b> · ${esc(player.dan)} · Rating <b>${player.rating}</b><small>B35 ${player.b35} + B15 ${player.b15}</small>`;
