// Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") str = some;
// str = some as string;

export {};
