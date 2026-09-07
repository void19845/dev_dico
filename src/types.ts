export interface Node {
    id: string;
    group: 'root' | 'cat' | 'key';
    label: string;
    size: number;
    desc: string;
    parent?: string;
    params?: string[];
    example?: string;
    tip?: string;
}

export interface LanguageData {
    color: string;
    nodes: Node[];
    links: any[]; // Links are currently empty in the HTML data
}

export interface DictionaryData {
    [language: string]: LanguageData;
}
