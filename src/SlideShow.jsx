import React, { useEffect, useMemo, useState } from 'react'

function useImages() {
  // import all images from the images folder
  // import.meta.globEager was removed/deprecated; use import.meta.glob with eager + as:'url'
  const modules = import.meta.glob('./images/*.{jpg,png,webp,jpeg}', { eager: true, as: 'url' })
  const imgs = Object.values(modules)
  return imgs
}

function SlideShow() {
  const images = useImages()
  const shuffled = useMemo(() => images.sort(() => Math.random() - 0.5), [images])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!shuffled.length) return
    const t = setInterval(() => setIndex(i => (i + 1) % shuffled.length), 3500)
    return () => clearInterval(t)
  }, [shuffled])

  if (!shuffled.length) return null

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl  rounded-lg">
        <img src={shuffled[index]} alt={`slide-${index}`} className="w-full h-64 sm:h-96 object-contain" />
      </div>
    </div>
  )
}

export default SlideShow
