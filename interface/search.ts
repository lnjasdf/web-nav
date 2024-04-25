export interface ISearchSite{
    title: string;
    url: string;
}

export interface ISearchGroup {
    title: string;
    groups: ISearchSite[];
}
