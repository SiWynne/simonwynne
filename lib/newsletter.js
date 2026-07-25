// Kit (formerly ConvertKit) newsletter signup. Uses Kit's public form-action
// endpoint, so the browser posts straight to Kit — no API key and no server of
// our own. Shared by every newsletter form on the site (footer, home CTA, …).
const KIT_FORM_ACTION = "https://app.kit.com/forms/9724952/subscriptions";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_PATTERN.test(String(email || "").trim());
}

export async function subscribeToNewsletter(email) {
  const response = await fetch(KIT_FORM_ACTION, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    // Kit's field is named email_address — the wrong name silently drops it.
    body: JSON.stringify({ email_address: String(email).trim() }),
  });
  if (!response.ok) {
    throw new Error(`Subscribe failed (${response.status})`);
  }
  return response.json().catch(() => ({}));
}
