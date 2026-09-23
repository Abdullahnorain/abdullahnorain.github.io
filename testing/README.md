# Testing

There are no automated tests. Before pushing to `main`, which publishes the site, run this checklist.

## Preview locally

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/. In Claude Code, the `cv-preview` entry in `.claude/launch.json` does the same.

## Checklist

1. **Phone and desktop.** Look at the page at 390 px wide and at 1440 px. Nothing overlaps and nothing is cut off.
2. **No sideways scroll** at 360 px. In the browser console, `document.documentElement.scrollWidth` equals `clientWidth`.
3. **Demos run.** The AuntCore fan unfolds when scrolled to, and cyan dots stream into the question. The Journal Rounds carousel drifts.
4. **Reduced motion.** With reduced motion turned on in the system, the fan is already open and nothing drifts.
5. **Links.** Every button opens the right place: AuntCore, the App Store, journalrounds.app, PubMed, X, LinkedIn, the three press articles, and Recapsule.
6. **Keyboard.** Tab through the page. Every control shows a focus ring, and the abstracts toggle opens with Enter.
7. **Console.** No errors in the browser console.
8. **Facts match.** Text filled from `assets/cv-data.js` matches the fallback text in `index.html`.

After pushing, open https://abdullahnorain.github.io/ and repeat checks 1 and 3 on the live site. To check the share preview, paste the link into an X or LinkedIn post draft.
