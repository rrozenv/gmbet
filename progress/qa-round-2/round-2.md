---
cursor:
  subagentId: "bc-4c121e5d-ffff-5d19-9c0a-d4da0689a4a6"
---

# GM Bet QA round 2

**Verdict: NOT READY.** Blockers: 0. Majors: 3. Minors: 8. All three round 1 majors are fixed. The three changes that were still landing (status-bar seam, distinct avatars, Chess.com code check and sign-in) are all in and pass. What is left is three small, visible defects in the two-player loop. None loses money or data. Fix M1 to M3 and this is READY for tonight's demo.

**Tested:** live site https://rrozenv.github.io/gmbet/ (asset `index-D2ssHOkS.js`, built from `origin/main` `846a108`, which includes `334b495` seam fix, `8fc1042` avatar seed and `846a108` login fixes) and a private local stack built from the same commit (Chess.com replay server, API on 8877, `vite preview` on 4174, none of the ports 4173, 8787, 8788).
**Viewports:** phone 390×844 (safe areas 47/34) and 375×667 (safe areas 20/0), both iOS Safari UA with touch and `tap()`; desktop 1280×900 and 1440×900.
**Public artifact commit:** see the last line of this file.

## Round 1 majors: re-verified

| Round 1 major | Result | Evidence |
| --- | --- | --- |
| 1. Stale "Locking your stake…" sheet after rematch accept | **Fixed** at all 4 viewports. After Accept the sheet and scrim are gone (0 sheets, 0 scrims), the app goes to the waiting screen, and the row is tappable. | `loop-p390` step 17, `F2-rematch-accept-sheet-p390.png` is the sheet before accept |
| 2. New desktop share opened as a 480 px centered sheet with green Copy link | **Fixed.** At 1280 and 1440 a new share opens as the 360 px popover anchored to the new Live row, 24 px edge spacing. Copy link is green (now the intended commit style). Phone gets the full-width bottom sheet. | `R1-share-popover-d1280.png`, `R1-share-popover-d1440.png`, `R1-share-sheet-p390.png` |
| 3. QR popover cut off at 1280×900 | **Fixed.** With Show QR code expanded, the popover bottom stays at least 24 px inside the viewport at 1280 and 1440, and Copy link and Cancel challenge are fully visible. One side effect: see m5. | `R1-share-popover-qr-d1280.png` |

## The three landing changes

| Change | Result |
| --- | --- |
| Status-bar colour seam on Home | **OK.** `body` and `<meta theme-color>` are `#121E2C` on live. The `.field` pseudo-elements fade the ink base to that colour across the top and bottom safe areas. I sampled the pixel columns at the top band, the first row under the status bar and the home-indicator band at 390 and 375: no step in colour. A real iOS Safari status-bar tint cannot be measured from emulation, so this stays something Robert should glance at on his phone. `L1-home-status-bar-p390.png` |
| Distinct avatars per friend | **OK.** Gallery states `home`, `opponents`, `won`, `lost`, `draw` give different friends different pieces (king, rook, bishop, pawn, queen). The same person gets the same piece in every row, so Live and Opponents rows match. In the local loop the friends hikaru, oleksandr_bortnyk and alexrustemov each get their own. |
| Chess.com code check and sign-in fix | **OK.** See the sign-up and login section. |

## Findings

### Major

**M1. The challenger's share sheet stays open after the friend accepts, and Cancel challenge does nothing.**
- Route: signed-in Home `#/` with the Send your challenge sheet (phone) or popover (desktop) open. Seen at 390, 375, 1280, 1440.
- Expected: when the friend accepts, the sheet or popover closes (or turns into an "Accepted" state) and the row moves to Waiting. A challenge that has been accepted can no longer be cancelled, so the Cancel link must not be there.
- Seen: the sheet still shows "Send your challenge", the link and "Copy link" / "Cancel challenge" 6 s and 15 s after the friend accepted, and through settlement. The Live row behind it already says "Accepted · play within 72 h". Tapping Cancel challenge at 390 does nothing (sheet and row unchanged). Tapping the dimmed area outside the sheet (or Escape) closes it, which is the only way out.
- Repro: A = hikaru signs in, Home, Invite someone new, choose Bullet 1+0. B opens the link, Accept (sign-up or signed in). On A's device wait 6 s. Tap Cancel challenge: nothing happens.
- Fix: while the share sheet is open, poll or subscribe to the bet. On `active`, close the sheet and route to the bet's waiting screen (`#/b/<id>`). Hide or disable Cancel challenge unless the bet is still `pending`.
- Screenshots: `F1-stale-share-sheet-p390.png`, `F1-stale-share-sheet-d1440.png`

