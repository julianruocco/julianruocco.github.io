# Julian Ruocco Portfolio

Static HTML/CSS/JS portfolio site styled after [zemichaelgebeyehu.com](https://www.zemichaelgebeyehu.com/).

## Project structure

```
julianruocco-portfolio/
├── index.html          About Me (hero carousel, bio, education, skills, experience)
├── projects.html       Project cards with thumbnails
├── research.html       Research write-ups with feature images
├── coursework.html     Coursework list
├── contact.html        Contact info and form
├── css/styles.css      All styles
├── js/
│   ├── images.js       ★ Central image path config — edit here
│   └── main.js         Carousel, mobile nav, image loading
├── assets/
│   ├── images/         ★ Your photos go here (see assets/images/README.md)
│   └── Julian-Ruocco-Resume.pdf
└── README.md
```

## Local preview

Open `index.html` in a browser, or run a local server:

```powershell
cd C:\Users\julia\julianruocco-portfolio
python -m http.server 8080
```

Then visit http://localhost:8080

## Adding your images

1. Read **[assets/images/README.md](assets/images/README.md)** for folder layout.
2. Edit paths in **[js/images.js](js/images.js)** if needed.
3. HTML comments marked `<!-- ADD YOUR IMAGE HERE: ... -->` show every image slot.

## Deploy to GitHub Pages (replace julianruocco.com)

Your domain `julianruocco.com` currently resolves to GitHub Pages (`185.199.x.x`).

### Option A — User/organization site (recommended for julianruocco.com)

1. Create a GitHub repo named **`julianruocco.github.io`** (must match your GitHub username).
2. Push this project to the repo:

```powershell
cd C:\Users\julia\julianruocco-portfolio
git add .
git commit -m "Launch new portfolio site"
git remote add origin https://github.com/YOUR_USERNAME/julianruocco.github.io.git
git push -u origin master
```

3. In GitHub → **Settings → Pages**, set source to `master` branch, root `/`.
4. In GitHub → **Settings → Pages → Custom domain**, enter `julianruocco.com`.
5. At your domain registrar, set DNS:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or `CNAME` for `www` → `YOUR_USERNAME.github.io`
6. Enable **Enforce HTTPS** once DNS propagates.

### Option B — Project site on existing repo

If you already have a repo connected to julianruocco.com:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/EXISTING_REPO.git
git push -u origin master
```

Ensure GitHub Pages is enabled for that repo's root or `/docs` folder.

### Resume PDF

Place your latest resume at:

```
assets/Julian-Ruocco-Resume.pdf
```

The RESUME button on the homepage links to this file.

## Customization checklist

- [ ] Add hero carousel photos to `assets/images/hero/`
- [ ] Add project thumbnails to `assets/images/projects/`
- [ ] Add research photos to `assets/images/research/`
- [ ] (Optional) Add org logos to `assets/images/logos/`
- [ ] Update LinkedIn/GitHub URLs in all HTML footers if needed
- [ ] Copy latest resume PDF to `assets/Julian-Ruocco-Resume.pdf`
- [ ] Push to GitHub and verify custom domain
