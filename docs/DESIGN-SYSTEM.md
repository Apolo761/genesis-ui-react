# Design system Genesis UI

Este documento descreve como a interface Genesis organiza foundations, componentes e comportamento. É uma referência de design e UX para quem usa a biblioteca em projetos React; não é uma aplicação ou um site de demonstração.

## Organização

| Camada | Responsabilidade | Fonte neste repositório |
| --- | --- | --- |
| Foundations | Papéis semânticos de cor, fontes, escalas, geometria e movimento | `foundations.config.mjs`, `src/foundations.json`, `src/foundations.css` |
| Elementos | Controles, navegação, feedback, dados e mídia com aparência e interação próprias | `src/`, exportações em `src/index.ts` |
| Estilo compartilhado | CSS dos componentes e escopo dos temas | `src/styles.css`, `vendor/reference.css` |
| Composição de produto | Layout de página, conteúdo, dados, rotas e ações reais | Projeto React que consome a biblioteca |

Os tokens `--g-*` são a interface visual entre as camadas. O pacote também fornece o JSON em `genesis-ui-react/tokens` e as foundations isoladas em `genesis-ui-react/foundations.css`. A aplicação importa `genesis-ui-react/styles.css` uma vez para obter os componentes completos.

## Temas e cores globais

O tema escuro é o padrão. A classe `light` no elemento `html` ativa o tema claro; componentes e menus em portal acompanham a mudança. Os nomes descrevem a função da cor e devem ser usados no lugar de valores hexadecimais locais.

| Papel | Token | Claro | Escuro | Uso |
| --- | --- | --- | --- | --- |
| Página | `--g-page` | `#fff` | `#000` | Fundo principal |
| Palco | `--g-stage` | `#fafafa` | `#111` | Área de conteúdo ou demonstração |
| Superfície | `--g-surface` | `#f4f4f9` | `#262626` | Campos e cartões |
| Rebaixo | `--g-recess` | `#e7e7ef` | `#1b1b1b` | Seleção e profundidade |
| Texto | `--g-ink` | `#222` | `#efeff1` | Conteúdo principal |
| Secundário | `--g-secondary` | `#85858c` | `#77777f` | Informação de apoio |
| Glifo | `--g-glyph` | `#868593` | `#9b9aa7` | Ícones e controles discretos |
| Linha | `--g-line` | `#ededed` | `#242424` | Bordas e divisórias |
| Flutuante | `--g-floating` | `#fff` | `#202020` | Menus e overlays |
| Hover | `--g-hover` | `#f1f1f5` | `#262626` | Realce de interação |

O accent da marca é `--g-accent: #d4ff00`. Texto sobre esse fundo usa `--g-on-accent: #141800`. Texto em accent sobre superfícies claras usa `--g-accent-ink: #485700` para manter a leitura. Erro, sucesso, aviso e pontuações têm papéis próprios; não são substituídos pelo accent da marca. As cores base de feedback são danger `#e43d32`, success `#22c55e` e warning `#f2b53b`; os tons de domínio variam por tema em `domainThemes`.

## Tipografia

A família principal é `Arial, sans-serif`. Código e valores monoespaçados usam `ui-monospace, SFMono-Regular, Menlo, monospace`. A família `Inter, system-ui, sans-serif` está preservada apenas para a composição legada da jornada.

| Papel | Tamanho / linha | Peso | Ajuste | Uso |
| --- | --- | --- | --- | --- |
| Display | 30 / 36 px | 500 | tracking −1 px | Títulos de página |
| Title | 20 / 26 px | 500 | tracking −0,4 px | Títulos de seção |
| Body | 14 / 22 px | 400 | padrão | Texto corrente |
| Label | 10 / 14 px | 500 | tracking 0,14 em | Rótulos curtos e categorias |
| Numeric | 13 / 18 px | 400 | algarismos tabulares | Métricas, descrições compactas e dados |

As classes `g-type-display`, `g-type-title`, `g-type-body`, `g-type-label` e `g-type-numeric` aplicam esses papéis. Nomes legados como caption, uiLarge e section apontam para essas cinco escalas; não criam uma escala paralela.

