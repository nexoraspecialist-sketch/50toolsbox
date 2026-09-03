// Cloudflare Pages Function
// Converted from artifacts/api-server/src/routes/health.ts (Express route) —
// same behavior, same response shape, no content changed.

export async function onRequestGet() {
  const data = { status: "ok" };
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
