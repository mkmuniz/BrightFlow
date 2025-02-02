export type MenuItem = {
    href: string;
    description: string;
};

export type BilletType = {
    id: string;
    month: string;
    consumes: any[];
};

export type Consume = {
    id: string;
    type: string;
    value: number;
}; 