import type { ContactPayload, ContactResponse } from "../types/contact";

const API_BASE = "https://august-mary-backend.onrender.com";

export async function sendContactMessage(
  data: ContactPayload
): Promise<ContactResponse> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error: { message?: string } = await res.json();
    throw new Error(error.message ?? "Failed to send message");
  }

  return (await res.json()) as ContactResponse;
}
