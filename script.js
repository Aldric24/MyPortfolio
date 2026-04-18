/* ============================================
   ALDRIC SHAUN RAJESH — PORTFOLIO SCRIPTS
   ============================================ */

// --- Project Data ---
const PROJECTS = [
  {
    num: '001',
    title: 'Beyond Visual Range',
    context: "Bachelor's Thesis · Perfect Score",
    brief: '2D combat flight simulator built in Unity.',
    useCase: 'A sandbox dogfighting simulator where players can pilot combat aircraft against AI opponents, managing radar, weapon lock-ons, and flight physics in a 2D space.',
    inspiration: 'A lifelong fascination with aviation and complex simulation systems. I wanted to build a project that combined rigid physics rules with dynamic AI behaviour to create a challenging, realistic 2D dogfighting experience.',
    challenges: 'Balancing the AI state machines so enemies were challenging but not unbeatable was difficult. I also had to heavily optimise the radar and avionics calculations to keep the frame rate stable during intense combat scenarios.',
    desc: 'Planned and delivered a complete 2D combat flight simulator within a strict 3-month academic timeline. The project features avionics systems, physics-based flight models, AI adversaries with state-machine behaviours, and combat logic — from concept to a fully playable, evaluated product.',
    highlights: [
      'Developed avionics HUD, flight physics, and radar systems in Unity/C#',
      'Implemented AI enemy behaviour using finite state machines',
      'Validated gameplay systems through iterative test cycles',
      'Achieved a perfect academic evaluation score (4.0 / 4.0)',
    ],
    tech: ['Unity', 'C#', 'AI Systems', 'Physics', 'Game Design'],
    github: 'https://github.com/Aldric24/BVR_Project',
    release: 'https://github.com/Aldric24/BVR_Project/releases',
    images: ['cover.png', '1.png', '2.png'],
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1040 50%, #111428 100%)',
    accentColor: '#7f6ef5',
  },
  {
    num: '002',
    title: 'SpaceSim',
    context: 'Unity Project · Space Simulation',
    brief: 'Space simulation game with orbital mechanics.',
    useCase: 'An interactive simulation where players can fly a spacecraft through a procedurally generated solar system, experiencing realistic gravitational pulls and orbital trajectories.',
    inspiration: 'Inspired by games like Kerbal Space Program and Elite Dangerous, I wanted to understand the underlying mathematics of orbital mechanics and how to represent them accurately in a game engine.',
    challenges: 'Handling floating-point precision issues at massive scales was the biggest hurdle. I had to implement a floating-origin system so the player ship remained centered while the universe moved around it to prevent physics jitter.',
    desc: 'A Unity-based space simulation game featuring realistic orbital mechanics, stellar body rendering, and complex player flight controls. Built to explore large-scale physics environments and advanced rendering pipelines.',
    highlights: [
      'Implemented realistic orbital mechanics and gravitational physics',
      'Developed custom flight controls and HUD interface',
      'Applied rendering enhancements for stellar bodies and space environments',
      'Optimised physics calculations for large-scale simulation environments',
    ],
    tech: ['Unity', 'C#', 'Physics', 'Rendering', 'Game Design'],
    github: 'https://github.com/Aldric24/SpaceSim',
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #050510 0%, #0d1a3a 50%, #0a0a20 100%)',
    accentColor: '#5da9ff',
  },
  {
    num: '003',
    title: 'Dorm Buddy',
    context: 'Project Lead · 5-Person Team',
    brief: 'Mobile app for student dormitory coordination.',
    useCase: 'A student-facing mobile application used to book shared resources (like laundry rooms or study spaces), report maintenance issues, and communicate with dorm administration.',
    inspiration: 'Living in university dormitories, I noticed how inefficient the manual booking systems for common areas were. I wanted to digitise the process to eliminate double-bookings and confusion among students.',
    challenges: 'Managing a team of 5 developers with different skill levels and schedules. We implemented strict Agile methodologies and code review processes to ensure everyone was aligned and the Firebase database rules were secure.',
    desc: 'Led a 5-member development team to design and ship a dormitory management mobile application using Flutter and Firebase. Managed the full project lifecycle including sprint planning, feature delivery, and QA testing cycles using Jira and Kanban methodologies.',
    highlights: [
      'Led cross-functional team of 5 developers through Agile sprints',
      'Reduced reservation conflicts by 50% through structured logic and QA',
      'Coordinated sprint planning, task breakdown, and delivery tracking',
      'Integrated Firebase real-time database for live room status updates',
    ],
    tech: ['Flutter', 'Firebase', 'Jira', 'Kanban', 'Mobile', 'Team Lead'],
    github: null,
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #0a1a10 0%, #0d2818 50%, #0a150e 100%)',
    accentColor: '#c8f230',
  },
  {
    num: '004',
    title: 'RemoteMouse',
    context: 'Personal Project · In Progress',
    brief: 'Custom TCP/UDP remote mouse controller for Windows + Android.',
    useCase: 'Allows a user to transform their Android smartphone into a wireless touchpad and keyboard for their Windows PC over a local Wi-Fi network.',
    inspiration: 'I wanted to control my PC from bed without buying a wireless mouse. I also saw it as a great opportunity to learn about low-level network programming and cross-platform app development using .NET MAUI.',
    challenges: 'Achieving low-latency cursor movement was difficult over TCP. I had to switch to UDP for real-time mouse movement updates while keeping TCP for reliable button clicks and configuration data.',
    desc: 'A personal tool to control a Windows PC mouse cursor remotely from an Android device over the local network. The system uses a WinForms tray application as the server on Windows and a .NET MAUI client on Android, communicating over a custom TCP/UDP protocol.',
    highlights: [
      'Designed custom network protocol over TCP/UDP for low-latency input',
      'Built WinForms tray server with system-level mouse injection',
      'Developed .NET MAUI Android client with multi-touch gesture support',
      'Implemented automatic device discovery and sensitivity configuration',
    ],
    tech: ['.NET MAUI', 'WinForms', 'TCP/UDP', 'C#', 'Android', 'Networking'],
    github: null,
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2a1010 50%, #1a0a0a 100%)',
    accentColor: '#ff6b6b',
  },
  {
    num: '005',
    title: 'Plaza Simulation',
    context: 'Distributed Systems · RPC',
    brief: 'C# distributed system simulating a plaza via RPC.',
    useCase: 'An educational simulation demonstrating how independent micro-clients interact with a central server hub to request and release limited resources concurrently.',
    inspiration: 'A deep dive into distributed systems. I wanted to simulate a microservices-like architecture where independent entities (sellers, eaters, drinkers) communicate entirely over a network protocol rather than shared memory.',
    challenges: 'Handling race conditions when multiple clients tried to access the same resource simultaneously. I had to implement robust locking mechanisms and asynchronous RPC handlers to prevent deadlocks.',
    desc: 'A C# application that simulates the concurrent operations of a plaza environment with multiple client types — sellers, eaters, and drinkers. Built to demonstrate distributed systems principles, the project uses Remote Procedure Calls (RPC) for client-server communication and showcases concurrent programming concepts.',
    highlights: [
      'Implemented server-client architecture using RPC communication',
      'Simulated concurrent multi-actor interactions with thread safety',
      'Demonstrated distributed systems patterns and best practices',
      'Designed for extensibility and clear separation of concerns',
    ],
    tech: ['C#', 'RPC', 'Distributed Systems', 'Concurrency', '.NET'],
    github: 'https://github.com/Aldric24/RPC-Simulation-of-a-Plaza',
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #0a100a 0%, #101a10 50%, #0a100a 100%)',
    accentColor: '#4ade80',
  },
  {
    num: '006',
    title: 'Video Streaming',
    context: 'Java Networking · Client-Server',
    brief: 'Java client-server with adaptive format selection over sockets.',
    useCase: 'A lightweight video delivery system where clients connect, benchmark their network speed automatically, and stream videos in a quality appropriate for their connection.',
    inspiration: 'Fascinated by how platforms like YouTube dynamically adjust video quality based on network conditions, I set out to build a simplified version of adaptive bitrate streaming using raw Java Sockets.',
    challenges: 'Designing a reliable protocol to test bandwidth before initiating the video transfer. Network jitter often skewed the speed test results, so I had to implement an averaging algorithm to make accurate format selection decisions.',
    desc: 'A Java client-server video management system featuring a GUI client. The application begins with a network speed test to determine available bandwidth, then filters and serves video files based on the client\'s measured speed and selected format preference. Clients can request, download, and play back videos.',
    highlights: [
      'Built GUI client with Java Swing for intuitive video management',
      'Implemented adaptive streaming: speed test drives format and resolution selection',
      'Server-side filtering delivers appropriate content based on client capability',
      'Supports video download, playback, and format management',
    ],
    tech: ['Java', 'Sockets', 'Swing GUI', 'Client-Server', 'Networking'],
    github: 'https://github.com/Aldric24/Video-Streaming-Program-Java-Sockets-',
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #100a1a 0%, #1a1030 50%, #100a1a 100%)',
    accentColor: '#a78bfa',
  },
  {
    num: '007',
    title: 'RSS User Locator',
    context: 'Kotlin · Android Mobile',
    brief: 'Kotlin mobile app combining RSS feeds with live location tracking.',
    useCase: 'A proof-of-concept Android app that simultaneously tracks a user\'s live GPS coordinates on a map while fetching and displaying the latest news from RSS feeds in the background.',
    inspiration: 'An exploration of Android hardware APIs. I wanted to build an application that merged background data fetching (RSS) with real-time hardware sensor data (GPS) into a single unified interface.',
    challenges: 'Managing the Android activity lifecycle alongside background location services. Ensuring the app didn\'t drain the battery while tracking GPS required implementing efficient location polling intervals.',
    desc: 'A Kotlin-based Android mobile application that combines RSS feed aggregation with real-time GPS user location tracking. Demonstrates Android development fundamentals including background services, location APIs, and network data parsing.',
    highlights: [
      'Integrated RSS feed parsing with real-time content updates',
      'Implemented live GPS location tracking using Android Location APIs',
      'Built with Kotlin following Android development best practices',
      'Designed for clear separation between feed content and location features',
    ],
    tech: ['Kotlin', 'Android', 'RSS', 'GPS', 'Location APIs', 'Mobile'],
    github: 'https://github.com/Aldric24/RSS-User-Locator',
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #14102a 50%, #0a0a1a 100%)',
    accentColor: '#818cf8',
  },
  {
    num: '008',
    title: 'Concurrent Programming',
    context: 'Multi-Language · GPU Acceleration',
    brief: 'Multithreading & GPU acceleration across C#, C++, Go, and CUDA.',
    useCase: 'A suite of benchmarked algorithms running complex calculations, designed to demonstrate performance differences between single-threaded, multi-threaded, and GPU-accelerated computing paradigms.',
    inspiration: 'With processors hitting clock speed limits, the future of performance is parallel. I wanted to benchmark and understand how different languages approach concurrency, from high-level tasks to low-level GPU kernels.',
    challenges: 'CUDA memory management. Moving data between the CPU host and GPU device was initially a massive bottleneck. I had to optimise memory access patterns to actually see a performance gain over the CPU implementations.',
    desc: 'An exploration of concurrent and parallel programming paradigms across multiple languages. Covers multithreading in C#, goroutines and channels in Go, parallel algorithms in C++, and GPU acceleration using CUDA. Each implementation demonstrates language-specific approaches to performance-critical computation.',
    highlights: [
      'C# multithreading: Task Parallel Library and thread synchronisation',
      'Go: goroutines, channels, and concurrent design patterns',
      'C++: parallel STL algorithms and OpenMP directives',
      'CUDA: GPU kernel programming for accelerated computation',
    ],
    tech: ['C#', 'C++', 'Go', 'CUDA', 'Multithreading', 'GPU', 'Parallel Computing'],
    github: 'https://github.com/Aldric24/Concurrent-Programming-P170B328-',
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #050505 0%, #0d0d1a 50%, #050505 100%)',
    accentColor: '#38bdf8',
  },
  {
    num: '009',
    title: 'AI in Gaming — Research',
    context: "Master's Thesis · KTU",
    brief: "Qualitative study on AI's evolving role in the gaming industry.",
    useCase: 'An academic thesis detailing the practical integration of Generative AI in modern game development, serving as a resource for studios looking to adopt AI pipelines.',
    inspiration: 'The rapid rise of Generative AI sparked my curiosity about its practical integration in game development pipelines. I wanted to move past the hype and gather empirical data on how professionals are actually using it.',
    challenges: 'Synthesizing qualitative data from unstructured interviews. I had to learn thematic analysis techniques and use QualCoder to rigorously categorise hundreds of interview transcripts into meaningful industry trends.',
    desc: "A Master's-level research project using a triangulated three-method qualitative study to analyze AI's evolving role across the gaming industry. The research synthesizes expert interviews, open-ended questionnaires, and secondary data including GDC talks and industry reports, coded and analyzed using QualCoder.",
    highlights: [
      'Designed and conducted expert interviews with industry professionals',
      'Deployed open-ended questionnaires for broader industry sentiment',
      'Analyzed secondary sources: GDC talks, whitepapers, industry reports',
      'Applied qualitative coding and thematic analysis using QualCoder',
    ],
    tech: ['Research Design', 'QualCoder', 'Interviews', 'Qualitative Analysis', 'KTU'],
    github: null,
    release: null,
    images: ['cover.png'],
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1010 50%, #0a0a0a 100%)',
    accentColor: '#fb923c',
  },
];

