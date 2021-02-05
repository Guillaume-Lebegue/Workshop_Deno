export interface Agent {
    _id: { $oid: string };
    name?: string;
    code: number;
};

export interface NewAgent {
    name?: string;
    code: number;
};

export interface UpdateAgent {
    name?: string;
    code?: number;
};