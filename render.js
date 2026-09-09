// 从 window.RESUME 渲染页面。内容都在 data.js，一般不需要改这个文件。
(function () {
  var R = window.RESUME;
  if (!R) return;

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };
  // 轻标记：**加粗**（先转义再替换，不留 XSS 口子）
  var rich = function (s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g,
      '<strong class="font-semibold text-slate-800 dark:text-slate-100">$1</strong>');
  };

  var TAG = 'px-2 py-0.5 rounded-md text-xs bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-300';

  var bullets = function (parent, points) {
    if (!points || !points.length) return;
    var ul = el('ul', 'mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-outside ml-4');
    points.forEach(function (x) { ul.appendChild(el('li', null, esc(x))); });
    parent.appendChild(ul);
  };
  var tagRow = function (parent, tags) {
    if (!tags || !tags.length) return;
    var row = el('div', 'mt-3 flex flex-wrap gap-1.5');
    tags.forEach(function (x) { row.appendChild(el('span', TAG, esc(x))); });
    parent.appendChild(row);
  };

  // ---- 顶栏按钮 ----
  var toggle = $('theme-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
  var printBtn = $('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  // ---- 顶部个人信息 ----
  var p = R.profile || {};
  if ($('nav-name')) $('nav-name').textContent = p.handle || p.name || '';
  if ($('name')) $('name').textContent = [p.nameZh, p.name].filter(Boolean).join(' · ');
  if ($('tagline')) $('tagline').textContent = p.tagline || '';
  if ($('meta')) {
    $('meta').textContent = [p.handle && '@' + p.handle, p.location].filter(Boolean).join(' · ');
  }

  if ($('avatar')) {
    if (p.avatar) {
      var img = el('img', 'w-24 h-24 rounded-2xl object-cover ring-1 ring-slate-300 dark:ring-slate-700');
      img.src = p.avatar;
      img.alt = p.avatarAlt || ((p.nameZh || p.name || '') + ' 的头像');
      img.width = 96;
      img.height = 96;
      $('avatar').appendChild(img);
    } else {
      $('avatar').appendChild(el('div',
        'w-24 h-24 rounded-2xl grid place-items-center text-3xl font-bold text-white bg-gradient-to-br from-sky-500 to-indigo-600',
        esc((p.name || '?').slice(0, 1))));
    }
  }

  (p.links || []).forEach(function (l) {
    var a = el('a', 'px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition', esc(l.label));
    a.href = l.url;
    if (l.url.indexOf('mailto:') !== 0) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    if ($('links')) $('links').appendChild(a);
  });

  // ---- 自述：**加粗**，段首 "> " 渲染成引用块 ----
  (p.intro || []).forEach(function (t) {
    if (!$('intro')) return;
    if (t.indexOf('> ') === 0) {
      $('intro').appendChild(el('blockquote',
        'mt-5 pl-4 border-l-2 border-sky-500 italic text-slate-700 dark:text-slate-200',
        rich(t.slice(2))));
    } else {
      $('intro').appendChild(el('p', null, rich(t)));
    }
  });

  // ---- 数字亮点 ----
  var hs = R.highlights || [];
  if (!hs.length && $('highlights')) $('highlights').remove();
  hs.forEach(function (h) {
    var box = el('div', 'card rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center bg-white dark:bg-slate-900');
    box.appendChild(el('div', 'accent text-2xl font-bold text-sky-600 dark:text-sky-400', esc(h.value)));
    box.appendChild(el('div', 'mt-1 text-xs text-slate-500 dark:text-slate-400', esc(h.label)));
    if ($('highlights')) $('highlights').appendChild(box);
  });

  // ---- 时间线 ----
  (R.timeline || []).forEach(function (t) {
    if (!$('timeline')) return;
    var item = el('div', 'card relative pl-6 pb-8 last:pb-0');
    item.appendChild(el('span', 'dot absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-slate-50 dark:ring-slate-950'));
    item.appendChild(el('div', 'text-xs text-slate-500 dark:text-slate-400', esc(t.period)));
    item.appendChild(el('h3', 'mt-1 font-semibold', esc(t.title)));
    if (t.org) item.appendChild(el('div', 'text-sm text-slate-500 dark:text-slate-400', esc(t.org)));
    bullets(item, t.points);
    tagRow(item, t.tags);
    $('timeline').appendChild(item);
  });

  // ---- 横向经历 ----
  var fs = R.featured || [];
  if (!fs.length && $('featured')) $('featured').remove();
  fs.forEach(function (f) {
    if (!$('featured-list')) return;
    var card = el('div', 'card rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900');
    card.appendChild(el('h3', 'font-semibold', esc(f.title)));
    if (f.meta) card.appendChild(el('div', 'mt-0.5 text-xs text-slate-500 dark:text-slate-400', esc(f.meta)));
    bullets(card, f.points);
    tagRow(card, f.tags);
    $('featured-list').appendChild(card);
  });

  // ---- 项目卡片 ----
  (R.projects || []).forEach(function (pr) {
    if (!$('project-grid')) return;
    var card = el('div', 'card group rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 hover:border-sky-500 transition');
    var head = el('div', 'flex items-baseline justify-between gap-2');
    if (pr.url) {
      var a = el('a', 'font-semibold hover:text-sky-600 dark:hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500', esc(pr.name));
      a.href = pr.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      head.appendChild(a);
      var arrow = el('span', 'no-print text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      head.appendChild(arrow);
    } else {
      head.appendChild(el('span', 'font-semibold', esc(pr.name)));
    }
    card.appendChild(head);
    if (pr.role) card.appendChild(el('div', 'mt-0.5 text-xs text-slate-500 dark:text-slate-400', esc(pr.role)));
    if (pr.desc) card.appendChild(el('p', 'mt-2 text-sm text-slate-600 dark:text-slate-300', esc(pr.desc)));
    tagRow(card, pr.tags);
    $('project-grid').appendChild(card);
  });

  // ---- 技能 ----
  (R.skills || []).forEach(function (s) {
    if (!$('skill-list')) return;
    var row = el('div', 'flex flex-col sm:flex-row sm:items-center gap-2');
    row.appendChild(el('div', 'w-16 shrink-0 text-sm text-slate-500 dark:text-slate-400', esc(s.group)));
    var wrap = el('div', 'flex flex-wrap gap-1.5');
    (s.items || []).forEach(function (x) { wrap.appendChild(el('span', TAG, esc(x))); });
    row.appendChild(wrap);
    $('skill-list').appendChild(row);
  });

  // ---- 页脚 ----
  var f = R.footer || {};
  var site = R.site || {};
  if ($('footer')) {
    var parts = [];
    if (f.note) parts.push(esc(f.note));
    if (site.repo && f.repoLabel) {
      parts.push('<a href="' + esc(site.repo) + '" target="_blank" rel="noopener noreferrer" class="underline decoration-dotted hover:text-sky-600 dark:hover:text-sky-400">' + esc(f.repoLabel) + '</a>');
    }
    if (f.updated) parts.push('更新于 ' + esc(f.updated));
    $('footer').innerHTML = parts.join(' · ');
  }

  // ---- 滚动进入动画 ----
  var nodes = document.querySelectorAll('.fade-up');
  var reduce = false;
  try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  if (reduce || !('IntersectionObserver' in window)) {
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  for (var j = 0; j < nodes.length; j++) io.observe(nodes[j]);
})();
