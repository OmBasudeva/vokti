// Sri Navagraha Stotram & Beej Mantras Data and Interactive Application Logic

const NAVAGRAHA_DATA = [
  {
    id: 'surya',
    graha: 'সূর্য (রবি)',
    title: '১. শ্রী সূর্য স্তোত্রম্',
    tag: 'দিনমণি ও সর্বপাপ বিনাশক',
    category: 'sun',
    icon: '☀️',
    verse: 'জবাকুসুম-সঙ্কাশং কাশ্যপেয়ং মহাদ্যুতিম।\nধ্বান্তারিং সর্ব্বপাপঘ্নং প্রণতোহস্মি দিবাকরম্ ৷৷ ১৷৷',
    transliteration: 'Jaba-kusuma-sankasham Kashyapeyam Maha-dyutim |\nDhvantarim Sarva-papa-ghnam Pranatosmi Divakaram || 1 ||',
    wordMeanings: [
      { term: 'জবাকুসুম-সঙ্কাশং', def: 'রক্ত জবাফুলের ন্যায় রক্তিম ও উজ্জ্বল কান্তিবিশিষ্ট।' },
      { term: 'কাশ্যপেয়ং', def: 'মহর্ষি কশ্যপের ঔরসজাত পুত্র।' },
      { term: 'মহাদ্যুতিম', def: 'পরম জ্যোতির্ময় ও মহাশক্তিশালী প্রভাযুক্ত।' },
      { term: 'ধ্বান্তারিং', def: 'সমস্ত অন্ধকারের পরম শত্রু বা সংহারক।' },
      { term: 'সর্ব্বপাপঘ্নং', def: 'ভক্তের সর্বপ্রকার পাপ ধ্বংসকারী।' },
      { term: 'প্রণতোহস্মি', def: 'আমি সশ্রদ্ধ প্রণাম নিবেদন করি।' },
      { term: 'দিবাকরম্', def: 'দিন সৃষ্টি ও আলোকিতকারী ভগবান সূর্যদেবকে।' }
    ],
    simpleMeaning: 'যাঁহার অঙ্গকান্তি রক্ত জবাফুলের ন্যায় দীপ্তিময়, যিনি মহর্ষি কশ্যপের পুত্র, মহাশক্তিধর ও পরম জ্যোতির্ময়, যিনি অন্ধকারের পরম সংহারক এবং সর্বপাপ হরণকারী, সেই দিনমণি ভগবান সূর্যদেবকে আমি ভক্তিভরে প্রণাম জানাই।',
    beejMantra: 'ওম হ্রাং হ্রীং হ্রৌং সঃ সূর্যায় নমঃ',
    beejNote: 'সুস্বাস্থ্য, তেজ, আত্মবিশ্বাস ও রাজসম্মানদায়ক।'
  },
  {
    id: 'chandra',
    graha: 'চন্দ্র (সোম)',
    title: '২. শ্রী চন্দ্র স্তোত্রম্',
    tag: 'ক্ষীরসাগরসম্ভূত ও শম্ভুমুকুটভূষণ',
    category: 'moon',
    icon: '🌙',
    verse: 'দিব্যশঙ্খ-তুষারাভং ক্ষীরোদার্ণব-সম্ভবম্।\nনমামি শশিনং ভক্ত্যা শম্ভোর্মুকুটভূষণম্ ॥ ২॥',
    transliteration: 'Divya-shankha-tusharabham Kshirodarnava-sambhavam |\nNamami Shashinam Bhaktya Shambhor Mukuta-bhushanam || 2 ||',
    wordMeanings: [
      { term: 'দিব্যশঙ্খ-তুষারাভং', def: 'দিব্য শঙ্খ ও শুভ্র বরফের (তুষার) মতো নির্মল শুভ্রবর্ণ।' },
      { term: 'ক্ষীরোদার্ণব-সম্ভবম্', def: 'সমুদ্রমন্থনকালে ক্ষীরসমুদ্র হইতে উৎপন্ন।' },
      { term: 'নমামি', def: 'প্রণাম করি।' },
      { term: 'শশিনং', def: 'শশধর ভগবান চন্দ্রদেবকে।' },
      { term: 'ভক্ত্যা', def: 'পরম ভক্তি সহকারে।' },
      { term: 'শম্ভোর্মুকুটভূষণম্', def: 'দেবাদিদেব মহাদেব শিবের জটাজাল বা মুকুটের পরম অলঙ্কার।' }
    ],
    simpleMeaning: 'যিনি দিব্য শঙ্খ ও তুষারের ন্যায় নির্মল শুভ্রবর্ণ, সমুদ্রমন্থনকালে ক্ষীরসাগর হইতে উৎপন্ন এবং যিনি দেবাদিদেব ভগবান শিবের জটাজাল বা মুকুটের পরম অলঙ্কার, সেই চন্দ্রদেবকে আমি পরম ভক্তিসহকারে প্রণাম করি।',
    beejMantra: 'ওম শ্রাং শ্রীং শ্রৌং সঃ সোমায় নমঃ',
    beejNote: 'মানসিক শান্তি, একাগ্রতা ও মাতৃসুখদায়ক।'
  },
  {
    id: 'mangala',
    graha: 'মঙ্গল (ভৌম)',
    title: '৩. শ্রী মঙ্গল স্তোত্রম্',
    tag: 'ধরণীগর্ভসম্ভূত ও লোহিতাঙ্গ',
    category: 'mars',
    icon: '🔴',
    verse: 'ধরণীগর্ভসম্ভুতং বিদ্যুৎ-পুঞ্জ-সমপ্রভম্।\nকুমারং শক্তিহস্তঞ্চ লোহিতাঙ্গং নমাম্যহম্ ॥ ৩॥',
    transliteration: 'Dharani-garbha-sambhutam Vidyut-punja-sama-prabham |\nKumaram Shakti-hastancha Lohitangam Namamyaham || 3 ||',
    wordMeanings: [
      { term: 'ধরণীগর্ভসম্ভুতং', def: 'পৃথিবীদেবী বা বসুমতীর গর্ভজাত পুত্র।' },
      { term: 'বিদ্যুৎ-পুঞ্জ-সমপ্রভম্', def: 'সহস্র বিদ্যুতের তীব্র আলোর মতো প্রচণ্ড তেজস্বী।' },
      { term: 'কুমারং', def: 'কুমার বা চিরতরুণ মহাশক্তিধর স্বরূপ।' },
      { term: 'শক্তিহস্তঞ্চ', def: 'যাঁহার হস্তে মহাশক্তি বা দিব্য অস্ত্র বিরাজমান।' },
      { term: 'লোহিতাঙ্গং', def: 'রক্তবর্ণ রক্তাভ কান্তিবিশিষ্ট মঙ্গলদেবকে।' },
      { term: 'নমাম্যহম্', def: 'আমি সশ্রদ্ধ প্রণাম করি।' }
    ],
    simpleMeaning: 'যিনি ধরিত্রীদেবী পৃথিবীর গর্ভজাত পুত্র, কোটি বিদ্যুতের সমান তেজস্বী, যাঁহার হস্তে শক্তি অস্ত্র শোভা পায় এবং যাঁর দেহ রক্তিম বর্ণের, সেই মঙ্গলদেব (লোহিতাঙ্গ)-কে আমি ভক্তিভরে প্রণাম করি।',
    beejMantra: 'ওম ক্রাং ক্রীং ক্রৌং সঃ ভৌমায় নমঃ',
    beejNote: 'সাহস, শৌর্য, ঋণমুক্তি ও সংকটমোচক।'
  },
  {
    id: 'budha',
    graha: 'বুধ',
    title: '৪. শ্রী বুধ স্তোত্রম্',
    tag: 'চন্দ্রনন্দন ও সর্বগুণোপেত',
    category: 'mercury',
    icon: '💚',
    verse: 'প্রিয়ঙ্গু-কলিকাশ্যামং রূপেণাপ্রতিমং বুধম্।\nসৌম্যং সৰ্ব্বগুণোপেতং নমামি শশিনং সুতম্ ॥ ৪॥',
    transliteration: 'Priyangu-kalika-shyamam Rupenapratimam Budham |\nSaumyam Sarva-gunopetam Namami Shashinam Sutam || 4 ||',
    wordMeanings: [
      { term: 'প্রিয়ঙ্গু-কলিকাশ্যামং', def: 'প্রিয়ঙ্গু ফুলের কুঁড়ির ন্যায় মনোহর শ্যামল বর্ণযুক্ত।' },
      { term: 'রূপেণাপ্রতিমং', def: 'রূপ ও সৌন্দর্যে যাঁর কোনো তুলনা বা উপমা নেই।' },
      { term: 'বুধম্', def: 'মহাজ্ঞানী ও বুদ্ধির অধিপতি গ্রহ বুধদেবকে।' },
      { term: 'সৌম্যং', def: 'শান্তস্বভাব, সৌম্যকান্তি ও পরম কল্যাণময়।' },
      { term: 'সৰ্ব্বগুণোপেতং', def: 'সর্বপ্রকার উত্তম সদ্গুণে বিভূষিত।' },
      { term: 'নমামি', def: 'প্রণাম করি।' },
      { term: 'শশিনং সুতম্', def: 'চন্দ্রদেবের প্রিয় পুত্রকে।' }
    ],
    simpleMeaning: 'যাঁহার দেহের শ্যামল বর্ণ প্রিয়ঙ্গু ফুলের কুঁড়ির ন্যায় সুন্দর, যাঁর রূপ অনির্বচনীয় ও অনুপম, যিনি শান্তস্বভাব ও সর্বগুণে গুণান্বিত, সেই চন্দ্রনন্দন মহাজ্ঞানী বুধদেবকে আমি সশ্রদ্ধ প্রণাম নিবেদন করি।',
    beejMantra: 'ওম ব্রাং ব্রীং ব্রৌং সঃ বুধায় নমঃ',
    beejNote: 'মেধা, প্রখর বুদ্ধি, বাগ্মিতা ও ব্যবসায়ে উন্নতিদায়ক।'
  },
  {
    id: 'brihaspati',
    graha: 'বৃহস্পতি (গুরু)',
    title: '৫. শ্রী বৃহস্পতি স্তোত্রম্',
    tag: 'দেবগুরু ও ত্রিলোকেশ',
    category: 'jupiter',
    icon: '🟡',
    verse: 'দেবতানাং মৃষীণাঞ্চ গুরুং কনকসন্নিভম্।\nবন্দ্যভূতং ত্রিলোকেশং তং নমামি বৃহস্পতিম্ ॥ ৫॥',
    transliteration: 'Devatanam Rishinancha Gurum Kanaka-sannibham |\nVandya-bhutam Trilokesham Tam Namami Brihaspatim || 5 ||',
    wordMeanings: [
      { term: 'দেবতানাং', def: 'সমগ্র দেবগণের।' },
      { term: 'মৃষীণাঞ্চ', def: 'এবং পরম শ্রদ্ধেয় ঋষি ও মুনিগণের।' },
      { term: 'গুরুং', def: 'পরম শিক্ষক, দীক্ষাগুরু ও পথপ্রদর্শক।' },
      { term: 'কনকসন্নিভম্', def: 'তপ্ত খাঁটি সোনার মতো উজ্জ্বল স্বর্ণাভ জ্যোতির্ময়।' },
      { term: 'বন্দ্যভূতং', def: 'সর্বলোকের পরম পূজনীয় ও বন্দনীয়।' },
      { term: 'ত্রিলোকেশং', def: 'ত্রিভুবনের পূজিত অধিপতি।' },
      { term: 'তং নমামি বৃহস্পতিম্', def: 'সেই পরম গুরুদেব ভগবান বৃহস্পতিকে আমি প্রণাম করি।' }
    ],
    simpleMeaning: 'যিনি সমগ্র দেবসমাজ ও মহর্ষিগণের পরম পূজনীয় গুরুদেব, যাঁর কান্তি খাঁটি স্বর্ণের ন্যায় জ্যোতির্ময়, যিনি ত্রিভুবনের সকলের বন্দনীয় ও পূজিত, সেই দেবগুরু ভগবান বৃহস্পতিকে আমি সশ্রদ্ধ প্রণাম জানাই।',
    beejMantra: 'ওম গ্রাং গ্রীং গ্রৌং সঃ গুরুবে নমঃ',
    beejNote: 'উচ্চশিক্ষা, প্রজ্ঞা, ধনসম্পদ, আধ্যাত্মিক উন্নতি ও সন্তানসুখদায়ক।'
  },
  {
    id: 'shukra',
    graha: 'শুক্র (ভার্গব)',
    title: '৬. শ্রী শুক্র স্তোত্রম্',
    tag: 'দৈত্যগুরু ও সর্বশাস্ত্রপ্রবক্তা',
    category: 'venus',
    icon: '🤍',
    verse: 'হিমকুন্দ-মৃণালভ্যাং দৈত্যানাং পরমং গুরুম্।\nসর্ব্বশাস্ত্র প্রবক্তারং ভার্গবং প্ৰণমাম্যহম্ ৷৷ ৬ ৷৷',
    transliteration: 'Hima-kunda-mrinalabham Daityanam Paramam Gurum |\nSarva-shastra Pravaktaram Bhargavam Pranamamyaham || 6 ||',
    wordMeanings: [
      { term: 'হিমকুন্দ-মৃণালভ্যাং', def: 'তুষার, শ্বেত কুন্দফুল ও পদ্মমৃণালের মতো পরম শুভ্রকান্তি।' },
      { term: 'দৈত্যানাং', def: 'দানব ও অসুরকুলের।' },
      { term: 'পরমং গুরুম্', def: 'প্রধান আচার্য ও পথপ্রদর্শক গুরুদেব।' },
      { term: 'সর্ব্বশাস্ত্র প্রবক্তারং', def: 'সমগ্র নীতিশাস্ত্র, ধর্মশাস্ত্র ও বিজ্ঞানের পরম বিশারদ প্রবক্তা।' },
      { term: 'ভার্গবং', def: 'ভৃগুমুনির বংশধর শুক্রাচার্যকে।' },
      { term: 'প্ৰণমাম্যহম্', def: 'আমি সশ্রদ্ধ প্রণাম করি।' }
    ],
    simpleMeaning: 'যিনি বরফ, শুভ্র কুন্দফুল ও পদ্মমৃণালের ন্যায় উজ্জ্বল শুভ্রবর্ণ, দৈত্যকুলের পরম পূজনীয় গুরুদেব এবং সর্বশাস্ত্রের শ্রেষ্ঠ প্রবক্তা ও নীতিবিশারদ, সেই ভৃগুনন্দন শুক্রাচার্যকে আমি ভক্তিভরে প্রণাম জানাই।',
    beejMantra: 'ওম দ্রাং দ্রীং দ্রৌং সঃ শুক্রায় নমঃ',
    beejNote: 'দাম্পত্য সুখ, রূপলাবণ্য, শিল্পপ্রতিভা ও পার্থিব সমৃদ্ধিদায়ক।'
  },
  {
    id: 'shani',
    graha: 'শনি (শনৈশ্চর)',
    title: '৭. শ্রী শনি স্তোত্রম্',
    tag: 'রবিসূনু ও ছায়াপুত্র',
    category: 'saturn',
    icon: '🪐',
    verse: 'নীলাঞ্জনচয়প্রখ্যং রবিসূনুং মহাগ্রহম্।\nছায়ায়া গর্ভসম্ভুতং বন্দে ভক্ত্যা শনৈশ্চরম্ ॥ ৭॥',
    transliteration: 'Nilanjana-chaya-prakhyam Ravi-sunum Maha-graham |\nChhayaya Garbha-sambhutam Vande Bhaktya Shanaishcharam || 7 ||',
    wordMeanings: [
      { term: 'নীলাঞ্জনচয়প্রখ্যং', def: 'নীল কাজলের স্তূপের ন্যায় গাঢ় কৃষ্ণনীল বর্ণবিশিষ্ট।' },
      { term: 'রবিসূনুং', def: 'ভগবান সূর্যদেবের তনয় বা পুত্র।' },
      { term: 'মহাগ্রহম্', def: 'গ্রহমণ্ডলীতে পরম শক্তিধর ও প্রভাবশালী মহাগ্রহ।' },
      { term: 'ছায়ায়া গর্ভসম্ভুতং', def: 'দেবী ছায়ার গর্ভজাত পুত্র।' },
      { term: 'বন্দে', def: 'বন্দনা ও প্রণাম করি।' },
      { term: 'ভক্ত্যা', def: 'ভক্তি সহকারে।' },
      { term: 'শনৈশ্চরম্', def: 'ধীরগতিতে সঞ্চরণকারী ভগবান শনিদেবকে।' }
    ],
    simpleMeaning: 'যাঁহার অঙ্গকান্তি গাঢ় নীল কাজলের ন্যায়, যিনি সূর্যদেব ও দেবী ছায়ার ঔরসজাত পুত্র এবং পরম প্রভাবের অধিকারী মহাগ্রহ, সেই ধীরগতিশীল ন্যায়বিচারক ভগবান শনিদেবকে আমি ভক্তিসহকারে বন্দনা ও প্রণাম করি।',
    beejMantra: 'ওম প্রাং প্রীং প্রৌং সঃ শনৈশ্চরায় নমঃ',
    beejNote: 'সাড়ে সাতি ও ঢাইয়া দোষ নিবারক, দীর্ঘায়ু ও ন্যায়পরায়ণতাদায়ক।'
  },
  {
    id: 'rahu',
    graha: 'রাহু',
    title: '৮. শ্রী রাহু স্তোত্রম্',
    tag: 'চন্দ্রাদিত্যবিমর্দক ও সিংহিকাসুত',
    category: 'rahu-ketu',
    icon: '🌑',
    verse: 'অর্দ্ধকায়ং মহাঘোরং চন্দ্রাদিত্যবিমর্দকম্।\nসিংহিকায়াঃ সুতং রৌদ্রং তং রাহুং প্ৰণমাম্যহম্ ॥ ৮॥',
    transliteration: 'Ardha-kayam Maha-ghoram Chandraditya-vimardakam |\nSimhikayah Sutam Raudram Tam Rahum Pranamamyaham || 8 ||',
    wordMeanings: [
      { term: 'অর্দ্ধকায়ং', def: 'শরীরের ঊর্ধ্বাংশবিশিষ্ট বা অর্ধদেহের অধিকারী।' },
      { term: 'মহাঘোরং', def: 'অতিশয় ভয়ানক ও তেজোদৃপ্ত রূপধারী।' },
      { term: 'চন্দ্রাদিত্যবিমর্দকম্', def: 'চন্দ্র ও সূর্যকে গ্রহণদ্বারা গ্রাস বা আচ্ছাদিতকারী।' },
      { term: 'সিংহিকায়াঃ সুতং', def: 'দেবী সিংহিকার পুত্র।' },
      { term: 'রৌদ্রং', def: 'প্রচণ্ড পরাক্রমী ও রৌদ্রমূর্তি।' },
      { term: 'তং রাহুং', def: 'সেই রাহুদেবকে।' },
      { term: 'প্ৰণমাম্যহম্', def: 'আমি প্রণাম করি।' }
    ],
    simpleMeaning: 'যিনি কেবল শিরোভাগ বা অর্ধদেহবিশিষ্ট, যাঁর স্বরূপ অতিশয় তেজস্বী ও গম্ভীর, যিনি গ্রহণকালে চন্দ্র ও সূর্যকে আচ্ছাদিত করেন এবং যিনি সিংহিকার গর্ভজাত পরাক্রমী পুত্র, সেই রাহুদেবকে আমি সশ্রদ্ধ প্রণাম নিবেদন করি।',
    beejMantra: 'ওম ভ্রাং ভ্রীং ভ্রৌং সঃ রাহবে নমঃ',
    beejNote: 'আকস্মিক সংকট, ভয়, কুদৃষ্টি ও অজ্ঞাত জটিল ব্যাধি হইতে রক্ষাদায়ক।'
  },
  {
    id: 'ketu',
    graha: 'কেতু',
    title: '৯. শ্রী কেতু স্তোত্রম্',
    tag: 'তারাগ্রহবিমর্দক ও রৌদ্রাত্মকা',
    category: 'rahu-ketu',
    icon: '☄️',
    verse: 'পলালধূমসঙ্কাশং তারাগ্রহবিমৰ্দ্দকম্।\nরৌদ্রং রৌদ্রাত্মকং ক্রূরং তং কেতুং প্রণমাম্যহম্ ৷৷ ৯ ৷৷',
    transliteration: 'Palala-dhuma-sankasham Tara-graha-vimardakam |\nRaudram Raudratmakam Kruram Tam Ketum Pranamamyaham || 9 ||',
    wordMeanings: [
      { term: 'পলালধূমসঙ্কাশং', def: 'খড় পোড়ানোর ধোঁয়ার ন্যায় ধূসর কান্তিযুক্ত।' },
      { term: 'তারাগ্রহবিমৰ্দ্দকম্', def: 'নক্ষত্র ও গ্রহমণ্ডলীকে নিজ শক্তিতে আলোড়িতকারী।' },
      { term: 'রৌদ্রং', def: 'রৌদ্ররূপী মহাশক্তিশালী।' },
      { term: 'রৌদ্রাত্মকং', def: 'ভগবান রুদ্রের ন্যায় তেজস্বী স্বভাবযুক্ত।' },
      { term: 'ক্রূরং', def: 'পাপনাশক ও কঠোর নিয়ন্তা।' },
      { term: 'তং কেতুং', def: 'সেই কেতুদেবকে।' },
      { term: 'প্রণমাম্যহম্', def: 'আমি প্রণাম করি।' }
    ],
    simpleMeaning: 'যাঁহার রূপ প্রজ্বলিত খড়ের ধোঁয়ার মতো ধূসরবর্ণ, যিনি তারা ও গ্রহগণের আলোড়নকারী, যিনি রুদ্রের তেজে তেজস্বী ও কঠোর স্বভাবের অধিকারী, সেই কেতুদেবকে আমি ভক্তিভরে প্রণাম জানাই।',
    beejMantra: 'ওম স্রাং স্রীং স্রৌং সঃ কেতবে নমঃ',
    beejNote: 'আধ্যাত্মিক মোক্ষলাভ, আত্মজ্ঞান ও গুপ্ত শত্রু বিনাশক।'
  },
  {
    id: 'phalashruti-1',
    graha: 'ফলশ্রুতি',
    title: '১০. ফলশ্রুতি — শ্লোক ১০',
    tag: 'শান্তিলাভ ও সর্বপাপ নিবারণ',
    category: 'phalashruti',
    icon: '✨',
    verse: 'ব্যাসেনোক্তমিদং স্তোত্রং যঃ পঠেৎ প্রযতঃ শুচিঃ।\nদিবা বা যদি বা রাত্রৌ শান্তিস্তস্য ন সংশয়ঃ ॥ ১০॥',
    transliteration: 'Vyasenoktam Idam Stotram Yah Pathet Prayatah Shuchih |\nDiva Va Yadi Va Ratrau Shantistasya Na Samshayah || 10 ||',
    wordMeanings: [
      { term: 'ব্যাসেনোক্তমিদং', def: 'মহর্ষি বেদব্যাস দ্বারা কথিত বা রচিত এই স্তোত্র।' },
      { term: 'যঃ পঠেৎ', def: 'যিনি ভক্তি সহকারে পাঠ করেন।' },
      { term: 'প্রযতঃ শুচিঃ', def: 'সংযত ইন্দ্রিয় ও পবিত্র শুদ্ধ অন্তরে।' },
      { term: 'দিবা বা যদি বা রাত্রৌ', def: 'দিবসে হউক কিংবা রাত্রিকালে।' },
      { term: 'শান্তিস্তস্য', def: 'তাহার সর্বপ্রকার গ্রহশান্তি ও আন্তরিক শান্তি লাভ হয়।' },
      { term: 'ন সংশয়ঃ', def: 'ইহাতে কোনো সন্দেহ বা সংশয় নাই।' }
    ],
    simpleMeaning: 'মহর্ষি ব্যাসদেব বিরচিত এই পবিত্র নবগ্রহ স্তোত্র যিনি সংযত ও শুদ্ধচিত্তে দিবসে কিংবা রাত্রিকালে নিত্য পাঠ করেন, তাঁহার সর্বপ্রকার গ্রহপীড়া নিবারণপূর্বক পরম শান্তি লাভ হয়—এ বিষয়ে কোনো সংশয় নেই।'
  },
  {
    id: 'phalashruti-2',
    graha: 'ফলশ্রুতি',
    title: '১১. ফলশ্রুতি — শ্লোক ১১',
    tag: 'আরোগ্য ও অতুল ঐশ্বর্য লাভ',
    category: 'phalashruti',
    icon: '🌿',
    verse: 'ঐশ্বর্য্যমতুলঞ্চাপি আরোগ্যং পুষ্টিবর্দ্ধনম্।\nনর-নারীপ্রিয়ত্বঞ্চ নিত্যং তস্যোপজায়তে ৷৷ ১১ ৷৷',
    transliteration: 'Aishvaryam Atulam Chapi Arogyam Pushti-vardhanam |\nNara-nari-priyatvancha Nityam Tasyopajayate || 11 ||',
    wordMeanings: [
      { term: 'ঐশ্বর্য্যমতুলঞ্চাপি', def: 'অনন্ত ও অতুলনীয় ধনৈশ্বর্য এবং সম্পদ।' },
      { term: 'আরোগ্যং', def: 'সর্বপ্রকার ব্যাধি ও রোগ হইতে মুক্তি (সুস্বাস্থ্য)।' },
      { term: 'পুষ্টিবর্দ্ধনম্', def: 'দৈহিক ও আত্মিক বল ও পুষ্টির বৃদ্ধি।' },
      { term: 'নর-নারীপ্রিয়ত্বঞ্চ', def: 'সমাজে সর্বসাধারণের নিকট পরম প্রিয়পাত্র হওয়া।' },
      { term: 'নিত্যং তস্যোপজায়তে', def: 'নিত্য তাঁহার জীবনে উৎপন্ন বা লাভ হইয়া থাকে।' }
    ],
    simpleMeaning: 'এই স্তোত্র ভক্তিসহকারে পাঠে অতুল ঐশ্বর্য ও ধনলাভ, আরোগ্য বা সর্বরোগমুক্তি, শরীর ও মনের পুষ্টিবৃদ্ধি ঘটে এবং সংসারে সকলের কাছে প্রিয়পাত্র হওয়া যায়।'
  },
  {
    id: 'phalashruti-3',
    graha: 'ফলশ্রুতি',
    title: '১২. ফলশ্রুতি — শ্লোক ১২ ও সমাপন',
    tag: 'গ্রহপীড়া বিনাশ ও ব্যাসবচন',
    category: 'phalashruti',
    icon: '🛡️',
    verse: 'তক্ষকোঽগ্নিৰ্যমো বায়ুর্যে চান্যে গ্রহপীড়কাঃ।\nতঃ সর্ব্বে প্রশমং যান্তি ব্যাসো ব্রূয়ান্ন সংশয়ঃ ॥ ১২॥\nইতি শ্রীব্যাসবিরচিতং নবগ্রহস্তোত্রং সমাপ্তম্।',
    transliteration: 'Takshako\'gnir Yamo Vayur Ye Chanye Graha-pidakah |\nTah Sarve Prashamam Yanti Vyaso Bruyanna Samshayah || 12 ||\nIti Shri-Vyasa-virachitam Navagraha-stotram Samaptam |',
    wordMeanings: [
      { term: 'তক্ষকোঽগ্নিৰ্যমো', def: 'তক্ষক (সর্পভয়), অগ্নিভয় ও যমভয়।' },
      { term: 'বায়ুর্যে চান্যে গ্রহপীড়কাঃ', def: 'বায়ুরোগ এবং অন্যান্য গ্রহপীড়াজনিত যাবতীয় উপদ্রব।' },
      { term: 'তঃ সর্ব্বে প্রশমং যান্তি', def: 'সেই সমস্ত অশুভ ও সংকট সমূলে শান্ত ও বিনষ্ট হইয়া যায়।' },
      { term: 'ব্যাসো ব্রূয়ান্ন সংশয়ঃ', def: 'মহর্ষি ব্যাসদেব নিঃসংশয়ে একথা বলিয়াছেন।' },
      { term: 'ইতি সমাপ্তম্', def: 'এখানেই পরম পবিত্র নবগ্রহ স্তোত্র সমাপ্ত হইল।' }
    ],
    simpleMeaning: 'সর্পভয় (তক্ষকভয়), অগ্নিভয়, যমভয়, বায়ুবিকার এবং অন্যান্য গ্রহের কুপ্রভাবজনিত সমস্ত অশুভ প্রতিক্রিয়া সমূলে বিনষ্ট ও প্রশমিত হয়—মহর্ষি ব্যাসদেব নিঃসংশয়ে একথা বলিয়াছেন। শ্রী নবগ্রহ স্তোত্রম্ সমাপ্ত।'
  }
];

