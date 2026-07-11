// 10 historic events (must remain in chronological order in this array)
const EVENTS = [
  { id: 1,  year: -776,  displayYear: "776 BCE", title: "First Olympic Games",      desc: "Held in Olympia, Greece." },
  { id: 2,  year: -221,  displayYear: "221 BCE", title: "Qin unifies China",          desc: "Qin Shi Huang becomes first emperor." },
  { id: 3,  year: -44,   displayYear: "44 BCE",  title: "Caesar assassinated",         desc: "Julius Caesar killed on the Ides of March." },
  { id: 4,  year: 476,   displayYear: "476 CE",  title: "Fall of Western Rome",       desc: "End of the Western Roman Empire." },
  { id: 5,  year: 1066,  displayYear: "1066",    title: "Battle of Hastings",         desc: "William the Conqueror invades England." },
  { id: 6,  year: 1492,  displayYear: "1492",    title: "Columbus reaches Americas", desc: "Voyage funded by Spain." },
  { id: 7,  year: 1789,  displayYear: "1789",    title: "French Revolution begins",  desc: "Storming of the Bastille." },
  { id: 8,  year: 1869,  displayYear: "1869",    title: "Suez Canal opens",          desc: "Links the Mediterranean and Red Sea." },
  { id: 9,  year: 1969,  displayYear: "1969",    title: "Apollo 11 Moon landing",    desc: "First humans walk on the Moon." },
  { id: 10, year: 1989,  displayYear: "1989",    title: "Fall of the Berlin Wall",   desc: "Symbolic end of the Cold War division." }
];

// Game state
let queue = [];        // remaining cards (shuffled pile)
let placed = [];        // correctly placed events in order
let current = null;     // the card currently being placed
let attempts = 0;
let errors = 0;
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
  if (current) {
    makeActiveCardDraggable();
  }
}

function render() {
  progressEl.textContent = `${placed.length} / ${EVENTS.length} placed`;

  // Clear hand zone
  cardZone.innerHTML = "";

  // Show a pile/deck style for remaining cards (only the active one is interactive)
  if (current) {
    const cur = document.createElement("div");
    cur.className = "card active";
    cur.id = "active-card";
    cur.innerHTML = `
      <div class="title">${current.title}</div>
      <div class="desc">${current.desc}</div>
    `;
    cardZone.appendChild(cur);
  }

  // Render Timeline
  timeline.innerHTML = "";

  if (placed.length === 0) {
    // Empty timeline - single dropzone at position 0
    timeline.appendChild(makeDropzone(0, "Drop card here to start timeline"));
  } else {
    // 1. Dropzone at top (position 0)
    timeline.appendChild(makeDropzone(0, "Drop here (before all)"));

    placed.forEach((ev, idx) => {
      // 2. Placed Event Slot
      const slot = document.createElement("div");
      slot.className = "slot";
      slot.innerHTML = `
        <span class="year">${ev.displayYear}</span>
        <div>
          <div class="event-title">${ev.title}</div>
          <div class="event-desc">${ev.desc}</div>
        </div>
      `;
      timeline.appendChild(slot);

      // 3. Dropzone after this event (position idx + 1)
      const label = (idx === placed.length - 1) ? "Drop here (after all)" : "Drop here";
      timeline.appendChild(makeDropzone(idx + 1, label));
    });
  }
}

function makeDropzone(position, text) {
  const zone = document.createElement("div");
  zone.className = "dropzone";
  zone.dataset.position = position;
  zone.textContent = text;
  return zone;
}

// Pointer Events Drag & Drop Engine (Super smooth and 100% Touchscreen Friendly)
function makeActiveCardDraggable() {
  const card = document.getElementById("active-card");
  if (!card) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let rect = null;
  let offsetX = 0;
  let offsetY = 0;

  card.addEventListener("pointerdown", e => {
    // Capture pointer to make sure events keep firing even when finger moves fast
    card.setPointerCapture(e.pointerId);
    isDragging = true;
    rect = card.getBoundingClientRect();
    
    // Exact tap/click offsets inside the card
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    // Apply absolute fixed position values to snap 1:1 to fingers
    card.style.width = `${rect.width}px`;
    card.style.height = `${rect.height}px`;
    card.style.left = `${rect.left}px`;
    card.style.top = `${rect.top}px`;
    card.classList.add("dragging");
  });

  card.addEventListener("pointermove", e => {
    if (!isDragging) return;

    // Position card exactly under finger/pointer
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    card.style.left = `${newX}px`;
    card.style.top = `${newY}px`;

    // Find dropzone element underneath the pointer
    // card has 'pointer-events: none' while dragging, so elementFromPoint sees the dropzones below it
    const elementUnder = document.elementFromPoint(e.clientX, e.clientY);
    const dropzone = elementUnder ? elementUnder.closest(".dropzone") : null;

    // Clear previous highlights
    document.querySelectorAll(".dropzone").forEach(z => z.classList.remove("hovered"));

    // Highlight active dropzone
    if (dropzone) {
      dropzone.classList.add("hovered");
    }
  });

  card.addEventListener("pointerup", e => {
    if (!isDragging) return;
    isDragging = false;
    card.releasePointerCapture(e.pointerId);

    // See if dropped on a dropzone
    const elementUnder = document.elementFromPoint(e.clientX, e.clientY);
    const dropzone = elementUnder ? elementUnder.closest(".dropzone") : null;

    if (dropzone) {
      const position = parseInt(dropzone.dataset.position, 10);
      handlePlacement(position);
    } else {
      // Returned / Snap back to hand
      card.classList.remove("dragging");
      card.style.position = "";
      card.style.left = "";
      card.style.top = "";
      card.style.width = "";
      card.style.height = "";
    }
  });
}

function handlePlacement(position) {
  attempts++;

  // Verify if this is chronologically correct spot
  const correct = isCorrectPlacement(current, position);

  if (correct) {
    placed.push(current);
    placed.sort((a, b) => a.year - b.year);
    current = null;
    
    if (placed.length === EVENTS.length) {
      progressEl.textContent = `${placed.length} / ${EVENTS.length} placed`;
      showWin();
    } else {
      nextCard();
    }
  } else {
    errors++;
    showError(position);
  }
}

function isCorrectPlacement(ev, position) {
  // Check chronologically:
  // - If position > 0, the event before must have a lower year
  // - If position < placed.length, the event after must have a larger year
  if (position > 0) {
    const beforeEvent = placed[position - 1];
    if (ev.year < beforeEvent.year) return false;
  }
  if (position < placed.length) {
    const afterEvent = placed[position];
    if (ev.year > afterEvent.year) return false;
  }
  return true;
}

function showError(position) {
  let msg = `"${current.title}" (${current.displayYear}) does not belong there! `;
  
  // Provide helpful feedback on where it actually fits
  if (position > 0) {
    const beforeEvent = placed[position - 1];
    if (current.year < beforeEvent.year) {
      msg += `It happened BEFORE "${beforeEvent.title}" (${beforeEvent.displayYear}).`;
    }
  }
  if (position < placed.length && msg === `"${current.title}" (${current.displayYear}) does not belong there! `) {
    const afterEvent = placed[position];
    if (current.year > afterEvent.year) {
      msg += `It happened AFTER "${afterEvent.title}" (${afterEvent.displayYear}).`;
    }
  }
  
  if (msg === `"${current.title}" (${current.displayYear}) does not belong there! `) {
    msg += `Find its correct chronological order on the timeline.`;
  }

  errorMsg.textContent = msg;
  errorModal.classList.remove("hidden");

  // Put card back on deck
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
