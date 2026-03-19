import SKILLS from '@/data/skills'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading sm:text-3xl">Skills</h2>
        <p className="mt-2 text-sm sm:text-base">
          Technologies I have used across product delivery, platform
          architecture, and operations.
        </p>
      </div>

      <TooltipProvider>
        <div className="grid gap-6 lg:grid-cols-3">
          {SKILLS.map((item) => {
            return (
              <Card className="bg-secondary-background" key={item.field}>
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-xl">{item.field}</CardTitle>
                    <Badge variant="neutral">{item.skills.length} tools</Badge>
                  </div>
                  <CardDescription>
                    A practical working set used in real product and platform
                    delivery.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3 pt-6">
                  {item.skills.map((skill) => {
                    const Icon = skill.icon

                    return (
                      <Tooltip key={skill.skill}>
                        <TooltipTrigger asChild>
                          <div className="border-border rounded-base bg-background flex items-center gap-3 border-2 p-3">
                            <Icon className="h-6 w-6" title="" />
                            <span className="text-sm font-heading capitalize">
                              {skill.skill}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>{skill.skill}</TooltipContent>
                      </Tooltip>
                    )
                  })}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </TooltipProvider>
    </section>
  )
}
