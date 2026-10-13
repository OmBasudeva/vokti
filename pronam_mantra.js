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
  },
  {
    id: 'shiva-mukhya',
    deity: 'শ্রীশিব',
    title: 'শ্রীশিব প্রধান প্রণাম মন্ত্র',
    tag: 'দেবাদিদেব মহেশ্বর বন্দনা',
    category: 'shiva',
    icon: '🔱',
    verse: 'ওঁ নমঃ শিবায় শান্তায় কারণত্রয়হেতবে।\nনিবেদয়ামি চাত্মানং ত্বং গতিঃ পরমেশ্বর॥',
    transliteration: 'Om Namah Shivaya Shantaya Karana-traya-hetave |\nNivedayami Chatmanam Tvam Gatih Parameshvara ||',
    wordMeanings: [
      { term: 'ওঁ', def: 'পরমব্রহ্মের মূল প্রণবধ্বনি।' },
      { term: 'নমঃ', def: 'ভক্তিপূর্ণ সশ্রদ্ধ প্রণাম।' },
      { term: 'শিবায়', def: 'পরমকল্যাণময় ভগবান শিবকে।' },
      { term: 'শান্তায়', def: 'পরম প্রশান্ত ও নির্বিকার স্বরূপকে।' },
      { term: 'কারণত্রয়হেতবে', def: 'সৃষ্টি, স্থিতি ও প্রলয়—এই ত্রিবিধ কারণের মূল হেতু বা কারণস্বরূপকে।' },
      { term: 'নিবেদয়ামি', def: 'আমি নিবেদন বা সমর্পণ করছি।' },
      { term: 'চাত্মানং', def: 'এবং আমার আত্মাকে বা নিজেকে (চ + আত্মানং)।' },
      { term: 'ত্বং', def: 'আপনিই।' },
      { term: 'গতিঃ', def: 'একমাত্র পরম গতি ও আশ্রয়।' },
      { term: 'পরমেশ্বর', def: 'হে দেবাদিদেব মহেশ্বর!' }
    ],
    simpleMeaning: 'সৃষ্টি, স্থিতি ও প্রলয়—এই ত্রিবিধ কারণের মূল কারণস্বরূপ, পরম শান্ত ও মঙ্গলময় ভগবান শিবকে আমার সশ্রদ্ধ প্রণাম। হে দেবাদিদেব পরমেশ্বর! আমি আপনার শ্রীচরণে নিজেকে সমর্পণ করছি, আপনিই আমার একমাত্র আশ্রয় ও পরম গতি।'
  },
  {
    id: 'durga-mukhya',
    deity: 'মা দুর্গা',
    title: 'মা দুর্গা প্রধান প্রণাম মন্ত্র',
    tag: 'সর্বমঙ্গলমঙ্গল্যে দেবী বন্দনা',
    category: 'durga',
    icon: '🛡️',
    verse: 'সর্বমঙ্গলমঙ্গল্যে শিবে সর্বার্থসাধিকে।\nশরণ্যে ত্র্যম্বকে গৌরি নারায়ণি নমোহস্তুতে॥',
    transliteration: 'Sarva-mangala-mangalye Shive Sarvartha-sadhike |\nSharanye Tryambake Gauri Narayani Namo\'stu Te ||',
    wordMeanings: [
      { term: 'সর্বমঙ্গলমঙ্গল্যে', def: 'সকল মঙ্গলের মধ্যেও পরম মঙ্গলস্বরূপা ও পরম মঙ্গলদায়িনী।' },
      { term: 'শিবে', def: 'পরম কল্যাণময়ী ও শিবস্বরূপা।' },
      { term: 'সর্বার্থসাধিকে', def: 'ভক্তের সকল সৎ কামনা ও চতুর্বর্গ পুরুষার্থ (ধর্ম, অর্থ, কাম, মোক্ষ) সাধনকারিণী।' },
      { term: 'শরণ্যে', def: 'সকল শরণাগত জীবের একমাত্র পরম আশ্রয়দাত্রী।' },
      { term: 'ত্র্যম্বকে', def: 'ত্রিনয়নী পরমেশ্বরী (সূর্য, চন্দ্র ও অগ্নি যাঁর তিন নয়ন)।' },
      { term: 'গৌরি', def: 'শুভ্রবর্ণা ও পরম শুদ্ধরূপা দেবী গৌরী।' },
      { term: 'নারায়ণি', def: 'ভগবান নারায়ণের পরাশক্তি বা নারায়ণী।' },
      { term: 'নমোহস্তুতে', def: 'আপনাকে আমার অনন্ত কোটি সশ্রদ্ধ প্রণাম (নমঃ + অস্তু + তে)।' }
    ],
    simpleMeaning: 'হে সকল মঙ্গলের পরম মঙ্গলময়ী, কল্যাণদায়িনী শিবা, হে সর্বপ্রকার অভীষ্ট ও পুরুষার্থ পূরণকারিণী! হে শরণাগতের আশ্রয়দাত্রী ত্রিনয়না গৌরী নারায়ণি! আপনাকে আমার ভক্তিপূর্ণ সশ্রদ্ধ প্রণাম নিবেদন করি।'
  },
  {
    id: 'kali-mukhya',
    deity: 'মা কালী',
    title: 'মা কালী প্রধান প্রণাম মন্ত্র',
    tag: 'জয়ন্তী মঙ্গলা কালী বন্দনা',
    category: 'kali',
    icon: '🌺',
    verse: 'ওঁ জয়ন্তী মঙ্গলা কালী ভদ্রকালী কপালিনী।\nদুর্গা শিবা ক্ষমা ধাত্রী স্বাহা স্বধা নমোহস্তুতে॥',
    transliteration: 'Om Jayanti Mangala Kali Bhadrakali Kapalini |\nDurga Shiva Kshama Dhatri Svaha Svadha Namo\'stu Te ||',
    wordMeanings: [
      { term: 'ওঁ', def: 'পরমব্রহ্মের মূল প্রণবধ্বনি।' },
      { term: 'জয়ন্তী', def: 'সর্বশ্রেষ্ঠ বিজয়িনী ও পরাক্রমশালিনী।' },
      { term: 'মঙ্গলা', def: 'জন্ম-মৃত্যুর বন্ধন মোচন করে পরম মঙ্গল ও মুক্তিদায়িনী।' },
      { term: 'কালী', def: 'মহাকালেরও সংহারকারিণী ও অন্ধকারনাশিনী মা কালী।' },
      { term: 'ভদ্রকালী', def: 'ভক্তদের পরম সুখ, সৌভাগ্য ও কল্যাণদাত্রী।' },
      { term: 'কপালিনী', def: 'মুণ্ডমালিনী বা অমৃতময় ব্রহ্মাণ্ডরূপ পাত্রধারিণী।' },
      { term: 'দুর্গা', def: 'সকল সংকট, দুর্গতি ও মহাবিপদ নাশিনী দেবী দুর্গা।' },
      { term: 'শিবা', def: 'পরম কল্যাণরূপিণী।' },
      { term: 'ক্ষমা', def: 'পরম ক্ষমা ও করুণারূপিণী।' },
      { term: 'ধাত্রী', def: 'সমগ্র বিশ্বব্রহ্মাণ্ডের পালনকর্ত্রী মাতা।' },
      { term: 'স্বাহা', def: 'দেবযজ্ঞের আহুতিস্বরূপা।' },
      { term: 'স্বধা', def: 'পিতৃপুরুষের তর্পণস্বরূপা।' },
      { term: 'নমোহস্তুতে', def: 'আপনাকে আমার ভক্তিপূর্ণ সশ্রদ্ধ প্রণাম নিবেদন করি।' }
    ],
    simpleMeaning: 'যিনি সর্বশ্রেষ্ঠা বিজয়িনী জয়ন্তী, পরম মঙ্গলময়ী মঙ্গলা, কালনাশিনী কালী, ভক্তকল্যাণকারিণী ভদ্রকালী এবং কপালিনী; যিনি দুর্গতিহারিণী দুর্গা, কল্যাণময়ী শিবা, ক্ষমাময়ী, বিশ্বধাত্রী এবং স্বাহা ও স্বধারূপিণী—সেই জগজ্জননী মহাশক্তিকে আমার বারবার সশ্রদ্ধ প্রণাম নিবেদন করি।'
  },
  {
    id: 'lakshmi-mukhya',
    deity: 'মা লক্ষ্মী',
    title: 'মা লক্ষ্মী প্রধান প্রণাম মন্ত্র',
    tag: 'ধনধান্য ও শ্রীসমৃদ্ধি বন্দনা',
    category: 'lakshmi',
    icon: '🪷',
    verse: 'ওঁ বিশ্বরূপস্য ভার্যাসি পদ্মে পদ্মালয়ে শুভে।\nসর্বতঃ পাহি মাং দেবি মহালক্ষ্মী নমোহস্তুতে॥',
    transliteration: 'Om Vishva-rupasya Bharyasi Padme Padmalaye Shubhe |\nSarvatah Pahi Mam Devi Mahalakshmi Namo\'stu Te ||',
    wordMeanings: [
      { term: 'ওঁ', def: 'পরমব্রহ্মের মূল প্রণবধ্বনি।' },
      { term: 'বিশ্বরূপস্য', def: 'সমগ্র নিখিল বিশ্বব্রহ্মাণ্ডস্বরূপ ভগবান শ্রীবিষ্ণুর।' },
      { term: 'ভার্যাসি', def: 'আপনি নিত্য সহধর্মিণী ও পরাশক্তি (ভার্যা + অসি)।' },
      { term: 'পদ্মে', def: 'পদ্মপুষ্পের ন্যায় পরম পবিত্রা ও রূপবতী।' },
      { term: 'পদ্মালয়ে', def: 'পদ্মপুষ্প যাঁর নিত্য আলয় বা বাসস্থান।' },
      { term: 'শুভে', def: 'পরম শুভ, সৌভাগ্য ও সমৃদ্ধিদায়িনী।' },
      { term: 'সর্বতঃ', def: 'সকল প্রকার সংকট, পাপ ও অভাব-অনটন থেকে।' },
      { term: 'পাহি', def: 'রক্ষা করুন।' },
      { term: 'মাং', def: 'আমাকে।' },
      { term: 'দেবি', def: 'হে চিন্ময়ী পরমদেবী!' },
      { term: 'মহালক্ষ্মী', def: 'হে মাতা মহালক্ষ্মী!' },
      { term: 'নমোহস্তুতে', def: 'আপনাকে আমার ভক্তিপূর্ণ সশ্রদ্ধ প্রণাম নিবেদন করি।' }
    ],
    simpleMeaning: 'হে দেবী মহালক্ষ্মী! আপনি বিশ্বরূপ পরমেশ্বর শ্রীবিষ্ণুর অর্ধাঙ্গিনী ও পরাশক্তি। আপনি পদ্মরূপিণী, পদ্মবাসিনী এবং পরম শুভদায়িনী। হে জগন্মাতা, আমাকে সকল প্রকার বিপদ, দৈন্য ও অভাব হতে রক্ষা করুন। আপনার শ্রীচরণে আমার অনন্ত কোটি প্রণাম।'
  },
  {
    id: 'saraswati-mukhya',
    deity: 'মা সরস্বতী',
    title: 'মা সরস্বতী প্রধান প্রণাম মন্ত্র',
    tag: 'জ্ঞান, বিদ্যা ও সঙ্গীত রূপা বন্দনা',
    category: 'saraswati',
    icon: '🪕',
    verse: 'ওঁ সরস্বতী মহাভাগে বিদ্যে কমললোচনে।\nবিশ্বরূপে বিশালাক্ষি বিদ্যাং দেহি নমোহস্তুতে॥',
    transliteration: 'Om Sarasvati Maha-bhage Vidye Kamala-lochane |\nVishva-rupe Vishalakshee Vidyam Dehi Namo\'stu Te ||',
    wordMeanings: [
      { term: 'ওঁ', def: 'পরমব্রহ্মের মূল প্রণবধ্বনি।' },
      { term: 'সরস্বতী', def: 'জ্ঞান, প্রজ্ঞা ও সুরের অধিষ্ঠাত্রী দেবী সরস্বতী।' },
      { term: 'মহাভাগে', def: 'পরম পুণ্যবতী ও পরম সৌভাগ্যশালিনী।' },
      { term: 'বিদ্যে', def: 'জ্ঞান ও বিদ্যার সাক্ষাৎ চিন্ময় স্বরূপ।' },
      { term: 'কমললোচনে', def: 'পদ্মপলাশের ন্যায় স্নিগ্ধ ও প্রস্ফুটিত নয়নবিশিষ্ট।' },
      { term: 'বিশ্বরূপে', def: 'সমগ্র নিখিল বিশ্বে সর্বব্যাপী জ্ঞানরূপে বিরাজমানা।' },
      { term: 'বিশালাক্ষি', def: 'বিশাল জ্ঞানদৃষ্টিসম্পন্না।' },
      { term: 'বিদ্যাং', def: 'বিশুদ্ধ জ্ঞান, বিদ্যা ও শুভবুদ্ধি।' },
      { term: 'দেহি', def: 'আমাকে দান করুন।' },
      { term: 'নমোহস্তুতে', def: 'আপনাকে আমার সশ্রদ্ধ ভক্তিপূর্ণ প্রণাম।' }
    ],
    simpleMeaning: 'হে পরম ভাগ্যবতী দেবী সরস্বতী! আপনি বিদ্যার প্রত্যক্ষ স্বরূপ এবং পদ্মপলাশলোচনা। আপনি বিশ্বরূপিণী এবং বিশাল জ্ঞানদৃষ্টিসম্পন্না। হে জ্ঞানদায়িনী জননী, আমাকে বিশুদ্ধ জ্ঞান ও বিদ্যা দান করুন। আপনার শ্রীচরণে আমার সশ্রদ্ধ প্রণাম নিবেদন করি।'
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
