# Hello World (Google Apps Script)

A minimal Apps Script web app scaffold. Serves `src/index.html` via `doGet()` in `src/main.gs` using the V8 runtime.

## Project Layout
- `src/main.gs`: Server-side Apps Script code (`doGet`, helpers).
- `src/index.html`: Simple UI served by the web app.
- `src/appsscript.json`: Manifest (V8, web app settings).
- `.github/pull_request_template.md`: PR checklist.
- `docs/Feature001-TODO.md`: Task checklist for Feature001.

## Setup (clasp)
1. Install: `npm i -g @google/clasp`
2. Login: `clasp login`
3. Create a new Apps Script project bound to this repo:
   - `clasp create --title "Hello World (GAS)" --type webapp --rootDir ./src`
   - This generates `.clasp.json` pointing to the new script and uses `src/` as the root.
4. If you already have a script, bind instead:
   - `clasp clone <SCRIPT_ID> --rootDir ./src`

## Develop
- Edit files under `src/`. Keep functions small and testable.
- Push changes to Apps Script: `clasp push`
- Pull remote edits (overwrites local): `clasp pull`

## Deploy (Web App)
- First deploy: `clasp deploy -d "initial"`
- Update an existing deployment:
  - List: `clasp deployments`
  - Redeploy: `clasp deploy -i <deploymentId> -d "update"`
- Get the web app URL from the deployment output (or Apps Script editor > Deployments).

## Notes
- Access in `appsscript.json` is set to `ANYONE`. Change to `ANYONE_WITH_GOOGLE_ACCOUNT` if needed.
- Use Conventional Commits (e.g., `feat(web): add widget`).
- Open PRs against `main` and use the provided template.