**M2. The rematch accept sheet does not use the committed-money pattern.**
- Route: Home `#/`, tap the "Wants to play you" row (incoming rematch / direct challenge). Seen at 390 (and same code at 375, 1280, 1440).
- Expected (newly live: green commit buttons in sheets; SPEC section 7: phone primary full width): "Accept · lock $21" is the green positive button (`rgb(69,212,139)`) at full sheet width, with "Decline" as a quiet text link below. Money appears once.
- Seen: "Accept · lock $21" is Bone (`rgb(245,243,239)`), 211 px wide (not full width), with "Decline" as a second bordered button beside it. The sheet also states the money three ways: "Stake $20 · $1 fee · Win $40" plus the button's "lock $21".
- Repro: after a settled game the loser taps Rematch. On the other player's Home, tap the Wants to play you row.
- Fix: reuse the invite-accept pattern (`.k-btn.positive`, full width, quiet Decline row) and drop either the "Win $40" fact or the "lock $21" label.
- Screenshot: `F2-rematch-accept-sheet-p390.png`

**M3. A logged-out `#/b/<id>` link is a dead end.**
- Route: `#/b/<bet-id>` in a browser with no session. Seen at 390, 375, 1280, 1440.
- Expected: "Log in to see this game." has a Log in action (primary) that goes to `#/login`, then returns to the bet.
- Seen: the only actions are the primary "Start a new challenge" and "Try a demo". There is no way to log in from that screen, so a returning player who taps a bet link from a message (or opens it in a fresh browser) cannot reach their game without guessing `#/login`.
- Repro: open `https://rrozenv.github.io/gmbet/#/b/00000000-0000-0000-0000-000000000000` in a private window.
- Fix: make "Log in" the primary and "Start a new challenge" the quiet link, and send the player back to the same bet after login.
- Screenshots: `F3-logged-out-bet-link-p390.png`, `F3-logged-out-bet-link-d1440.png`

### Minor

**m1. Money is shown twice on Home after a game.** Route `#/`, 390 (also 375 and desktop) after a win, loss or draw. Expected: one amount per screen. Seen: the Live row and the Opponents row for the same person both show the result (+$19 / −$21 / −$1 fee). The gallery states `won`, `lost` and `draw` do the same. Fix: show the amount on the Live row only, and keep the head-to-head record on the Opponents row. `F4-home-money-twice-and-casing-p390.png`

**m2. The same person appears in two casings on one screen.** Route `#/` and the result screens. Seen: "Oleksandr_Bortnyk" next to "oleksandr_bortnyk", "Hikaru" next to "hikaru"; the post-login title reads "You're in, Oleksandr_Bortnyk." Expected: one display name per person, in the casing Chess.com shows. Fix: use one formatter for display names everywhere (same screenshot as m1).

**m3. Demo beat 4 title does not match the SPEC.** Route `#/demo`, beat 4, all viewports. Expected "You won $19." Seen "You won the pot." Fix: copy only. `F6-demo-beat4-p390.png`

**m4. The ambient background ignores reduced motion.** Route: any page, with `prefers-reduced-motion: reduce`. Expected: nothing moves. Seen: the `drift-a/b/c` glow animations keep running because the reduced-motion rule only covers `.field i`. The particle knight on the landing also keeps moving under reduced motion. Fix: extend the media query to the drift animations and the knight. `F7-reduced-motion-ambient-drift.png` (difference image between two frames 2 s apart with reduced motion on)

**m5. The popover jumps about 204 px up when Show QR code is toggled.** Route `#/` at 1280 and 1440, popover open, tap Show QR code. Expected: it grows in place, or at least moves smoothly. Seen: it re-anchors and jumps up in one frame. Not cut off any more (round 1 major 3 is fixed), but it looks glitchy. `R1-share-popover-qr-d1280.png` against `R1-share-popover-d1280.png`

**m6. Reloading in the middle of an invite sign-up drops the player back on the invite's Accept screen.** Route `#/c/<code>` after Accept, username, Yes, with the code screen showing, then pull to refresh. Expected: the code screen again (the app already keeps one code per username per browser, and retyping the username does show the same code). Seen: back on the invite with Accept, no code, the typed username lost. Low harm because the code is kept, but a friend who refreshes while switching to Chess.com has to start the three steps again. `S3-reload-mid-signup-p390.png`

**m7. On desktop the code screen shifts when it flips from waiting to "We couldn't find the code."** Route `#/c/<code>` or `#/login`, 1280 and 1440. The inline primary moves from y=637 to y=576 (61 px) because the status line goes away. Expected: the primary stays put. `S1-signup-code-d1440.png`, `S2-signup-wrong-code-d1440.png`

