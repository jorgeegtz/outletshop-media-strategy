---
name: multi-device-sync
description: Synchronize project files, git commits, Vercel deployment, and session context between the user's Mac mini and Laptop. Use when the user asks to sync, save session, pull latest changes from the other computer, or switch devices.
---

# Multi-Device Sync Skill

Use this skill whenever the user starts working on a device ("actualiza", "pull", "sincroniza") or finishes a session to switch computers ("guarda", "sincroniza", "push").

## 1. Starting on a Device (Pull & Context Check)
1. Run `git pull origin main` to fetch the latest changes from `https://github.com/jorgeegtz/outletshop-media-strategy.git`.
2. Verify `git config user.email` is set to `jorgeegtzhdz@gmail.com` (never `@newform.ai`).
3. Read `AGENTS.md` and recent `git log -n 5` to catch up on what was done on the other machine.

## 2. Finishing on a Device (Commit, Push & Optional Deploy)
1. Update `AGENTS.md` if any URLs, architecture decisions, or pending tasks changed.
2. Stage and commit all changes using author `Jorge Gutierrez <jorgeegtzhdz@gmail.com>`.
3. Push to `origin main` (`https://github.com/jorgeegtz/outletshop-media-strategy.git`).
4. If TypeScript source files (`src/*.ts`) changed, run `npm run build` and deploy `dist/` to Vercel (`vercel deploy --prod --yes dist`).
