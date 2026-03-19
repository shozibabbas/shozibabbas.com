import { cn } from "@/lib/utils"

type Props = {
  imageUrl: string
  caption: string
  alt?: string
  className?: string
}

export default function ImageCard({
  imageUrl,
  caption,
  alt = caption,
  className,
}: Props) {
  return (
    <figure
      className={cn(
        "w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className,
      )}
    >
      <img className="aspect-4/3 w-full" src={imageUrl} alt={alt} />
      <figcaption className="border-t-2 text-main-foreground border-border p-4">
        {caption}
      </figcaption>
    </figure>
  )
}