const BEEJ_MANTRAS_LIST = [
  { graha: 'সূর্য (রবি)', mantra: 'ওম হ্রাং হ্রীং হ্রৌং সঃ সূর্যায় নমঃ', fruit: 'তেজ, আত্মবিশ্বাস, সুস্বাস্থ্য ও রাজসম্মান' },
  { graha: 'চন্দ্র (সোম)', mantra: 'ওম শ্রাং শ্রীং শ্রৌং সঃ সোমায় নমঃ', fruit: 'মানসিক স্থৈর্য, একাগ্রতা ও মাতৃসুখ' },
  { graha: 'মঙ্গল (ভৌম)', mantra: 'ওম ক্রাং ক্রীং ক্রৌং সঃ ভৌমায় নমঃ', fruit: 'শৌর্য, পরাক্রম, সাহস ও ঋণমুক্তি' },
  { graha: 'বুধ', mantra: 'ওম ব্রাং ব্রীং ব্রৌং সঃ বুধায় নমঃ', fruit: 'মেধা, প্রখর বুদ্ধি ও ব্যবসায় উন্নতি' },
  { graha: 'বৃহস্পতি (গুরু)', mantra: 'ওম গ্রাং গ্রীং গ্রৌং সঃ গুরুবে নমঃ', fruit: 'উচ্চশিক্ষা, প্রজ্ঞা, জ্ঞান ও ধনবৃদ্ধি' },
  { graha: 'শুক্র (ভার্গব)', mantra: 'ওম দ্রাং দ্রীং দ্রৌং সঃ শুক্রায় নমঃ', fruit: 'দাম্পত্য সুখ, রূপলাবণ্য ও পার্থিব সমৃদ্ধি' },
  { graha: 'শনি (শনৈশ্চর)', mantra: 'ওম প্রাং প্রীং প্রৌং সঃ শনৈশ্চরায় নমঃ', fruit: 'সাড়ে সাতি নিবারণ, দীর্ঘায়ু ও ন্যায়পরায়ণতা' },
  { graha: 'রাহু', mantra: 'ওম ভ্রাং ভ্রীং ভ্রৌং সঃ রাহবে নমঃ', fruit: 'আকস্মিক সংকট, ভয় ও কুদৃষ্টি হইতে রক্ষা' },
  { graha: 'কেতু', mantra: 'ওম স্রাং স্রীং স্রৌং সঃ কেতবে নমঃ', fruit: 'আধ্যাত্মিক জাগরণ, মোক্ষ ও শত্রুনাশ' }
];

