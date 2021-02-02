export function sayHello(toWho?: string): void {
    console.log('Hello ' + (toWho ? toWho : 'world'));
}

export const magic: number = 42;