**m8. The landing's rivalry card stat is right-aligned.** Route `#/` logged out, 390 and 1440. Decorative card inside the landing, so it is outside the SPEC section 7 text rule, but it is the one right-aligned text block I found. `L2-landing-p390.png`

## Sign-up and login (tested last)

Local stack (real link and verify through the replay profile) at all four viewports, plus live read-only checks at 390 and 1440 (`S7`, `S8`).

- **Invite sign-up:** Accept, username, Yes that's me, code screen: the code card (`GM-XXXXXX`, mono, Copy), "Watching your profile for the code", the drawn Chess.com steps (Settings, Profile, paste into Location, Save) and the pinned primary "Open Chess.com settings". Phone: primary full width (342 px at 390, 327 px at 375), pinned, the steps graphic ends above it (0 px overlap, including 375×667). Desktop: primary inline, 277 px wide, left-aligned column. Text is left-aligned everywhere. `S1-*`
- **Wrong code:** a different GM code in Location turns the card Ember and the title becomes "We couldn't find the code." with "Check again" (200 px on desktop) and "Get a new code". It appeared within one 3.5 s poll. `S2-*`
- **Right code:** it signs in by itself, no button, and lands on "You're on." (the friend's accepted bet). Balance and bet are correct.
- **One code per browser:** a second window of the same browser and the same username shows the same code at all 4 viewports. A new browser gets a new code.
- **Expiry:** with a 15 s code lifetime the screen changes to "This code expired." with "Get a new code". `S6-code-expired-p390.png`
- **Returning login:** `#/login`, username, Yes, code, signs in to Home. `S4-login-code-p390.png`
- **Unknown username:** "No Chess.com account has that username" under the field, red border, Continue stays. Same on live. `S5-*`, `S8-*`
- **Live:** `#/login` shows the code screen for a real Chess.com username with the same layout. I did not paste a code into a real profile.

## SPEC section 7 compliance

Checked on every route at all 4 viewports (login, dead link, demo four beats, bet-dead, unknown route, the full state gallery, and every screen of the loop) with measured geometry, not by eye alone:

- Text is left-aligned: pass everywhere (the one right-aligned block is m8).
- Phone primary pinned bottom, full width: pass (342 px at 390, 327 px at 375, bottom gap equals safe area plus quiet row). Exception: the rematch sheet, M2.
- Desktop primary inline, hugging its label, at least 200 px: pass (200 to 277 px).
- Title position (88 px from the top on phone, 120 px on desktop): pass on all Task and List screens in the gallery and loop. Titles measure y=135 at 390 (88 + 47 px safe area), y=108 at 375 (88 + 20), y=120 at 1280 and 1440. Moment screens lead with the visual, as the SPEC says, so their title sits lower.
- Five templates Hero / Task / List / Moment / Sheet: every screen maps to one; none new.
- Copy limits: no wall of text. The longest line is the code step's instruction.
- Money once per screen: pass except m1 (Home after a game) and M2 (rematch sheet).
- Fee 5%: pass. With the real create sheet, $5, $10, $20, $50 give "Winner gets $10 · $0.25 fee", "$20 · $0.50", "$40 · $1", "$100 · $2.50", on one line at 390 and 375, win or draw.
- Loading states: Home shows skeleton rows under a slow API; the code screen shows "Getting your code".

## Two-player loop (private stack)

Challenge, share link, friend signs up, accept, waiting, settle, rematch, draw. Passes at 390, 375, 1280, 1440 except M1, M2.
- Money: each side locks $21 (stake $20 plus $1 fee). Win: the winner nets +$19, the loser −$21. Draw: each gets $20 back and the $1 fee stays charged. Balances matched what the screens said at every step.
- Rematch: loser taps Rematch, other side gets the Wants to play you row, Accept goes to waiting with no stale overlay (round 1 major 1 stays fixed).
- Home no longer shows the demo link when signed in; the open links are de-duplicated; the pinned CTA has a scrim behind it; the top bar sits below the status bar with full bleed.

## Landing v3

Smooth scroll at about 60 fps at 390 and 1440. The knight moves, the Foresight cards, rivalry and fair play sections render without overlap, no horizontal overflow at 375. Only m4 (reduced motion) and m8.

## Informational

- The result subtitles ("You lead Oleksandr_Bortnyk 14–2–5.") come from the Chess.com replay fixture history, so those numbers are not meaningful in this harness.
- Real iOS Safari status-bar tint is not reproducible in emulation (see the seam row).
- Screenshots are in `round-2/`. They are phone-width files scaled to 780 px wide.
