# UI Style Guide

This document is a working reference for everything inside `src/components`. It is intended to make future prompting and implementation easier by answering three questions quickly:

1. What component files exist?
2. What does each component do?
3. When should each component be used?

## 1. Visual Language

The component system follows a neobrutalist visual style.

- Strong black borders via `border-2 border-border`
- Hard drop shadows via `shadow-shadow`
- Small rounded corners via `rounded-base`
- High-contrast palette driven by CSS variables in `src/app/globals.css`
- Motion is mostly tactile: hover states often shift the element and remove or reverse the shadow

### Core Tokens

- `--main`: primary accent surface
- `--background`: page background
- `--secondary-background`: neutral surface
- `--foreground`: default text
- `--border`: border color
- `--shadow`: hard offset shadow

### Common Styling Patterns

- Most interactive primitives are wrappers around Radix UI components.
- Many components expose `data-slot` attributes for predictable styling hooks.
- `cn()` from `@/lib/utils` is used throughout for class merging.
- `class-variance-authority` is used where a component supports variants.
- `asChild` appears in several primitives to let the caller replace the rendered element while keeping component styles and behavior.

## 2. Directory Map

`src/components` contains three kinds of components:

- App-specific components: site-level pieces used directly by the portfolio
- Example components: demos showing how to compose the UI primitives
- UI primitives: reusable building blocks in `src/components/ui`

## 3. App-Specific Components

These are tailored to the current portfolio site rather than being general-purpose primitives.

| File | Export(s) | Purpose | When to Use |
| --- | --- | --- | --- |
| `src/components/nav.tsx` | default `Nav` | Fixed top navigation bar with route links for Home, About, and Work, plus the theme toggle. | Use for the primary site navigation. |
| `src/components/links.tsx` | default `Links` | Social and contact link list with icon buttons for LinkedIn, GitHub, email, phone, and resume. | Use in hero, footer, or profile/contact sections. |
| `src/components/theme-provider.tsx` | `ThemeProvider` | Thin wrapper around `next-themes` provider. Makes theme state available to the app. | Use once near the root layout. |
| `src/components/theme-switcher.tsx` | `ThemeSwitcher` | Small icon-only toggle that switches between light and dark themes. | Use anywhere the user should be able to change theme. |

## 4. Example Components

These are demo-style components. They are useful as implementation references and can be lifted into real features, but they are not site-specific layout primitives.

| File | Export(s) | Purpose | Composition Notes |
| --- | --- | --- | --- |
| `src/components/examples/combobox.tsx` | default `FrameworkCombobox` | Searchable combobox demo that selects a framework from a list. | Composes `Button`, `Popover`, and `Command`. Good reference for searchable pickers. |
| `src/components/examples/date-picker.tsx` | default `DatePickerDemo` | Date picker demo that opens a calendar in a popover and formats the chosen date. | Composes `Button`, `Popover`, and `Calendar`. Good reference for compact date selection. |
| `src/components/examples/data-table.tsx` | default `DataTableDemo`, `columns`, `Payment` | Full TanStack Table example with sorting, filtering, selection, column visibility, and row actions. | Best reference for any real table feature. Also shows how the table primitive works with menus, inputs, and checkboxes. |

## 5. UI Primitives

These live in `src/components/ui` and form the reusable design system.

### 5.1 Actions and Basic Inputs

