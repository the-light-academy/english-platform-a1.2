/* ==========================================================================
DATA.JS
All learning content lives here. Adding new content later means adding
new objects to these arrays — no other file needs to change.

PERSONALIZED FOR: Georgi (27) — interests: cars, animals, travel.
Level: A1.2, aligned to be extended with Cambridge One unit vocabulary
once the textbook is uploaded (see "CAMBRIDGE ONE MAPPING" note below).
========================================================================== */

/* ---- VOCABULARY ---------------------------------------------------------
Used by: Flashcards game (and later: Detective, Final Mission)
difficulty: 1 (easiest) -> 3 (hardest)
categories: "vehicles", "animals", "travel", "people", "home", "feelings",
"work", "time" — vehicles/animals/travel are weighted heavier
on purpose (Georgi's interests), core categories kept for
grammar variety.
--------------------------------------------------------------------------- */
const vocabulary = [
  // ---- VEHICLES / CARS ----
  { id: "v1",  english: "car",         bulgarian: "кола",           category: "vehicles", difficulty: 1, icon: "🚗" },
  { id: "v2",  english: "motorbike",   bulgarian: "мотор",          category: "vehicles", difficulty: 1, icon: "🏍️" },
  { id: "v3",  english: "bicycle",     bulgarian: "велосипед",      category: "vehicles", difficulty: 1, icon: "🚲" },
  { id: "v4",  english: "bus",         bulgarian: "автобус",        category: "vehicles", difficulty: 1, icon: "🚌" },
  { id: "v5",  english: "train",       bulgarian: "влак",           category: "vehicles", difficulty: 1, icon: "🚆" },
  { id: "v6",  english: "plane",       bulgarian: "самолет",        category: "vehicles", difficulty: 1, icon: "✈️" },
  { id: "v7",  english: "ship",        bulgarian: "кораб",          category: "vehicles", difficulty: 2, icon: "🚢" },
  { id: "v8",  english: "taxi",        bulgarian: "такси",          category: "vehicles", difficulty: 1, icon: "🚕" },
  { id: "v9",  english: "truck",       bulgarian: "камион",         category: "vehicles", difficulty: 2, icon: "🚚" },
  { id: "v10", english: "engine",      bulgarian: "двигател",       category: "vehicles", difficulty: 3, icon: "⚙️" },
  { id: "v11", english: "petrol",      bulgarian: "бензин",         category: "vehicles", difficulty: 2, icon: "⛽" },
  { id: "v12", english: "road",        bulgarian: "път",            category: "vehicles", difficulty: 1, icon: "🛣️" },
  { id: "v13", english: "garage",      bulgarian: "гараж",          category: "vehicles", difficulty: 2, icon: "🅿️" },
  { id: "v14", english: "wheel",       bulgarian: "колело (на кола)", category: "vehicles", difficulty: 2, icon: "🛞" },
  { id: "v15", english: "driver",      bulgarian: "шофьор",         category: "vehicles", difficulty: 2, icon: "🧑‍✈️" },

  // ---- ANIMALS ----
  { id: "v16", english: "dog",         bulgarian: "куче",           category: "animals", difficulty: 1, icon: "🐶" },
  { id: "v17", english: "cat",         bulgarian: "котка",          category: "animals", difficulty: 1, icon: "🐱" },
  { id: "v18", english: "horse",       bulgarian: "кон",            category: "animals", difficulty: 1, icon: "🐴" },
  { id: "v19", english: "lion",        bulgarian: "лъв",            category: "animals", difficulty: 1, icon: "🦁" },
  { id: "v20", english: "elephant",    bulgarian: "слон",           category: "animals", difficulty: 2, icon: "🐘" },
  { id: "v21", english: "tiger",       bulgarian: "тигър",          category: "animals", difficulty: 2, icon: "🐯" },
  { id: "v22", english: "bear",        bulgarian: "мечка",          category: "animals", difficulty: 1, icon: "🐻" },
  { id: "v23", english: "wolf",        bulgarian: "вълк",           category: "animals", difficulty: 2, icon: "🐺" },
  { id: "v24", english: "fox",         bulgarian: "лисица",         category: "animals", difficulty: 2, icon: "🦊" },
  { id: "v25", english: "monkey",      bulgarian: "маймуна",        category: "animals", difficulty: 1, icon: "🐒" },
  { id: "v26", english: "giraffe",     bulgarian: "жираф",          category: "animals", difficulty: 2, icon: "🦒" },
  { id: "v27", english: "zebra",       bulgarian: "зебра",          category: "animals", difficulty: 2, icon: "🦓" },
  { id: "v28", english: "snake",       bulgarian: "змия",           category: "animals", difficulty: 1, icon: "🐍" },
  { id: "v29", english: "eagle",       bulgarian: "орел",           category: "animals", difficulty: 2, icon: "🦅" },
  { id: "v30", english: "dolphin",     bulgarian: "делфин",         category: "animals", difficulty: 2, icon: "🐬" },
  { id: "v31", english: "shark",       bulgarian: "акула",          category: "animals", difficulty: 2, icon: "🦈" },
  { id: "v32", english: "whale",       bulgarian: "кит",            category: "animals", difficulty: 2, icon: "🐳" },
  { id: "v33", english: "rabbit",      bulgarian: "заек",           category: "animals", difficulty: 1, icon: "🐰" },
  { id: "v34", english: "sheep",       bulgarian: "овца",           category: "animals", difficulty: 1, icon: "🐑" },
  { id: "v35", english: "owl",         bulgarian: "бухал",          category: "animals", difficulty: 2, icon: "🦉" },

  // ---- TRAVEL ----
  { id: "v36", english: "airport",     bulgarian: "летище",         category: "travel", difficulty: 1, icon: "🛫" },
  { id: "v37", english: "ticket",      bulgarian: "билет",          category: "travel", difficulty: 1, icon: "🎫" },
  { id: "v38", english: "passport",    bulgarian: "паспорт",        category: "travel", difficulty: 1, icon: "🛂" },
  { id: "v39", english: "hotel",       bulgarian: "хотел",          category: "travel", difficulty: 1, icon: "🏨" },
  { id: "v40", english: "suitcase",    bulgarian: "куфар",          category: "travel", difficulty: 1, icon: "🧳" },
  { id: "v41", english: "map",         bulgarian: "карта",          category: "travel", difficulty: 1, icon: "🗺️" },
  { id: "v42", english: "beach",       bulgarian: "плаж",           category: "travel", difficulty: 1, icon: "🏖️" },
  { id: "v43", english: "mountain",    bulgarian: "планина",        category: "travel", difficulty: 1, icon: "⛰️" },
  { id: "v44", english: "city",        bulgarian: "град",           category: "travel", difficulty: 1, icon: "🏙️" },
  { id: "v45", english: "country",     bulgarian: "държава",        category: "travel", difficulty: 1, icon: "🌍" },
  { id: "v46", english: "tourist",     bulgarian: "турист",         category: "travel", difficulty: 2, icon: "🧑‍🤝‍🧑" },
  { id: "v47", english: "journey",     bulgarian: "пътуване",       category: "travel", difficulty: 2, icon: "🧭" },
  { id: "v48", english: "holiday",     bulgarian: "почивка",        category: "travel", difficulty: 1, icon: "🌴" },
  { id: "v49", english: "camp",        bulgarian: "лагер",          category: "travel", difficulty: 2, icon: "⛺" },

  // ---- CORE / GRAMMAR-SUPPORT WORDS ----
  { id: "v50", english: "friend",      bulgarian: "приятел",        category: "people", difficulty: 2, icon: "🧑‍🤝‍🧑" },
  { id: "v51", english: "family",      bulgarian: "семейство",      category: "people", difficulty: 2, icon: "👨‍👩‍👧" },
  { id: "v52", english: "work",        bulgarian: "работа",         category: "work", difficulty: 1, icon: "💼" },
  { id: "v53", english: "money",       bulgarian: "пари",           category: "work", difficulty: 1, icon: "💰" },
  { id: "v54", english: "time",        bulgarian: "време (часово)", category: "time", difficulty: 1, icon: "⏰" },
  { id: "v55", english: "weather",     bulgarian: "време (метео)",  category: "time", difficulty: 2, icon: "☀️" },
  { id: "v56", english: "house",       bulgarian: "къща",           category: "home", difficulty: 1, icon: "🏠" },
  { id: "v57", english: "water",       bulgarian: "вода",           category: "home", difficulty: 1, icon: "💧" },
  { id: "v58", english: "happy",       bulgarian: "щастлив",        category: "feelings", difficulty: 2, icon: "😊" },
  { id: "v59", english: "tired",       bulgarian: "уморен",         category: "feelings", difficulty: 2, icon: "😴" },
  { id: "v60", english: "excited",     bulgarian: "развълнуван",    category: "feelings", difficulty: 3, icon: "🤩" },
];

