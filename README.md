# History Flashcard Timeline Game

A simple browser game where you place 10 historic events onto a timeline in the correct chronological order. If you get a year or position wrong, an error pops up and the card goes back to your hand to try again. When all 10 are placed, you get your stats (attempts, accuracy, time).

## How to play

1. You are dealt 10 historic-event flashcards in random order.
2. The highlighted card is the one you must place now.
3. Type the year you think the event happened, and pick the position on the timeline where it belongs (a "Place here" row sits before each placed card and at the top/bottom).
4. If both the year and the position are correct, the card locks into the timeline.
5. If either is wrong, an error dialog pops up and the card returns to your hand so you can retry.
6. Once all 10 cards are placed, you see your stats: total attempts, wrong guesses, accuracy, and completion time.
7. Click "Play again" to start a new game.

## Run locally

Just open `index.html` in any modern browser. No build step, no dependencies.

## Deploy (free, GitHub Pages)

1. Push the `main` branch to your GitHub repo.
2. On GitHub go to **Settings → Pages**.
3. Under **Build and deployment → Source**, pick **Deploy from a branch**.
4. Pick **`main`** branch and **`/ (root)`** folder, then **Save**.
5. Wait ~1 minute. Your game will be live at:
   `https://<your-username>.github.io/historyflashcardgame/`

## Files

- `index.html` — page structure
- `styles.css` — styling
- `script.js` — game logic and the 10 events

## Tech

Plain HTML / CSS / JS. No frameworks, no server, no dependencies. Works fully static on any free static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
