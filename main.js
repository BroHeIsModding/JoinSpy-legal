// Particle effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 100
        ? 'rgba(47, 49, 54, 0.98)'
        : 'rgba(47, 49, 54, 0.95)';
});

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and command cards
document.querySelectorAll('.feature-card, .command-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Command card click effects
document.querySelectorAll('.command-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => { this.style.transform = 'translateX(5px)'; }, 150);
    });
});

// Invite bot
function inviteBot() {
    const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=1390784943486931154&scope=bot%20applications.commands&permissions=8';
    window.open(inviteUrl, '_blank');
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    createParticles();
});

// Initialize page
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// animate number
function animateValue(id, start, end, duration, decimalPlaces = 0, suffix = '+') {
    const obj = document.getElementById(id);
    if (!obj) {
        console.error(`Error: Element with ID "${id}" not found.`);
        return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = progress * (end - start) + start;

        obj.textContent = currentValue.toLocaleString('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces
        });

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            let finalValue = end.toLocaleString('en-US', {
                minimumFractionDigits: decimalPlaces,
                maximumFractionDigits: decimalPlaces
            });
            if (id === 'user-count' && end >= 1000000) {
                finalValue = (end / 1000000).toFixed(1).replace('.0', '') + 'M';
            }
            obj.textContent = finalValue + suffix;
        }
    };

    window.requestAnimationFrame(step);
}

function initializeStatisticAnimations() {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue('server-count', 0, 22, 2000, 0, '+');
                animateValue('user-count', 0, 507, 2500, 0, '+');
                animateValue('uptime-count', 0, 99.9, 2200, 1, '%');
                animateValue('commands-count', 0, 13, 1500, 0, '+');
                observer.unobserve(entry.target);
            }
        });
    };

    const obs = new IntersectionObserver(observerCallback, observerOptions);
    obs.observe(statsSection);
}

// WidgetBot
function initializeWidgetBot() {
    const crateScript = document.createElement('script');
    crateScript.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
    crateScript.async = true;
    crateScript.defer = true;
    crateScript.onload = () => {
        new Crate({ server: '1313733494559739986', channel: '1335483010396455034' });
    };
    document.body.appendChild(crateScript);
}

window.addEventListener('load', () => {
    initializeStatisticAnimations();
    initializeWidgetBot();
});

// -------- ONLY KEEP THESE TWO ADD-ONS BELOW --------

/ (SOON) badge
(function () {
  document.querySelectorAll('.feature-card h3, .command-card .command-name').forEach(n => {
    const t = (n.textContent || '');
    if (t.includes('(SOON)')) {
      n.textContent = t.replace('(SOON)', '').trim() + ' ';
      const b = document.createElement('span');
      b.className = 'soon-badge';
      b.textContent = 'SOON';
      n.appendChild(b);
    }
  });
})();

// Simple playlist switcher
(function simplePlaylistSwitcher(){
  const LS_PL = 'joinspy_playlist';
  const sel = document.getElementById('playlist-select');
  const frame = document.getElementById('yt-frame');
  if (!sel || !frame) return;
  const BASE = 'https://www.youtube.com/embed/videoseries?list=';
  const OPTS = '&controls=1&rel=0&modestbranding=1';

  const saved = localStorage.getItem(LS_PL);
  if (saved) {
    sel.value = saved;
    frame.src = BASE + encodeURIComponent(saved) + OPTS;
  } else {
    frame.src = BASE + encodeURIComponent(sel.value) + OPTS;
  }

  sel.addEventListener('change', () => {
    const id = sel.value;
    localStorage.setItem(LS_PL, id);
    frame.src = BASE + encodeURIComponent(id) + OPTS;
  });
})();
