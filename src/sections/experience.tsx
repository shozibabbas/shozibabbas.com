import PAST_ROLES from '@/data/experience'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading sm:text-3xl">Experience</h2>
        <p className="mt-2 text-sm sm:text-base">
          Product-system chapters across enterprise software, AI, healthcare,
          and distributed systems.
        </p>
      </div>

      <Accordion className="space-y-4" collapsible type="single">
        {PAST_ROLES.map((role) => {
          return (
            <AccordionItem key={`${role.company}-${role.role}`} value={`${role.company}-${role.role}`}>
              <AccordionTrigger>
                <div>
                  <div className="text-lg sm:text-xl">
                    {role.role} @ {role.company}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="neutral">{role.startDate}</Badge>
                    <Badge variant="neutral">{role.endDate}</Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-sm sm:text-base">
                  <p>{role.description}</p>
                  <ul className="list-disc space-y-2 pl-5">
                    {role.highlights.map((highlight) => {
                      return <li key={highlight}>{highlight}</li>
                    })}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}