## Espaçamento, forma e tamanho

| Sistema | Valores |
| --- | --- |
| Espaçamento `--g-space-*` | 4, 8, 12, 16, 24, 32 px |
| Raios `--g-radius-*` | 8, 12, 16, 28 px |
| Alturas de densidade | micro 28, compact 38, primary 48 px |
| Altura preservada do controle original | 36 px |
| Ícones | support 14, control 18, emphasis 20 px |
| Foco | contorno de 2 px com afastamento de 3 px |

Alguns componentes mantêm geometria própria da referência: campo com raio de 10 px; switch de 40 × 22 px, thumb de 16 px; controle numérico de 72 px. A escala de densidade não deve redimensionar esses elementos automaticamente.

## Movimento e estados

As durações de referência são quick 150 ms, fast 250 ms, medium 350 ms e slow 400 ms. A curva principal de saída é `cubic-bezier(.22, 1, .36, 1)`. O switch usa mola com stiffness 500 e damping 30. Hover de botão eleva 1 px; estado pressionado usa escala 0,98. Estado desabilitado reduz a opacidade a 0,5, preservando a semântica nativa.

A preferência `prefers-reduced-motion` remove ou encurta deslocamentos e animações. Indicadores de progresso mostram valores reais; quando o valor é desconhecido, `ProgressBar` usa o estado indeterminado. `Skeleton` comunica carregamento de conteúdo, sem inventar porcentagens.

## Uso consistente dos elementos

- **Ações:** `Button` é a ação identificável; `Pressable` serve para superfícies estruturais como cartões e linhas. Em formulários, o envio exige `type="submit"`; fora deles, `Button` é `type="button"` por padrão.
- **Formulários:** `Input`, `TextArea`, `Checkbox`, `Radio`, `Switch` e outros controles preservam nomes, eventos, refs, validação e `FormData`. Campos compostos não devem receber uma segunda borda ou anel de foco do layout consumidor.
- **Seleção:** `Dropdown`, `Select` e `NativeSelect` compartilham a mesma família visual e de teclado. Use rótulos claros e preserve opções desabilitadas, grupos, Escape e retorno do foco.
- **Navegação:** `Sidebar`, `AppSidebar`, `Breadcrumbs`, `TabList` e `Pagination` recebem seleção e navegação reais da aplicação. O pacote não fornece rotas fictícias.
- **Feedback e dados:** `Alert`, `StatusBadge`, `ProgressBar`, `Skeleton` e `DataTable` representam estados reais. Status, seleção, ordenação, vazio e carregamento devem refletir os dados do consumidor.
- **Diálogos:** `DialogSurface` fornece a superfície; a feature controla abertura, fechamento, foco e operação assíncrona.
- **Ícones e marcas:** `Icon` deve ter nome acessível quando comunica uma ação. `AnimatedIcon` respeita movimento reduzido. `BrandIcon` preserva as cores das marcas de terceiros.
- **Mídia:** `Folder` usa `thumbnail` em grades densas e `interactive` em prévias isoladas. `AssetPicker`, `FileUpload` e `MediaPreview` recebem arquivos, estados e callbacks reais.

## Composição de páginas no Genesis

Na aplicação original, Personas, Brasil e Simulações usam o mesmo padrão de cabeçalho e conteúdo. Em desktop de 1280 px, título de página usa Display 30/36/500, descrição usa Numeric 13/18/400 e o recuo do frame é 32 px. Em mobile de 390 px, o recuo é 20 px e o título pode quebrar linha naturalmente. Esse layout pertence à aplicação; a biblioteca fornece os tokens e componentes para reproduzi-lo sem impor rotas ou conteúdo.

## Fontes de verdade e manutenção

`foundations.config.mjs` registra as decisões específicas da Genesis. `src/foundations.json` e `src/foundations.css` contêm os valores publicados do design system. `src/styles.css` agrega os estilos dos componentes. Mudanças de tokens devem manter esses arquivos sincronizados e ser verificadas nos temas claro e escuro, em teclado e em viewport móvel.
