# AGENTS.md

Personal Website for Abdullah A. Norain, MD. One static page, no framework, no build step, published by GitHub Pages at https://abdullahnorain.github.io/.

Read before working:

- What the site is, its sections, and decisions: [docs/PROJECT.md](docs/PROJECT.md)
- Code rules, hosting, and how to edit: [docs/ENGINEERING.md](docs/ENGINEERING.md)
- Colors, type, buttons, layout, and motion: [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)
- Checks before publishing: [testing/README.md](testing/README.md)

Task triggers:

- **Changing a fact** (bio, headline, interests, links): edit `assets/cv-data.js` and the matching fallback text in `index.html`. See [ENGINEERING.md](docs/ENGINEERING.md#content).
- **Adding or restyling a section**: follow [DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md). Ask the owner before adding cards, boxes, stats, or new colors; he has rejected those looks.
- **Before pushing to `main`**: run the checklist in [testing/README.md](testing/README.md). Pushing publishes.
- **Comprehensive review or review-and-fix**: load the `codebase-review` skill (installed in `~/.codex/skills/codebase-review`) and apply it against these docs.

Keep changes proportionate. This is a personal page; ask before adding tooling, frameworks, or process.
