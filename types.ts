type SiteMetadata = {
    name: string;
    url: string;
    description: string;
};

type MenuItem = {
    label: string;
    url: string;
    bodyClass: string;
};

export type Config = {
    site: SiteMetadata;
    menu: MenuItem[];
};
