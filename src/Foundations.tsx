import { forwardRef, useRef, useState } from 'react';
import { animatedIcons, brandIcons } from '../vendor/loader.mjs';
import foundations from './foundations.json';
import { Icon } from './icons';
import { Pressable } from './controls';
import { useUiClass } from './theme';

export { foundations };
export const colors = foundations.themes;
export const typography = foundations.typography;
export const spacing = foundations.spacing;
export const motionTokens = foundations.motion;
export const animatedIconNames = Object.keys(animatedIcons);
export const brandIconNames = brandIcons.map(brand => brand.slug);
export interface AnimatedIconHandle { startAnimation: () => void; stopAnimation: () => void }
export const AnimatedIcon = forwardRef<AnimatedIconHandle, { name: string; size?: number; label?: string }>(function AnimatedIcon({ name, size = foundations.iconSizes.control, label }, ref) {
  const Glyph = animatedIcons[name];
  const className = useUiClass('g-ref g-animated-icon');
  if (!Glyph) throw new Error(`Unknown animated icon: ${name}`);
  return <span className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}><Glyph ref={ref ?? undefined} size={size} /></span>;
});
export function BrandIcon({ name, size = foundations.iconSizes.control, label }: { name: string; size?: number; label?: string }) {
  const brand = brandIcons.find(brand => brand.slug === name || brand.name === name);
  const className = useUiClass('g-ref g-brand-icon');
  if (!brand) throw new Error(`Unknown brand icon: ${name}`);
  return <span className={className} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}><span className="g-brand-glyph" aria-hidden="true"><brand.Icon size={size} /></span></span>;
}
export const foundationSections = [
  { id: 'colors-themes', label: 'Colors & themes' }, { id: 'typography', label: 'Typography' },
  { id: 'spacing-radius', label: 'Spacing & radius' }, { id: 'motion-tokens', label: 'Motion tokens' },
  { id: 'icons', label: 'Icons' }, { id: 'animated-icons', label: 'Animated Icons' }, { id: 'brand-icons', label: 'Brand Icons' },
] as const;
export type FoundationSection = typeof foundationSections[number]['id'];
const swatches = [
  ['Page','page','Fundo principal'], ['Stage','stage','Área de demonstração'], ['Surface','surface','Controles e campos'],
  ['Recess','recess','Seleção e profundidade'], ['Ink','ink','Texto principal'], ['Accent','accent','Confirmação pontual'],
];
const samples = ['Crie em escala','Configurar automação','Uma ideia vira uma semana de conteúdo.','CONTAS DE DESTINO','09:00 · 12 posts'];
const iconExamples = [['Sparkles','Gerar'],['Video','Vídeo'],['Image','Imagem'],['CalendarDays','Agendar'],['Check','Confirmar']];
const milliseconds = (value: string) => value.endsWith('ms') ? value : `${Number.parseFloat(value) * 1000}ms`;
const motionExamples = [
  [milliseconds(foundations.motion['--duration-quick']), 'fechar e trocar texto'],
  [milliseconds(foundations.motion['--duration-fast']), 'abrir e mover seleção'],
  [milliseconds(foundations.motion['--duration-slow']), 'revelar painel'],
  [foundations.motion['--ease-smooth-out'].replace(/^cubic-bezier\(|\)$/g, ''), 'smooth out'],
];

/** The original foundation board markup/CSS, populated by the same tokens that
 * the application consumes. This page is not an iframe or a second runtime. */
