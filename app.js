// Vokti (ভক্তি) Application Script

// Configure Mozilla PDF.js Worker
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

const SCRIPTURES_DATA = [
  {
    id: 'adya-stotram-pdf',
    title: 'আদ্যাস্তোত্রম',
    englishTitle: 'Adya Stotram',
    category: 'stotram',
    format: 'pdf',
    filename: 'pdfs/আদ্যাস্তোত্রম.pdf',
    fileSize: '89 KB',
    description: 'ব্রহ্মযামলোক্ত আদ্যাস্তোত্রম্ — মা আদ্যাশক্তির পরম কল্যাণকারী ও বিঘ্ননাশক মহাশক্তিশালী স্তোত্র।',
    icon: '🪔',
    canPreview: true
  },
  {
    id: 'sri-sri-chandi-pdf',
    title: 'শ্রী শ্রী চণ্ডী',
    englishTitle: 'Sri Sri Chandi (Devi Mahatmyam)',
    category: 'scripture',
    format: 'pdf',
    filename: 'pdfs/শ্রী শ্রী চণ্ডী.pdf',
    fileSize: '13.3 MB',
    description: 'শ্রীশ্রীচণ্ডী বা দেবী মাহাত্ম্যম্ — মার্কণ্ডেয় পুরাণান্তর্গত দেবী দুর্গার অলৌকিক মাহাত্ম্য, লীলা ও স্তুতি সংবলিত মহাপবিত্র গ্রন্থ।',
    icon: '🕉️',
    canPreview: true
  },
  {
    id: 'mahanirban-tantram-shyamacharan-pdf',
    title: 'মহানির্ব্বাণ তন্ত্র (শ্রী শ্যামাচরণ কবিরত্ন)',
    englishTitle: 'Mahanirban Tantram - Sri Shyamacharan Kabiratna',
    category: 'scripture',
    format: 'pdf',
    filename: 'pdfs/মহানির্ব্বাণ তন্ত্র - শ্রী শ্যামাচরণ কবিরত্ন.pdf',
    fileSize: '36.5 MB',
    description: 'মহানির্ব্বাণ তন্ত্র — শ্রী শ্যামাচরণ কবিরত্ন সম্পাদিত প্রামাণ্য শাস্ত্রগ্রন্থ (শান্তিনিকেতন বিশ্বভারতী লাইব্রেরির মূল সংস্করণ, ৪৭৬ পৃষ্ঠা)।',
    icon: '🔱',
    canPreview: true
  },
  {
    id: 'mahanirban-tantram-1889-pdf',
    title: 'মহানির্ব্বাণ তন্ত্র (১৮৮৯ সংস্করণ)',
    englishTitle: 'Mahanirban Tantram (1889 Edition)',
    category: 'scripture',
    format: 'pdf',
    filename: 'pdfs/মহানির্ব্বাণ তন্ত্র (১৮৮৯ সংস্করণ).pdf',
    fileSize: '30.8 MB',
    description: 'শ্রীশ্রীমহানির্ব্বাণতন্ত্রম্ — ১২৯৬ বঙ্গাব্দের দুর্লভ বঙ্গবাসী সংস্করণ, শ্রীবিহারীলাল সরকার দ্বারা মুদ্রিত ও প্রকাশিত (৩০৮ পৃষ্ঠা)।',
    icon: '📜',
    canPreview: true
  },
  {
    id: 'sri-navagraha-stotram-pdf',
    title: 'শ্রী নবগ্রহ স্তোত্রম্',
    englishTitle: 'Sri Navagraha Stotram',
    category: 'stotram',
    format: 'pdf',
    filename: 'pdfs/শ্রী নবগ্রহ স্তোত্রম্.pdf',
    fileSize: '64 KB',
    description: 'ব্যাসদেব বিরচিত পবিত্র শ্রী নবগ্রহ স্তোত্রম্ — রবি, চন্দ্র, মঙ্গল, বুধ, বৃহস্পতি, শুক্র, শনি, রাহু ও কেতুর শান্তি ও বিঘ্ননাশন স্তব।',
    icon: '🪐',
    canPreview: true
  },
  {
    id: 'sri-navagraha-stotram-docx',
    title: 'শ্রী নবগ্রহ স্তোত্রম্',
    englishTitle: 'Sri Navagraha Stotram (Word Document)',
    category: 'stotram',
    format: 'docx',
    filename: 'শ্রী নবগ্রহ স্তোত্রম্.docx',
    fileSize: '16 KB',
    description: 'শ্রী নবগ্রহ স্তোত্রের মূল স্তব ও শ্লোকাবলী (Microsoft Word / সম্পাদনাযোগ্য ফরম্যাট)।',
    icon: '🪐',
    canPreview: false
  },
  {
    id: 'adya-docx',
    title: 'ঔং নম আদ্যায়ৈ',
    englishTitle: 'Om Namo Adyayai',
    category: 'stotram',
    format: 'docx',
    filename: 'ঔং নম আদ্যায়ৈ.docx',
    fileSize: '16 KB',
    description: 'আদ্যা স্তোত্রের পবিত্র মূল স্তোত্রপাঠ ও শ্লোকাবলী (Microsoft Word / সম্পাদনাযোগ্য ফরম্যাট)।',
    icon: '🪔',
    canPreview: false
  }
];

