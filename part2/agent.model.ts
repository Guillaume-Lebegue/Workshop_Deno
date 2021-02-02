import { Bson } from "https://deno.land/x/mongo@v0.21.0/mod.ts";

export interface Agent {
    _id: Bson.ObjectId;
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