export function FoundationBoard({ section }: { section: FoundationSection }) {
  const [revision, replay] = useState(0);
  const [iconSize, setIconSize] = useState(24);
  const [brandSize, setBrandSize] = useState(24);
  const controlled = useRef<AnimatedIconHandle>(null);
  const className = useUiClass('g-ref g-foundation');
  return <div className={className}>
    {section === 'colors-themes' && <div className="foundation-board foundation-colors">
      <div className="foundation-lead"><span>SEMANTIC TOKENS</span><p>Os mesmos papéis mudam de valor entre claro e escuro. O componente usa o papel, nunca uma cor isolada.</p></div>
      <div className="swatch-grid">{swatches.map(([name, token, use]) => <article key={token}><i style={{ background: `var(--g-${token})` }} /><div><b>{name}</b><code>--g-{token}</code><small>{use}</small></div></article>)}</div>
      <div className="foundation-contrast-row"><span>Texto principal</span><span>Texto secundário</span><span className="accent-chip">Ação confirmada</span></div>
    </div>}
    {section === 'typography' && <div className="foundation-board type-board">{Object.entries(foundations.typography).map(([role, spec], index) => <div className={`type-sample type-sample--${index + 1}`} key={role}><span>{role[0].toUpperCase() + role.slice(1)}</span><strong className={`g-type-${role}`}>{samples[index]}</strong><code>{spec.size} / {spec.line} · {role === 'numeric' ? 'tabular' : spec.weight}{role === 'label' ? ' · +0.14em' : ''}</code></div>)}</div>}
    {section === 'spacing-radius' && <div className="foundation-board metric-board">
      <section><span>ESPAÇAMENTO</span><div className="spacing-scale">{foundations.spacing.map(value => <div key={value}><i style={{ width: `var(--g-space-${value})`, height: `var(--g-space-${value})` }} /><code>{value}</code></div>)}</div></section>
      <section><span>RAIOS</span><div className="radius-scale">{foundations.radii.map(value => <div key={value} style={{ borderRadius: `var(--g-radius-${value})` }}><code>{value}</code></div>)}</div></section>
      <section><span>ALTURAS</span><div className="height-scale">{(['micro','compact','primary'] as const).map((name,index) => <div key={name} style={{ height: `var(--g-height-${name})` }}>{foundations.heights[name]}<small>{['micro','compacto','principal'][index]}</small></div>)}</div></section>
    </div>}
    {section === 'motion-tokens' && <div className="foundation-board motion-board">
      <div className="motion-preview" key={revision}><span /><span /><span /></div>
      <Pressable type="button" onClick={() => replay(value => value + 1)}><Icon name="LayoutGrid" size={foundations.iconSizes.support} />Repetir transição</Pressable>
      <div className="motion-token-list">{motionExamples.map(([value,label]) => <div key={value}><code>{value}</code><span>{label}</span></div>)}</div>
      <small>Movimento reduzido remove deslocamento e escala.</small>
    </div>}
    {section === 'icons' && <div className="foundation-board icon-foundation"><div className="icon-grid">{iconExamples.map(([name,label]) => <Pressable key={name} type="button" aria-label={label}><Icon name={name} /><span>{label}</span></Pressable>)}</div><div className="icon-rules">{Object.entries(foundations.iconSizes).map(([role,size],index) => <span key={role}><i>{size}</i> {['apoio','controle','destaque'][index]}</span>)}</div><p>Ícones de ação sempre recebem um nome acessível. Traço regular, caixa óptica alinhada e cor semântica.</p></div>}
    {section === 'animated-icons' && <div className="icon-foundation">
      <div className="foundation-lead"><span>HUGEICONS ANIMATED</span><p>Ícones animados instalados como source code, não como dependência. Cada um anima no hover e respeita <code>prefers-reduced-motion</code> pelo helper <code>useIconAnimation</code>. Passe o cursor pela grade.</p></div>
      <div className="animated-icon-grid">{foundations.demos.animatedIcons.map(({ name, label }) => <div className="animated-icon-cell" key={name}><AnimatedIcon name={name} size={iconSize} /><span>{label}</span></div>)}</div>
      <div className="metric-board">
        <section><span>TAMANHO</span><div className="inline-component-row">{foundations.demos.animatedSizes.map(size => <Pressable type="button" key={size} className="demo-toggle" aria-pressed={size === iconSize} onClick={() => setIconSize(size)}>{size}px</Pressable>)}</div></section>
        <section><span>CONTROLE POR REF</span><div className="inline-component-row"><div className="animated-icon-cell animated-icon-cell--solo"><AnimatedIcon ref={controlled} name="Notification03Icon" size={28} /><span>Controlado</span></div><Pressable type="button" className="demo-toggle" onClick={() => controlled.current?.startAnimation()}>startAnimation()</Pressable><Pressable type="button" className="demo-toggle" onClick={() => controlled.current?.stopAnimation()}>stopAnimation()</Pressable></div></section>
      </div>
      <p>Ao passar um <code>ref</code>, o hover automático é desligado de propósito: o ícone passa a ser dirigido pelo consumidor. Sem <code>ref</code>, ele anima sozinho no hover. Estes ícones envolvem o SVG num <code>span</code> e não substituem os ícones estáticos, que continuam sendo o padrão dentro de listas, campos e menus.</p>
    </div>}
    {section === 'brand-icons' && <div className="icon-foundation">
      <div className="foundation-lead"><span>LOGOS DE MARCAS · SVGL</span><p>Integrações e provedores de login, recuperados da cópia autorizada por <code>npm run ui:extract</code> e mantidos como componentes — nenhuma chamada à API em runtime. Marcas com versão escura trocam sozinhas no tema.</p></div>
      <div className="animated-icon-grid">{brandIcons.map(brand => <div className="animated-icon-cell" key={brand.slug} title={brand.themed ? 'Tem variante escura' : undefined}><BrandIcon name={brand.slug} size={brandSize} /><span>{brand.title}{brand.themed ? ' ◐' : ''}</span></div>)}</div>
      <div className="metric-board"><section><span>TAMANHO</span><div className="inline-component-row">{foundations.demos.brandSizes.map(size => <Pressable key={size} type="button" className="demo-toggle" aria-pressed={size === brandSize} onClick={() => setBrandSize(size)}>{size}px</Pressable>)}</div></section></div>
      <p>Uso: <code>{'<BrandIcon name="tiktok" />'}</code> devolve o componente pela rede da conta. Logos são marcas de terceiros: manter as cores originais, sem recolorir.</p>
    </div>}
  </div>;
}
