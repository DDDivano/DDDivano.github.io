// 渲染逻辑：从 window.RESUME 读数据填到页面里。一般不需要改这个文件。
(function () {
  const R = window.RESUME;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const TAG = 'px-2 py-0.5 rounded-md text-xs bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-300';

  // ---- 主题切换 ----
  $('theme-toggle').addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });

  // ---- 顶部 ----
  const p = R.profile;
  document.title = `${p.name} · ${p.handle}`;
  $('nav-name').textContent = p.handle || p.name;
  $('name').textContent = p.name;
  $('tagline').textContent = p.tagline || '';
  $('meta').textContent = [p.handle && '@' + p.handle, p.location].filter(Boolean).join(' · ');

  $('avatar').appendChild(
    p.avatar
      ? el('img', 'w-24 h-24 rounded-2xl object-cover ring-1 ring-slate-300 dark:ring-slate-700')
      : el('div', 'w-24 h-24 rounded-2xl grid place-items-center text-3xl font-bold text-white bg-gradient-to-br from-sky-500 to-indigo-600', esc(p.name.slice(0, 1)))
  );
  if (p.avatar) $('avatar').firstChild.src = p.avatar;

  (p.links || []).forEach((l) => {
    const a = el('a', 'px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition', esc(l.label));
    a.href = l.url;
    if (!l.url.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    $('links').appendChild(a);
  });

  (p.intro || []).forEach((t) => $('intro').appendChild(el('p', null, esc(t))));

  // ---- 数字亮点 ----
  const hs = R.highlights || [];
  if (!hs.length) $('highlights').remove();
  hs.forEach((h) => {
    const box = el('div', 'card rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center bg-white dark:bg-slate-900');
    box.appendChild(el('div', 'text-2xl font-bold text-sky-600 dark:text-sky-400', esc(h.value)));
    box.appendChild(el('div', 'mt-1 text-xs text-slate-500 dark:text-slate-400', esc(h.label)));
    $('highlights').appendChild(box);
  });
  // ---- 时间线 ----
  (R.timeline || []).forEach((t) => {
    const item = el('div', 'card relative pl-6 pb-8 last:pb-0');
    item.appendChild(el('span', 'absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-slate-50 dark:ring-slate-950'));
    item.appendChild(el('div', 'text-xs text-slate-500 dark:text-slate-400', esc(t.period)));
    item.appendChild(el('h3', 'mt-1 font-semibold', esc(t.title)));
    if (t.org) item.appendChild(el('div', 'text-sm text-slate-500 dark:text-slate-400', esc(t.org)));
    if (t.points && t.points.length) {
      const ul = el('ul', 'mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-outside ml-4');
      t.points.forEach((x) => ul.appendChild(el('li', null, esc(x))));
      item.appendChild(ul);
    }
    if (t.tags && t.tags.length) {
      const row = el('div', 'mt-3 flex flex-wrap gap-1.5');
      t.tags.forEach((x) => row.appendChild(el('span', TAG, esc(x))));
      item.appendChild(row);
    }
    $('timeline').appendChild(item);
  });

  // ---- 项目卡片 ----
  (R.projects || []).forEach((pr) => {
    const card = el('div', 'card group rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 hover:border-sky-500 transition');
    const head = el('div', 'flex items-baseline justify-between gap-2');
    if (pr.url) {
      const a = el('a', 'font-semibold hover:text-sky-600 dark:hover:text-sky-400', esc(pr.name));
      a.href = pr.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      head.appendChild(a);
      head.appendChild(el('span', 'no-print text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition', '↗'));
    } else {
      head.appendChild(el('span', 'font-semibold', esc(pr.name)));
    }
    card.appendChild(head);
    if (pr.role) card.appendChild(el('div', 'mt-0.5 text-xs text-slate-500 dark:text-slate-400', esc(pr.role)));
    if (pr.desc) card.appendChild(el('p', 'mt-2 text-sm text-slate-600 dark:text-slate-300', esc(pr.desc)));
    if (pr.tags && pr.tags.length) {
      const row = el('div', 'mt-3 flex flex-wrap gap-1.5');
      pr.tags.forEach((x) => row.appendChild(el('span', TAG, esc(x))));
      card.appendChild(row);
    }
    $('project-grid').appendChild(card);
  });

  // ---- 技能 ----
  (R.skills || []).forEach((s) => {
    const row = el('div', 'flex flex-col sm:flex-row sm:items-center gap-2');
    row.appendChild(el('div', 'w-16 shrink-0 text-sm text-slate-500 dark:text-slate-400', esc(s.group)));
    const wrap = el('div', 'flex flex-wrap gap-1.5');
    s.items.forEach((x) => wrap.appendChild(el('span', TAG, esc(x))));
    row.appendChild(wrap);
    $('skill-list').appendChild(row);
  });

  // ---- 页脚 ----
  const f = R.footer || {};
  $('footer').innerHTML = [f.note && esc(f.note), f.updated && '更新于 ' + esc(f.updated)].filter(Boolean).join(' · ');

  // ---- 滚动进入动画 ----
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach((n) => io.observe(n));
})();
