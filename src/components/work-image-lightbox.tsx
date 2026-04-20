'use client'

import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type WorkImageLightboxProps = {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  loading?: 'lazy' | 'eager'
  previewHeightClass?: string
  className?: string
}

export default function WorkImageLightbox({
  src,
  alt,
  width,
  height,
  priority = false,
  loading = 'lazy',
  previewHeightClass = 'h-56 sm:h-64',
  className = '',
}: WorkImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-xl ${className}`}
          aria-label={`Open ${alt} in lightbox`}
        >
          <div className={`relative w-full overflow-hidden ${previewHeightClass}`}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              priority={priority}
              loading={priority ? undefined : loading}
            />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[min(96vw,1200px)] border border-foreground/10 bg-background p-2 sm:p-3">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative h-[82vh] w-full overflow-auto rounded-lg bg-secondary-background">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full"
            priority={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
