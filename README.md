# Portfolio

A personal portfolio website that shows my skills, experience and achievements, projects, education, and interests. It is plain HTML, CSS, and JavaScript, so it needs no build step and can be hosted for free on GitHub Pages.

## Editing the content

All of the text lives in **`content.js`**. Open it and replace the placeholders with your own details. If you remove every item from a section (for example `projects: []`), that section and its menu link are hidden.

- **Photo:** add an image such as `assets/photo.jpg` and set `photo: "assets/photo.jpg"`.
- **Résumé:** add `assets/resume.pdf` and set `resumeUrl: "assets/resume.pdf"`. This shows a download button.

## Previewing locally

Open `index.html` in a browser, or run a small local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing on GitHub Pages (free)

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*, then choose `main` and `/ (root)`.
3. After a minute or so, the site is live at `https://<your-username>.github.io/Portfolio/`. Put this link on your résumé.

To use a shorter address, rename the repository to `<your-username>.github.io`, or connect a custom domain in the same Pages settings.
