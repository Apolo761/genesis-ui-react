# Genesis UI for React

Componentes, ícones e foundations da Genesis UI prontos para projetos React. O pacote inclui a biblioteca e a página interativa de demonstração, sem a aplicação Genesis ou dados de personas. A API cobre as 83 entradas do [catálogo de referência](https://github.com/Apolo761/genesis-ui-react/blob/main/docs/CATALOG.md).

## Instalar

```sh
npm install genesis-ui-react
```

Também é possível instalar diretamente a tag do GitHub com `npm install github:Apolo761/genesis-ui-react#v0.3.0`. O projeto precisa de React e React DOM 18.3. Importe os estilos uma vez, normalmente no arquivo principal da aplicação:

```tsx
import 'genesis-ui-react/styles.css';
```

Depois importe os elementos que quiser:

```tsx
import { Button, Icon, Input } from 'genesis-ui-react';

export function Example() {
  return <form>
    <Input name="name" aria-label="Nome" placeholder="Seu nome" />
    <Button type="submit" variant="primary" leadingIcon={<Icon name="Check" />}>
      Salvar
    </Button>
  </form>;
}
```

O CSS contém o tema, os estilos e o motion dos componentes. Para usar apenas os tokens, importe `genesis-ui-react/foundations.css`; os valores também estão em `genesis-ui-react/tokens`.

## Página de demonstração

Depois de instalar o pacote no projeto, inicie o catálogo interativo com:

```sh
npx genesis-ui-demo
```

Abra o endereço local exibido no terminal. A página traz as demonstrações e interações dos elementos; o servidor usa a porta 5174 por padrão e escolhe a próxima disponível quando ela já estiver ocupada.

## Elementos

| Grupo | Componentes |
| --- | --- |
| Ações e campos | `Button`, `ButtonGroup`, `FluxButton`, `DeleteButton`, `TextField`, `CheckboxGroup`, `RadioGroup`, `DurationPicker` |
| Seleção e automação | `Combobox`, `Autocomplete`, `MultiSelect`, `TagPicker`, `AccountPicker`, `SchedulePicker`, `DatePicker`, `RecurrencePicker` |
| Navegação e overlays | `HookSidebar`, `GooeyNav`, `IconBar`, `CommandMenu`, `Popover`, `Tooltip`, `Drawer`, `ContextMenu` |
| Feedback, layout e dados | `Toast`, `InlineAlert`, `EmptyState`, `ErrorState`, `Card`, `Accordion`, `DataList`, `Avatar`, `ActivityTimeline` |
| Mídia e AI | `CarouselPreview`, `VideoControls`, `GridReveal`, `GenerationStatus`, `PromptInput`, `AgentPresence`, `GenerationQueue` |
| Design | `Icon`, `AnimatedIcon`, `BrandIcon`, `FoundationBoard`, `foundations`, `colors`, `typography`, `spacing`, `motionTokens` |

O [mapa completo do catálogo](https://github.com/Apolo761/genesis-ui-react/blob/main/docs/CATALOG.md) relaciona cada entrada da referência ao export React. O [documento do design system](https://github.com/Apolo761/genesis-ui-react/blob/main/docs/DESIGN-SYSTEM.md) descreve a organização da UI/UX, temas, cores globais, tipografia, escalas, movimento e regras de uso dos elementos. A lista completa das exportações tipadas está em [`src/index.ts`](https://github.com/Apolo761/genesis-ui-react/blob/main/src/index.ts).

## Padrões de uso

`Button` usa `type="button"` por padrão; defina `type="submit"` dentro de formulários. Os campos preservam eventos, refs, validação e `FormData` nativos. `DialogSurface` desenha a superfície, mas a aplicação controla abertura, foco e fechamento. Componentes que mostram dados, como `AssetPicker` e `DataTable`, recebem dados e callbacks da aplicação; nenhum backend é incluído.

```tsx
import { Folder, ProgressBar } from 'genesis-ui-react';

<Folder variant="thumbnail" color="blue" size="sm" />
<ProgressBar value={6} max={10} label="Uploads concluídos" />
```

## Desenvolvimento

```sh
npm ci
npm run build
npm run typecheck
```

O build produz `dist/index.js`, `dist/styles.css`, `dist/foundations.css`, `dist/tokens.json` e declarações TypeScript. Esses arquivos fazem parte do repositório para que a instalação direta pelo GitHub funcione. `npm pack --dry-run` mostra exatamente o que entrará no pacote. Consulte [PUBLICATION.md](https://github.com/Apolo761/genesis-ui-react/blob/main/PUBLICATION.md) antes de criar um release.

## Licença e origem

MIT. Logos de terceiros continuam sujeitos às marcas de seus respectivos titulares; veja [NOTICE.md](https://github.com/Apolo761/genesis-ui-react/blob/main/NOTICE.md).
