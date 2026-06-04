// ===== TYPING ANIMATION =====
const roles = ['QA Engineer', 'Bug Hunter', 'Test Analyst', 'SWIFT Specialist', 'Automation Tester'];
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
  themeIcon.className = document.body.classList.contains('light-mode') ? 'ti ti-moon' : 'ti ti-sun';
});

// ===== WORLD MAP + CURRENCY ANIMATION =====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', function() { resize(); });

// Helper: draw rounded rect without roundRect (cross-browser)
function drawPill(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Major cities with geo-approximate positions
const cities = [
  { name:'USA',       cx:0.17, cy:0.37, currency:'USD $',  color:'#60A5FA' },
  { name:'Canada',    cx:0.15, cy:0.27, currency:'CAD C$', color:'#34D399' },
  { name:'Mexico',    cx:0.15, cy:0.46, currency:'MXN $',  color:'#FBBF24' },
  { name:'Brazil',    cx:0.27, cy:0.63, currency:'BRL R$', color:'#F87171' },
  { name:'UK',        cx:0.43, cy:0.27, currency:'GBP £',  color:'#A78BFA' },
  { name:'France',    cx:0.46, cy:0.30, currency:'EUR €',  color:'#67E8F9' },
  { name:'Germany',   cx:0.48, cy:0.27, currency:'EUR €',  color:'#FCD34D' },
  { name:'Swiss',     cx:0.47, cy:0.31, currency:'CHF ₣',  color:'#60A5FA' },
  { name:'Russia',    cx:0.63, cy:0.22, currency:'RUB ₽',  color:'#F87171' },
  { name:'UAE',       cx:0.60, cy:0.45, currency:'AED د.إ',color:'#34D399' },
  { name:'India',     cx:0.66, cy:0.47, currency:'INR ₹',  color:'#FBBF24' },
  { name:'China',     cx:0.74, cy:0.37, currency:'CNY ¥',  color:'#A78BFA' },
  { name:'Japan',     cx:0.82, cy:0.35, currency:'JPY ¥',  color:'#67E8F9' },
  { name:'HongKong',  cx:0.78, cy:0.44, currency:'HKD $',  color:'#FCD34D' },
  { name:'Singapore', cx:0.76, cy:0.54, currency:'SGD S$', color:'#60A5FA' },
  { name:'Australia', cx:0.78, cy:0.68, currency:'AUD A$', color:'#34D399' },
  { name:'S.Africa',  cx:0.52, cy:0.68, currency:'ZAR R',  color:'#F87171' },
  { name:'Nigeria',   cx:0.46, cy:0.54, currency:'NGN ₦',  color:'#FBBF24' },
];

// Simplified landmass polygons [x,y] normalized 0-1
const lands = [
  // North America
  [[0.06,0.22],[0.22,0.20],[0.28,0.30],[0.26,0.40],[0.18,0.44],[0.12,0.42],[0.08,0.34]],
  // Central America
  [[0.14,0.44],[0.20,0.44],[0.22,0.50],[0.16,0.52]],
  // South America
  [[0.20,0.48],[0.30,0.46],[0.34,0.54],[0.32,0.68],[0.26,0.76],[0.20,0.74],[0.18,0.62],[0.18,0.52]],
  // Europe
  [[0.42,0.20],[0.54,0.18],[0.56,0.26],[0.52,0.34],[0.44,0.36],[0.40,0.30]],
  // Africa
  [[0.44,0.38],[0.56,0.36],[0.58,0.46],[0.56,0.60],[0.52,0.74],[0.46,0.74],[0.42,0.62],[0.42,0.46]],
  // Russia / N.Asia
  [[0.55,0.14],[0.86,0.12],[0.88,0.26],[0.76,0.30],[0.62,0.30],[0.55,0.24]],
  // Middle East
  [[0.54,0.36],[0.64,0.34],[0.66,0.46],[0.60,0.52],[0.54,0.50]],
  // South Asia
  [[0.62,0.38],[0.74,0.36],[0.76,0.50],[0.70,0.58],[0.64,0.54],[0.62,0.46]],
  // East/SE Asia
  [[0.74,0.28],[0.88,0.26],[0.88,0.44],[0.82,0.50],[0.74,0.46],[0.72,0.36]],
  // Australia
  [[0.72,0.60],[0.86,0.58],[0.88,0.72],[0.82,0.78],[0.72,0.76],[0.70,0.66]],
];

function drawBackground() {
  ctx.clearRect(0, 0, W, H);

  // Dark ocean
  ctx.fillStyle = 'rgba(4,8,24,0.96)';
  ctx.fillRect(0, 0, W, H);

  // Grid lines
  ctx.lineWidth = 0.5;
  for (var i = 0; i <= 12; i++) {
    ctx.strokeStyle = 'rgba(37,99,235,0.06)';
    ctx.beginPath(); ctx.moveTo(0, H*i/12); ctx.lineTo(W, H*i/12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W*i/12, 0); ctx.lineTo(W*i/12, H); ctx.stroke();
  }

  // Landmasses
  lands.forEach(function(pts) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0]*W, pts[0][1]*H);
    for (var i=1; i<pts.length; i++) ctx.lineTo(pts[i][0]*W, pts[i][1]*H);
    ctx.closePath();
    ctx.fillStyle = 'rgba(30,58,138,0.18)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(59,130,246,0.35)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });

  // City dots with pulse rings
  cities.forEach(function(c) {
    var x = c.cx*W, y = c.cy*H;
    // Outer ring
    ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI*2);
    ctx.strokeStyle = c.color.replace(')', ',0.25)').replace('rgb(', 'rgba(');
    ctx.strokeStyle = 'rgba(96,165,250,0.2)';
    ctx.lineWidth = 1; ctx.stroke();
    // Dot
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI*2);
    ctx.fillStyle = c.color; ctx.globalAlpha = 0.9; ctx.fill();
    ctx.globalAlpha = 1;
  });
}

