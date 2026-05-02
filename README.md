# Breathwork Timer PWA

A small Progressive Web App for experimenting with breathwork patterns.

## Features

- Custom inhale / hold / exhale / hold timing
- Full-screen preset pattern menu
- Large full-screen countdown during a session
- Spoken countdown using the browser Speech Synthesis API
- Mute button for speech and chimes
- Duration timer
- Completed breath counter
- One soft beep every minute, two soft beeps every 5 minutes
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

Speech synthesis and audio chimes may start only after pressing Start because mobile browsers often require a user gesture before audio can play.
