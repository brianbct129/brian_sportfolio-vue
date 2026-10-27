const CACHE_NAME = 'portfolio-images-v1'
const memory = new Map()

const canUseCacheApi = () => typeof caches !== 'undefined'

/**
 * Resolve a remote image URL via Cache API (persistent across reloads)
 * + in-memory blob URL map for the current session.
 * Falls back to the original URL when CORS / Cache API is unavailable.
 */
export async function resolveCachedImage(url) {
  if (!url) return ''
  if (memory.has(url)) return memory.get(url)

  if (canUseCacheApi()) {
    try {
      const cache = await caches.open(CACHE_NAME)
      let response = await cache.match(url)
      if (!response) {
        response = await fetch(url, { mode: 'cors', credentials: 'omit', cache: 'force-cache' })
        if (response.ok) {
          await cache.put(url, response.clone())
        } else {
          memory.set(url, url)
          return url
        }
      }
      const blob = await response.blob()
      if (!blob.type.startsWith('image/') && blob.size === 0) {
        memory.set(url, url)
        return url
      }
      const objectUrl = URL.createObjectURL(blob)
      memory.set(url, objectUrl)
      return objectUrl
    } catch {
      // CORS / opaque / offline — warm HTTP cache best-effort
    }
  }

  warmImage(url)
  memory.set(url, url)
  return url
}

/** Fire-and-forget HTTP / decode warm for session */
export function warmImage(url) {
  if (!url || typeof Image === 'undefined') return
  const img = new Image()
  img.decoding = 'async'
  img.src = url
}

export async function resolveCachedImages(urls) {
  const unique = [...new Set((urls || []).filter(Boolean))]
  const entries = await Promise.all(
    unique.map(async (url) => [url, await resolveCachedImage(url)])
  )
  return Object.fromEntries(entries)
}
