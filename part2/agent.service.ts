import { db } from './database.ts';
import { Agent, NewAgent, UpdateAgent } from './agent.model.ts';

const agents = db.collection<Agent>('agents');

export async function createAgent(toAdd: NewAgent) {
    const agent = toAdd as Agent;
    const agentId = await agents.insertOne(agent);
    return agentId;
}

export async function getAgents(code?: number) {
    const agentsGot = await agents.find({code}).toArray();

    return agentsGot;
}

export async function updateAgent(agentId: string, toUpdate: UpdateAgent) {
    const { modifiedCount } = await agents.updateOne(
        {_id: agentId},
        toUpdate
    );

    if (modifiedCount != 0)
        return true;
    else
        return false;
}

export async function deleteAgent(agentId: string) {
    const deleteCount = await agents.deleteOne({_id: agentId});

    if (deleteCount != 0)
        return true;
    else
        return false;
}