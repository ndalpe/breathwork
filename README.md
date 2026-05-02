# Breathwork Timer PWA

A small Progressive Web App for experimenting with breathwork patterns.

## Features

- Custom inhale / hold / exhale / hold timing
- Common preset patterns with short descriptions
- Large always-visible countdown
- Spoken countdown using the browser Speech Synthesis API
- Mute button
- Offline support through a service worker
- GitHub Pages ready

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `icon.svg`
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save.
6. Open the GitHub Pages URL once it finishes deploying.

## Note

Speech synthesis support varies by browser. On mobile, speech may start only after pressing Start because browsers require a user gesture before audio.
