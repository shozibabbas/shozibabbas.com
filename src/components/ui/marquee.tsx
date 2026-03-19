export default function Marquee({ items }: { items: string[] }) {
  if (!items.length) {
    return null
  }

  return (
    <div className="marquee-fade w-full overflow-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap py-8 pr-8 sm:py-10">
        {items.map((item) => (
          <span key={`a-${item}`} className="text-2xl sm:text-3xl lg:text-4xl">
            {item}
          </span>
        ))}
        {items.map((item) => (
          <span key={`b-${item}`} className="text-2xl sm:text-3xl lg:text-4xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
