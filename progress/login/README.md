# Log in and the Chess.com code check (2026-10-03)

## What happened to Robert's code GM-GU8W2U

- GM Bet read Chess.com correctly. The code never reached the profile: Chess.com's API and its
  uncached member page both still showed `rrozenv`'s Location as `GM-7A5E8A`, the code from his
  first sign-in at 07:50 UTC.
- Chess.com is not caching it. `/pub/player/rrozenv` sends `Cache-Control: public, max-age=5`, an
  ETag and a Last-Modified that Cloudflare refreshes on every revalidation. This morning his first
  code was found 57 seconds after it was issued.
- Our bug: because his Location already held that older GM code, the first check, 3 seconds after
  the new code appeared, said "We couldn't find the code" before he could paste. He backed out
  22 seconds later. He started 5 codes in 5 minutes, because every Back or reload made a new code,
  so any code he had pasted earlier was already stale.

## Fixed

- "Wrong code" now means a GM code we never issued to that account. A code left from an earlier
  check keeps the screen on "Watching your profile".
- One code per browser: every window, reload and Back shows the same code, and a sign-in in one
  window signs the others in.
- Signing in on a second browser or device leaves the first signed in (it always did; now tested).
- Plainer copy ("Paste this code into Location on your Chess.com profile, then press Save."), the
  button opens chess.com/settings/profile, and "Still looking. Did you press Save?" after 45 s.

## Files

- `chess-location-clip-phone.mp4`, `chess-location-clip-desktop.mp4`: the inline clip. It is an
  illustration of Chess.com's settings page, not a screen recording (no screen-recording access on
  the Mac worker).
- `code-screen-phone.mp4`, `code-screen-desktop.mp4`: the code screen with the clip playing.
- `*.png`: the live screens after the deploy.
