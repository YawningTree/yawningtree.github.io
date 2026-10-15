/* 随记配图：方形九宫格 + 点击放大灯箱
   1) 把正文里连续的图片（<img> 本身，或「只包含图片的 <p>」）搬进 .photo-grid，由 CSS 排成 3 列正方形
   2) 点击任意一格打开灯箱：可左右切换、点遮罩/ESC 关闭、移动端支持左右滑动
   只作用于随记容器（首页时间线、随记列表、标签页、随记详情），文章配图不受影响 */
(function () {
  'use strict';

  var CONTAINER_SEL = '.timeline-note, .note-single .prose';

  /* ---------- 一、把连续图片包成九宫格 ---------- */

  function isImageOnlyParagraph(node) {
    return node.tagName === 'P' && node.querySelector('img') !== null &&
      node.textContent.replace(/\s|\u00a0/g, '') === '';
  }

  function imagesIn(node) {
    return node.tagName === 'IMG' ? [node] : Array.prototype.slice.call(node.querySelectorAll('img'));
  }

  function collectRuns(root) {
    var runs = [];
    var current = null;

    Array.prototype.slice.call(root.childNodes).forEach(function (node) {
      var isPhoto = node.nodeType === 1 && (node.tagName === 'IMG' || isImageOnlyParagraph(node));
      if (isPhoto) {
        if (current === null) { current = []; runs.push(current); }
        current.push(node);
      } else if (node.nodeType === 1 || (node.nodeType === 3 && node.textContent.trim() !== '')) {
        /* 文字或其它块级元素中断分组；纯空白文本节点（Markdown 换行）不算中断 */
        current = null;
      }
    });

    return runs;
  }

  function buildGrids(root) {
    collectRuns(root).forEach(function (nodes) {
      var grid = document.createElement('div');
      grid.className = 'photo-grid';

      nodes.forEach(function (node) {
        imagesIn(node).forEach(function (img) {
          var cell = document.createElement('button');
          cell.type = 'button';
          cell.className = 'photo-cell';
          if (!img.alt) { cell.setAttribute('aria-label', '放大查看图片'); }
          cell.appendChild(img);            /* 直接搬移节点，src / data-full / alt 全部保留 */
          grid.appendChild(cell);
        });
      });

      if (!grid.children.length) { return; }

      var anchor = nodes[0];
      anchor.parentNode.insertBefore(grid, anchor);
      nodes.forEach(function (n) {
        if (n.tagName !== 'IMG') { n.remove(); }   /* 收起被掏空的 <p>；IMG 已搬走，不能再删 */
      });
    });
  }

  /* ---------- 二、灯箱 ---------- */

  /* 按钮图标用 SVG 而不是「×‹›」文字：文字按基线排版，不同字形的墨迹相对行框
     高低不一（实测 × 偏低 2.5px、‹› 偏高 1px），换字体/换系统还会再变；
     SVG 的 viewBox 内几何对称，配 flex 居中后墨迹必然落在正中心。 */
  function icon(name) {
    var open = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
               'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">';
    if (name === 'close') { return open + '<path d="M6 6 18 18M18 6 6 18"/></svg>'; }
    /* 折线端点关于 viewBox 中心 (12,12) 对称：x 8..16、y 4..20（含圆头端帽） */
    if (name === 'prev') { return open + '<path d="M15 5 9 12l6 7"/></svg>'; }
    return open + '<path d="M9 5l6 7-6 7"/></svg>';
  }

  var lb = null, lbImg = null, lbCount = null, lbPrev = null, lbNext = null;
  var gallery = [], index = 0, lastFocus = null, touchX = 0;

  function fullSrc(img) {
    return img.getAttribute('data-full') || img.currentSrc || img.src;
  }

  function ensureLightbox() {
    if (lb) { return; }
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', '图片预览');
    lb.innerHTML =
      '<button class="lightbox-btn lightbox-close" type="button" aria-label="关闭（Esc）">' + icon('close') + '</button>' +
      '<button class="lightbox-btn lightbox-prev" type="button" aria-label="上一张（←）">' + icon('prev') + '</button>' +
      '<button class="lightbox-btn lightbox-next" type="button" aria-label="下一张（→）">' + icon('next') + '</button>' +
      '<figure class="lightbox-stage"><img alt=""><figcaption class="lightbox-caption"></figcaption></figure>' +
      '<span class="lightbox-count" aria-live="polite"></span>';
    document.body.appendChild(lb);

    lbImg = lb.querySelector('img');
    lbCount = lb.querySelector('.lightbox-count');
    lbPrev = lb.querySelector('.lightbox-prev');
    lbNext = lb.querySelector('.lightbox-next');

    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lbPrev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    lbNext.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    /* 点遮罩关闭；点图片本身不关（多图时点图片切到下一张） */
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lightbox-stage')) { close(); }
    });
    lbImg.addEventListener('click', function (e) {
      e.stopPropagation();
      if (gallery.length > 1) { step(1); }
    });

    lb.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 45 && gallery.length > 1) { step(dx < 0 ? 1 : -1); }
    }, { passive: true });
  }

  function render() {
    var img = gallery[index];
    if (!img) { return; }
    lbImg.src = fullSrc(img);
    lbImg.alt = img.alt || '';
    lb.querySelector('.lightbox-caption').textContent = img.alt || '';
    var many = gallery.length > 1;
    lbPrev.hidden = lbNext.hidden = !many;
    lbCount.hidden = !many;
    lbCount.textContent = (index + 1) + ' / ' + gallery.length;
    /* 预取相邻两张原图，切换更顺滑 */
    if (many) {
      [gallery[(index + 1) % gallery.length], gallery[(index - 1 + gallery.length) % gallery.length]]
        .forEach(function (n) { var p = new Image(); p.src = fullSrc(n); });
    }
  }

  function step(delta) {
    index = (index + delta + gallery.length) % gallery.length;
    render();
  }

  function open(cell) {
    var root = cell.closest(CONTAINER_SEL) || document;
    var cells = Array.prototype.slice.call(root.querySelectorAll('.photo-cell'));
    gallery = cells.map(function (c) { return c.querySelector('img'); }).filter(Boolean);
    index = Math.max(0, cells.indexOf(cell));
    ensureLightbox();
    render();
    lb.classList.add('is-open');
    document.documentElement.classList.add('lightbox-open');
    document.body.classList.add('lightbox-open');
    lastFocus = document.activeElement;
    lb.querySelector('.lightbox-close').focus();
  }

  function close() {
    if (!lb || !lb.classList.contains('is-open')) { return; }
    lb.classList.remove('is-open');
    document.documentElement.classList.remove('lightbox-open');
    document.body.classList.remove('lightbox-open');
    lbImg.removeAttribute('src');
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
  }

  document.addEventListener('keydown', function (e) {
    if (!lb || !lb.classList.contains('is-open')) { return; }
    if (e.key === 'Escape') { close(); }
    else if (e.key === 'ArrowLeft' && gallery.length > 1) { step(-1); }
    else if (e.key === 'ArrowRight' && gallery.length > 1) { step(1); }
  });

  /* ---------- 三、启动 ---------- */

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(CONTAINER_SEL), buildGrids);

    document.addEventListener('click', function (e) {
      var cell = e.target.closest ? e.target.closest('.photo-cell') : null;
      if (cell) { e.preventDefault(); open(cell); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