// Currency particle
function CurrencyParticle() {
  this.reset = function() {
    var fi = Math.floor(Math.random()*cities.length);
    var ti;
    do { ti = Math.floor(Math.random()*cities.length); } while(ti === fi);
    var from = cities[fi], to = cities[ti];
    this.x0 = from.cx*W; this.y0 = from.cy*H;
    this.x1 = to.cx*W;   this.y1 = to.cy*H;
    this.label = from.currency;
    this.color = from.color;
    this.t = 0;
    this.speed = 0.003 + Math.random()*0.004;
    var mx=(this.x0+this.x1)/2, my=(this.y0+this.y1)/2;
    var dx=this.x1-this.x0, dy=this.y1-this.y0;
    var len=Math.sqrt(dx*dx+dy*dy)||1;
    this.cpx = mx - dy/len*(len*0.38);
    this.cpy = my + dx/len*(len*0.38);
    this.trail = [];
    this.x = this.x0; this.y = this.y0;
  };
  this.update = function() {
    this.t += this.speed;
    if (this.t >= 1) { this.reset(); return; }
    var inv = 1 - this.t;
    this.x = inv*inv*this.x0 + 2*inv*this.t*this.cpx + this.t*this.t*this.x1;
    this.y = inv*inv*this.y0 + 2*inv*this.t*this.cpy + this.t*this.t*this.y1;
    this.trail.push({x:this.x, y:this.y});
    if (this.trail.length > 20) this.trail.shift();
  };
  this.draw = function() {
    // Trail dots
    for (var i=0; i<this.trail.length; i++) {
      var a = (i/this.trail.length)*0.35;
      ctx.beginPath(); ctx.arc(this.trail[i].x, this.trail[i].y, 1.5, 0, Math.PI*2);
      ctx.globalAlpha = a; ctx.fillStyle = this.color; ctx.fill();
    }
    ctx.globalAlpha = 1;
    // Pill background
    ctx.font = 'bold 12px -apple-system,sans-serif';
    var tw = ctx.measureText(this.label).width;
    var pw = tw + 14, ph = 20, px = this.x - pw/2, py = this.y - ph/2;
    drawPill(px, py, pw, ph, 5);
    ctx.fillStyle = this.color; ctx.globalAlpha = 0.92; ctx.fill();
    ctx.globalAlpha = 1;
    // Text
    ctx.fillStyle = '#060d1f';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(this.label, this.x, this.y + 1);
    // Leading dot
    ctx.beginPath(); ctx.arc(this.x, this.y, 2.5, 0, Math.PI*2);
    ctx.fillStyle = '#fff'; ctx.globalAlpha = 0.9; ctx.fill();
    ctx.globalAlpha = 1;
  };
  this.reset();
}

