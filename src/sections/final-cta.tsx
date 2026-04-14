import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="rounded-2xl bg-main px-8 py-14 text-center sm:px-12 sm:py-16">
      <h2 className="mb-3 font-heading text-3xl text-main-foreground sm:text-4xl">
        Have an idea or need a system built?
      </h2>
      <p className="mb-8 text-base text-main-foreground/80">Let&apos;s turn it into a working product.</p>
      <Button asChild size="lg" variant="neutral">
        <a href="mailto:shozibabbas@gmail.com?subject=Let%27s%20build%20something">
          Book a 15-min Call
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    </section>
  )
}
