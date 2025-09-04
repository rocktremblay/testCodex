# Feature001: Task Checklist

- Define scope: Short description and acceptance criteria.
- Implementation
  - [ ] Update `src/main.gs` with feature logic
  - [ ] Add/modify UI in `src/index.html`
  - [ ] Adjust `src/appsscript.json` if permissions/scopes change
- Quality
  - [ ] Add unit tests (if applicable; Apps Script via clasp pull + local test strategy)
  - [ ] Lint/format code
  - [ ] Update docs (README, AGENTS.md)
- Deployment
  - [ ] `clasp push`
  - [ ] `clasp deploy -d "Feature001"` (or update existing deployment)
- Validation
  - [ ] Verify web app URL works
  - [ ] Confirm permissions and error logs (Stackdriver)

> Tip: Use Conventional Commits (e.g., `feat(feature001): ...`).

