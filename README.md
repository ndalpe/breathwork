# Breathwork Timer PWA v4

## New features

- Burger menu with two levels:
  - Breathing pattern
  - Choose voice
- Voice choices:
  - Heart
  - Velvet
  - Light
- Voice clips are loaded from:
  - `audio/heart`
  - `audio/velvet`
  - `audio/light`
- Selected voice is saved in the browser with `localStorage`.

## Add your generated ElevenLabs MP3 files

Copy your generated MP3 files into:

```text
audio/heart/
audio/velvet/
audio/light/
```

Each voice folder should contain:

```text
inhale.mp3
hold.mp3
exhale.mp3
one.mp3
two.mp3
three.mp3
four.mp3
five.mp3
six.mp3
seven.mp3
eight.mp3
nine.mp3
ten.mp3
eleven.mp3
twelve.mp3
thirteen.mp3
fourteen.mp3
fifteen.mp3
sixteen.mp3
seventeen.mp3
eighteen.mp3
nineteen.mp3
twenty.mp3
twenty-one.mp3
twenty-two.mp3
twenty-three.mp3
twenty-four.mp3
twenty-five.mp3
twenty-six.mp3
twenty-seven.mp3
twenty-eight.mp3
twenty-nine.mp3
thirty.mp3
```

If a clip cannot play, the app falls back to browser text-to-speech.

## GitHub Pages

Upload the project contents to the root of your GitHub Pages repository.