| File | Export(s) | Purpose | Notes |
| --- | --- | --- | --- |
| `src/components/ui/button.tsx` | `Button`, `buttonVariants` | Primary action control with shared sizing and variant system. | Variants: `default`, `noShadow`, `neutral`, `reverse`. This is the main clickable control in the system. |
| `src/components/ui/input.tsx` | `Input` | Single-line text input wrapper with system border, shadow, and focus styles. | Use for text, email, search, and similar fields. |
| `src/components/ui/textarea.tsx` | `Textarea` | Multi-line text input with the same visual language as `Input`. | Use for descriptions, notes, or messages. |
| `src/components/ui/label.tsx` | `Label` | Styled form label primitive. | Pair with form controls for accessible labeling. |
| `src/components/ui/checkbox.tsx` | `Checkbox` | Boolean checkbox control with styled checked state. | Use for lists, preferences, and row selection. |
| `src/components/ui/radio-group.tsx` | `RadioGroup`, `RadioGroupItem` | Exclusive-choice input set. | Use when exactly one option should be selected. |
| `src/components/ui/switch.tsx` | `Switch` | Toggle input for on/off settings. | Better than a checkbox when the interaction feels like a setting toggle. |
| `src/components/ui/slider.tsx` | `Slider` | Drag-based numeric range control. | Use for choosing a value on a continuous scale. |
| `src/components/ui/select.tsx` | `Select`, `SelectGroup`, `SelectValue`, `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectItemText`, `SelectItemIndicator`, `SelectScrollUpButton`, `SelectScrollDownButton`, `SelectViewport` | Styled select dropdown built on Radix. | Use when you want a controlled list of options without search. |
| `src/components/ui/input-otp.tsx` | `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator` | One-time-password or multi-slot verification code input. | Use for codes, PIN entry, or segmented short inputs. |
| `src/components/ui/calendar.tsx` | `Calendar` | Standalone date selection widget. | Often used inside `Popover`, `Dialog`, or `Drawer`. |
| `src/components/ui/form.tsx` | `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, `useFormField` | Integration layer for `react-hook-form`. | Use when building validated forms with consistent labels, errors, and descriptions. |

### 5.2 Feedback and Status

| File | Export(s) | Purpose | Notes |
| --- | --- | --- | --- |
| `src/components/ui/alert.tsx` | `Alert`, `AlertTitle`, `AlertDescription` | Inline feedback block for warnings, status, or important messages. | Supports `default` and `destructive` variants. |
| `src/components/ui/badge.tsx` | `Badge`, `badgeVariants` | Small labeled pill for metadata or status. | Supports `default` and `neutral` variants. |
| `src/components/ui/progress.tsx` | `Progress` | Horizontal progress indicator. | Use for load, completion, or step progress. |
| `src/components/ui/skeleton.tsx` | `Skeleton` | Loading placeholder block. | Use while async content is still loading. |
| `src/components/ui/tooltip.tsx` | `TooltipProvider`, `Tooltip`, `TooltipTrigger`, `TooltipContent` | Hover or focus-based helper text system. | Use for compact hints or explaining icon-only actions. |
| `src/components/ui/sonner.tsx` | `Toaster` | Toast notification host with theme awareness. | Mount once near the app root if toast notifications are needed. |

### 5.3 Containers and Layout

| File | Export(s) | Purpose | Notes |
| --- | --- | --- | --- |
| `src/components/ui/card.tsx` | `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `CardContent` | Generic content container with semantic sub-sections. | Default choice for boxed content modules. |
| `src/components/ui/table.tsx` | `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, `TableCaption` | Semantic table building blocks with responsive overflow behavior. | Use with TanStack Table or for simpler static tables. |
| `src/components/ui/accordion.tsx` | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` | Expand/collapse sections where multiple content blocks share vertical space. | Good for FAQs or dense detail lists. |
| `src/components/ui/collapsible.tsx` | `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` | Lightweight show/hide primitive. | Simpler than `Accordion` when only one collapsible region is needed. |
| `src/components/ui/tabs.tsx` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | Tabbed content switching. | Use when several peer views share the same space. |
| `src/components/ui/carousel.tsx` | `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` | Scrollable carousel for images or cards. | Useful for galleries, testimonials, or card sliders. |
| `src/components/ui/scroll-area.tsx` | `ScrollArea`, `ScrollBar` | Styled scroll container. | Use when a region should scroll independently from the page. |
| `src/components/ui/resizable.tsx` | `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle` | Split-pane layout with drag resizing. | Best for dashboards or tool-style layouts. |
| `src/components/ui/aspect-ratio.tsx` | `AspectRatio` | Maintains a fixed ratio for media or embedded content. | Use around images, videos, previews, or cards with fixed proportions. |
| `src/components/ui/sidebar.tsx` | `SidebarProvider`, `Sidebar`, `SidebarTrigger`, `SidebarRail`, `SidebarInset`, `SidebarInput`, `SidebarHeader`, `SidebarFooter`, `SidebarSeparator`, `SidebarContent`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupAction`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarMenuAction`, `SidebarMenuBadge`, `SidebarMenuSkeleton`, `SidebarMenuSub`, `SidebarMenuSubItem`, `SidebarMenuSubButton`, `useSidebar` | Full sidebar system with desktop collapse behavior and mobile sheet fallback. | This is the most complex layout primitive in the folder. Use for application-style navigation, not simple page sections. |
| `src/components/ui/image-card.tsx` | default `ImageCard` | Simple figure component that renders an image with a caption. | Good for work samples, gallery tiles, or visual highlights. |
| `src/components/ui/marquee.tsx` | default `Marquee` | Infinite horizontal scrolling text band. | Use sparingly for playful motion, skill banners, or announcement strips. |
| `src/components/ui/avatar.tsx` | `Avatar`, `AvatarImage`, `AvatarFallback` | Circular identity image with fallback content. | Use for people, profiles, testimonials, or authorship cues. |

