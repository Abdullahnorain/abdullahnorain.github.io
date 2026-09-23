# Project

Checked: 2026-09-22.

## What it is

A one-page personal site for Abdullah A. Norain, MD, a diagnostic radiology resident and healthtech builder. Its first job is to send visitors to what he is building, AuntCore and Journal Rounds, in one tap. Its second job is to tell them briefly who he is. It is not a CV.

Audience: physicians, residents, collaborators, and people who find him on X or LinkedIn.

## Page structure

The order below is a decision by the owner. Keep it.

1. **Header and statement.** Name, the headline "Diagnostic radiology resident and healthtech builder.", X and LinkedIn buttons, and the line "I read scans by day and build software for physicians by night."
2. **About.** A short bio and an Interests list.
3. **Now building.** AuntCore (web app) and Journal Rounds (iOS app). Each has a live demo ported from the product's own site, a description of what he built, and a button to the product.
4. **Previously.** PeerCapsule, then Wellow.
5. **Publications and abstracts.** Peer-reviewed papers, a collapsible list of conference abstracts, and a button to PubMed.
6. **Education and training.** A path from the BS to the current residency and fellowship.
7. **Footer.** Name, year, X and LinkedIn.

## Content decisions

- **Voice.** Product descriptions describe what he built ("A web app I built for…"). They are not marketing copy addressed to the app's users.
- **Excluded on purpose:** email address, the neuroradiology fellowship institution, large stat numbers, a photo, and the CME course. The neuroradiology fellowship joins Education when it starts.
- **PubMed link** searches "Abdullah Norain", which returns only his papers. A bare "Norain A" author search also returns other people.
- **Facts** come from `assets/cv-data.js`, which also keeps his full CV sections for reference. The page does not render the CV.

## Scope

- **Existing:** the single page, live product demos, share previews, and favicons.
- **Unnecessary:** accounts, payments, forms, analytics, a CMS, and a build step.
- **Deferred:** a custom domain. When one is chosen, see [ENGINEERING.md](ENGINEERING.md#hosting).

## Stack

HTML, CSS, and vanilla JavaScript. Fonts: Instrument Serif and Geist from Google Fonts, plus self-hosted DM Sans and Libre Baskerville from Journal Rounds. Hosting: GitHub Pages from `main`.

## Terms

- **AuntCore:** his web app that turns radiology case books into a question bank. https://auntcore.com
- **Journal Rounds:** his iOS app for following medical journals. https://journalrounds.app
- **Product demo:** the live fan, stream, and question for AuntCore, or the floating phones and journal carousel for Journal Rounds.
