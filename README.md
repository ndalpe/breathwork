# Breathwork Timer PWA v3

A small Progressive Web App for experimenting with breathwork patterns.

## New in v3

- Supports pre-recorded voice clips from `/audio`
- Falls back to browser text-to-speech if a clip is missing
- Full-screen preset pattern menu
- Large full-screen countdown during a session
- Mute button for voice and chimes
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
   - `VOICE-KIT.md`
   - `/audio` folder with your MP3 voice clips
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save.
6. Open the GitHub Pages URL once it finishes deploying.

## Voice clips

See `VOICE-KIT.md`.


## Placeholder audio files

This package includes empty placeholder `.mp3` files in `/audio` so the full expected file structure is present.

Until you replace them with real MP3 recordings, the app will fall back to browser text-to-speech.
