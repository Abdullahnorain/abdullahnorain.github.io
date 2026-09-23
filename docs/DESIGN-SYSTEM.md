# Design system

Checked: 2026-09-22. Tokens live at the top of `style.css`. Product demo styles live in `assets/products.css`.

## Principles

- **Flat and editorial.** Content sits directly on the page. No cards, frosted glass, or boxed sections: the owner rejected those as busy.
- **One surface.** The Journal Rounds paper color with its drifting grid sits fixed behind the whole page. A purple spotlight reveals the grid under the pointer.
- **Products speak in their own brand.** AuntCore keeps its books, cyan, and monospace. Journal Rounds keeps its purple, serif accent, and lime button.
- **Separation is a hairline rule.** Each product opens with a thin full-width line carrying its logo, name, and type.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#f8f5fa` | Page paper, from Journal Rounds |
| `--ink` | `#111014` | Text, button edges |
| `--mute` | `#5f5d68` | Secondary text |
| `--hair` | `rgba(17,16,20,.1)` | Dividers |
| `--purple` | `#6c00c1` | Journal Rounds accent, the page spotlight |
| `--acid` | `#d9ff2f` | Journal Rounds button fill |
| AuntCore cyan | `hsl(180 65% 52%)`, edge `#04363b` | AuntCore button |

The page is light in every color scheme. Dark mode is not supported, by decision.

## Type

| Role | Face | Where |
| --- | --- | --- |
| Statement, section labels, entry names | Instrument Serif | Hero line, italic section labels, PeerCapsule, Wellow, education |
| Body and interface | Geist | Everything else |
| AuntCore demo | System monospace, Libre Baskerville | Inside the AuntCore row only |
| Journal Rounds demo | DM Sans, Libre Baskerville | Inside the Journal Rounds row only |

Sentence case throughout. No all-caps labels, except AuntCore's own wordmark and headline.

## Buttons

Every clickable is the Journal Rounds key: a pill with a 2 px ink edge that lifts on hover, presses on click, and shows a light sweep.

| Class | Size | Use |
| --- | --- | --- |
| `.btn--lg` | 44 px tall, 26 px side padding, 14 px text | Product buttons and "View on PubMed". Matches the Journal Rounds landing CTA. |
| `.btn--sm` | 36 px tall | X, LinkedIn, press links |
| `.btn--acid` | Lime fill, Apple icon | Journal Rounds "Get it on the App Store" |
| `.btn--cyan` | Cyan fill, "A" mark | AuntCore "Open AuntCore" |
| plain `.btn` | White fill | Secondary links |

Static labels, such as Interests, are soft pills (`.chip`), never buttons.

## Layout

- Content width 1200 px, with 16 px side gutters on phones and 40 px from 900 px up.
- **Product rows:** text on one side, vertically centered, with the demo on the other. AuntCore puts its demo on the right, Journal Rounds on the left. Below 900 px the text stacks above the demo.
- **Journal Rounds phones** overlap, with the chat screen in front.
- **Lists** (Publications) run full width with year, title, and authors, with his name in bold.
- **Education** is a horizontal path of dots on desktop and a vertical line on phones. Filled dots mark current roles.

## Motion

- Allowed: the grid drift and spotlight, the AuntCore fan unfolding when scrolled into view with its particle stream, the Journal Rounds phone float and journal carousel, button hover and press, and the abstracts toggle sliding open.
- Everything above stops or becomes instant under `prefers-reduced-motion: reduce`.
- No scroll-triggered fade-ins on sections.

## Accessibility

- Visible focus ring on every link and button (purple outline, or a colored ring on buttons).
- A skip link to Now building.
- Decorative demos are `aria-hidden` where they carry no information. Images have alt text.
- Tap targets at least 36 px, and 44 px for primary actions.
