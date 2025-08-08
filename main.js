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
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(47, 49, 54, 0.98)';
    } else {
        nav.style.background = 'rgba(47, 49, 54, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

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
        setTimeout(() => {
            this.style.transform = 'translateX(5px)';
        }, 150);
    });
});

// Invite bot
function inviteBot() {
    // Bot ID
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

// Sets up and starts the Intersection Observer to trigger animations on scroll.
function initializeStatisticAnimations() {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Stats section is visible, starting animations...");

                // Call all animations here
                animateValue('server-count', 0, 22, 2000, 0, '+'); 
                animateValue('user-count', 0, 507, 2500, 0, '+');
                animateValue('uptime-count', 0, 99.9, 2200, 1, '%'); 
                animateValue('commands-count', 0, 13, 1500, 0, '+');

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(statsSection);
}

// Function to load and initialize the WidgetBot.
function initializeWidgetBot() {

    const crateScript = document.createElement('script');

    crateScript.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
    crateScript.async = true;
    crateScript.defer = true;

    crateScript.onload = () => {
        console.log("WidgetBot Crate loaded, initializing...");
        new Crate({
            server: '1313733494559739986', // Your Discord Server ID
            channel: '1335483010396455034' // Your Discord Channel ID
        });
    };
    
    document.body.appendChild(crateScript);
}

window.addEventListener('load', () => {
    initializeStatisticAnimations();
    initializeWidgetBot();
});



// === (SOON) badge injection ===
(function tagSoonBadges(){
  const nodes = document.querySelectorAll('.feature-card h3, .command-card .command-name');
  nodes.forEach(n => {
    const txt = n.textContent;
    const idx = txt.indexOf('(SOON)');
    if (idx !== -1) {
      const base = txt.replace('(SOON)', '').trim();
      n.textContent = base + ' ';
      const badge = document.createElement('span');
      badge.className = 'soon-badge';
      badge.textContent = 'SOON';
      n.appendChild(badge);
    }
  });
})();




// === YouTube Playlist Player (patched) ===
const JS_PLAYLISTS = [
  { name: 'Shoegaze', id: 'PLsEc7Aw3YxEpeL9WwsjTqzgzmtW5-p9ZK' },
  { name: 'Hardcore', id: 'PLCaMf5YpijPKhGrogj6lxio1_U_NM1NCw' },
  { name: 'Lofi', id: 'PLN25DgFjBkBGA6V0gGRAbLqYJr2QzY4mv' },
  { name: 'Jazz', id: 'PLqBqVfu0VWK8dhaofz4JQ6hUUYpEvJcx6' },
  { name: 'EDM', id: 'PL3kXme0WFC_5vMIPd6Dp8lUpNQVvYGE25' },
  { name: 'Doomer', id: 'PLTj8zGbtGsjHQWtKYupS1CdZzrbbYKkoz' },
];

const LS_KEY_PL = 'joinspy_playlist';
const LS_KEY_VOL = 'joinspy_volume';

let ytPlayer = null;
let currentPlaylistId = null;

function extractPlaylistId(input) {
  if (!input) return null;
  // If it's already an ID (starts with PL...), return as-is
  if (/^PL[A-Za-z0-9_\-]+$/.test(input)) return input;
  // If it's a URL, pull the "list" param
  try {
    const u = new URL(input);
    const list = u.searchParams.get('list');
    if (list) return list;
  } catch {}
  return input; // fallback
}

function populatePlaylistSelect(){
  const sel = document.getElementById('playlist-select');
  if (!sel) return;
  sel.innerHTML = '';
  JS_PLAYLISTS.forEach((p) => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    sel.appendChild(opt);
  });
  // default Lofi or saved
  const saved = extractPlaylistId(localStorage.getItem(LS_KEY_PL));
  const defaultId = saved || JS_PLAYLISTS.find(p => p.name.toLowerCase() === 'lofi')?.id || JS_PLAYLISTS[0].id;
  sel.value = defaultId;
  currentPlaylistId = defaultId;
  sel.addEventListener('change', () => {
    const id = extractPlaylistId(sel.value);
    changePlaylist(id);
  });
}

function loadYouTubeAPI(){
  if (window.YT && window.YT.Player) { createYTPlayer(); return; }
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(tag);
  window.onYouTubeIframeAPIReady = createYTPlayer;
}

function createYTPlayer(){
  const wrap = document.getElementById('youtube-player');
  if (!wrap) return;
  ytPlayer = new YT.Player('youtube-player', {
    height: '390',
    width: '640',
    playerVars: {
      listType: 'playlist',
      list: currentPlaylistId,
      autoplay: 0, // wait for user click
      controls: 1,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3
    },
    events: {
      'onReady': onYTReady,
      'onStateChange': onYTStateChange
    }
  });
}

function onYTReady(){
  // Set initial volume (from localStorage or default 1.0)
  const vol = parseFloat(localStorage.getItem(LS_KEY_VOL) || '1.0');
  setYTVolume(vol);
  const volSlider = document.getElementById('yt-volume');
  if (volSlider) volSlider.value = vol;

  // Hook controls
  const playBtn = document.getElementById('yt-playpause');
  const prevBtn = document.getElementById('yt-prev');
  const nextBtn = document.getElementById('yt-next');
  playBtn?.addEventListener('click', toggleYTPlayPause);
  prevBtn?.addEventListener('click', () => ytPlayer.previousVideo());
  nextBtn?.addEventListener('click', () => ytPlayer.nextVideo());

  const volS = document.getElementById('yt-volume');
  volS?.addEventListener('input', () => {
    const v = parseFloat(volS.value);
    setYTVolume(v);
    localStorage.setItem(LS_KEY_VOL, String(v));
  });
}

function onYTStateChange(e){
  const playBtn = document.getElementById('yt-playpause');
  if (!playBtn) return;
  // 1 = playing, 2 = paused, 0 = ended
  if (e.data === 1) playBtn.innerHTML = '&#10074;&#10074;';
  else if (e.data === 2 || e.data === 0 || e.data === -1) playBtn.innerHTML = '&#9654;';
}

function toggleYTPlayPause(){
  if (!ytPlayer) return;
  const state = ytPlayer.getPlayerState(); // -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
  if (state === 1 || state === 3) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function setYTVolume(v){
  if (!ytPlayer) return;
  ytPlayer.setVolume(Math.floor((v || 0) * 100));
}

function changePlaylist(id){
  const newId = extractPlaylistId(id);
  if (!newId || !ytPlayer) return;
  currentPlaylistId = newId;
  localStorage.setItem(LS_KEY_PL, newId);
  // Stop current and cue new playlist (no autoplay)
  try { ytPlayer.stopVideo(); } catch {}
  ytPlayer.cuePlaylist({ listType: 'playlist', list: newId, index: 0 });
  // Reset play button to "play" state
  const playBtn = document.getElementById('yt-playpause');
  if (playBtn) playBtn.innerHTML = '&#9654;';
}

function initYTPlayer(){
  populatePlaylistSelect();
  loadYouTubeAPI();
}

window.addEventListener('load', initYTPlayer);

