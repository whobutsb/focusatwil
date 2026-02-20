import { useEffect, useState, useRef, useCallback } from 'react'

function useShuffledImages() {
  const modules = import.meta.glob('./images/*.{jpg,png,webp,jpeg}', { eager: true, as: 'url' })
  const ref = useRef(null)
  if (ref.current === null) {
    const urls = Object.values(modules)
    for (let i = urls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [urls[i], urls[j]] = [urls[j], urls[i]]
    }
    ref.current = urls
  }
  return ref.current
}

function SlideShow() {
  const images = useShuffledImages()
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(null)
  const [showNext, setShowNext] = useState(false)

  useEffect(() => {
    if (!images.length) return
    const t = setInterval(() => {
      setCurrent(prev => {
        const nextIdx = (prev + 1) % images.length
        setNext(nextIdx)
        setShowNext(false)
        return prev
      })
    }, 4000)
    return () => clearInterval(t)
  }, [images.length])

  const onNextLoaded = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowNext(true)
      })
    })
  }, [])

  const onFadeComplete = useCallback((e) => {
    if (e.propertyName !== 'opacity') return
    setNext(prev => {
      if (prev !== null) setCurrent(prev)
      return null
    })
    setShowNext(false)
  }, [])

  if (!images.length) return null

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-amber-500/10 aspect-[4/3] bg-navy-800">
        <img
          src={images[current]}
          alt="A Wil to focus on"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {next !== null && (
          <img
            src={images[next]}
            alt="A Wil to focus on"
            onLoad={onNextLoaded}
            onTransitionEnd={onFadeComplete}
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{
              opacity: showNext ? 1 : 0,
              transition: 'opacity 800ms ease-in-out',
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

export default SlideShow
