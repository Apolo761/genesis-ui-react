import { forwardRef, type ForwardRefExoticComponent, type RefAttributes, type TableHTMLAttributes, type HTMLAttributes, type ThHTMLAttributes, type TdHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { dataTable, feedback } from '../vendor/loader.mjs';
import { useUiClass } from './theme';
import { SkeletonText } from './Skeleton';

type Original<P, E> = ForwardRefExoticComponent<P & RefAttributes<E>>;
export type DataTableProps = TableHTMLAttributes<HTMLTableElement> & {columns?:string;size?:'default'|'compact';stickyHeader?:boolean};
const OriginalTable = dataTable.DataTable as unknown as Original<DataTableProps, HTMLTableElement>;
/** Recovered table family; only the stylesheet/theme scope is added. */
export const DataTable = forwardRef<HTMLTableElement,DataTableProps>(function DataTable(props,ref) {
  // Keep absolutely positioned accessible labels inside the table's scroll area.
  return <div className={useUiClass('g-ref')}><OriginalTable {...props} className={`relative ${props.className ?? ''}`} ref={ref}/></div>;
});
export const DataTableHeader = dataTable.DataTableHeader as unknown as Original<HTMLAttributes<HTMLTableSectionElement> & {sticky?:boolean},HTMLTableSectionElement>;
export const DataTableBody = dataTable.DataTableBody as unknown as Original<HTMLAttributes<HTMLTableSectionElement>,HTMLTableSectionElement>;
type DataTableRowProps = HTMLAttributes<HTMLTableRowElement> & {index?:number;hoverable?:boolean;selected?:boolean;variant?:'body'|'header'};
const OriginalRow = dataTable.DataTableRow as unknown as Original<DataTableRowProps & {whileHover?:Record<string,unknown>},HTMLTableRowElement>;
// Motion's hover restoration can retain an old inline background after selection.
// Keep the original row and entrance motion; let CSS own hover/selected colors.
export const DataTableRow = forwardRef<HTMLTableRowElement,DataTableRowProps>(function DataTableRow({className='',...props},ref) {
  return <OriginalRow {...props} ref={ref} className={`genesis-table-row ${className}`} whileHover={{}}/>;
});
export type SortDirection = 'asc'|'desc';
export const DataTableHead = dataTable.DataTableHead as unknown as Original<ThHTMLAttributes<HTMLTableCellElement> & {sortDirection?:SortDirection|'none'},HTMLTableCellElement>;
export const DataTableCell = dataTable.DataTableCell as unknown as Original<TdHTMLAttributes<HTMLTableCellElement>,HTMLTableCellElement>;
export const DataTableSelectHead = dataTable.DataTableSelectHead as unknown as Original<ThHTMLAttributes<HTMLTableCellElement> & {checked?:boolean;indeterminate?:boolean;onCheckedChange?:(checked:boolean)=>void},HTMLTableCellElement>;
export const DataTableSelectCell = dataTable.DataTableSelectCell as unknown as Original<TdHTMLAttributes<HTMLTableCellElement> & {checked?:boolean;onCheckedChange?:(checked:boolean)=>void},HTMLTableCellElement>;
export const DataTableSortButton = dataTable.DataTableSortButton as unknown as Original<ButtonHTMLAttributes<HTMLButtonElement> & {active?:boolean;direction?:SortDirection;align?:'left'|'center'|'right'},HTMLButtonElement>;
export const DataTableEmpty = dataTable.DataTableEmpty as unknown as Original<HTMLAttributes<HTMLTableRowElement> & {colSpan?:number},HTMLTableRowElement>;
type DataTableToolbarProps = HTMLAttributes<HTMLDivElement> & {tableId?:string};
const OriginalToolbar = dataTable.DataTableToolbar as unknown as Original<DataTableToolbarProps,HTMLDivElement>;
export const DataTableToolbar = forwardRef<HTMLDivElement,DataTableToolbarProps>(function DataTableToolbar({className='',...props},ref) {
  return <OriginalToolbar {...props} className={useUiClass(`g-ref g-ref-self ${className}`)} ref={ref}/>;
});
export const DataTableCaption = dataTable.DataTableCaption as unknown as Original<HTMLAttributes<HTMLTableCaptionElement>,HTMLTableCaptionElement>;

/** Original rows/cells with the shared original Skeleton in each column. */
export function DataTableLoading({rows=6,columns=6,label}:{rows?:number;columns?:number;label:string}) {
  return <>{Array.from({length:rows},(_,row)=><DataTableRow key={`loading-${row}`} index={row}>
    {Array.from({length:columns},(_,column)=><DataTableCell key={column}>
      {row===0 && column===0 && <span role="status" className="sr-only">{label}</span>}
      <SkeletonText className={column===0?'w-4':column===1?'w-36 max-w-full':'w-16 max-w-full'}/>
    </DataTableCell>)}
  </DataTableRow>)}</>;
}
export type StatusBadgeTone = 'neutral'|'success'|'warning'|'danger'|'info';
export function StatusBadge({children,tone='neutral',dot=true,ariaLabel}:{children:ReactNode;tone?:StatusBadgeTone;dot?:boolean;ariaLabel?:string}) {
  const OriginalBadge=feedback.StatusBadge;
  return <span className={useUiClass('g-ref')}><OriginalBadge tone={tone} dot={dot} ariaLabel={ariaLabel}>{children}</OriginalBadge></span>;
}
