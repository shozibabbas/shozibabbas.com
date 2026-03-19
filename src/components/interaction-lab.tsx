"use client"

import FrameworkCombobox from "@/components/examples/combobox"
import DatePickerDemo from "@/components/examples/date-picker"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Info, Settings2, Sparkles } from "lucide-react"
import * as React from "react"

type InteractionLabProps = {
  compact?: boolean
}

const executionTracks = [
  { area: "Architecture", confidence: 92, owner: "Engineering" },
  { area: "Delivery", confidence: 89, owner: "Product + Engineering" },
  { area: "Operations", confidence: 84, owner: "Platform" },
]

export default function InteractionLab({ compact = false }: InteractionLabProps) {
  const [deliveryConfidence, setDeliveryConfidence] = React.useState<number[]>([78])

  return (
    <Card className="bg-secondary-background">
      <CardHeader className="border-b border-border">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Component system in action</Badge>
          <Badge variant="neutral">Composable primitives</Badge>
          <Badge variant="neutral">Interaction-first UI</Badge>
        </div>
        <CardTitle className="text-2xl sm:text-3xl">Engagement Console</CardTitle>
        <CardDescription className="max-w-3xl">
          A practical interaction surface built from your component library.
          This section demonstrates how the primitives can be composed for real
          product workflows.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <Tabs defaultValue="planning">
          <TabsList className="grid h-auto w-full grid-cols-3 gap-2">
            <TabsTrigger value="planning">Planning</TabsTrigger>
            <TabsTrigger value="execution">Execution</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent className="space-y-6" value="planning">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="initiative-name">Program Name</Label>
                  <Input id="initiative-name" placeholder="AI Platform Modernization" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="initiative-notes">Execution Brief</Label>
                  <Textarea
                    id="initiative-notes"
                    placeholder="Outline business target, technical constraints, and release strategy."
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Primary Priority</Label>
                    <Select defaultValue="velocity">
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="velocity">Velocity</SelectItem>
                        <SelectItem value="reliability">Reliability</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Technology Surface</Label>
                    <FrameworkCombobox />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Delivery Confidence</Label>
                  <Slider
                    max={100}
                    min={0}
                    onValueChange={setDeliveryConfidence}
                    value={deliveryConfidence}
                  />
                  <Progress value={deliveryConfidence[0]} />
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-3">
                  <Label>Preferred Working Model</Label>
                  <RadioGroup defaultValue="hybrid">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="model-onsite" value="onsite" />
                      <Label htmlFor="model-onsite">On-site alignment sessions</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="model-hybrid" value="hybrid" />
                      <Label htmlFor="model-hybrid">Hybrid operating rhythm</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="model-remote" value="remote" />
                      <Label htmlFor="model-remote">Remote-first execution</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3 rounded-base border-2 border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <Label htmlFor="status-switch">Enable weekly status updates</Label>
                    <Switch defaultChecked id="status-switch" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked id="risk-check" />
                    <Label htmlFor="risk-check">Track risk log in delivery board</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="ai-check" />
                    <Label htmlFor="ai-check">Enable AI-assisted review queue</Label>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <DatePickerDemo />
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full" variant="neutral">
                        <Info />
                        Scope hint
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      Use scope definitions that tie technical milestones
                      directly to product outcomes and measurable KPIs.
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent className="space-y-6" value="execution">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Track</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Confidence</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {executionTracks.map((row) => {
                      return (
                        <TableRow key={row.area}>
                          <TableCell className="font-heading">{row.area}</TableCell>
                          <TableCell>{row.owner}</TableCell>
                          <TableCell>{row.confidence}%</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>

              <ScrollArea className="h-56 rounded-base border-2 border-border bg-background p-4">
                <div className="space-y-4 text-sm sm:text-base">
                  <p className="font-heading">Execution Notes</p>
                  <p>
                    Architecture decisions should be recorded alongside release
                    constraints and ownership boundaries.
                  </p>
                  <p>
                    Maintain a shared delivery rhythm: weekly planning,
                    dependency checks, and explicit acceptance criteria.
                  </p>
                  <p>
                    Use progressive rollout gates and automated checks to reduce
                    production risk while preserving shipping speed.
                  </p>
                  <p>
                    Align observability signals with business outcomes so teams
                    can prioritize effectively after launch.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent className="space-y-6" value="tools">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 rounded-base border-2 border-border bg-background p-4">
                <Label>Secure Access Code</Label>
                <InputOTP maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                <div className="flex flex-wrap gap-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="neutral">
                        <Settings2 />
                        Quick Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuLabel>Workflow</DropdownMenuLabel>
                      <DropdownMenuItem>Create Architecture Note</DropdownMenuItem>
                      <DropdownMenuItem>Open Delivery Board</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Export Brief</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="reverse">Critical Decision</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Lock technical scope?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This simulates a high-impact approval gate before the
                          release plan is finalized.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Revisit</AlertDialogCancel>
                        <AlertDialogAction>Approve</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <div className="space-y-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="w-full" variant="neutral">
                      <Sparkles />
                      Open Delivery Drawer
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Delivery Sync Note</DrawerTitle>
                      <DrawerDescription>
                        Use this as a compact planning surface during weekly
                        execution reviews.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 pb-2">
                      <Textarea placeholder="Capture blockers, dependencies, and rollout notes." />
                    </div>
                    <DrawerFooter>
                      <Button>Save Note</Button>
                      <DrawerClose asChild>
                        <Button variant="neutral">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {!compact && (
          <p className="mt-6 text-sm text-foreground/90">
            This section intentionally uses a broad component mix so future
            feature work can reuse proven building blocks instead of introducing
            one-off UI patterns.
          </p>
        )}
      </CardContent>
    </Card>
  )
}