import Image from 'next/image'
import type { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type CaseStudyCardProps = {
  title: string
  subtitle: string
  problem: ReactNode
  solution: ReactNode
  build: ReactNode
  highlightTitle?: string
  highlightContent?: ReactNode
  tech: ReactNode
  outcome: ReactNode
  image: string
  imageGallery?: Array<{
    label: string
    images: string[]
  }>
  imagePosition?: 'left' | 'right'
  imageSize?: 'default' | 'large'
}

export default function CaseStudyCard({
  title,
  subtitle,
  problem,
  solution,
  build,
  highlightTitle,
  highlightContent,
  tech,
  outcome,
  image,
  imageGallery,
  imagePosition = 'right',
  imageSize = 'default',
}: CaseStudyCardProps) {
  const isImageLeft = imagePosition === 'left'
  const imageWidthClass = imageSize === 'large' ? 'max-w-2xl' : 'max-w-xl'
  const hasGallery = Boolean(imageGallery && imageGallery.length > 0)
  const firstGalleryTab = imageGallery?.[0]?.label ?? ''

  return (
    <article className="rounded-2xl border border-foreground/10 bg-secondary-background p-8 shadow-sm sm:p-10">
      <div className="mb-8 space-y-2 sm:mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-main">Case Study</p>
        <h2 className="font-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
        <p className="max-w-3xl text-sm text-foreground/65 sm:text-base">{subtitle}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className={`mx-auto w-full ${imageWidthClass} ${isImageLeft ? 'lg:order-1' : 'lg:order-2'} ${hasGallery ? '' : 'lg:sticky lg:top-28'}`}>
          {hasGallery ? (
            <div className="rounded-xl border border-foreground/10 bg-background p-4 shadow-xl sm:p-5">
              <Tabs defaultValue={firstGalleryTab} className="space-y-4">
                <TabsList className="h-auto w-full justify-start gap-2 overflow-x-auto whitespace-nowrap">
                  {imageGallery?.map((group) => (
                    <TabsTrigger key={group.label} value={group.label} className="px-3 py-1.5 text-xs sm:text-sm">
                      {group.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {imageGallery?.map((group) => (
                  <TabsContent key={group.label} value={group.label} className="mt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      {group.images.map((src, idx) => (
                        <div
                          key={`${group.label}-${idx}`}
                          className="group overflow-hidden rounded-lg border border-foreground/10 bg-secondary-background"
                        >
                          <Image
                            src={src}
                            alt={`${title} ${group.label} screen ${idx + 1}`}
                            width={480}
                            height={960}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          ) : (
            <div className="group overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-xl">
              <Image
                src={image}
                alt={`${title} screenshot`}
                width={1440}
                height={900}
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                priority
              />
            </div>
          )}
        </div>

        <div className={`space-y-8 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Problem</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{problem}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Solution</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{solution}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">What I Built</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{build}</div>
          </section>

          {highlightTitle && highlightContent ? (
            <section className="space-y-3 rounded-xl border border-main/25 bg-main/5 p-5 transition-colors hover:border-main/45">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-main">{highlightTitle}</h3>
              <div className="space-y-3 text-sm leading-relaxed text-foreground/80">{highlightContent}</div>
            </section>
          ) : null}

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Tech Stack</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{tech}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Outcome</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{outcome}</div>
          </section>
        </div>
      </div>
    </article>
  )
}
