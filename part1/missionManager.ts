import { mission } from './mission.ts';

export async function missionTester(agents: {name?: string, code: number}[]) {
    try {
        if (!(await mission(agents)))
            throw('failure');
        else
            console.log('Mission report: success');
    } catch (error) {
        console.log('Mission report: ' + error);
    }
}