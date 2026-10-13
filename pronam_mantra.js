// Pronam Mantras Data & Application Logic

const PRONAM_MANTRAS_DATA = [
  {
    id: 'krishna-mukhya',
    deity: 'শ্রীকৃষ্ণ',
    title: 'শ্রীকৃষ্ণ প্রধান প্রণাম মন্ত্র',
    tag: 'নিত্য প্রার্থনার মূল মন্ত্র',
    category: 'krishna',
    icon: '🪔',
    verse: 'হে কৃষ্ণ করুণাসিন্ধু দীনবন্ধু জগৎপতে।\nগোপেশ গোপিকাকান্ত রাধাকান্ত নমোহস্তুতে॥',
    transliteration: 'He Krishna Karuna-sindhu Dina-bandhu Jagat-pate |\nGopesha Gopika-kanta Radha-kanta Namo\'stu Te ||',
    wordMeanings: [
      { term: 'হে কৃষ্ণ', def: 'হে পরম করুণাময় ও সর্বাকর্ষক শ্রীকৃষ্ণ!' },
      { term: 'করুণাসিন্ধু', def: 'অপার করুণা ও দয়ার মহাসমুদ্র।' },
      { term: 'দীনবন্ধু', def: 'দীন-হীন, কাতর ও শরণাগত ভক্তের পরম বন্ধু।' },
      { term: 'জগৎপতে', def: 'সমগ্র নিখিল ব্রহ্মাণ্ডের পালনকর্তা ও অধিপতি।' },
      { term: 'গোপেশ', def: 'বৃন্দাবনের গোপকুলের পরম ঈশ্বর।' },
      { term: 'গোপিকাকান্ত', def: 'ব্রজের গোপিকাদের পরম প্রিয়তম।' },
      { term: 'রাধাকান্ত', def: 'শ্রীমতী রাধারাণীর প্রাণবল্লভ ও প্রিয়তম।' },
      { term: 'নমোহস্তুতে', def: 'আপনাকে আমার অনন্ত কোটি সশ্রদ্ধ প্রণাম নিবেদন করি।' }
    ],
    simpleMeaning: 'হে পরমেশ্বর শ্রীকৃষ্ণ! আপনি করুণার মহাসমুদ্র, দীন-দরিদ্র ও শরণাগত জনের পরম বন্ধু এবং সমগ্র নিখিল বিশ্বের অধিপতি। আপনি গোপদের ঈশ্বর, গোপিকাদের প্রাণপ্রিয় এবং শ্রীমতি রাধারাণীর প্রিয়তম। আপনাকে আমি বারবার সশ্রদ্ধ প্রণাম নিবেদন করি।'
  },
  {
    id: 'krishna-govinda',
    deity: 'শ্রীকৃষ্ণ',
    title: 'গোবিন্দ / ব্রহ্মণ্যদেব প্রণাম মন্ত্র',
    tag: 'ব্রহ্মণ্য ও জগদ্ধিতায় মন্ত্র',
    category: 'krishna',
    icon: '🕉️',
    verse: 'নমো ব্রহ্মণ্যদেবায় গোব্রাহ্মণহিতায় চ।\nজগদ্ধিতায় কৃষ্ণায় গোবিন্দায় নমো নমঃ॥',
    transliteration: 'Namo Brahmanya-devaya Go-brahmana-hitaya Cha |\nJagad-dhitaya Krishnaya Govindaya Namo Namah ||',
    wordMeanings: [
      { term: 'নমো', def: 'আমার ভক্তিপূর্ণ প্রণাম নিবেদন করি।' },
      { term: 'ব্রহ্মণ্যদেবায়', def: 'বেদ, ব্রহ্ম ও সাধুজ্ঞানীদের পরম আশ্রয়স্বরূপ দেবতাকে।' },
      { term: 'গোব্রাহ্মণহিতায় চ', def: 'গাভী ও সাধু-ব্রাহ্মণদের পরম মঙ্গলকারীকে।' },
      { term: 'জগদ্ধিতায়', def: 'সমগ্র জগতের পরম হিতৈষী ও কল্যাণকারীকে।' },
      { term: 'কৃষ্ণায়', def: 'সর্বানন্দদায়ক পরমপুরুষ শ্রীকৃষ্ণকে।' },
      { term: 'গোবিন্দায়', def: 'ইন্দ্রিয় ও গোসমূহের অধিপতি শ্রীগোবিন্দকে।' },
      { term: 'নমো নমঃ', def: 'পুনঃ পুনঃ সশ্রদ্ধ প্রণাম নিবেদন করি।' }
    ],
    simpleMeaning: 'যিনি ব্রাহ্মণ ও বেদজ্ঞদের পরম আরাধ্য দেবতা, যিনি গাভী ও সাধু-ব্রাহ্মণদের মঙ্গলকারী এবং সমগ্র জগতের পরম হিতৈষী, সেই ভগবান শ্রীকৃষ্ণ ও গোবিন্দকে আমি বারবার প্রণাম করি।'
  },
  {
    id: 'krishna-kleshanashak',
    deity: 'শ্রীকৃষ্ণ',
    title: 'ক্লেশবিনাশক বাসুদেব প্রণাম মন্ত্র',
    tag: 'সংকট ও দুঃখ বিনাশক',
    category: 'krishna',
    icon: '🔱',
    verse: 'কৃষ্ণায় বাসুদেবায় হরয়ে পরমাত্মনে।\nপ্রণতক্লেশনাশায় গোবিন্দায় নমো নমঃ॥',
    transliteration: 'Krishnaya Vasudevaya Haraye Paramatmane |\nPranata-klesha-nashaya Govindaya Namo Namah ||',
    wordMeanings: [
      { term: 'কৃষ্ণায়', def: 'পরমপুরুষ ভগবান শ্রীকৃষ্ণকে।' },
      { term: 'বাসুদেবায়', def: 'বসুদেবনন্দন সর্বব্যাপী শ্রীকৃষ্ণকে।' },
      { term: 'হরয়ে', def: 'ভক্তের পাপ, তাপ ও সমস্ত দুঃখ হরণকারী শ্রীহরিকে।' },
      { term: 'পরমাত্মনে', def: 'সর্বভূতের অন্তরে বিরাজমান পরমাত্মাস্বরূপকে।' },
      { term: 'প্রণতক্লেশনাশায়', def: 'শরণাগত ভক্তের সর্বপ্রকার ক্লেশ ও যাতনা নাশকারীকে।' },
      { term: 'গোবিন্দায়', def: 'শ্রীগোবিন্দকে।' },
      { term: 'নমো নমঃ', def: 'বারংবার সশ্রদ্ধ প্রণাম নিবেদন করি।' }
    ],
    simpleMeaning: 'বাসুদেবনন্দন শ্রীকৃষ্ণ, যিনি ভক্তদের সমস্ত পাপ ও তাপ হরণকারী পরমাত্মা এবং শরণাগত জনের সকল ক্লেশ নাশ করেন, সেই শ্রীগোবিন্দকে আমার ভক্তিপূর্ণ প্রণাম।'
  },
  {
    id: 'radha-krishna-yugal',
    deity: 'শ্রীশ্রীরাধাকৃষ্ণ',
    title: 'শ্রীশ্রীরাধাকৃষ্ণ যুগল প্রণাম মন্ত্র',
    tag: 'রাধারাণী ও যুগল বন্দনা',
    category: 'radhakrishna',
    icon: '🌸',
    verse: 'তপ্তকাঞ্চনগৌরাঙ্গি রাধে বৃন্দাবনেশ্বরী।\nবৃষভানুসুতে দেবি প্রণমামি হরিপ্রিয়ে॥',
    transliteration: 'Tapta-kanchana-gaurangi Radhe Vrindavaneshvari |\nVrishabhanu-sute Devi Pranamami Hari-priye ||',
    wordMeanings: [
      { term: 'তপ্তকাঞ্চনগৌরাঙ্গি', def: 'গলিত ও উত্তপ্ত খাঁটি স্বর্ণের ন্যায় যাঁহার দেহের উজ্জ্বল কান্তি।' },
      { term: 'রাধে', def: 'হে পরমারাধ্যা শ্রীমতী রাধারাণী!' },
      { term: 'বৃন্দাবনেশ্বরী', def: 'পরম ধাম শ্রী বৃন্দাবনের একমাত্র ঈশ্বরী ও অধিশ্বরী।' },
      { term: 'বৃষভানুসুতে', def: 'মহারাজ বৃষভানুর পরম কল্যাণময়ী দিব্য কন্যা।' },
      { term: 'দেবি', def: 'হে চিন্ময়ী পরম দেবী!' },
      { term: 'প্রণমামি', def: 'আমি আপনাকে মস্তক অবনত করে প্রণাম নিবেদন করি।' },
      { term: 'হরিপ্রিয়ে', def: 'শ্রীহরির নিত্য পরম আনন্দদায়িনী প্রেয়সী।' }
    ],
    simpleMeaning: 'গলিত সুবর্ণের ন্যায় যাঁহার অঙ্গকান্তি, যিনি বৃন্দাবনের পরম ঈশ্বরী, রাজা বৃষভানুর দিব্য কন্যা এবং শ্রীহরির নিত্য প্রেয়সী—সেই শ্রীমতী রাধারাণীকে আমি সশ্রদ্ধ প্রণাম নিবেদন করি।'
  }
];