/* ---- VERBS (for Past Tense game) — car / travel / animal themed ---------- */
const verbs = [
  { id: "g1",  base: "drive",   past: "drove",    bulgarian: "карам (кола)", icon: "🚗" },
  { id: "g2",  base: "fly",     past: "flew",      bulgarian: "летя",         icon: "✈️" },
  { id: "g3",  base: "travel",  past: "traveled",  bulgarian: "пътувам",      icon: "🧳" },
  { id: "g4",  base: "visit",   past: "visited",   bulgarian: "посещавам",    icon: "🏙️" },
  { id: "g5",  base: "see",     past: "saw",        bulgarian: "виждам",       icon: "👀" },
  { id: "g6",  base: "ride",    past: "rode",       bulgarian: "яздя / карам", icon: "🚲" },
  { id: "g7",  base: "park",    past: "parked",     bulgarian: "паркирам",     icon: "🅿️" },
  { id: "g8",  base: "buy",     past: "bought",     bulgarian: "купувам",      icon: "🛒" },
  { id: "g9",  base: "stop",    past: "stopped",    bulgarian: "спирам",       icon: "🛑" },
  { id: "g10", base: "walk",    past: "walked",     bulgarian: "разхождам",    icon: "🚶" },
  { id: "g11", base: "feed",    past: "fed",         bulgarian: "храня",        icon: "🐾" },
  { id: "g12", base: "pack",    past: "packed",     bulgarian: "стягам багаж", icon: "🎒" },
  { id: "g13", base: "book",    past: "booked",     bulgarian: "резервирам",   icon: "🎫" },
  { id: "g14", base: "explore", past: "explored",   bulgarian: "изследвам",    icon: "🧭" },
  { id: "g15", base: "run",     past: "ran",         bulgarian: "тичам",        icon: "🏃" },
];

