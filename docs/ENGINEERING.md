# Engineering

Checked: 2026-09-22.

## Files

| Path | Owns |
| --- | --- |
| `index.html` | All markup, the meta and share tags, and a small inline script that fills facts and the pointer spotlight. |
| `style.css` | Page layout, tokens, buttons, and every section except the product demos. |
| `assets/products.css` | The AuntCore and Journal Rounds demos, ported from their product sites. |
| `assets/products.js` | Builds the AuntCore fan, its particle stream, and the question card. Drives the Journal Rounds pointer spotlight. |
| `assets/cv-data.js` | Facts: name, headline, bio, interests, links, and the full CV sections. |
| `assets/og-source.html` | Source for `assets/og-image.jpg`, the 1200×630 share image. It renders the real AuntCore fan and a Journal Rounds screenshot. |
| `robots.txt`, `sitemap.xml` | Let search engines crawl the page and find it. Update `lastmod` in the sitemap after meaningful changes. |
| `assets/fonts/` | DM Sans and Libre Baskerville, copied from the Journal Rounds landing page. |

Product demo sources, for future ports:

- AuntCore: `/Users/Abdullah/Projects/auntcore/frontend/src/features/auth/` (`LandingHero.jsx`, `LandingFanStream.jsx`, `landingFanData.js`, `landingFan.css`).
- Journal Rounds: `/Users/Abdullah/Projects/Nebula/apps/landing-page/index.html` and its `assets/`.

## Rules

- **No build step.** Edit the files directly. No framework, bundler, or package manager.
- **Works without JavaScript.** `index.html` carries fallback text for every fact that the script fills from `cv-data.js`. Keep the two in sync.
- **Real assets only.** Use code and images from the product repos, never screenshots of their websites.
- **Motion respects the visitor.** Every animation stops under `prefers-reduced-motion: reduce`. The AuntCore fan opens without animating.
- **No sideways scroll** at any width from 360 px up. Grid columns use `minmax(0, …)` so long content cannot widen them.
- **Page weight.** No fixed budget, by owner decision. Keep images as compressed JPEG and add nothing heavy without reason.
- **Privacy.** No email address in any public file. No trackers or third-party scripts beyond Google Fonts.

## Content

To change a fact, edit `assets/cv-data.js`, then update the same text in `index.html`. Fields the page uses: `name`, `headline`, `bio`, `interests`, `x`, and `linkedin`. Product copy, Previously, Publications, and Education are written directly in `index.html`.

After changing the headline, statement, or products, regenerate the share image from the project root:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --force-prefers-reduced-motion --virtual-time-budget=6000 --window-size=1200,630 --screenshot="$PWD/assets/og.png" "file://$PWD/assets/og-source.html"
sips -s format jpeg -s formatOptions 88 assets/og.png --out assets/og-image.jpg && rm assets/og.png
```

Social sites cache share images by URL. When the image changes a lot, save it under a new filename and update the four image tags in `index.html`, so X and LinkedIn fetch the new one.

## Search and sharing

- `<title>` and the meta description name him, his role, and both products. Keep the description under about 160 characters.
- His name is the page's only `<h1>`. The large statement is a styled paragraph.
- A JSON-LD `Person` block in `index.html` lists his role, affiliation, schools, interests, X and LinkedIn profiles, and both products. Keep it in step with `assets/cv-data.js`.
- Open Graph and Twitter tags use absolute URLs and a 1200×630 JPEG. `rel="me"` links tie the page to his X and LinkedIn.
- To refresh a LinkedIn preview after a change, paste the URL into LinkedIn's Post Inspector.

## Hosting

- Repository: https://github.com/Abdullahnorain/abdullahnorain.github.io, public, labeled "Personal Website".
- GitHub Pages publishes branch `main`, folder `/`. `.nojekyll` makes Pages serve the files as they are.
- The repository name must stay `abdullahnorain.github.io` to keep the site at the root address.
- Pushing to `main` publishes within about a minute. Check the build with `gh api repos/Abdullahnorain/abdullahnorain.github.io/pages/builds/latest`.
- Share tags use absolute URLs to `https://abdullahnorain.github.io/`. X and LinkedIn need absolute URLs to show the image.
- Commits use the GitHub noreply email so no personal address is published.

Adding a custom domain later:

1. Add the domain under the repository's Pages settings. This commits a `CNAME` file.
2. Point DNS at GitHub Pages: an `ALIAS`/`ANAME` record, or the four `A` records GitHub lists, starting 185.199.108.153.
3. Replace `https://abdullahnorain.github.io/` in `index.html` with the new domain.

Limits that apply (GitHub, checked 2026-09-22): the published site may be up to 1 GB, bandwidth has a soft limit of 100 GB per month, and Pages may not host commercial transactions. Sources: [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Maintenance

When a change alters a rule here or in the design system, update that document in the same commit.
