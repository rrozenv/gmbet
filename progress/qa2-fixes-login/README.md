# QA round 2: sign-in fixes (main 2debcd3, live)

- `m3-*`: live. A logged-out `#/b/<id>` link now offers Log in (primary), which opens
  `#/login/b/<id>` and lands on that bet once signed in. "Start a new challenge" is the quiet link.
- `m6-*`: private stack. Accept, username, Yes, code; then a reload comes back to the same code
  (`before-reload` and `after-reload`). Log in and sign-up resume the same way.
- `m7-*`: live gallery. The waiting and wrong-code screens keep a status line and a two-line
  instruction, so the button stays at y=637 on desktop (y=544, pinned, on phone).
- `m2-*`: private stack. Hikaru's Home: the Live row and the Opponents row both say
  "Oleksandr_Bortnyk", the casing Chess.com shows ("alexrustemov" is his own casing).
