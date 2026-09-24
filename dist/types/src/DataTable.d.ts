import { type ForwardRefExoticComponent, type RefAttributes, type TableHTMLAttributes, type HTMLAttributes, type ThHTMLAttributes, type TdHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
type Original<P, E> = ForwardRefExoticComponent<P & RefAttributes<E>>;
export type DataTableProps = TableHTMLAttributes<HTMLTableElement> & {
    columns?: string;
    size?: 'default' | 'compact';
    stickyHeader?: boolean;
};
/** Recovered table family; only the stylesheet/theme scope is added. */
export declare const DataTable: ForwardRefExoticComponent<TableHTMLAttributes<HTMLTableElement> & {
    columns?: string;
    size?: "default" | "compact";
    stickyHeader?: boolean;
} & RefAttributes<HTMLTableElement>>;
export declare const DataTableHeader: Original<HTMLAttributes<HTMLTableSectionElement> & {
    sticky?: boolean;
}, HTMLTableSectionElement>;
export declare const DataTableBody: Original<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
export declare const DataTableRow: ForwardRefExoticComponent<HTMLAttributes<HTMLTableRowElement> & {
    index?: number;
    hoverable?: boolean;
    selected?: boolean;
    variant?: "body" | "header";
} & RefAttributes<HTMLTableRowElement>>;
export type SortDirection = 'asc' | 'desc';
export declare const DataTableHead: Original<ThHTMLAttributes<HTMLTableCellElement> & {
    sortDirection?: SortDirection | "none";
}, HTMLTableCellElement>;
export declare const DataTableCell: Original<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
export declare const DataTableSelectHead: Original<ThHTMLAttributes<HTMLTableCellElement> & {
    checked?: boolean;
    indeterminate?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}, HTMLTableCellElement>;
export declare const DataTableSelectCell: Original<TdHTMLAttributes<HTMLTableCellElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}, HTMLTableCellElement>;
export declare const DataTableSortButton: Original<ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    direction?: SortDirection;
    align?: "left" | "center" | "right";
}, HTMLButtonElement>;
export declare const DataTableEmpty: Original<HTMLAttributes<HTMLTableRowElement> & {
    colSpan?: number;
}, HTMLTableRowElement>;
export declare const DataTableToolbar: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
    tableId?: string;
} & RefAttributes<HTMLDivElement>>;
export declare const DataTableCaption: Original<HTMLAttributes<HTMLTableCaptionElement>, HTMLTableCaptionElement>;
/** Original rows/cells with the shared original Skeleton in each column. */
export declare function DataTableLoading({ rows, columns, label }: {
    rows?: number;
    columns?: number;
    label: string;
}): import("react").JSX.Element;
export type StatusBadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';
export declare function StatusBadge({ children, tone, dot, ariaLabel }: {
    children: ReactNode;
    tone?: StatusBadgeTone;
    dot?: boolean;
    ariaLabel?: string;
}): import("react").JSX.Element;
export {};
