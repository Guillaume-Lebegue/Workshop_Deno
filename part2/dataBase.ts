import { MongoClient } from "https://deno.land/x/mongo@v0.21.2/mod.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.21.2/bson/mod.ts";

const client = new MongoClient();
await client.connect('mongodb://127.0.0.1:27017');
export const db = client.database("agent");
export {ObjectId}