import { Config } from "./types";

const config: Config = {
    site: {
        name: "Metalsmith Demo",
        url: "https://metalsmith-demo.pages.dev",
        description: "This is a demo of Metalsmith, a static site generator.",
    },
    menu: [
        {
            label: "Home Page",
            url: "/",
            bodyClass: "home",
        },
        {
            label: "About Page",
            url: "/about/",
            bodyClass: "about",
        },
    ],
};

export default config;
