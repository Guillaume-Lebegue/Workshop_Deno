import { colorize } from 'https://deno.land/x/ink@1.3/mod.ts'

export function alert() {
    let text = colorize("<red>Alert !!!<red>");
    console.log(text);
}