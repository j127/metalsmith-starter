# Metalsmith Starter Template

A basic started template for Metalsmith (static site generator).

## Development

Install the dependencies:

```sh
yarn
```

Optionally install [Bun](https://bun.sh/) -- a way to run the TypeScript without transpiling to JavaScript. If you don't want to install Bun, maybe try `ts-node` or convert the TypeScript to JavaScript and use `node`, and then update `package.json`.

See the scripts in `package.json` for the available commands, including:

- `yarn start` - Build the site and watch for changes
- `yarn build` - Build the production version of the site
- `yarn deploy` - Deploy the site to Cloudflare Pages

## Icons

Generate icons (see the `head.njk` file) at [realfavicongenerator.net](https://realfavicongenerator.net/).