// State
let currentFilter = 'all';
let currentSearch = '';
let currentView = 'cards';
const expandedCards = new Set();

// Elements
const stotramList = document.getElementById('stotramList');
const plainTextView = document.getElementById('plainTextView');
const beejFocusView = document.getElementById('beejFocusView');
const noNavagrahaResults = document.getElementById('noNavagrahaResults');
const navagrahaSearchInput = document.getElementById('navagrahaSearchInput');
const clearNavagrahaSearch = document.getElementById('clearNavagrahaSearch');
const filterChips = document.querySelectorAll('.chip');
const expandAllBtn = document.getElementById('expandAllBtn');
const collapseAllBtn = document.getElementById('collapseAllBtn');
const copyAllShlokasBtn = document.getElementById('copyAllShlokasBtn');
const printPdfBtn = document.getElementById('printPdfBtn');
const tabCardsView = document.getElementById('tabCardsView');
const tabPlainTextView = document.getElementById('tabPlainTextView');
const tabBeejView = document.getElementById('tabBeejView');
const copyToast = document.getElementById('copyToast');

// Toast Notification
function showToast(message) {
  if (!copyToast) return;
  copyToast.querySelector('span').textContent = message;
  copyToast.style.transform = 'translateY(0)';
  copyToast.style.opacity = '1';
  setTimeout(() => {
    copyToast.style.transform = 'translateY(100px)';
    copyToast.style.opacity = '0';
  }, 2200);
}

