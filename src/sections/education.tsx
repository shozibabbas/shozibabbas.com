import EDUCATION from '@/data/education'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Education() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading sm:text-3xl">Education</h2>
        <p className="mt-2 text-sm sm:text-base">
          Academic foundation behind the engineering and systems work.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((item) => {
          return (
            <Card className="bg-secondary-background" key={item.degree}>
              <CardHeader className="border-b border-border">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{item.degree}</CardTitle>
                  <Badge variant="neutral">{item.year}</Badge>
                </div>
                <CardDescription>{item.institution}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 text-sm sm:text-base">
                {item.degree.startsWith('MS')
                  ? 'Graduate-level study focused on advancing software engineering depth.'
                  : 'Undergraduate foundation in core computer science and software systems.'}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}