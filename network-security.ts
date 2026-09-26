export function parseHttpsUrl(value: string, errorCode = "HTTPS_URL_INVALID"): URL {
  let url: URL
  try {
    url = new URL(value)
  } catch {
    throw new Error(errorCode)
  }
  if (url.protocol !== "https:" || url.username || url.password) {
    throw new Error(errorCode)
  }
  return url
}

export function isSameOrigin(candidate: string, expectedOrigin: string): boolean {
  try {
    return new URL(candidate).origin === expectedOrigin
  } catch {
    return false
  }
}
