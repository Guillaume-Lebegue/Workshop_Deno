export const mission = (agents: {name?: string, code: number}[]): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        for (var agent of agents) {
            if (agent.code != 42 && agent.code != 0.07)
                return reject('Bad agent');
        }

        const success = agents.filter(agent => agent.code == 0.07).length > 0;
        return resolve(success);
    })
}