// Visor de fotos flotant (Què fem + Galeria)
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.qf-fotos a, .gallery .item img'));
  if (!items.length) return;

  var lb = document.createElement('div');
  lb.className = 'qf-lb';
  lb.id = 'qf-lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Visor de fotos');
  lb.innerHTML =
    '<button class="qf-lb-btn qf-lb-close" aria-label="Tanca">&times;</button>' +
    '<button class="qf-lb-btn qf-lb-prev" aria-label="Anterior">&#8249;</button>' +
    '<img src="" alt="">' +
    '<button class="qf-lb-btn qf-lb-next" aria-label="Següent">&#8250;</button>' +
    '<div class="qf-lb-cap"></div>';
  document.body.appendChild(lb);

  var img = lb.querySelector('img'), cap = lb.querySelector('.qf-lb-cap'), i = 0;

  function srcOf(el) { return el.tagName === 'A' ? el.getAttribute('href') : el.getAttribute('src'); }
  function altOf(el) { var im = el.tagName === 'A' ? el.querySelector('img') : el; return (im && im.alt) || ''; }
  function show(n) {
    i = (n + items.length) % items.length;
    img.src = srcOf(items[i]);
    img.alt = altOf(items[i]);
    var text = /^Imagen \d+$/i.test(img.alt) ? '' : img.alt;
    cap.textContent = text;
    cap.style.display = text ? '' : 'none';
  }
  function open(n) { show(n); lb.classList.add('open'); document.body.classList.add('qf-lb-lock'); }
  function close() { lb.classList.remove('open'); document.body.classList.remove('qf-lb-lock'); }

  items.forEach(function (el, n) {
    el.classList.add('qf-lb-trigger');
    el.addEventListener('click', function (e) { e.preventDefault(); open(n); });
  });
  lb.querySelector('.qf-lb-close').addEventListener('click', close);
  lb.querySelector('.qf-lb-prev').addEventListener('click', function () { show(i - 1); });
  lb.querySelector('.qf-lb-next').addEventListener('click', function () { show(i + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(i - 1);
    else if (e.key === 'ArrowRight') show(i + 1);
  });
})();
