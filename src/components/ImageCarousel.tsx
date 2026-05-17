import { useState, useRef } from 'react'
import { PhotoView } from 'react-photo-view'
import type { CaseImage, ImageKind } from '../data/cases'

interface ImageCarouselProps {
  images: CaseImage[]
}

const KIND_LABEL: Record<ImageKind, string> = {
  aerial: '航拍',
  'eye-level': '平视',
  detail: '细节',
}

const KIND_BADGE_CLASS: Record<ImageKind, string> = {
  aerial: 'bg-sky-500/85',
  'eye-level': 'bg-emerald-500/85',
  detail: 'bg-amber-500/85',
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
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-center relative">
            <PhotoView src={img.url}>
              <img
                src={img.url}
                alt={`${KIND_LABEL[img.kind]}图 ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer active:opacity-90 transition-opacity"
                loading="lazy"
              />
            </PhotoView>
            {/* 类型角标 */}
            <span
              className={`absolute top-2 left-2 px-2 py-0.5 text-[11px] leading-4 text-white rounded-full backdrop-blur-sm ${KIND_BADGE_CLASS[img.kind]}`}
            >
              {KIND_LABEL[img.kind]}
            </span>
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
