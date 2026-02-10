import { useEffect, useRef, useState, useCallback } from 'react'
import Hls from 'hls.js'

const HLS_URL =
  'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'
const MP4_FALLBACK = '/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1'

export function useHlsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlaying = useCallback(() => {
    setIsPlaying(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.addEventListener('playing', handlePlaying)

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      })

      hls.loadSource(HLS_URL)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          video.src = MP4_FALLBACK
          video.load()
          video.play().catch(() => {})
        }
      })

      return () => {
        video.removeEventListener('playing', handlePlaying)
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_URL
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {})
      })
    } else {
      video.src = MP4_FALLBACK
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {})
      })
    }

    return () => {
      video.removeEventListener('playing', handlePlaying)
    }
  }, [handlePlaying])

  return { videoRef, isPlaying }
}