// Helper: Safely encode path segments while preserving directory slashes
function getSafePath(path) {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

// Bengali Numeral Helper
function toBengaliNumber(num) {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(d => bengaliDigits[parseInt(d)] || d).join('');
}

// DOM Elements
const scripturesGrid = document.getElementById('scripturesGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterChips = document.querySelectorAll('.chip');
const noResults = document.getElementById('noResults');
const libraryCount = document.getElementById('library-count');

// Reader Elements
const readerModal = document.getElementById('readerModal');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const canvasContainer = document.getElementById('canvasContainer');
const pdfCanvas = document.getElementById('pdfCanvas');
const pdfLoading = document.getElementById('pdfLoading');

const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageNumberInput = document.getElementById('pageNumberInput');
const totalPagesCount = document.getElementById('totalPagesCount');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomPercent = document.getElementById('zoomPercent');
const fitWidthBtn = document.getElementById('fitWidthBtn');

// Reader State
let currentPdfDoc = null;
let currentPageNum = 1;
let totalPages = 1;
let currentZoomScale = 1.0;
let isFitWidth = true;
let isRendering = false;
let renderTask = null;
let currentLoadingTask = null;

let currentFilter = 'all';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (libraryCount) {
    libraryCount.textContent = `${SCRIPTURES_DATA.length}টি পবিত্র গ্রন্থ সংরক্ষিত`;
  }
  renderScriptures();
  setupEventListeners();
});

