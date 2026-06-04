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

// ===== WORLD MAP + CURRENCY TRAVEL ANIMATION =====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;

function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', () => { resize(); drawMap(); });

// World map countries as simplified polygons (normalized 0-1 coords, mapped to canvas)
// Using geo-projected coordinates for major landmasses
const countries = [
  { name:'USA',       cx:0.18, cy:0.38, currency:'USD 

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
 },
  { name:'Brazil',    cx:0.28, cy:0.62, currency:'BRL R

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
 },
  { name:'UK',        cx:0.44, cy:0.28, currency:'GBP £' },
  { name:'Germany',   cx:0.48, cy:0.28, currency:'EUR €' },
  { name:'Russia',    cx:0.62, cy:0.25, currency:'RUB ₽' },
  { name:'India',     cx:0.67, cy:0.48, currency:'INR ₹' },
  { name:'China',     cx:0.74, cy:0.38, currency:'CNY ¥' },
  { name:'Japan',     cx:0.82, cy:0.36, currency:'JPY ¥' },
  { name:'Australia', cx:0.78, cy:0.68, currency:'AUD A

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
 },
  { name:'UAE',       cx:0.60, cy:0.46, currency:'AED د.إ' },
  { name:'Singapore', cx:0.76, cy:0.54, currency:'SGD S

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
 },
  { name:'Canada',    cx:0.16, cy:0.28, currency:'CAD C

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
 },
  { name:'Mexico',    cx:0.16, cy:0.46, currency:'MXN 

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
 },
  { name:'S.Africa',  cx:0.52, cy:0.68, currency:'ZAR R' },
  { name:'Nigeria',   cx:0.46, cy:0.54, currency:'NGN ₦' },
  { name:'France',    cx:0.46, cy:0.32, currency:'EUR €' },
  { name:'Swiss',     cx:0.48, cy:0.32, currency:'CHF ₣' },
  { name:'HongKong',  cx:0.78, cy:0.44, currency:'HKD 

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
 },
];

// Simplified world map paths (SVG-like coordinates normalized)
const landmasses = [
  // North America
  'M0.05,0.22 L0.22,0.20 L0.28,0.28 L0.26,0.38 L0.20,0.44 L0.14,0.42 L0.10,0.36 L0.06,0.30 Z',
  // South America
  'M0.20,0.46 L0.30,0.44 L0.34,0.52 L0.32,0.66 L0.26,0.74 L0.20,0.72 L0.18,0.62 L0.18,0.52 Z',
  // Europe
  'M0.42,0.22 L0.54,0.20 L0.56,0.28 L0.52,0.34 L0.44,0.36 L0.40,0.30 Z',
  // Africa
  'M0.44,0.38 L0.56,0.36 L0.58,0.44 L0.56,0.58 L0.52,0.72 L0.46,0.72 L0.42,0.60 L0.42,0.46 Z',
  // Russia/Asia north
  'M0.54,0.16 L0.86,0.14 L0.88,0.24 L0.76,0.28 L0.62,0.28 L0.54,0.24 Z',
  // Middle East
  'M0.54,0.36 L0.64,0.34 L0.66,0.44 L0.60,0.50 L0.54,0.48 Z',
  // South Asia
  'M0.62,0.38 L0.74,0.36 L0.76,0.48 L0.70,0.56 L0.64,0.54 L0.62,0.46 Z',
  // East Asia
  'M0.74,0.28 L0.88,0.26 L0.88,0.42 L0.82,0.48 L0.74,0.44 L0.72,0.36 Z',
  // SE Asia
  'M0.74,0.46 L0.82,0.44 L0.84,0.54 L0.78,0.58 L0.74,0.54 Z',
  // Australia
  'M0.72,0.60 L0.86,0.58 L0.88,0.70 L0.82,0.76 L0.72,0.74 L0.70,0.66 Z',
];

function parsePath(d) {
  const pts = [];
  const parts = d.replace(/[MLZ]/g,' ').trim().split(/\s+/);
  for (let i=0;i<parts.length-1;i+=2) {
    const x = parseFloat(parts[i]), y = parseFloat(parts[i+1]);
    if (!isNaN(x) && !isNaN(y)) pts.push([x,y]);
  }
  return pts;
}

