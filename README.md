# Demo Mode 4 — Connectly Sign-in Simulation

A fictional, browser-based sign-in interface used for controlled security-awareness and UI demonstrations.

## Safety boundary

- Connectly is fictional and is not affiliated with Facebook, Meta, or a real identity provider.
- The page is a visual-only simulation. It does not authenticate users or connect to an account service.
- Email and password fields are read-only so visitors cannot enter real credentials.
- The JavaScript does not read, store, or transmit credential values. There is no network request, analytics, or external sign-in flow.
- Popup and notification behavior is simulated locally and can be dismissed.
- Do not remove these safeguards, add credential collection, or deploy the page as a real login page.
- Use it only in an explicitly authorized training or demonstration context.

## Run locally

Open `index.html` in a modern browser or serve the folder with a local static server. No build step or backend is required.

## Project files

- `index.html` — fictional sign-in interface and visible safety notice.
- `assets/css/style.css` — responsive presentation.
- `assets/js/app.js` — local-only UI and popup simulation.

