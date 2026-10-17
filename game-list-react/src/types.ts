export type Game = {
    title: string;
    titleKo: string;
    year: number;
    image: string;
    description: string;
    url: string;
};

export type Status = "loading" | "success" | "error";

export type SortType = "recommended" | "nameAsc" | "yearDesc";