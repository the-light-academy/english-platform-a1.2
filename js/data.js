/* ==========================================================================
DATA.JS
All learning content lives here. Adding new content later means adding
new objects to these arrays — no other file needs to change.

PERSONALIZED FOR: Kali (27) — interests: cars, animals, travel, sweet cats, books.
Level: A1.2, aligned to be extended with Cambridge One unit vocabulary
once the textbook is uploaded (see "CAMBRIDGE ONE MAPPING" note below).
========================================================================== */

/* ---- VOCABULARY ---------------------------------------------------------
Used by: Flashcards game (and later: Detective, Final Mission)
difficulty: 1 (easiest) -> 3 (hardest)
categories: "vehicles", "animals", "travel", "people", "home", "feelings",
"work", "time", "colors", "weather", "shopping", "hobbies" — vehicles/
animals/travel/hobbies (books) are weighted heavier on purpose (Kali's
interests: cars, animals/cats, travel, books), core categories kept for
grammar variety. "shopping" aligns with Cambridge One Unit 7.
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

  // ---- MORE VEHICLES ----
  { id: "v61", english: "helicopter",  bulgarian: "хеликоптер",     category: "vehicles", difficulty: 2, icon: "🚁" },
  { id: "v62", english: "van",         bulgarian: "микробус",       category: "vehicles", difficulty: 2, icon: "🚐" },
  { id: "v63", english: "scooter",     bulgarian: "скутер",         category: "vehicles", difficulty: 1, icon: "🛵" },
  { id: "v64", english: "tractor",     bulgarian: "трактор",        category: "vehicles", difficulty: 2, icon: "🚜" },
  { id: "v65", english: "ambulance",   bulgarian: "линейка",        category: "vehicles", difficulty: 2, icon: "🚑" },

  // ---- MORE ANIMALS ----
  { id: "v66", english: "crocodile",   bulgarian: "крокодил",       category: "animals", difficulty: 2, icon: "🐊" },
  { id: "v67", english: "panda",       bulgarian: "панда",          category: "animals", difficulty: 1, icon: "🐼" },
  { id: "v68", english: "kangaroo",    bulgarian: "кенгуру",        category: "animals", difficulty: 2, icon: "🦘" },
  { id: "v69", english: "penguin",     bulgarian: "пингвин",        category: "animals", difficulty: 1, icon: "🐧" },
  { id: "v70", english: "parrot",      bulgarian: "папагал",        category: "animals", difficulty: 2, icon: "🦜" },
  { id: "v71", english: "frog",        bulgarian: "жаба",           category: "animals", difficulty: 1, icon: "🐸" },
  { id: "v72", english: "mouse",       bulgarian: "мишка",          category: "animals", difficulty: 1, icon: "🐭" },
  { id: "v73", english: "camel",       bulgarian: "камила",         category: "animals", difficulty: 2, icon: "🐫" },
  { id: "v74", english: "cow",         bulgarian: "крава",          category: "animals", difficulty: 1, icon: "🐄" },
  { id: "v75", english: "pig",         bulgarian: "прасе",          category: "animals", difficulty: 1, icon: "🐷" },

  // ---- MORE TRAVEL ----
  { id: "v76", english: "backpack",    bulgarian: "раница",         category: "travel", difficulty: 1, icon: "🎒" },
  { id: "v77", english: "souvenir",    bulgarian: "сувенир",        category: "travel", difficulty: 2, icon: "🎁" },
  { id: "v78", english: "guide",       bulgarian: "гид",            category: "travel", difficulty: 2, icon: "🧑‍🏫" },
  { id: "v79", english: "island",      bulgarian: "остров",         category: "travel", difficulty: 1, icon: "🏝️" },
  { id: "v80", english: "forest",      bulgarian: "гора",           category: "travel", difficulty: 1, icon: "🌲" },
  { id: "v81", english: "lake",        bulgarian: "езеро",          category: "travel", difficulty: 2, icon: "🏞️" },
  { id: "v82", english: "desert",      bulgarian: "пустиня",        category: "travel", difficulty: 2, icon: "🏜️" },
  { id: "v83", english: "sea",         bulgarian: "море",           category: "travel", difficulty: 1, icon: "🌊" },

  // ---- COLORS / WEATHER / TIME (core grammar-support) ----
  { id: "v84", english: "red",         bulgarian: "червен",         category: "colors", difficulty: 1, icon: "🔴" },
  { id: "v85", english: "blue",        bulgarian: "син",            category: "colors", difficulty: 1, icon: "🔵" },
  { id: "v86", english: "green",       bulgarian: "зелен",          category: "colors", difficulty: 1, icon: "🟢" },
  { id: "v87", english: "rain",        bulgarian: "дъжд",           category: "weather", difficulty: 1, icon: "🌧️" },
  { id: "v88", english: "snow",        bulgarian: "сняг",           category: "weather", difficulty: 1, icon: "❄️" },
  { id: "v89", english: "wind",        bulgarian: "вятър",          category: "weather", difficulty: 2, icon: "💨" },
  { id: "v90", english: "cloud",       bulgarian: "облак",          category: "weather", difficulty: 1, icon: "☁️" },
  { id: "v91", english: "morning",     bulgarian: "сутрин",         category: "time", difficulty: 1, icon: "🌅" },
  { id: "v92", english: "evening",     bulgarian: "вечер",          category: "time", difficulty: 1, icon: "🌆" },
  { id: "v93", english: "today",       bulgarian: "днес",           category: "time", difficulty: 2, icon: "📅" },

  // ---- SHOPPING & FASHION (Cambridge One Unit 7 — original content, see mapping below) ----
  { id: "v94",  english: "shop",          bulgarian: "магазин",           category: "shopping", difficulty: 1, icon: "🏬" },
  { id: "v95",  english: "shopping",      bulgarian: "пазаруване",        category: "shopping", difficulty: 1, icon: "🛍️" },
  { id: "v96",  english: "clothes",       bulgarian: "дрехи",             category: "shopping", difficulty: 1, icon: "👕" },
  { id: "v97",  english: "shirt",         bulgarian: "риза",              category: "shopping", difficulty: 1, icon: "👔" },
  { id: "v98",  english: "T-shirt",       bulgarian: "тениска",           category: "shopping", difficulty: 1, icon: "👕" },
  { id: "v99",  english: "jeans",         bulgarian: "дънки",             category: "shopping", difficulty: 1, icon: "👖" },
  { id: "v100", english: "jacket",        bulgarian: "яке",               category: "shopping", difficulty: 1, icon: "🧥" },
  { id: "v101", english: "shoes",         bulgarian: "обувки",            category: "shopping", difficulty: 1, icon: "👞" },
  { id: "v102", english: "boots",         bulgarian: "ботуши",            category: "shopping", difficulty: 2, icon: "🥾" },
  { id: "v103", english: "hat",           bulgarian: "шапка",             category: "shopping", difficulty: 1, icon: "🧢" },
  { id: "v104", english: "sunglasses",    bulgarian: "слънчеви очила",    category: "shopping", difficulty: 2, icon: "🕶️" },
  { id: "v105", english: "dress",         bulgarian: "рокля",             category: "shopping", difficulty: 1, icon: "👗" },
  { id: "v106", english: "size",          bulgarian: "размер",            category: "shopping", difficulty: 2, icon: "📏" },
  { id: "v107", english: "price",         bulgarian: "цена",              category: "shopping", difficulty: 2, icon: "🏷️" },
  { id: "v108", english: "expensive",     bulgarian: "скъп",              category: "shopping", difficulty: 2, icon: "💸" },
  { id: "v109", english: "cheap",         bulgarian: "евтин",             category: "shopping", difficulty: 2, icon: "🪙" },
  { id: "v110", english: "sale",          bulgarian: "разпродажба",       category: "shopping", difficulty: 2, icon: "🔖" },
  { id: "v111", english: "receipt",       bulgarian: "касова бележка",    category: "shopping", difficulty: 3, icon: "🧾" },
  { id: "v112", english: "cash",          bulgarian: "пари в брой",       category: "shopping", difficulty: 2, icon: "💵" },
  { id: "v113", english: "credit card",   bulgarian: "кредитна карта",    category: "shopping", difficulty: 2, icon: "💳" },
  { id: "v114", english: "try on",        bulgarian: "пробвам",           category: "shopping", difficulty: 2, icon: "🪞" },
  { id: "v115", english: "pay",           bulgarian: "плащам",            category: "shopping", difficulty: 1, icon: "💰" },
  { id: "v116", english: "customer",      bulgarian: "клиент",            category: "shopping", difficulty: 2, icon: "🙋" },
  { id: "v117", english: "shop assistant", bulgarian: "продавач-консултант", category: "shopping", difficulty: 3, icon: "🧑‍💼" },

  // ---- MORE CATS (Kali's interests) ----
  { id: "v118", english: "kitten",     bulgarian: "коте",           category: "animals", difficulty: 1, icon: "🐈" },
  { id: "v119", english: "pet",        bulgarian: "домашен любимец", category: "animals", difficulty: 2, icon: "🐾" },
  { id: "v120", english: "cute",       bulgarian: "сладък",         category: "feelings", difficulty: 1, icon: "🥰" },

  // ---- BOOKS / READING (Kali's interests) ----
  { id: "v121", english: "book",       bulgarian: "книга",          category: "hobbies", difficulty: 1, icon: "📖" },
  { id: "v122", english: "library",    bulgarian: "библиотека",     category: "hobbies", difficulty: 2, icon: "📚" },
  { id: "v123", english: "story",      bulgarian: "разказ",         category: "hobbies", difficulty: 1, icon: "📜" },
  { id: "v124", english: "page",       bulgarian: "страница",       category: "hobbies", difficulty: 1, icon: "📄" },
  { id: "v125", english: "author",     bulgarian: "автор",          category: "hobbies", difficulty: 2, icon: "✍️" },
  { id: "v126", english: "magazine",   bulgarian: "списание",       category: "hobbies", difficulty: 2, icon: "📰" },
];

/* ---- VERBS (for Past Tense game) — car / travel / animal themed ----------
`context` is the gap-fill sentence the Past Tense game shows; the blank
always takes the `past` form. --------------------------------------------- */
const verbs = [
  { id: "g1",  base: "drive",   past: "drove",     bulgarian: "карам (кола)", icon: "🚗", context: "Yesterday, I ___ my new car." },
  { id: "g2",  base: "fly",     past: "flew",       bulgarian: "летя",         icon: "✈️", context: "Last year, we ___ to Spain." },
  { id: "g3",  base: "travel",  past: "traveled",   bulgarian: "пътувам",      icon: "🧳", context: "They ___ around Europe last summer." },
  { id: "g4",  base: "visit",   past: "visited",    bulgarian: "посещавам",    icon: "🏙️", context: "She ___ the zoo last weekend." },
  { id: "g5",  base: "see",     past: "saw",         bulgarian: "виждам",       icon: "👀", context: "I ___ a lion at the safari park." },
  { id: "g6",  base: "ride",    past: "rode",        bulgarian: "яздя / карам", icon: "🚲", context: "He ___ his bicycle to school yesterday." },
  { id: "g7",  base: "park",    past: "parked",      bulgarian: "паркирам",     icon: "🅿️", context: "You ___ the car in the garage." },
  { id: "g8",  base: "buy",     past: "bought",      bulgarian: "купувам",      icon: "🛒", context: "We ___ tickets for the trip." },
  { id: "g9",  base: "stop",    past: "stopped",     bulgarian: "спирам",       icon: "🛑", context: "The bus ___ at the airport." },
  { id: "g10", base: "walk",    past: "walked",      bulgarian: "разхождам",    icon: "🚶", context: "The dog ___ next to the river." },
  { id: "g11", base: "feed",    past: "fed",          bulgarian: "храня",        icon: "🐾", context: "I ___ the animals at the farm." },
  { id: "g12", base: "pack",    past: "packed",      bulgarian: "стягам багаж", icon: "🎒", context: "She ___ her suitcase last night." },
  { id: "g13", base: "book",    past: "booked",      bulgarian: "резервирам",   icon: "🎫", context: "We ___ a hotel near the beach." },
  { id: "g14", base: "explore", past: "explored",    bulgarian: "изследвам",    icon: "🧭", context: "They ___ the mountains on foot." },
  { id: "g15", base: "run",     past: "ran",          bulgarian: "тичам",        icon: "🏃", context: "The horse ___ across the field." },
  { id: "g16", base: "read",    past: "read",          bulgarian: "чета",         icon: "📖", context: "Last night, I ___ a good book." },
];

