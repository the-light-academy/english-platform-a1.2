/* ==========================================================================
   DATA.JS
   All learning content lives here. Adding new content later means adding
   new objects to these arrays — no other file needs to change.
   ========================================================================== */

/* ---- VOCABULARY ---------------------------------------------------------
   Used by: Flashcards game (and later: Detective, Final Mission)
   difficulty: 1 (easiest) -> 3 (hardest)
--------------------------------------------------------------------------- */
const vocabulary = [
  { id: "v1", english: "apple", bulgarian: "ябълка", category: "food", difficulty: 1, icon: "🍎" },
  { id: "v2", english: "house", bulgarian: "къща", category: "home", difficulty: 1, icon: "🏠" },
  { id: "v3", english: "dog", bulgarian: "куче", category: "animals", difficulty: 1, icon: "🐶" },
  { id: "v4", english: "cat", bulgarian: "котка", category: "animals", difficulty: 1, icon: "🐱" },
  { id: "v5", english: "book", bulgarian: "книга", category: "school", difficulty: 1, icon: "📖" },
  { id: "v6", english: "water", bulgarian: "вода", category: "food", difficulty: 1, icon: "💧" },
  { id: "v7", english: "friend", bulgarian: "приятел", category: "people", difficulty: 2, icon: "🧑‍🤝‍🧑" },
  { id: "v8", english: "school", bulgarian: "училище", category: "places", difficulty: 1, icon: "🏫" },
  { id: "v9", english: "sun", bulgarian: "слънце", category: "nature", difficulty: 1, icon: "☀️" },
  { id: "v10", english: "family", bulgarian: "семейство", category: "people", difficulty: 2, icon: "👨‍👩‍👧" },
  { id: "v11", english: "car", bulgarian: "кола", category: "transport", difficulty: 1, icon: "🚗" },
  { id: "v12", english: "bird", bulgarian: "птица", category: "animals", difficulty: 1, icon: "🐦" },
  { id: "v13", english: "table", bulgarian: "маса", category: "home", difficulty: 1, icon: "🪑" },
  { id: "v14", english: "teacher", bulgarian: "учител", category: "school", difficulty: 2, icon: "🍎" },
  { id: "v15", english: "happy", bulgarian: "щастлив", category: "feelings", difficulty: 2, icon: "😊" },
];

/* ---- VERBS (for Past Tense game) ----------------------------------------- */
const verbs = [
  { id: "g1", base: "go", past: "went", bulgarian: "отивам", icon: "🚶" },
  { id: "g2", base: "eat", past: "ate", bulgarian: "ям", icon: "🍽️" },
  { id: "g3", base: "play", past: "played", bulgarian: "играя", icon: "⚽" },
  { id: "g4", base: "watch", past: "watched", bulgarian: "гледам", icon: "📺" },
  { id: "g5", base: "see", past: "saw", bulgarian: "виждам", icon: "👀" },
  { id: "g6", base: "have", past: "had", bulgarian: "имам", icon: "🎒" },
  { id: "g7", base: "read", past: "read", bulgarian: "чета", icon: "📚" },
  { id: "g8", base: "run", past: "ran", bulgarian: "тичам", icon: "🏃" },
];

/* ---- TO BE (I am / You are / He is ...) ---------------------------------- */
const toBe = [
  { id: "b1", subject: "I", verb: "am" },
  { id: "b2", subject: "You", verb: "are" },
  { id: "b3", subject: "He", verb: "is" },
  { id: "b4", subject: "She", verb: "is" },
  { id: "b5", subject: "It", verb: "is" },
  { id: "b6", subject: "We", verb: "are" },
  { id: "b7", subject: "They", verb: "are" },
];

/* ---- SENTENCE BUILDER (word banks for future game) ----------------------- */
const sentences = [
  { id: "s1", words: ["I", "am", "happy"], translation: "Аз съм щастлив" },
  { id: "s2", words: ["She", "is", "my", "friend"], translation: "Тя е моя приятелка" },
  { id: "s3", words: ["We", "went", "to", "school"], translation: "Ние отидохме на училище" },
];

/* ---- LEARNING MAP DEFINITION ----------------------------------------------
   Drives the visual learning map AND which game module each level opens.
   status is computed at runtime from studentProgress, not stored here.
--------------------------------------------------------------------------- */
const learningMap = [
  {
    id: "vocabulary",
    order: 1,
    title: "Vocabulary",
    icon: "🃏",
    description: "Learn 20 new words",
    xp: 50,
    gameKey: "flashcards",
  },
  {
    id: "toBe",
    order: 2,
    title: "To Be",
    icon: "⚡",
    description: "I am / You are / He is...",
    xp: 60,
    gameKey: "toBe",
  },
  {
    id: "present",
    order: 3,
    title: "Present",
    icon: "🗣️",
    description: "Simple Present tense",
    xp: 70,
    gameKey: "presentTense",
  },
  {
    id: "past",
    order: 4,
    title: "Past",
    icon: "⏳",
    description: "Past tense verbs",
    xp: 80,
    gameKey: "pastTense",
  },
  {
    id: "sentenceBuilder",
    order: 5,
    title: "Sentence Builder",
    icon: "🧩",
    description: "Build correct sentences",
    xp: 90,
    gameKey: "sentenceBuilder",
  },
  {
    id: "finalMission",
    order: 6,
    title: "Final Mission",
    icon: "🏆",
    description: "The English Challenge",
    xp: 150,
    gameKey: "finalMission",
  },
];