function drawMap() {
  ctx.clearRect(0,0,W,H);
  // Dark bg tint
  ctx.fillStyle = 'rgba(5,10,30,0.92)';
  ctx.fillRect(0,0,W,H);
  // Grid lines (latitude/longitude feel)
  ctx.strokeStyle = 'rgba(37,99,235,0.07)';
  ctx.lineWidth = 0.5;
  for (let i=0;i<=10;i++) {
    ctx.beginPath(); ctx.moveTo(0, H*i/10); ctx.lineTo(W, H*i/10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W*i/10, 0); ctx.lineTo(W*i/10, H); ctx.stroke();
  }
  // Draw landmasses
  landmasses.forEach(d => {
    const pts = parsePath(d);
    if (pts.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(pts[0][0]*W, pts[0][1]*H);
    pts.slice(1).forEach(p => ctx.lineTo(p[0]*W, p[1]*H));
    ctx.closePath();
    ctx.fillStyle = 'rgba(37,99,235,0.12)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(37,99,235,0.3)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });
  // Country dots
  countries.forEach(c => {
    const x = c.cx*W, y = c.cy*H;
    ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2);
    ctx.fillStyle = 'rgba(96,165,250,0.9)'; ctx.fill();
    ctx.beginPath(); ctx.arc(x,y,6,0,Math.PI*2);
    ctx.strokeStyle='rgba(96,165,250,0.3)'; ctx.lineWidth=1; ctx.stroke();
  });
}

// ===== CURRENCY TRAVEL PARTICLES =====
const colors = ['#60A5FA','#A78BFA','#34D399','#FBBF24','#F87171','#67E8F9','#FCD34D'];

class CurrencyParticle {
  constructor() { this.reset(); }
  reset() {
    const from = countries[Math.floor(Math.random()*countries.length)];
    let to;
    do { to = countries[Math.floor(Math.random()*countries.length)]; } while(to===from);
    this.x0 = from.cx*W; this.y0 = from.cy*H;
    this.x1 = to.cx*W;   this.y1 = to.cy*H;
    this.currency = from.currency;
    this.color = colors[Math.floor(Math.random()*colors.length)];
    this.t = 0;
    this.speed = 0.003 + Math.random()*0.004;
    this.size = 11 + Math.random()*3;
    // Arc control point
    const mx = (this.x0+this.x1)/2, my = (this.y0+this.y1)/2;
    const dx = this.x1-this.x0, dy = this.y1-this.y0;
    const len = Math.sqrt(dx*dx+dy*dy);
    this.cpx = mx - dy/len * (len*0.35);
    this.cpy = my + dx/len * (len*0.35);
    this.trail = [];
  }
  update() {
    this.t += this.speed;
    if (this.t >= 1) { this.reset(); return; }
    const inv = 1 - this.t;
    this.x = inv*inv*this.x0 + 2*inv*this.t*this.cpx + this.t*this.t*this.x1;
    this.y = inv*inv*this.y0 + 2*inv*this.t*this.cpy + this.t*this.t*this.y1;
    this.trail.push({x:this.x, y:this.y, a: 1-this.t});
    if (this.trail.length > 18) this.trail.shift();
  }
  draw() {
    // Trail
    for (let i=0;i<this.trail.length;i++) {
      const p = this.trail[i];
      const a = (i/this.trail.length)*0.4*p.a;
      ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
      ctx.fillStyle = this.color.replace(')',`,${a})`).replace('rgb','rgba').replace('#', 'rgba(').replace('rgba(','rgba(');
      // simpler alpha trail
      ctx.globalAlpha = a;
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    // Currency label pill
    ctx.font = `bold ${this.size}px -apple-system, sans-serif`;
    const tw = ctx.measureText(this.currency).width;
    const pad = 6, rh = this.size+6, rw = tw+pad*2;
    // Pill bg
    ctx.beginPath();
    ctx.roundRect(this.x - rw/2, this.y - rh/2, rw, rh, 6);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.9;
    ctx.fill();
    ctx.globalAlpha = 1;
    // Text
    ctx.fillStyle = '#0a0a0a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.currency, this.x, this.y+1);
    // Glow dot at front
    ctx.beginPath(); ctx.arc(this.x,this.y,3,0,Math.PI*2);
    ctx.fillStyle='#fff'; ctx.globalAlpha=0.8; ctx.fill();
    ctx.globalAlpha=1;
  }
}

// Arc line between active routes
class RouteArc {
  constructor() { this.reset(); }
  reset() {
    const from = countries[Math.floor(Math.random()*countries.length)];
    let to;
    do { to = countries[Math.floor(Math.random()*countries.length)]; } while(to===from);
    this.x0=from.cx*W; this.y0=from.cy*H;
    this.x1=to.cx*W;   this.y1=to.cy*H;
    const mx=(this.x0+this.x1)/2, my=(this.y0+this.y1)/2;
    const dx=this.x1-this.x0, dy=this.y1-this.y0, len=Math.sqrt(dx*dx+dy*dy);
    this.cpx=mx-dy/len*(len*0.35); this.cpy=my+dx/len*(len*0.35);
    this.alpha=0; this.life=0; this.maxLife=220+Math.random()*180;
    this.color=colors[Math.floor(Math.random()*colors.length)];
  }
  update() {
    this.life++;
    if (this.life<30) this.alpha=this.life/30*0.25;
    else if (this.life>this.maxLife-30) this.alpha=(this.maxLife-this.life)/30*0.25;
    else this.alpha=0.25;
    if (this.life>=this.maxLife) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x0,this.y0);
    ctx.quadraticCurveTo(this.cpx,this.cpy,this.x1,this.y1);
    ctx.strokeStyle=this.color;
    ctx.lineWidth=0.6;
    ctx.globalAlpha=this.alpha;
    ctx.setLineDash([4,6]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha=1;
  }
}

const particles = Array.from({length:12}, ()=>new CurrencyParticle());
const arcs = Array.from({length:8}, ()=>new RouteArc());

function animate() {
  drawMap();
  arcs.forEach(a=>{a.update();a.draw();});
  particles.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(animate);
}
animate();

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