/* ---- TO BE (I am / You are / He is ...) — car / animal / travel themed ----
Used by: To Be game (js/games/toBe.js)
Each item is one gap-fill round: sentence has a single "___" blank where
the correct form of "to be" (am/is/are) goes. Mixes the 7 core pronouns
with themed noun subjects so the drill stays grammar-accurate but on-topic
for Georgi (cars, animals, travel).
--------------------------------------------------------------------------- */
const toBe = [
  // ---- CORE PRONOUNS ----
  { id: "b1", subject: "I",    verb: "am",  sentence: "I ___ tired after the long drive.",      bulgarian: "Аз съм уморен след дългото шофиране.", icon: "🚗" },
  { id: "b2", subject: "You",  verb: "are", sentence: "You ___ a good driver.",                  bulgarian: "Ти си добър шофьор.",                   icon: "🧑‍✈️" },
  { id: "b3", subject: "He",   verb: "is",  sentence: "He ___ at the airport now.",               bulgarian: "Той е на летището сега.",               icon: "🛫" },
  { id: "b4", subject: "She",  verb: "is",  sentence: "She ___ excited about the trip.",          bulgarian: "Тя е развълнувана от пътуването.",      icon: "🧳" },
  { id: "b5", subject: "It",   verb: "is",  sentence: "It ___ a fast car.",                       bulgarian: "Това е бърза кола.",                    icon: "🏎️" },
  { id: "b6", subject: "We",   verb: "are", sentence: "We ___ on holiday in the mountains.",      bulgarian: "Ние сме на почивка в планината.",       icon: "⛰️" },
  { id: "b7", subject: "They", verb: "are", sentence: "They ___ tourists from Bulgaria.",         bulgarian: "Те са туристи от България.",             icon: "🧑‍🤝‍🧑" },

  // ---- THEMED NOUN SUBJECTS ----
  { id: "b8",  subject: "The car",       verb: "is",  sentence: "The car ___ parked in the garage.",   bulgarian: "Колата е паркирана в гаража.",        icon: "🅿️" },
  { id: "b9",  subject: "The dogs",      verb: "are", sentence: "The dogs ___ very friendly.",          bulgarian: "Кучетата са много дружелюбни.",       icon: "🐶" },
  { id: "b10", subject: "The lion",      verb: "is",  sentence: "The lion ___ the king of the jungle.", bulgarian: "Лъвът е царят на джунглата.",         icon: "🦁" },
  { id: "b11", subject: "My motorbike",  verb: "is",  sentence: "My motorbike ___ in the garage.",      bulgarian: "Моят мотор е в гаража.",               icon: "🏍️" },
  { id: "b12", subject: "The animals",   verb: "are", sentence: "The animals ___ at the zoo.",          bulgarian: "Животните са в зоопарка.",            icon: "🦒" },
  { id: "b13", subject: "The beach",     verb: "is",  sentence: "The beach ___ beautiful in summer.",   bulgarian: "Плажът е красив през лятото.",        icon: "🏖️" },
  { id: "b14", subject: "The tickets",   verb: "are", sentence: "The tickets ___ in my suitcase.",      bulgarian: "Билетите са в куфара ми.",            icon: "🎫" },
];