/* ---- PRESENT SIMPLE (he/she/it -s vs base form) — car / animal / travel
themed. Used by: Present Tense game (js/games/presentTense.js)
Each item stores its own 3 options (base / correct / distractor) so the
game doesn't have to guess conjugation rules at runtime.
--------------------------------------------------------------------------- */
const presentSimple = [
  { id: "p1",  subject: "He",         sentence: "He ___ to work every day.",         correct: "drives",  options: ["drive", "drives", "driving"],   bulgarian: "Той кара до работа всеки ден.",     icon: "🚗" },
  { id: "p2",  subject: "She",        sentence: "She ___ to Spain every summer.",     correct: "flies",   options: ["fly", "flies", "flying"],        bulgarian: "Тя лети до Испания всяко лято.",     icon: "✈️" },
  { id: "p3",  subject: "The dog",    sentence: "The dog ___ in the park.",           correct: "runs",    options: ["run", "runs", "running"],        bulgarian: "Кучето тича в парка.",               icon: "🐶" },
  { id: "p4",  subject: "My car",     sentence: "My car ___ very fast.",              correct: "goes",    options: ["go", "goes", "going"],           bulgarian: "Моята кола върви много бързо.",      icon: "🏎️" },
  { id: "p5",  subject: "He",         sentence: "He ___ a red motorbike.",            correct: "has",     options: ["have", "has", "having"],         bulgarian: "Той има червен мотор.",              icon: "🏍️" },
  { id: "p6",  subject: "The lion",   sentence: "The lion ___ meat.",                 correct: "eats",    options: ["eat", "eats", "eating"],         bulgarian: "Лъвът яде месо.",                    icon: "🦁" },
  { id: "p7",  subject: "I",          sentence: "I ___ to the mountains every weekend.", correct: "drive", options: ["drive", "drives", "driving"],   bulgarian: "Аз карам до планината всеки уикенд.", icon: "⛰️" },
  { id: "p8",  subject: "We",         sentence: "We ___ to new countries every year.", correct: "travel", options: ["travel", "travels", "traveling"], bulgarian: "Ние пътуваме до нови държави всяка година.", icon: "🌍" },
  { id: "p9",  subject: "They",       sentence: "They ___ the zoo on Sundays.",       correct: "visit",   options: ["visit", "visits", "visiting"],   bulgarian: "Те посещават зоопарка в неделя.",    icon: "🦒" },
  { id: "p10", subject: "You",        sentence: "You ___ great photos on trips.",     correct: "take",    options: ["take", "takes", "taking"],       bulgarian: "Ти правиш страхотни снимки по пътуванията.", icon: "📸" },
  { id: "p11", subject: "It",         sentence: "It ___ at every station.",           correct: "stops",   options: ["stop", "stops", "stopping"],     bulgarian: "То спира на всяка гара.",            icon: "🚆" },
  { id: "p12", subject: "She",        sentence: "She ___ her car every Saturday.",    correct: "washes",  options: ["wash", "washes", "washing"],     bulgarian: "Тя мие колата си всяка събота.",     icon: "🧼" },
  { id: "p13", subject: "My friends", sentence: "My friends ___ animals.",            correct: "love",    options: ["love", "loves", "loving"],       bulgarian: "Моите приятели обичат животните.",   icon: "🐾" },
  { id: "p14", subject: "The plane",  sentence: "The plane ___ at six o'clock.",      correct: "leaves",  options: ["leave", "leaves", "leaving"],    bulgarian: "Самолетът тръгва в шест часа.",      icon: "🛫" },
];

