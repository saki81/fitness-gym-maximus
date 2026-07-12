export function getImageUrl(path: string) {
  const endpoint = process.env.IMAGEKIT_URL_ENDPOINT;
  if (!endpoint) throw new Error("Missing ImageKit endpoint in .env");

  const cleanEndpoint = endpoint.endsWith('/') ? endpoint.slice(0, -1) : endpoint;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${cleanEndpoint}/${cleanPath}`;
}
