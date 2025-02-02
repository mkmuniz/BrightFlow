export type TableCellProps = {
    width: string;
};

export type HeaderCellProps = {
    width: string;
};

export type Billet = {
    clientNumber: string;
    month: string;
};

export type TableRowProps = {
    data: Billet[];
};