// Route arc
function RouteArc() {
  this.reset = function() {
    var fi = Math.floor(Math.random()*cities.length);
    var ti;
    do { ti = Math.floor(Math.random()*cities.length); } while(ti===fi);
    var from=cities[fi], to=cities[ti];
    this.x0=from.cx*W; this.y0=from.cy*H;
    this.x1=to.cx*W;   this.y1=to.cy*H;
    var mx=(this.x0+this.x1)/2, my=(this.y0+this.y1)/2;
    var dx=this.x1-this.x0, dy=this.y1-this.y0, len=Math.sqrt(dx*dx+dy*dy)||1;
    this.cpx=mx-dy/len*(len*0.38); this.cpy=my+dx/len*(len*0.38);
    this.color=cities[fi].color;
    this.life=0; this.maxLife=200+Math.random()*160; this.alpha=0;
  };
  this.update = function() {
    this.life++;
    if (this.life<30) this.alpha=this.life/30*0.2;
    else if (this.life>this.maxLife-30) this.alpha=(this.maxLife-this.life)/30*0.2;
    else this.alpha=0.2;
    if (this.life>=this.maxLife) this.reset();
  };
  this.draw = function() {
    ctx.beginPath();
    ctx.moveTo(this.x0,this.y0);
    ctx.quadraticCurveTo(this.cpx,this.cpy,this.x1,this.y1);
    ctx.strokeStyle=this.color; ctx.lineWidth=0.7;
    ctx.globalAlpha=this.alpha;
    ctx.setLineDash([4,7]); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha=1;
  };
  this.reset();
}

var particles = [];
var arcs = [];
for (var i=0;i<12;i++) particles.push(new CurrencyParticle());
for (var j=0;j<8;j++) arcs.push(new RouteArc());

function animate() {
  drawBackground();
  arcs.forEach(function(a){a.update();a.draw();});
  particles.forEach(function(p){p.update();p.draw();});
  requestAnimationFrame(animate);
}
animate();

// ===== NAV SCROLL + ACTIVE LINK =====
var nav = document.querySelector('nav');
var navLinks = document.querySelectorAll('.nav-links a');
var sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  var current = '';
  sections.forEach(function(s) { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(function(l) { l.classList.toggle('active', l.getAttribute('href') === '#'+current); });
});

// ===== SCROLL REVEAL =====
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

// ===== COUNTER ANIMATION =====
var counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num[data-count]').forEach(function(el) {
        var target = +el.dataset.count, dur = 1500;
        var step = target > 0 ? dur/target : dur;
        var cur = 0;
        var timer = setInterval(function() {
          cur++;
          el.textContent = cur + (target===100 ? '%' : '+');
          if (cur >= target) {
            el.textContent = target + (target===100 ? '%' : target===0 ? '' : '+');
            clearInterval(timer);
          }
        }, step < 10 ? 10 : step);
      });
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stats-grid').forEach(function(el) { counterObserver.observe(el); });

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var msg = document.getElementById('formMsg');
  msg.textContent = 'Message sent! I will get back to you soon.';
  e.target.reset();
  setTimeout(function() { msg.textContent = ''; }, 4000);
});