// DOM Elements
const mantrasList = document.getElementById('mantrasList');
const mantraSearchInput = document.getElementById('mantraSearchInput');
const clearMantraSearch = document.getElementById('clearMantraSearch');
const filterChips = document.querySelectorAll('.chip');
const noMantraResults = document.getElementById('noMantraResults');
const mantraCount = document.getElementById('mantra-count');
const expandAllBtn = document.getElementById('expandAllBtn');
const collapseAllBtn = document.getElementById('collapseAllBtn');
const copyToast = document.getElementById('copyToast');

let currentFilter = 'all';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMantras();
  setupEventListeners();
});

function renderMantras() {
  const filtered = PRONAM_MANTRAS_DATA.filter(item => {
    const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
    const query = currentSearch.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.deity.toLowerCase().includes(query) ||
      item.verse.toLowerCase().includes(query) ||
      item.transliteration.toLowerCase().includes(query) ||
      item.simpleMeaning.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  mantrasList.innerHTML = '';

  if (mantraCount) {
    mantraCount.textContent = `${filtered.length}টি পবিত্র প্রণাম মন্ত্র`;
  }

  if (filtered.length === 0) {
    noMantraResults.style.display = 'block';
  } else {
    noMantraResults.style.display = 'none';
    filtered.forEach(item => {
      const card = createMantraCard(item);
      mantrasList.appendChild(card);
    });
  }
}

function createMantraCard(item) {
  const card = document.createElement('article');
  card.className = 'mantra-card';
  card.dataset.id = item.id;

  const wordMeaningsHtml = item.wordMeanings.map(wm => `
    <div class="word-item">
      <span class="word-term">${wm.term}:</span>
      <span class="word-def">${wm.def}</span>
    </div>
  `).join('');

  card.innerHTML = `
    <!-- Card Header -->
    <div class="mantra-header">
      <div class="mantra-title-group">
        <div class="mantra-icon">${item.icon}</div>
        <div>
          <h2 class="mantra-title">${item.title}</h2>
          <span class="mantra-tag">${item.deity} • ${item.tag}</span>
        </div>
      </div>
    </div>

    <!-- Sacred Mantra Verse (Focused Main View) -->
    <div class="mantra-text-box">
      <div class="mantra-verse">${item.verse}</div>
    </div>

    <!-- Card Footer Controls -->
    <div class="mantra-card-footer">
      <button class="btn-expand-mantra" onclick="toggleMantraDrawer('${item.id}')" aria-expanded="false" id="btn-toggle-${item.id}">
        <span>অর্থ ও ব্যাখ্যা দেখুন</span>
        <svg class="chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <button class="btn-copy-mantra" onclick="copyMantraText('${item.id}')" title="মন্ত্র কপি করুন">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>মন্ত্র কপি করুন</span>
      </button>
    </div>

    <!-- Expandable Drawer with Transliteration, Word Meaning & Simple Meaning -->
    <div class="mantra-drawer" id="drawer-${item.id}">
      <!-- 1. Transliteration -->
      <div class="detail-section">
        <div class="detail-heading">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          উচ্চারণ (Transliteration)
        </div>
        <div class="transliteration-text">${item.transliteration.replace(/\n/g, '<br>')}</div>
      </div>

      <!-- 2. Word by Word Meaning -->
      <div class="detail-section">
        <div class="detail-heading">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          পদচ্ছেদ ও শব্দের অর্থ (Word-by-Word Meaning)
        </div>
        <div class="word-meaning-grid">
          ${wordMeaningsHtml}
        </div>
      </div>

      <!-- 3. Simple Meaning -->
      <div class="detail-section">
        <div class="detail-heading">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          সরল ভাবার্থ (Simple Meaning)
        </div>
        <div class="simple-meaning-box">
          ${item.simpleMeaning}
        </div>
      </div>
    </div>
  `;

  return card;
}

function toggleMantraDrawer(id) {
  const drawer = document.getElementById(`drawer-${id}`);
  const btn = document.getElementById(`btn-toggle-${id}`);
  if (!drawer || !btn) return;

  const isOpen = drawer.classList.contains('open');

  if (isOpen) {
    drawer.classList.remove('open');
    btn.classList.remove('open');
    btn.querySelector('span').textContent = 'অর্থ ও ব্যাখ্যা দেখুন';
    btn.setAttribute('aria-expanded', 'false');
  } else {
    drawer.classList.add('open');
    btn.classList.add('open');
    btn.querySelector('span').textContent = 'সংক্ষেপ করুন';
    btn.setAttribute('aria-expanded', 'true');
  }
}

function copyMantraText(id) {
  const doc = PRONAM_MANTRAS_DATA.find(d => d.id === id);
  if (!doc) return;

  navigator.clipboard.writeText(doc.verse).then(() => {
    showToast('✓ মন্ত্রটি সফলভাবে কপি হয়েছে!');
  }).catch(() => {
    showToast('নকল করতে ব্যর্থ হয়েছে');
  });
}

function showToast(message) {
  copyToast.querySelector('span').textContent = message;
  copyToast.style.transform = 'translateY(0)';
  copyToast.style.opacity = '1';

  setTimeout(() => {
    copyToast.style.transform = 'translateY(100px)';
    copyToast.style.opacity = '0';
  }, 2200);
}

function expandAll() {
  document.querySelectorAll('.mantra-drawer').forEach(drawer => drawer.classList.add('open'));
  document.querySelectorAll('.btn-expand-mantra').forEach(btn => {
    btn.classList.add('open');
    btn.querySelector('span').textContent = 'সংক্ষেপ করুন';
    btn.setAttribute('aria-expanded', 'true');
  });
}

function collapseAll() {
  document.querySelectorAll('.mantra-drawer').forEach(drawer => drawer.classList.remove('open'));
  document.querySelectorAll('.btn-expand-mantra').forEach(btn => {
    btn.classList.remove('open');
    btn.querySelector('span').textContent = 'অর্থ ও ব্যাখ্যা দেখুন';
    btn.setAttribute('aria-expanded', 'false');
  });
}

function setupEventListeners() {
  // Search
  mantraSearchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    clearMantraSearch.style.display = currentSearch ? 'block' : 'none';
    renderMantras();
  });

  clearMantraSearch.addEventListener('click', () => {
    mantraSearchInput.value = '';
    currentSearch = '';
    clearMantraSearch.style.display = 'none';
    renderMantras();
    mantraSearchInput.focus();
  });

  // Filter chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      renderMantras();
    });
  });

  // Global Expand / Collapse
  expandAllBtn.addEventListener('click', expandAll);
  collapseAllBtn.addEventListener('click', collapseAll);
}