function renderScriptures() {
  const filtered = SCRIPTURES_DATA.filter(item => {
    const matchesFilter = 
      currentFilter === 'all' ||
      item.category === currentFilter ||
      item.format === currentFilter;

    const query = currentSearch.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.englishTitle.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  scripturesGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    filtered.forEach(item => {
      const card = createScriptureCard(item);
      scripturesGrid.appendChild(card);
    });
  }
}

function createScriptureCard(item) {
  const card = document.createElement('article');
  card.className = 'scripture-card';
  card.dataset.id = item.id;

  const safePath = getSafePath(item.filename);
  const downloadName = item.filename.split('/').pop();

  const actionsHtml = item.canPreview 
    ? `
      <div class="card-actions">
        <button class="btn-read" onclick="openReader('${item.id}')" aria-label="অনলাইনে পড়ুন ${item.title}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          অনলাইনে পড়ুন
        </button>
        <a href="${safePath}" download="${downloadName}" class="btn-download" aria-label="ডাউনলোড ${item.title}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          ডাউনলোড
        </a>
      </div>
    `
    : `
      <div class="card-actions single-action">
        <a href="${safePath}" download="${downloadName}" class="btn-download" aria-label="ডাউনলোড ${item.title}">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          ডাউনলোড করুন (${item.fileSize})
        </a>
      </div>
    `;

  card.innerHTML = `
    <div>
      <div class="card-top">
        <div class="card-icon">${item.icon}</div>
        <span class="format-badge format-${item.format}">${item.format.toUpperCase()}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <div class="card-subtitle">${item.englishTitle}</div>
      <p class="card-desc">${item.description}</p>
    </div>
    <div>
      <div class="card-meta-info">
        <span>ফাইল সাইজ: ${item.fileSize}</span>
        <span>•</span>
        <span>ফরম্যাট: ${item.format.toUpperCase()}</span>
      </div>
      ${actionsHtml}
    </div>
  `;

  return card;
}

// ==========================================================================
// Mozilla PDF.js In-Browser Canvas Reader (Android & Desktop Compatible)
// ==========================================================================

function openReader(id) {
  const doc = SCRIPTURES_DATA.find(d => d.id === id);
  if (!doc) return;

  const safePath = getSafePath(doc.filename);
  const downloadName = doc.filename.split('/').pop();

  modalTitle.textContent = doc.title;
  modalMeta.textContent = `${doc.englishTitle} (${doc.fileSize})`;
  modalDownloadBtn.href = safePath;
  modalDownloadBtn.download = downloadName;

  // Open modal
  readerModal.classList.add('open');
  readerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Show loading
  pdfLoading.style.display = 'flex';
  pdfCanvas.style.display = 'none';

  currentPageNum = 1;
  isFitWidth = true;
  currentZoomScale = 1.0;
  updateZoomDisplay();

  // Cancel any prior loading task
  if (currentLoadingTask) {
    currentLoadingTask.destroy();
  }

  // Load PDF document using PDF.js
  currentLoadingTask = pdfjsLib.getDocument({
    url: safePath,
    cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
    cMapPacked: true,
  });

  currentLoadingTask.promise.then(pdf => {
    currentPdfDoc = pdf;
    totalPages = pdf.numPages;
    totalPagesCount.textContent = totalPages;
    pageNumberInput.max = totalPages;
    pageNumberInput.value = 1;

    renderPage(1);
  }).catch(err => {
    console.error('PDF Load Error:', err);
    pdfLoading.innerHTML = `
      <p>⚠️ নথিটি লোড করতে সমস্যা হয়েছে।</p>
      <a href="${safePath}" download="${downloadName}" class="btn-action">সরাসরি ডাউনলোড করুন</a>
    `;
  });
}

function renderPage(num) {
  if (!currentPdfDoc) return;
  if (num < 1 || num > totalPages) return;

  if (renderTask) {
    renderTask.cancel();
  }

  isRendering = true;
  pdfLoading.style.display = 'flex';

  currentPdfDoc.getPage(num).then(page => {
    const containerWidth = Math.max(canvasContainer.clientWidth - 32, 280);
    const unscaledViewport = page.getViewport({ scale: 1.0 });

    let calculatedScale;
    if (isFitWidth || window.innerWidth < 640) {
      // Auto-fit to screen/container width
      calculatedScale = (containerWidth / unscaledViewport.width) * currentZoomScale;
    } else {
      calculatedScale = currentZoomScale * 1.25;
    }

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2.5); // crisp retina rendering
    const viewport = page.getViewport({ scale: calculatedScale });

    pdfCanvas.width = viewport.width * pixelRatio;
    pdfCanvas.height = viewport.height * pixelRatio;
    pdfCanvas.style.width = `${viewport.width}px`;
    pdfCanvas.style.height = `${viewport.height}px`;

    const ctx = pdfCanvas.getContext('2d');
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };

    renderTask = page.render(renderContext);

    renderTask.promise.then(() => {
      isRendering = false;
      pdfLoading.style.display = 'none';
      pdfCanvas.style.display = 'block';
    }).catch(err => {
      if (err.name !== 'RenderingCancelledException') {
        console.error('Page render error:', err);
      }
    });

    // Update controls
    currentPageNum = num;
    pageNumberInput.value = num;
    prevPageBtn.disabled = (num <= 1);
    nextPageBtn.disabled = (num >= totalPages);

    // Scroll viewer to top on page change
    canvasContainer.scrollTop = 0;
  });
}

