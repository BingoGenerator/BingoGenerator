export const Delimiters: Delimiter[] = [
    { displayName: "ENTER", value: "\n" },
    { displayName: ",", value: "," },
    { displayName: ":", value: ":" },
    { displayName: ";", value: ";" },
    { displayName: "SPACE", value: " " }
];

export interface Delimiter {
    displayName: string,
    value: string
}