// --- Sticky nav ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// --- Role pill interaction ---
const pills = document.querySelectorAll('.role-pill');
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

// --- Scroll reveal ---
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// --- Carousel drag-scroll ---
const carousel = document.getElementById('projCarousel');
if (carousel) {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.userSelect = 'none';
    carousel.style.scrollSnapType = 'none'; // disable snap while dragging
  });

  carousel.addEventListener('mouseleave', () => { 
    isDown = false; 
    carousel.style.scrollSnapType = '';
  });
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.userSelect = '';
    carousel.style.scrollSnapType = ''; // re-enable snap
  });

  carousel.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Redirect vertical scroll wheel to horizontal scroll
  carousel.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > 0) {
      e.preventDefault();
      carousel.scrollBy({
        left: e.deltaY > 0 ? 300 : -300,
        behavior: 'smooth'
      });
    }
  }, { passive: false });
}

// --- Modal logic ---
const overlay = document.getElementById('projModalOverlay');
const modalClose = document.getElementById('projModalClose');

let galleryInterval = null;
let currentImageIndex = 0;
let currentProjectImages = [];
let currentProjectFolder = '';
let activeProjectIndex = 0; // Track the currently open project

function startGalleryTimer() {
  clearInterval(galleryInterval);
  if (currentProjectImages.length > 1) {
    galleryInterval = setInterval(() => {
      showImage(currentImageIndex + 1);
    }, 10000); // 10 seconds
  }
}