/* ---- TO BE (I am / You are / He is ...) — car / animal / travel themed ----
Used by: To Be game (js/games/toBe.js)
Each item is one gap-fill round: sentence has a single "___" blank where
the correct form of "to be" (am/is/are) goes. Mixes the 7 core pronouns
with themed noun subjects so the drill stays grammar-accurate but on-topic
for Kali (cars, animals, travel).
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

  // ---- SHOPPING & FASHION (this/that/these/those + is/are) ----
  { id: "b15", subject: "This jacket",   verb: "is",  sentence: "This jacket ___ very warm.",           bulgarian: "Това яке е много топло.",             icon: "🧥" },
  { id: "b16", subject: "These shoes",   verb: "are", sentence: "These shoes ___ brand new.",           bulgarian: "Тези обувки са чисто нови.",          icon: "👞" },
  { id: "b17", subject: "That shirt",    verb: "is",  sentence: "That shirt ___ too expensive.",        bulgarian: "Тази риза е твърде скъпа.",           icon: "👔" },
  { id: "b18", subject: "Those jeans",   verb: "are", sentence: "Those jeans ___ on sale today.",       bulgarian: "Тези дънки са на разпродажба днес.",  icon: "👖" },

  // ---- CATS & BOOKS ----
  { id: "b19", subject: "My kitten",     verb: "is",  sentence: "My kitten ___ very cute.",             bulgarian: "Моето коте е много сладко.",          icon: "🐈" },
  { id: "b20", subject: "These books",   verb: "are", sentence: "These books ___ mine.",                bulgarian: "Тези книги са мои.",                  icon: "📚" },
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

  // ---- SHOPPING & FASHION ----
  { id: "s9",  words: ["How", "much", "is", "this", "jacket"], translation: "Колко струва това яке" },
  { id: "s10", words: ["Can", "I", "try", "on", "these", "shoes"], translation: "Може ли да пробвам тези обувки" },
  { id: "s11", words: ["I", "want", "to", "pay", "by", "card"], translation: "Искам да платя с карта" },
  { id: "s12", words: ["This", "shop", "has", "a", "big", "sale"], translation: "Този магазин има голяма разпродажба" },

  // ---- CATS & BOOKS ----
  { id: "s13", words: ["I", "read", "a", "book", "every", "evening"], translation: "Чета книга всяка вечер" },
  { id: "s14", words: ["My", "cat", "is", "very", "cute"], translation: "Моята котка е много сладка" },
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
Tracks which app content lines up with each Cambridge One unit, so lesson
order can eventually follow the book's unit order once the full textbook
is uploaded. All linked vocab/grammar items below are original content
written for this app (see the "SHOPPING & FASHION" blocks in `vocabulary`,
`toBe`, and `sentences` above) — not copied from the book itself.
--------------------------------------------------------------------------- */
const cambridgeOneUnits = [
  {
    unit: 7,
    title: "Shopping and Fashion",
    grammarFocus: "this / that / these / those + to be",
    vocabIds: ["v94", "v95", "v96", "v97", "v98", "v99", "v100", "v101", "v102", "v103", "v104", "v105", "v106", "v107", "v108", "v109", "v110", "v111", "v112", "v113", "v114", "v115", "v116", "v117"],
    toBeIds: ["b15", "b16", "b17", "b18"],
    sentenceIds: ["s9", "s10", "s11", "s12"],
  },
  // { unit: 1, title: "...", grammarFocus: "...", vocabIds: ["v1","v16", ...] },
];
