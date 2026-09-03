# Toolbox 50

Static site + one Cloudflare Pages Function (`/api/healthz`).

This repo is already the **built** output — `index.html`, `/assets`,
`/functions` all sit at the project root. There is no source code and no
build step, so Cloudflare should not run a build command.

## Deploying via Cloudflare Pages (Git integration)

1. Push this repo to GitHub (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repo.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
5. Deploy. Pages will automatically pick up `functions/api/healthz.js` as a
   Pages Function — no extra config needed for that part.

`wrangler.toml` in this repo sets `pages_build_output_dir = "."` so the same
settings apply if you ever deploy via the CLI instead:

```
npx wrangler pages deploy .
```
