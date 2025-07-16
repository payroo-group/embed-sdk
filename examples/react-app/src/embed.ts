export async function getEmbedUrl(component: any, params?: any): Promise<string> {
  const res = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/create-embed-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ component, params }),
    },
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch embed URL for component: ${component}`);
  }
  const data = await res.json();
  return data.url;
}
