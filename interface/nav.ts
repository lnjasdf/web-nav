export const API_GET_NAV = "/v1/nav/get";
export interface ISite {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  show: boolean;
  url_ad: string;
}

export interface ITab {
  id: string;
  title: string;
  sites: ISite[];
}

export interface IGroup {
  id: string;
  title: string;
  tabs: ITab[];
}