// Filter Logic
function getFilteredData() {
  return NAVAGRAHA_DATA.filter(item => {
    let matchesFilter = true;
    if (currentFilter === 'beej') {
      matchesFilter = !!item.beejMantra;
    } else if (currentFilter !== 'all') {
      matchesFilter = item.category === currentFilter;
    }

    const query = currentSearch.trim().toLowerCase();
    const matchesSearch = !query ||
      item.graha.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.verse.toLowerCase().includes(query) ||
      item.transliteration.toLowerCase().includes(query) ||
      item.simpleMeaning.toLowerCase().includes(query) ||
      (item.beejMantra && item.beejMantra.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });
}

// Render Card View
function renderCardsView(items) {
  stotramList.innerHTML = '';

  items.forEach(item => {
    const isExpanded = expandedCards.has(item.id);
    const card = document.createElement('article');
    card.className = 'mantra-card';
    card.id = `card-${item.id}`;

    // Word Meanings HTML
    let wordMeaningsHtml = '';
    if (item.wordMeanings && item.wordMeanings.length > 0) {
      const itemsHtml = item.wordMeanings.map(wm => `
        <div class="word-meaning-card">
          <div class="wm-term">${wm.term}</div>
          <div class="wm-def">${wm.def}</div>
        </div>
      `).join('');
      wordMeaningsHtml = `
        <div class="word-meanings-container">
          <h4 class="section-subtitle">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            পদচ্ছেদ ও শব্দের অর্থ (Word-by-Word Analysis)
          </h4>
          <div class="word-meaning-grid">${itemsHtml}</div>
        </div>
      `;
    }

    // Beej Mantra Block (if present)
    let beejMantraHtml = '';
    if (item.beejMantra) {
      beejMantraHtml = `
        <div style="margin-top: 18px; padding: 12px 16px; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 0.82rem; font-weight: 700; color: var(--gold-light); letter-spacing: 0.05em; text-transform: uppercase;">মূল বীজ মন্ত্র:</span>
            <button class="btn-plain-copy btn-copy-beej" data-beej="${item.beejMantra}" title="বীজ মন্ত্র কপি করুন">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              কপি
            </button>
          </div>
          <div style="font-size: 1.25rem; font-weight: 600; color: #fde68a;">${item.beejMantra}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${item.beejNote || ''}</div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="mantra-card-header">
        <div class="card-icon" aria-hidden="true">${item.icon}</div>
        <div class="card-title-group">
          <div class="card-badges">
            <span class="badge-deity">${item.graha}</span>
            <span class="badge-tag">${item.tag}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
        </div>
      </div>

      <div class="mantra-verse-wrapper">
        <div class="mantra-verse">${item.verse}</div>
      </div>

      <div class="mantra-card-footer">
        <button class="btn-expand-mantra" aria-expanded="${isExpanded}" data-id="${item.id}">
          <span class="btn-text">${isExpanded ? 'সংক্ষিপ্ত করুন' : 'শব্দার্থ ও সরল ভাবার্থ দেখুন'}</span>
          <svg class="chevron-icon ${isExpanded ? 'rotated' : ''}" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <button class="btn-copy-mantra" data-verse="${item.verse}" title="শ্লোক কপি করুন">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          শ্লোক কপি করুন
        </button>
      </div>

      <div class="mantra-details" style="display: ${isExpanded ? 'block' : 'none'};">
        <div class="transliteration-box">
          <span class="trans-label">উচ্চারণ (Transliteration):</span>
          <p class="trans-text">${item.transliteration}</p>
        </div>

        ${wordMeaningsHtml}

        <div class="simple-meaning-box">
          <h4 class="section-subtitle">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            সরল ভাবার্থ (Meaning)
          </h4>
          <p class="meaning-text">${item.simpleMeaning}</p>
        </div>

        ${beejMantraHtml}
      </div>
    `;

    stotramList.appendChild(card);
  });

  // Attach card events
  document.querySelectorAll('.btn-expand-mantra').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (expandedCards.has(id)) {
        expandedCards.delete(id);
      } else {
        expandedCards.add(id);
      }
      renderCardsView(getFilteredData());
    });
  });

  document.querySelectorAll('.btn-copy-mantra').forEach(btn => {
    btn.addEventListener('click', () => {
      const verse = btn.dataset.verse;
      navigator.clipboard.writeText(verse).then(() => {
        showToast('✓ শ্লোকটি সফলভাবে কপি হয়েছে!');
      });
    });
  });

  document.querySelectorAll('.btn-copy-beej').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const beej = btn.dataset.beej;
      navigator.clipboard.writeText(beej).then(() => {
        showToast('✓ বীজ মন্ত্রটি কপি হয়েছে!');
      });
    });
  });
}