function updateZoomDisplay() {
  const percent = Math.round(currentZoomScale * 100);
  zoomPercent.textContent = `${percent}%`;
}

function zoomIn() {
  isFitWidth = false;
  currentZoomScale = Math.min(currentZoomScale + 0.2, 3.0);
  updateZoomDisplay();
  renderPage(currentPageNum);
}

function zoomOut() {
  isFitWidth = false;
  currentZoomScale = Math.max(currentZoomScale - 0.2, 0.5);
  updateZoomDisplay();
  renderPage(currentPageNum);
}

function fitWidth() {
  isFitWidth = true;
  currentZoomScale = 1.0;
  updateZoomDisplay();
  renderPage(currentPageNum);
}

function closeReader() {
  readerModal.classList.remove('open');
  readerModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  if (renderTask) {
    renderTask.cancel();
  }
  if (currentPdfDoc) {
    currentPdfDoc.destroy();
    currentPdfDoc = null;
  }
}

// ==========================================================================
// Event Listeners & Gestures
// ==========================================================================

function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.style.display = currentSearch ? 'block' : 'none';
    renderScriptures();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.style.display = 'none';
    renderScriptures();
    searchInput.focus();
  });

  // Filter chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      renderScriptures();
    });
  });

  // Modal interactions
  closeModalBtn.addEventListener('click', closeReader);
  readerModal.addEventListener('click', (e) => {
    if (e.target === readerModal) {
      closeReader();
    }
  });

  // Page navigation
  prevPageBtn.addEventListener('click', () => {
    if (currentPageNum > 1) {
      renderPage(currentPageNum - 1);
    }
  });

  nextPageBtn.addEventListener('click', () => {
    if (currentPageNum < totalPages) {
      renderPage(currentPageNum + 1);
    }
  });

  pageNumberInput.addEventListener('change', (e) => {
    const target = parseInt(e.target.value);
    if (!isNaN(target) && target >= 1 && target <= totalPages) {
      renderPage(target);
    } else {
      e.target.value = currentPageNum;
    }
  });

  // Zoom controls
  zoomInBtn.addEventListener('click', zoomIn);
  zoomOutBtn.addEventListener('click', zoomOut);
  fitWidthBtn.addEventListener('click', fitWidth);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!readerModal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeReader();
    } else if (e.key === 'ArrowLeft' && currentPageNum > 1) {
      renderPage(currentPageNum - 1);
    } else if (e.key === 'ArrowRight' && currentPageNum < totalPages) {
      renderPage(currentPageNum + 1);
    }
  });

  // Touch Swipe for Mobile Navigation (Android & iOS)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  canvasContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    }
  }, { passive: true });

  canvasContainer.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const timeDiff = Date.now() - touchStartTime;

      // Only trigger if horizontal swipe is larger than vertical movement and took < 500ms
      if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5 && timeDiff < 500) {
        if (diffX < 0 && currentPageNum < totalPages) {
          // Swipe Left -> Next Page
          renderPage(currentPageNum + 1);
        } else if (diffX > 0 && currentPageNum > 1) {
          // Swipe Right -> Previous Page
          renderPage(currentPageNum - 1);
        }
      }
    }
  }, { passive: true });

  // Handle window resize for dynamic canvas scaling
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (readerModal.classList.contains('open') && isFitWidth) {
        renderPage(currentPageNum);
      }
    }, 200);
  });
}
