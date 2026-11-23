# Landscape · Snow

Runs the exact registered ThreeUI `LandscapeScene` with `variant="snow"` using the configured package imports. The destination folder was empty, so this project supplies a minimal React/Vite application.

```sh
npm install
npm run dev
```

`npm run build` regenerates the scene, checks all five SHA-256 hashes, typechecks, and creates the production output in `dist/`. `npm run preview` serves that output.

The local package at `packages/threeui` only re-exports the unchanged registered component and stylesheet. All five registered files retain their original paths and bytes. `public/landscape.html` is reproduced by the registered generator from the canonical `Towers.html`; it contains Three.js r149, shaders, textures, and audio inline. The scene is served locally in the authored sandboxed iframe.

Source: https://threeui.com/source-code/landscape.json

The shared stylesheet's Fragment Mono font is retained at `src/shaders/fonts/fragment-mono.woff2`, downloaded from the asset URL in ThreeUI's published stylesheet: `https://threeui.com/assets/fragment-mono-DI4ZVuWr.woff2`.

Requested source revision: `e8aab488464bcd44471c390cf309597c6f3adb05`. The bundle is archived at `vendor/landscape.source.json`; its hashes match the requested files, including generated output. The live `/landscape.html` had a different hash when retrieved, so it is not used.

The scene preserves drag to orbit, hover parallax, wheel/pinch zoom, double-click/double-tap reset, and the original keyboard controls. Focus the scene to use `C` to reset the camera, `T` to cycle time, and `W` to cycle weather.

Production verification passed typechecking, all five source hashes, and 13 Chromium browser checks: local iframe configuration and r149; animated snowfall and accumulating snow; hover, drag, wheel, and reset; keyboard time/weather controls; blizzard density, flake size, and fog; tablet/portrait/landscape sizing; and real touch drag, pinch, and double-tap. No page errors, console errors, failed requests, or HTTP errors occurred. Screenshots and the browser report are in the local ignored `artifacts/` folder.

Source behavior retained: narrow portrait views expose the finite terrain mesh's lower edge. The authored audio startup can also produce the browser's autoplay warning before a user gesture. Neither changes the required source hashes.