// Render Plain Text View
function renderPlainTextView(items) {
  plainTextView.innerHTML = `
    <div class="plain-reader-toolbar">
      <div class="plain-reader-title">
        <span>🪐 শ্রী নবগ্রহ স্তোত্রম্ — নিত্য পাঠ ভিউ</span>
        <span class="badge" style="font-size: 0.8rem;">মোট ${items.length}টি অংশ</span>
      </div>
      <button class="btn-copy-all" id="btnCopyPlain">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        সকল পাঠ কপি করুন
      </button>
    </div>
  `;

  items.forEach(item => {
    const plainCard = document.createElement('div');
    plainCard.className = 'plain-mantra-card';
    plainCard.innerHTML = `
      <div class="plain-mantra-header">
        <span class="plain-deity-badge">${item.icon} ${item.graha} — ${item.title}</span>
        <button class="btn-plain-copy" data-text="${item.verse}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          কপি
        </button>
      </div>
      <div class="plain-mantra-text">${item.verse}</div>
      <div style="margin-top: 10px; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5;">
        ${item.simpleMeaning}
      </div>
    `;
    plainTextView.appendChild(plainCard);
  });

  // Plain copy actions
  plainTextView.querySelectorAll('.btn-plain-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.text).then(() => {
        showToast('✓ শ্লোক কপি হয়েছে!');
      });
    });
  });

  const btnCopyPlain = document.getElementById('btnCopyPlain');
  if (btnCopyPlain) {
    btnCopyPlain.addEventListener('click', () => {
      const fullText = items.map(m => `【 ${m.graha} — ${m.title} 】\n${m.verse}\n(ভাবার্থ: ${m.simpleMeaning})`).join('\n\n');
      navigator.clipboard.writeText(fullText).then(() => {
        showToast(`✓ মোট ${items.length}টি অংশ কপি হয়েছে!`);
      });
    });
  }
}

