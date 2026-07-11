// 10 historic events (already in chronological order in this array).
// year is numeric for comparison; displayYear is what the user sees.
const EVENTS = [
  { id: 1,  year: -776, displayYear: "776 BCE", title: "First Olympic Games",      desc: "Held in Olympia, Greece." },
  { id: 2,  year: -221, displayYear: "221 BCE", title: "Qin unifies China",          desc: "Qin Shi Huang becomes first emperor." },
  { id: 3,  year: -44,  displayYear: "44 BCE",  title: "Caesar assassinated",         desc: "Julius Caesar killed on the Ides of March." },
  { id: 4,  year: 476,  displayYear: "476 CE",  title: "Fall of Western Rome",       desc: "End of the Western Roman Empire." },
  { id: 5,  year: 1066, displayYear: "1066",    title: "Battle of Hastings",         desc: "William the Conqueror invades England." },
  { id: 6,  year: 1492, displayYear: "1492",    title: "Columbus reaches Americas", desc: "Voyage funded by Spain." },
  { id: 7,  year: 1789, displayYear: "1789",   title: "French Revolution begins",  desc: "Storming of the Bastille." },
  { id: 8,  year: 1869, displayYear: "1869",    title: "Suez Canal opens",          desc: "Links the Mediterranean and Red Sea." },
  { id: 9,  year: 1969, displayYear: "1969",   title: "Apollo 11 Moon landing",    desc: "First humans walk on the Moon." },
  { id: 10, year: 1989, displayYear: "1989",    title: "Fall of the Berlin Wall",   desc: "Symbolic end of the Cold War division." }
];

// Game state
let queue = [];        // remaining cards in the player's hand
let placed = [];        // correctly placed events, ascending by year
let current = null;     // the card currently being placed
let attempts = 0;       // total placement attempts
let errors = 0;          // wrong guesses
let startTime = 0;

const cardZone  = document.getElementById("card-zone");
const timeline  = document.getElementById("timeline");
const progressEl = document.getElementById("progress");
const errorModal = document.getElementById("error-modal");
const errorMsg   = document.getElementById("error-msg");
const retryBtn   = document.getElementById("retry-btn");
const winModal   = document.getElementById("win-modal");
const statsEl    = document.getElementById("stats");
const playAgain  = document.getElementById("play-again");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initGame() {
  queue = shuffle(EVENTS);
  placed = [];
  current = null;
  attempts = 0;
  errors = 0;
  startTime = Date.now();
  errorModal.classList.add("hidden");
  winModal.classList.add("hidden");
  nextCard();
}

function nextCard() {
  current = queue.shift();
  render();
}

function render() {
  progressEl.textContent = `${placed.length} / ${EVENTS.length} placed`;

  // Hand: show queued cards dimmed, current card highlighted.
  cardZone.innerHTML = "";
  queue.forEach(ev => {
    const div = document.createElement("div");
    div.className = "card placed";
    div.innerHTML = `<div class="title">${ev.title}</div><div class="desc">${ev.desc}</div>`;
    cardZone.appendChild(div);
  });
  if (current) {
    const cur = document.createElement("div");
    cur.className = "card active";
    cur.innerHTML = `<div class="title">${current.title}</div><div class="desc">${current.desc}</div>`;
    cardZone.appendChild(cur);
  }

  // Timeline: one position selector (radios) between/around placed slots.
  timeline.innerHTML = "";
  if (current) {
    // Top insertion row (position 0 = before everything)
    timeline.appendChild(makeInsertRow(0));
  }
  placed.forEach((ev, i) => {
    const slot = document.createElement("div");
    slot.className = "slot filled";
    slot.innerHTML = `
      <span class="year">${ev.displayYear}</span>
      <span class="event-title">${ev.title}</span>
      <span class="event-desc">— ${ev.desc}</span>`;
    timeline.appendChild(slot);
    if (current) {
      timeline.appendChild(makeInsertRow(i + 1));
    }
  });

  if (placed.length === 0 && !current) {
    const ph = document.createElement("div");
    ph.className = "slot";
    ph.innerHTML = `<span class="placeholder">No cards placed yet.</span>`;
    timeline.appendChild(ph);
  }
}

// Build a row that lets the user type a year and choose this position.
function makeInsertRow(position) {
  const row = document.createElement("div");
  row.className = "insert-row";
  row.innerHTML = `
    <label>Place "${current.title}" here — Year:</label>
    <input type="number" placeholder="e.g. 1492" />
  `;
  const input = row.querySelector("input");
  const btn = document.createElement("button");
  btn.textContent = "Place here";
  btn.addEventListener("click", () => {
    const year = parseInt(input.value, 10);
    if (Number.isNaN(year)) {
      input.classList.add("shake");
      setTimeout(() => input.classList.remove("shake"), 400);
      return;
    }
    handleGuess(year, position);
  });
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") btn.click();
  });
  row.appendChild(btn);
  return row;
}

function handleGuess(yearInput, position) {
  attempts++;
  const correct = isCorrectPlacement(current, yearInput, position);
  if (correct) {
    placed.push(current);
    placed.sort((a, b) => a.year - b.year);
    current = null;
    progressEl.textContent = `${placed.length} / ${EVENTS.length} placed`;
    if (placed.length === EVENTS.length) {
      showWin();
    } else {
      nextCard();
    }
  } else {
    errors++;
    showError(yearInput);
  }
}

function isCorrectPlacement(ev, yearInput, position) {
  // Year must match AND chosen position must equal the slot ev belongs in.
  if (yearInput !== ev.year) return false;
  const sortedAll = placed.concat(ev).sort((a, b) => a.year - b.year);
  const expectedIndex = sortedAll.findIndex(e => e.id === ev.id);
  return position === expectedIndex;
}

function showError(yearInput) {
  let msg;
  if (yearInput !== current.year) {
    if (yearInput < current.year) {
      msg = `"${current.title}" did NOT happen in ${yearInput}. That is too early. Try again!`;
    } else {
      msg = `"${current.title}" did NOT happen in ${yearInput}. That is too late. Try again!`;
    }
  } else {
    msg = `The year is right, but that position on the timeline is wrong. Try again!`;
  }
  errorMsg.textContent = msg;
  errorModal.classList.remove("hidden");
  // Put the card back at the front of the queue so it shows up again on retry.
  queue.unshift(current);
  current = null;
}

retryBtn.addEventListener("click", () => {
  errorModal.classList.add("hidden");
  nextCard();
});

function showWin() {
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const accuracy = Math.round((EVENTS.length / attempts) * 100);
  statsEl.innerHTML = `
    <p>Cards placed: <span class="num">${EVENTS.length}</span></p>
    <p>Total attempts: <span class="num">${attempts}</span></p>
    <p>Wrong guesses: <span class="num">${errors}</span></p>
    <p>Accuracy: <span class="num">${accuracy}%</span></p>
    <p>Time: <span class="num">${mins}m ${secs}s</span></p>`;
  winModal.classList.remove("hidden");
}

playAgain.addEventListener("click", initGame);

initGame();
