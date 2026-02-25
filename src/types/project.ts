export type Category = "uiux" | "frontend";

export type Project = {
    id: number;
    title: string;
    category: Category[];
    description: string;
    image: string;
    link: string;
};