// Render Beej Mantras Dedicated Focus View
function renderBeejView() {
  beejFocusView.innerHTML = `
    <div class="plain-reader-toolbar">
      <div class="plain-reader-title">
        <span>🪐 নবগ্রহ বীজ মন্ত্রমালা (৯টি গ্রহের মূল তান্ত্রিক বীজ মন্ত্র)</span>
      </div>
      <button class="btn-copy-all" id="btnCopyAllBeej">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        ৯টি বীজ মন্ত্র কপি করুন
      </button>
    </div>

    <div style="background: rgba(18, 25, 41, 0.7); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 20px; margin-bottom: 24px;">
      <h3 style="color: var(--gold-light); font-size: 1.35rem; margin-bottom: 8px;">নবগ্রহ বীজ মন্ত্র</h3>
      <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.95rem;">
        নিত্য পূজা, জপ ও গ্রহদোষ শান্তির জন্য প্রতিদিন শুদ্ধচিত্তে একমনে এই নবগ্রহ বীজ মন্ত্র জপ করিলে সর্ববিঘ্ন দূর হয় এবং সৌভাগ্য বৃদ্ধি পায়।
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${BEEJ_MANTRAS_LIST.map((b, idx) => `
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); padding: 12px 16px; border-radius: var(--radius-sm); flex-wrap: wrap; gap: 10px;">
            <div style="flex: 1; min-width: 240px;">
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--gold-primary); margin-bottom: 2px;">
                ${idx + 1}. ${b.graha}
              </div>
              <div style="font-size: 1.35rem; font-weight: 600; color: #fde68a; letter-spacing: 0.02em;">
                ${b.mantra}
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 3px;">
                ফল: ${b.fruit}
              </div>
            </div>
            <button class="btn-plain-copy btn-beej-single-copy" data-mantra="${b.mantra}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              কপি
            </button>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 20px; padding: 12px 16px; background: rgba(245, 158, 11, 0.1); border-left: 3px solid var(--gold-primary); border-radius: 4px; font-size: 0.9rem; color: #fef08a;">
        <strong>বিশেষ দ্রষ্টব্য:</strong> সূর্যদেবের বীজ মন্ত্রে র-ফলাযুক্ত শুদ্ধ রূপ <em>'হ্রাং হ্রীং হ্রৌং'</em> পাঠ করা উচিত (ভুলবশত কোথাও কোথাও হাং হীং হৌং লেখা হয়ে থাকে)।
      </div>
    </div>
  `;

  document.querySelectorAll('.btn-beej-single-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.mantra).then(() => {
        showToast('✓ বীজ মন্ত্র কপি হয়েছে!');
      });
    });
  });

  const btnCopyAllBeej = document.getElementById('btnCopyAllBeej');
  if (btnCopyAllBeej) {
    btnCopyAllBeej.addEventListener('click', () => {
      const allBeej = BEEJ_MANTRAS_LIST.map((b, i) => `${i + 1}. ${b.graha}: ${b.mantra} (${b.fruit})`).join('\n');
      navigator.clipboard.writeText(allBeej).then(() => {
        showToast('✓ ৯টি গ্রহের সকল বীজ মন্ত্র কপি হয়েছে!');
      });
    });
  }
}

// Master Render
function renderNavagraha() {
  const filtered = getFilteredData();

  if (filtered.length === 0) {
    stotramList.style.display = 'none';
    plainTextView.style.display = 'none';
    beejFocusView.style.display = 'none';
    noNavagrahaResults.style.display = 'block';
    return;
  }

  noNavagrahaResults.style.display = 'none';

  if (currentView === 'cards') {
    stotramList.style.display = 'block';
    plainTextView.style.display = 'none';
    beejFocusView.style.display = 'none';
    renderCardsView(filtered);
  } else if (currentView === 'plain') {
    stotramList.style.display = 'none';
    plainTextView.style.display = 'flex';
    beejFocusView.style.display = 'none';
    renderPlainTextView(filtered);
  } else if (currentView === 'beej') {
    stotramList.style.display = 'none';
    plainTextView.style.display = 'none';
    beejFocusView.style.display = 'flex';
    renderBeejView();
  }
}

// View Mode Switching
function switchView(mode) {
  currentView = mode;
  [tabCardsView, tabPlainTextView, tabBeejView].forEach(tab => {
    if (tab) {
      const isActive = tab.dataset.view === mode;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    }
  });

  renderNavagraha();
}

// Global actions
function expandAll() {
  NAVAGRAHA_DATA.forEach(d => expandedCards.add(d.id));
  renderNavagraha();
}

function collapseAll() {
  expandedCards.clear();
  renderNavagraha();
}

function copyAllShlokas() {
  const fullText = NAVAGRAHA_DATA.map(m => `【 ${m.graha} — ${m.title} 】\n${m.verse}\n\n[ভাবার্থ]: ${m.simpleMeaning}`).join('\n\n---\n\n');
  const beejText = "\n\n=== নবগ্রহ বীজ মন্ত্রাবলী ===\n" + BEEJ_MANTRAS_LIST.map(b => `${b.graha}: ${b.mantra}`).join('\n');
  navigator.clipboard.writeText(fullText + beejText).then(() => {
    showToast('✓ সম্পূর্ণ শ্রী নবগ্রহ স্তোত্র ও বীজ মন্ত্র কপি হয়েছে!');
  });
}

// Setup Event Listeners
function setupEventListeners() {
  if (tabCardsView) tabCardsView.addEventListener('click', () => switchView('cards'));
  if (tabPlainTextView) tabPlainTextView.addEventListener('click', () => switchView('plain'));
  if (tabBeejView) tabBeejView.addEventListener('click', () => switchView('beej'));

  if (navagrahaSearchInput) {
    navagrahaSearchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (clearNavagrahaSearch) clearNavagrahaSearch.style.display = currentSearch ? 'block' : 'none';
      renderNavagraha();
    });
  }

  if (clearNavagrahaSearch) {
    clearNavagrahaSearch.addEventListener('click', () => {
      navagrahaSearchInput.value = '';
      currentSearch = '';
      clearNavagrahaSearch.style.display = 'none';
      renderNavagraha();
      navagrahaSearchInput.focus();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      renderNavagraha();
    });
  });

  if (expandAllBtn) expandAllBtn.addEventListener('click', expandAll);
  if (collapseAllBtn) collapseAllBtn.addEventListener('click', collapseAll);
  if (copyAllShlokasBtn) copyAllShlokasBtn.addEventListener('click', copyAllShlokas);

  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => {
      // Expand all details temporarily for complete printing
      expandAll();
      window.print();
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderNavagraha();
});