function showImage(index) {
  if (currentProjectImages.length === 0) return;
  
  currentImageIndex = (index + currentProjectImages.length) % currentProjectImages.length;
  const img = document.getElementById('projModalImg');
  
  const imgSrc = `assets/projects/${currentProjectFolder}/${currentProjectImages[currentImageIndex]}`;
  
  // Try loading real image
  const testImg = new Image();
  testImg.onload = () => {
    img.src = imgSrc;
    img.style.display = 'block';
    
    // Dynamically adapt grid ratio based on image resolution
    const ratio = testImg.naturalWidth / testImg.naturalHeight;
    const modalBody = document.querySelector('.proj-modal-body');
    
    // If it's a very wide image (e.g. 16:9), give the image side more space
    if (ratio > 1.4) {
      modalBody.style.gridTemplateColumns = '1.4fr 1fr';
    } 
    // If it's portrait/tall, shrink the image side
    else if (ratio < 0.9) {
      modalBody.style.gridTemplateColumns = '0.9fr 1fr';
    } 
    // Default/square
    else {
      modalBody.style.gridTemplateColumns = '1.1fr 1fr';
    }
  };
  testImg.onerror = () => {
    img.style.display = 'none'; // fallback to placeholder if image fails
    document.querySelector('.proj-modal-body').style.gridTemplateColumns = '1.3fr 1fr'; // default ratio
  };
  testImg.src = imgSrc;

  // Update dots
  const dots = document.querySelectorAll('.gallery-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentImageIndex);
  });
  
  startGalleryTimer();
}

