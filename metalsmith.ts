import Metalsmith from "metalsmith";
import markdown from "@metalsmith/markdown";
import collections from "@metalsmith/collections";
import layouts from "@metalsmith/layouts";
import permalinks from "@metalsmith/permalinks";
import drafts from "@metalsmith/drafts";
import when from "metalsmith-if";
import htmlMinifier from "metalsmith-html-minifier";
import assets from "metalsmith-static-files";

import config from "./config";

const isProduction = process.env.NODE_ENV === "production";

const spaceToDash = (str: string) => str.replace(/\s+/g, "-");
const condenseTitle = (str: string) => str.toLowerCase().replace(/\s+/g, "");
const UTCdate = (date: Date) => date.toUTCString();
const blogDate = (date: Date) =>
    date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
const trimSlashes = (str: string) => str.replace(/(^\/)|(\/$)/g, "");

const templateConfig = {
    engineOptions: {
        smartypants: true,
        smartLists: true,
        filters: {
            spaceToDash,
            condenseTitle,
            UTCdate,
            blogDate,
            trimSlashes,
        },
    },
};

Metalsmith(__dirname)
    .source("./src/content")
    .destination("./build")
    .clean(true)
    .env("NODE_ENV", process.env.NODE_ENV || "production")
    .env("DEBUG", process.env.DEBUG || false)
    .metadata({
        site: config.site,
        menu: config.menu,
        currentYear: new Date().getFullYear(),
    })
    .use(drafts(!isProduction))
    .use(
        collections({
            posts: "posts/*.md",
        })
    )
    .use(markdown())
    .use(
        permalinks({
            match: "*.html",
            trailingSlash: true,
        })
    )
    .use(layouts(templateConfig))
    .use(
        assets({
            source: "src/assets/",
            destination: "assets/",
        })
    )
    // .use(when(isProduction, htmlMinifier()))
    .build((err) => {
        if (err) {
            throw err;
        }
        console.log("Build was successful.");
    });
