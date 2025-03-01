export interface TableCellProps {
    width: string;
};

export interface HeaderCellProps {
    width: string;
};

export type Billet = {
    clientNumber: string;
    month: string;
};

export interface TableRowProps {
    data: Billet[];
};