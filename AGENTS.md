# Repository Guidelines

## Project Structure & Module Organization
- `src/`: Application code (modules, services, CLI). Keep modules small and single‑purpose.
- `tests/`: Unit/integration tests mirroring `src/` layout.
- `scripts/`: Developer utilities (setup, lint, release).
- `assets/` or `public/`: Static files bundled or served as‑is.
- `infra/`: IaC or deployment configs (e.g., Terraform, Cloud Build).
- `docs/`: Additional documentation and architecture notes.

## Build, Test, and Development Commands
- Build: `make build` if a Makefile exists; otherwise use the project toolchain (e.g., `npm run build`, `go build ./...`).
- Test: `make test`, `npm test`, `pnpm test`, or `python -m pytest` depending on stack.
- Lint/Format: `make lint`, `npm run lint && npm run format`, or `ruff check && ruff format` (Python).
- Run locally: `make run`, `npm run dev`, `python main.py`, or `go run ./...`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for JS/TS; 4 spaces for Python; Go uses `gofmt` defaults.
- Formatting: Prefer automated tools (Prettier, Black, gofmt). Do not hand‑edit formatted files.
- Linting: Use ESLint (JS/TS), ruff/flake8 (Python), golangci‑lint (Go). Fix or suppress with justification.
- Naming: `camelCase` for variables/functions, `PascalCase` for types/classes, `SCREAMING_SNAKE_CASE` for constants. Filenames: `kebab-case` or `snake_case` consistently.

## Testing Guidelines
- Frameworks: Jest/Vitest (JS/TS), Pytest (Python), `go test` (Go).
- Structure: Mirror `src/`. Examples: `__tests__/*.test.ts`, `tests/test_*.py`, `*_test.go`.
- Coverage: Target ≥80% lines on new/changed code. Add tests for bugs before fixing.
- Run: `npm test -- --watch`, `pytest -q`, or `go test ./... -v`.

## Commit & Pull Request Guidelines
- Commits: Imperative mood, concise subject (≤72 chars). Prefer Conventional Commits (e.g., `feat(auth): add token refresh`).
- Scope changes narrowly; one logical change per commit.
- PRs: Provide context, screenshots for UI, and reproduction steps for bugs. Link issues (`Closes #123`). Ensure CI is green and add/adjust tests and docs.

## Security & Configuration Tips
- Never commit secrets. Use environment variables or secret managers. Add sensitive files to `.gitignore`.
- For GCP deployments, favor Application Default Credentials and parameterize project/region. Keep cloud resources under `infra/` and review changes.

