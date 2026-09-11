'use client'

'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  const imagekitOrigin = new URL(process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!).origin

  ReactDOM.preconnect(imagekitOrigin, { crossOrigin: 'anonymous' })
  ReactDOM.prefetchDNS(imagekitOrigin)

  return null
}