function openModal(index) {
  // Wrap around index
  index = (index + PROJECTS.length) % PROJECTS.length;
  activeProjectIndex = index;
  const p = PROJECTS[index];

  document.getElementById('projModalNum').textContent = p.num;
  document.getElementById('projModalTitle').textContent = p.title;
  document.getElementById('projModalContext').textContent = p.context;
  
  document.getElementById('projModalUseCase').textContent = p.useCase || 'Information coming soon.';
  document.getElementById('projModalInspiration').textContent = p.inspiration || 'Information coming soon.';
  document.getElementById('projModalChallenges').textContent = p.challenges || 'Information coming soon.';

  // Highlights
  const hl = document.getElementById('projModalHighlights');
  if (p.highlights && p.highlights.length > 0) {
    hl.innerHTML = p.highlights.map(h => `<span>${h}</span>`).join('');
    hl.parentElement.style.display = 'block';
  } else {
    hl.parentElement.style.display = 'none';
  }

  // Tech tags
  const tech = document.getElementById('projModalTech');
  tech.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');

  // Links
  const links = document.getElementById('projModalLinks');
  links.innerHTML = '';
  
  if (p.release) {
    links.innerHTML += `<a href="${p.release}" target="_blank" rel="noopener" class="primary-link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
      View Release
    </a>`;
  }
  
  if (p.github) {
    const linkClass = p.release ? 'ghost-link' : 'primary-link';
    links.innerHTML += `<a href="${p.github}" target="_blank" rel="noopener" class="${linkClass}">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      GitHub Repo
    </a>`;
  }

  // Image / gradient placeholder setup
  const placeholder = document.getElementById('projModalPlaceholder');
  placeholder.style.background = p.gradient;
  placeholder.setAttribute('data-label', p.title.toUpperCase());
  placeholder.style.setProperty('--card-accent', p.accentColor);
  
  // Gallery setup
  currentProjectFolder = slugify(p.title);
  currentProjectImages = p.images || [];
  currentImageIndex = 0;
  
  const controls = document.getElementById('projGalleryControls');
  const dotsContainer = document.getElementById('galleryDots');
  
  if (currentProjectImages.length > 1) {
    controls.style.display = 'flex';
    dotsContainer.innerHTML = currentProjectImages.map((_, i) => 
      `<div class="gallery-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
    ).join('');
    
    // Add dot listeners
    document.querySelectorAll('.gallery-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        showImage(parseInt(e.target.dataset.index));
      });
    });
  } else {
    controls.style.display = 'none';
    dotsContainer.innerHTML = '';
  }

  // Load first image
  showImage(0);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(galleryInterval);
}

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Remove async probing functions

function renderCarousel() {
  const carousel = document.getElementById('projCarousel');
  if (!carousel) return;
  
  carousel.innerHTML = PROJECTS.map((p, i) => {
    const slug = slugify(p.title);
    
    // Pull images from the auto-generated file mapping, falling back to empty array
    if (window.PROJECT_IMAGES && window.PROJECT_IMAGES[slug]) {
      p.images = window.PROJECT_IMAGES[slug];
    } else {
      p.images = p.images || [];
    }
    
    const images = p.images;
    
    let imgTags = '';
    if (images.length > 0) {
      imgTags = images.map((img, imgIndex) => {
        return `<img src="assets/projects/${slug}/${img}" class="${imgIndex === 0 ? 'active' : ''}" loading="lazy" />`;
      }).join('');
    } else {
      // Fallback placeholder if no images
      imgTags = `<div style="width:100%; height:100%; background:${p.gradient};"></div>`;
    }

    return `
      <div class="proj-card" data-index="${i}">
        <div class="proj-card-bg">
          ${imgTags}
        </div>
        <div class="proj-card-overlay"></div>
        <div class="proj-card-inner">
          <div class="proj-card-num">${p.num}</div>
          <div class="proj-card-title">${p.title}</div>
          <div class="proj-card-brief">${p.brief}</div>
          <div class="proj-card-hint">click to explore ↗</div>
        </div>
      </div>
    `;
  }).join('');

  // Setup interval for card image transitions
  document.querySelectorAll('.proj-card-bg').forEach(bg => {
    const imgs = bg.querySelectorAll('img');
    if (imgs.length > 1) {
      let currentIndex = 0;
      setTimeout(() => {
        setInterval(() => {
          imgs[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % imgs.length;
          imgs[currentIndex].classList.add('active');
        }, 6000);
      }, Math.random() * 2000);
    }
  });

  // Rebind Card click → open modal
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.index, 10);
      openModal(index);
    });
  });
}

// Initialize the carousel after discovering images
renderCarousel();

// Close button
modalClose.addEventListener('click', closeModal);

// Click backdrop to close
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});

// Navigation buttons
document.getElementById('modalNavPrev').addEventListener('click', (e) => {
  e.stopPropagation();
  openModal(activeProjectIndex - 1);
});
document.getElementById('modalNavNext').addEventListener('click', (e) => {
  e.stopPropagation();
  openModal(activeProjectIndex + 1);
});

// Keyboard controls
document.addEventListener('keydown', e => {
  if (!overlay.classList.contains('open')) return;
  
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    openModal(activeProjectIndex - 1);
  } else if (e.key === 'ArrowRight') {
    openModal(activeProjectIndex + 1);
  }
});

// Gallery arrows
document.getElementById('galleryPrev').addEventListener('click', () => showImage(currentImageIndex - 1));
document.getElementById('galleryNext').addEventListener('click', () => showImage(currentImageIndex + 1));