### 5.4 Dialogs, Drawers, and Overlay Surfaces

| File | Export(s) | Purpose | Notes |
| --- | --- | --- | --- |
| `src/components/ui/dialog.tsx` | `Dialog`, `DialogTrigger`, `DialogPortal`, `DialogClose`, `DialogOverlay`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription` | General modal dialog. | Use for focused interactions that should interrupt the current flow. |
| `src/components/ui/alert-dialog.tsx` | `AlertDialog`, `AlertDialogTrigger`, `AlertDialogPortal`, `AlertDialogOverlay`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel` | Confirmation dialog for destructive or high-risk actions. | Prefer over plain `Dialog` when the action needs explicit confirmation. |
| `src/components/ui/drawer.tsx` | `Drawer`, `DrawerTrigger`, `DrawerPortal`, `DrawerClose`, `DrawerOverlay`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription` | Slide-up drawer surface, optimized for mobile-style flows. | Use when content should feel lighter or more touch-friendly than a centered dialog. |
| `src/components/ui/sheet.tsx` | `Sheet`, `SheetTrigger`, `SheetPortal`, `SheetClose`, `SheetOverlay`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription` | Side panel overlay. | Use for menus, side details, filters, or compact secondary workflows. |
| `src/components/ui/popover.tsx` | `Popover`, `PopoverTrigger`, `PopoverContent` | Small anchored floating panel. | Use for lightweight interactions connected to a trigger. |
| `src/components/ui/hover-card.tsx` | `HoverCard`, `HoverCardTrigger`, `HoverCardContent` | Hover-triggered preview panel. | Use for profile previews, metadata reveals, or richer tooltips. |

### 5.5 Menus, Commands, and Navigation Helpers

