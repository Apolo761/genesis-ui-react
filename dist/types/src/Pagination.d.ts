export interface PaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
    disabled?: boolean;
    label?: string;
    previousLabel?: string;
    nextLabel?: string;
}
/** Original Pagination (module 53765): preserve its items, geometry and states. */
export declare function Pagination({ page, totalPages, onChange, disabled, label, previousLabel, nextLabel, }: PaginationProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
