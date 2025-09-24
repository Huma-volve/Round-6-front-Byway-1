export interface ILink {
    id: string;
    label: string;
    path: string;
}

export interface IContacts {
    address: string;
    tel: string;
    mail: string;
    socials: ISocial[];
}

export interface ISocial {
    image: string;
    title: string;
    link: string;
}
