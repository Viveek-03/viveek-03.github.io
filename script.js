// ===== TYPING ANIMATION =====
const roles = ['QA Engineer 🧪', 'Bug Hunter 🐛', 'Test Analyst 📋', 'SWIFT Specialist 💳', 'Automation Tester 🤖'];
let rIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const word = roles[rIdx];
  if (!deleting) {
    typedEl.textContent = word.substring(0, ++cIdx);
    if (cIdx === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typedEl.textContent = word.substring(0, --cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// ===== THEME TOGGLE =====
const themeBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeIcon.className = isLight ? 'ti ti-moon' : 'ti ti-sun';
});

// ===== ANIMATED PARTICLE BACKGROUND =====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

const colors = ['#6C63FF','#FF6584','#43C6AC','#F7971E'];
for (let i = 0; i < 70; i++) {
  particles.push({ x: Math.random()*2000, y: Math.random()*2000, r: Math.random()*2+0.5, dx: (Math.random()-0.5)*0.4, dy: (Math.random()-0.5)*0.4, color: colors[Math.floor(Math.random()*colors.length)], alpha: Math.random()*0.5+0.1 });
}

function draw() {
  ctx.clearRect(0,0,W,H);
  particles.forEach(p => {
    ctx.beginPath(); ctx.arc(p.x%W, p.y%H, p.r, 0, Math.PI*2);
    ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if (p.x<0) p.x=W; if (p.x>W) p.x=0;
    if (p.y<0) p.y=H; if (p.y>H) p.y=0;
  });
  ctx.globalAlpha = 1;
  for (let i=0; i<particles.length; i++) {
    for (let j=i+1; j<particles.length; j++) {
      const dx=(particles[i].x%W)-(particles[j].x%W), dy=(particles[i].y%H)-(particles[j].y%H);
      const dist=Math.sqrt(dx*dx+dy*dy);
      if (dist<120) { ctx.beginPath(); ctx.moveTo(particles[i].x%W,particles[i].y%H); ctx.lineTo(particles[j].x%W,particles[j].y%H); ctx.strokeStyle=particles[i].color; ctx.globalAlpha=(1-dist/120)*0.15; ctx.lineWidth=0.5; ctx.stroke(); ctx.globalAlpha=1; }
    }
  }
  requestAnimationFrame(draw);
}
draw();

// ===== NAV SCROLL + ACTIVE LINK =====
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#'+current); });
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== SKILL BAR ANIMATION =====
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-list').forEach(el => barObserver.observe(el));

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num[data-count]').forEach(el => {
        const target = +el.dataset.count, dur = 1500, step = dur / target || dur;
        let cur = 0;
        const timer = setInterval(() => {
          cur += 1; el.textContent = cur + (target === 100 ? '%' : '+');
          if (cur >= target) { el.textContent = target + (target === 100 ? '%' : target === 0 ? '' : '+'); clearInterval(timer); }
        }, step < 10 ? 10 : step);
      });
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stats-grid').forEach(el => counterObserver.observe(el));

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✅ Message sent! I\'ll get back to you soon.';
  e.target.reset();
  setTimeout(() => msg.textContent = '', 4000);
});
