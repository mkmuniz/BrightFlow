export type MenuItem = {
    href: string;
    description: string;
};

export type Billet = {
    id: string;
    month: string;
    consumes: any[];
};

export type Consume = {
    id: string;
    type: string;
    value: number;
}; 