/* ---- SENTENCE BUILDER (word banks) — car / travel / animal themed -------- */
const sentences = [
  { id: "s1", words: ["I", "am", "tired", "after", "the", "trip"], translation: "Аз съм уморен след пътуването" },
  { id: "s2", words: ["He", "has", "a", "new", "car"], translation: "Той има нова кола" },
  { id: "s3", words: ["We", "saw", "a", "lion", "at", "the", "zoo"], translation: "Ние видяхме лъв в зоопарка" },
  { id: "s4", words: ["She", "is", "driving", "to", "the", "mountains"], translation: "Тя кара към планината" },
  { id: "s5", words: ["They", "traveled", "to", "Italy", "last", "year"], translation: "Те пътуваха до Италия миналата година" },
  { id: "s6", words: ["My", "dog", "is", "very", "friendly"], translation: "Моето куче е много дружелюбно" },
  { id: "s7", words: ["The", "plane", "leaves", "at", "six"], translation: "Самолетът тръгва в шест" },
  { id: "s8", words: ["I", "want", "to", "buy", "a", "motorbike"], translation: "Искам да купя мотор" },
];

/* ---- LEARNING MAP DEFINITION ----------------------------------------------
Drives the visual learning map AND which game module each level opens.
status is computed at runtime from studentProgress, not stored here.
--------------------------------------------------------------------------- */
const learningMap = [
  { id: "vocabulary",       order: 1, title: "Vocabulary",       icon: "🃏", description: "Cars, animals & travel words", xp: 50,  gameKey: "flashcards" },
  { id: "toBe",              order: 2, title: "To Be",            icon: "⚡", description: "I am / You are / He is...",     xp: 60,  gameKey: "toBe" },
  { id: "present",          order: 3, title: "Present",          icon: "🗣️", description: "Talk about your daily drive",    xp: 70,  gameKey: "presentTense" },
  { id: "past",             order: 4, title: "Past",             icon: "⏳", description: "Your last trip or road story",   xp: 80,  gameKey: "pastTense" },
  { id: "sentenceBuilder",  order: 5, title: "Sentence Builder",  icon: "🧩", description: "Build real travel sentences",    xp: 90,  gameKey: "sentenceBuilder" },
  { id: "finalMission",     order: 6, title: "Final Mission",     icon: "🏆", description: "The Road Trip Challenge",        xp: 150, gameKey: "finalMission" },
];

/* ---- CAMBRIDGE ONE MAPPING ------------------------------------------------
Placeholder for future integration. Once the textbook file is uploaded,
each Cambridge One unit's target vocabulary/grammar should be added here
as its own entry, then merged into `vocabulary` / `learningMap` above so
lesson order matches the book's unit order.
Example shape (to be filled in):
const cambridgeOneUnits = [
  // { unit: 1, title: "...", grammarFocus: "...", vocabIds: ["v1","v16", ...] },
];
--------------------------------------------------------------------------- */
