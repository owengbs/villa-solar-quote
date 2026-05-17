import { useState, useRef } from 'react'
import { PhotoView } from 'react-photo-view'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollLeft = containerRef.current.scrollLeft
    const width = containerRef.current.offsetWidth
    const newIndex = Math.round(scrollLeft / width)
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar rounded-xl"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-center">
            <PhotoView src={src}>
              <img
                src={src}
                alt={`案例图片 ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer active:opacity-90 transition-opacity"
                loading="lazy"
              />
            </PhotoView>
          </div>
        ))}
      </div>

      {/* 指示器 */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-4'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
