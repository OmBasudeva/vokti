// Vokti (ভক্তি) Application Script

const SCRIPTURES_DATA = [
  {
    id: 'adya-stotram-pdf',
    title: 'আদ্যাস্তোত্রম',
    englishTitle: 'Adya Stotram',
    category: 'stotram',
    format: 'pdf',
    filename: 'আদ্যাস্তোত্রম.pdf',
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
    filename: 'শ্রী শ্রী চণ্ডী.pdf',
    fileSize: '13.3 MB',
    description: 'শ্রীশ্রীচণ্ডী বা দেবী মাহাত্ম্যম্ — মার্কণ্ডেয় পুরাণান্তর্গত দেবী দুর্গার অলৌকিক মাহাত্ম্য, লীলা ও স্তুতি সংবলিত মহাপবিত্র গ্রন্থ।',
    icon: '🕉️',
    canPreview: true
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
    icon: '📜',
    canPreview: false
  }
];

// DOM Elements
const scripturesGrid = document.getElementById('scripturesGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterChips = document.querySelectorAll('.chip');
const noResults = document.getElementById('noResults');

// Modal Elements
const readerModal = document.getElementById('readerModal');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const modalNewTabBtn = document.getElementById('modalNewTabBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const pdfFrame = document.getElementById('pdfFrame');

let currentFilter = 'all';
let currentSearch = '';
let currentOpenDoc = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderScriptures();
  setupEventListeners();
});

function renderScriptures() {
  const filtered = SCRIPTURES_DATA.filter(item => {
    // Filter by category/format
    const matchesFilter = 
      currentFilter === 'all' ||
      item.category === currentFilter ||
      item.format === currentFilter;

    // Filter by search query
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

  const encodedFilename = encodeURIComponent(item.filename);

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
        <a href="${encodedFilename}" download="${item.filename}" class="btn-download" aria-label="ডাউনলোড ${item.title}">
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
        <a href="${encodedFilename}" download="${item.filename}" class="btn-download" aria-label="ডাউনলোড ${item.title}">
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

function openReader(id) {
  const doc = SCRIPTURES_DATA.find(d => d.id === id);
  if (!doc) return;

  currentOpenDoc = doc;
  const encodedFilename = encodeURIComponent(doc.filename);

  modalTitle.textContent = doc.title;
  modalMeta.textContent = `${doc.englishTitle} (${doc.fileSize})`;
  modalDownloadBtn.href = encodedFilename;
  modalDownloadBtn.download = doc.filename;

  pdfFrame.src = encodedFilename;
  readerModal.classList.add('open');
  readerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeReader() {
  readerModal.classList.remove('open');
  readerModal.setAttribute('aria-hidden', 'true');
  pdfFrame.src = '';
  document.body.style.overflow = '';
  currentOpenDoc = null;
}

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

  modalNewTabBtn.addEventListener('click', () => {
    if (currentOpenDoc) {
      window.open(encodeURIComponent(currentOpenDoc.filename), '_blank');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && readerModal.classList.contains('open')) {
      closeReader();
    }
  });
}
