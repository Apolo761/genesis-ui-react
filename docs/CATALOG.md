# Cobertura do catálogo de componentes

As 83 entradas do catálogo local estão disponíveis pela API pública do pacote. O pacote inclui os componentes e estilos; não inclui a aplicação ou o frontend do catálogo.

Importe `genesis-ui-react/styles.css` uma vez no projeto e, depois, os elementos desejados de `genesis-ui-react`. As entradas de foundations são tokens ou ícones, não telas.

## FOUNDATIONS (7)

| Entrada da referência | Export React |
| --- | --- |
| Colors & themes | `colors`, `foundations` |
| Typography | `typography` |
| Spacing & radius | `spacing`, `foundations` |
| Motion tokens | `motionTokens` |
| Icons | `Icon` |
| Animated Icons | `AnimatedIcon` |
| Brand Icons | `BrandIcon` |

## INPUTS (14)

| Entrada da referência | Export React |
| --- | --- |
| Button | `Button` |
| Button Group | `ButtonGroup`, `SegmentedControl` |
| Flux Button | `FluxButton` |
| Icon Button | `IconButton` |
| Text Field | `TextField` |
| Textarea | `TextArea` |
| Search Field | `SearchField` |
| Number Field | `NumberField` |
| Checkbox Group | `CheckboxGroup` |
| Radio Group | `RadioGroup` |
| Switch | `Switch` |
| Slider | `Slider` |
| Duration Picker | `DurationPicker` |
| Delete Button | `DeleteButton` |

## SELECTION (6)

| Entrada da referência | Export React |
| --- | --- |
| Dropdown | `Dropdown` |
| Combobox | `Combobox` |
| Autocomplete | `Autocomplete` |
| Multi Select | `MultiSelect` |
| Account Picker | `AccountPicker` |
| Tag Picker | `TagPicker` |

## AUTOMATION (10)

| Entrada da referência | Export React |
| --- | --- |
| Quantity Picker | `QuantityPicker` |
| Schedule Picker | `SchedulePicker` |
| Interval Picker | `IntervalPicker` |
| Weekday Picker | `WeekdayPicker` |
| Timezone Picker | `TimezonePicker` |
| Date Picker | `DatePicker` |
| Date Range Picker | `DateRangePicker` |
| Active Window Picker | `ActiveWindowPicker` |
| Recurrence Picker | `RecurrencePicker` |
| Publication Rules | `PublicationRules` |

## NAVIGATION (7)

| Entrada da referência | Export React |
| --- | --- |
| Hook Sidebar | `HookSidebar` |
| Gooey Nav | `GooeyNav` |
| Icon Bar | `IconBar` |
| Tabs | `TabList`, `Tab` |
| Breadcrumbs | `Breadcrumbs` |
| Pagination | `Pagination` |
| Command Menu | `CommandMenu` |

## OVERLAYS (7)

| Entrada da referência | Export React |
| --- | --- |
| Popover | `Popover` |
| Tooltip | `Tooltip` |
| Dialog | `Dialog` |
| Settings Dialog | `SettingsDialog` |
| Alert Dialog | `AlertDialog` |
| Drawer | `Drawer` |
| Context Menu | `ContextMenu` |

## FEEDBACK (7)

| Entrada da referência | Export React |
| --- | --- |
| Toast | `Toast` |
| Inline Alert | `InlineAlert` |
| Status Badge | `StatusBadge` |
| Progress | `ProgressBar` |
| Skeleton | `Skeleton` |
| Empty State | `EmptyState` |
| Error State | `ErrorState` |

## LAYOUT (5)

| Entrada da referência | Export React |
| --- | --- |
| Card | `Card` |
| Panel | `Panel` |
| Accordion | `Accordion` |
| Divider | `Divider` |
| Toolbar | `Toolbar` |

## DATA DISPLAY (7)

| Entrada da referência | Export React |
| --- | --- |
| Data Table | `DataTable` |
| Data List | `DataList` |
| Avatar | `Avatar` |
| Avatar Group | `AvatarGroup` |
| Key Value | `KeyValue` |
| Activity Timeline | `ActivityTimeline` |
| Animated Counter | `AnimatedCounter` |

## MEDIA (6)

| Entrada da referência | Export React |
| --- | --- |
| File Upload | `FileUpload` |
| Media Preview | `MediaPreview` |
| Carousel Preview | `CarouselPreview` |
| Video Controls | `VideoControls` |
| Asset Picker | `AssetPicker` |
| Folder | `Folder` |

## AI KIT (7)

| Entrada da referência | Export React |
| --- | --- |
| Grid Reveal | `GridReveal` |
| Generation Status | `GenerationStatus` |
| Prompt Input | `PromptInput` |
| Agent Presence | `AgentPresence` |
| Social Agents | `SocialAgents`, `SocialAgentAvatar` |
| Streaming Text | `StreamingText` |
| Generation Queue | `GenerationQueue` |

## Contratos de dados

- `DatePicker` recebe uma data `YYYY-MM-DD`; `DateRangePicker` recebe `{ start, end }` nesse formato.
- `DurationPicker` e `IntervalPicker` recebem duração em minutos. `SchedulePicker` recebe horários `HH:MM`.
- `WeekdayPicker` usa os dias de `0` (domingo) a `6` (sábado).
- Seleção e automação usam `value` e `onChange`; o estado pertence ao projeto consumidor.
- Componentes que vieram apenas como demonstrações no catálogo foram implementados como adaptadores React com os tokens do design system. O mapa também é mantido em [`catalog-map.json`](catalog-map.json) e conferido antes de cada publicação.