| File | Export(s) | Purpose | Notes |
| --- | --- | --- | --- |
| `src/components/ui/dropdown-menu.tsx` | `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuCheckboxItem`, `DropdownMenuRadioItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuGroup`, `DropdownMenuPortal`, `DropdownMenuSub`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuRadioGroup` | Triggered action menu with support for nested items and selectable states. | Use for compact action lists attached to buttons or table rows. |
| `src/components/ui/context-menu.tsx` | `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem`, `ContextMenuCheckboxItem`, `ContextMenuRadioItem`, `ContextMenuLabel`, `ContextMenuSeparator`, `ContextMenuShortcut`, `ContextMenuGroup`, `ContextMenuPortal`, `ContextMenuSub`, `ContextMenuSubContent`, `ContextMenuSubTrigger`, `ContextMenuRadioGroup` | Right-click or long-press context action menu. | Use when actions should appear relative to an item rather than a visible button. |
| `src/components/ui/command.tsx` | `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandSeparator`, `CommandShortcut` | Command palette and searchable list primitive. | Use for global search, quick actions, or searchable selection interfaces. |
| `src/components/ui/navigation-menu.tsx` | `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuContent`, `NavigationMenuTrigger`, `NavigationMenuLink`, `NavigationMenuViewport`, `NavigationMenuIndicator` | Structured navigation system for richer menus or menu-like content panels. | Use when top-level navigation needs more than a simple row of links. |
| `src/components/ui/menubar.tsx` | `Menubar`, `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarItem`, `MenubarCheckboxItem`, `MenubarRadioItem`, `MenubarLabel`, `MenubarSeparator`, `MenubarShortcut`, `MenubarGroup`, `MenubarPortal`, `MenubarSub`, `MenubarSubContent`, `MenubarSubTrigger`, `MenubarRadioGroup` | Desktop-style application menubar. | Best for tool or app UIs rather than marketing pages. |
| `src/components/ui/breadcrumb.tsx` | `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis` | Hierarchical path navigation. | Use when users need location context inside nested pages. |
| `src/components/ui/pagination.tsx` | `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis` | Reusable pagination controls. | Use for paged lists, archives, or search results. |

### 5.6 Data and Visualization Helpers

| File | Export(s) | Purpose | Notes |
| --- | --- | --- | --- |
| `src/components/ui/chart.tsx` | `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`, `ChartStyle` | Theme-aware wrapper utilities around Recharts. | Use when building charts that should match the design system and theme tokens. |

## 6. Quick Selection Guide

Use this as a practical shortcut when choosing between similar primitives.

| If you need... | Prefer... | Why |
| --- | --- | --- |
| A standard modal | `Dialog` | General-purpose blocking interaction. |
| A destructive confirmation | `AlertDialog` | Built for explicit confirmation flows. |
| A mobile-friendly bottom panel | `Drawer` | More natural for touch-first flows. |
| A side panel | `Sheet` | Best for filters, nav, and contextual details. |
| A small anchored floating surface | `Popover` | Lightweight and attached to the trigger. |
| A hover preview | `HoverCard` | Richer than a tooltip, lighter than a popover. |
| A simple option list | `Select` | Good for controlled, non-searchable choices. |
| A searchable option list | `Command` plus `Popover` | Better than `Select` when filtering matters. |
| A page-level container | `Card` | The default boxed surface in this system. |
| A reusable table shell | `Table` | Base markup for tabular content. |
| A fully interactive data table | `DataTableDemo` patterns | Shows the real TanStack composition. |
| Loading placeholders | `Skeleton` | Matches the rest of the UI styling. |
| Status metadata | `Badge` | Compact, readable label surface. |

## 7. Composition Rules Observed in This Codebase

- Prefer composition over prop-heavy components. Many files export several subcomponents instead of one large API.
- Prefer the UI primitives in `src/components/ui` before creating new one-off markup.
- Use the example components as patterns when implementing more complex widgets like searchable comboboxes, calendars, and data tables.
- Theme awareness is already handled by `ThemeProvider`, `ThemeSwitcher`, and some UI primitives like `Toaster` and chart helpers.
- The visual system expects bold borders, hard shadows, and compact rounded corners. New components should match that unless there is a clear reason not to.

## 8. Summary

At a high level:

- `src/components` mixes portfolio-specific site components with a reusable neobrutalist design system.
- `src/components/ui` is the main implementation layer for future UI work.
- The most important building blocks for everyday work are `Button`, `Card`, `Input`, `Textarea`, `Badge`, `Dialog`, `Popover`, `Sheet`, `Table`, `Form`, and `DropdownMenu`.
- The example components are worth reusing as reference implementations instead of rebuilding those interaction patterns from scratch.