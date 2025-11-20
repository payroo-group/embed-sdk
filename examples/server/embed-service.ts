const payrooApiKey = process.env.PAYROO_API_KEY || "supersecretkey";
const payrooApiUrl =
  process.env.PAYROO_API_URL || "http://localhost:5700/api/embed";

export type EmbedSession = {
  id: string;
  org: string;
  createdAt: string;
  expiresAt: string;
};

export type EmbedURL = {
  url: string;
  expiresAt: string;
};

export interface CreateEmbedSessionRequest {
  account: {
    id: string;
    name: string;
  };
  user: {
    id?: string;
    name: string;
    email: string;
  };
  allowOrigin?: string;
}

export async function createEmbedSession(
  params: CreateEmbedSessionRequest,
): Promise<EmbedSession> {
  const response = await fetch(`${payrooApiUrl}/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": payrooApiKey,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(`Failed to create embed session: ${response.statusText}`);
  }

  const data = await response.json();
  return data as EmbedSession;
}

export async function createEmbedUrl(
  sessionId: string,
  component: string,
  params?: Record<string, any>,
): Promise<EmbedURL> {
  const response = await fetch(`${payrooApiUrl}/create-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": payrooApiKey,
    },
    body: JSON.stringify({ sessionId, component, params }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create embed URL: ${response.statusText}`);
  }

  const data = await response.json();
  return data as EmbedURL;
}
