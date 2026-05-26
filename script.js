// ===== ANIMATED PARTICLE BACKGROUND =====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const colors = ['#6C63FF', '#FF6584', '#43C6AC', '#F7971E'];

// Create particles
for (let i = 0; i < 70; i++) {
  particles.push({
    x:     Math.random() * 2000,
    y:     Math.random() * 2000,
    r:     Math.random() * 2 + 0.5,
    dx:    (Math.random() - 0.5) * 0.4,
    dy:    (Math.random() - 0.5) * 0.4,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: Math.random() * 0.5 + 0.1
  });
}

function draw() {
  ctx.clearRect(0, 0, W, H);

  // Draw particles
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();

    // Move
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
  });

  ctx.globalAlpha = 1;

  // Draw connecting lines between nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx   = (particles[i].x % W) - (particles[j].x % W);
      const dy   = (particles[i].y % H) - (particles[j].y % H);
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x % W, particles[i].y % H);
        ctx.lineTo(particles[j].x % W, particles[j].y % H);
        ctx.strokeStyle  = particles[i].color;
        ctx.globalAlpha  = (1 - dist / 120) * 0.15;
        ctx.lineWidth    = 0.5;
        ctx.stroke();
        ctx.globalAlpha  = 1;
      }
    }
  }

  requestAnimationFrame(draw);
}
draw();

// ===== NAV SCROLL EFFECT =====
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id], div.hero');

window.addEventListener('scroll', () => {
  // Add scrolled class for solid bg
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Active link highlight based on scroll position
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id') || 'hero';
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));
